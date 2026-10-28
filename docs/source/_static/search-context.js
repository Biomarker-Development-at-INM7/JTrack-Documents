// Search each section's own text so nested sections and repeated matches stay distinct.
(() => {
  const escapePattern = text => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parseQuery = query => {
    const include = [], exclude = [];
    for (const token of query.matchAll(/(-?)(?:"([^"]+)"|(\S+))/gu)) {
      const term = (token[2] || token[3]).toLowerCase();
      (token[1] ? exclude : include).push(term);
    }
    return { include: [...new Set(include)], exclude };
  };
  const findMatches = (documents, query) => {
    const { include, exclude } = parseQuery(query);
    if (!include.length) return [];
    const pattern = new RegExp(include.slice().sort((a,b) => b.length-a.length).map(escapePattern).join("|"), "giu");
    const matches = [];
    for (const doc of documents) {
      for (const section of doc.sections) {
        const text = section.text;
        const lower = text.toLowerCase();
        if (!include.every(term => lower.includes(term)) || exclude.some(term => lower.includes(term))) continue;
        const words = Array.from(text.matchAll(/\S+/gu));
        let first = 0;
        for (const match of text.matchAll(pattern)) {
          while (first + 1 < words.length && words[first].index + words[first][0].length <= match.index) first++;
          let last = first;
          while (last + 1 < words.length && words[last + 1].index < match.index + match[0].length) last++;
          const from = Math.max(0, first-8), to = Math.min(words.length, last+9);
          const excerpt = (from ? "… " : "") + words.slice(from,to).map(word=>word[0]).join(" ") + (to<words.length ? " …" : "");
          matches.push({ pageUrl: doc.url, pageTitle: doc.title || section.title.split(" > ")[0], url: doc.url + (section.anchor ? "#" + section.anchor : ""), title: section.title, excerpt });
        }
      }
    }
    return matches;
  };
  const initialize = () => {
    const output = document.getElementById("search-results");
    if (!output || !Array.isArray(window.JTRACK_SEARCH_CONTEXT) || typeof Search === "undefined") return;
    Search.performSearch = query => {
      output.replaceChildren();
      const title = document.createElement("h2");
      title.textContent = "Search Results";
      const status = document.createElement("p");
      status.className = "search-summary";
      const matches = findMatches(window.JTRACK_SEARCH_CONTEXT, query);
      const groups = new Map();
      matches.forEach(match => {
        if (!groups.has(match.pageUrl)) groups.set(match.pageUrl, []);
        groups.get(match.pageUrl).push(match);
      });
      status.textContent = matches.length
        ? `${matches.length} matching occurrences across ${groups.size} pages. Expand a page to see all its matches in document order.`
        : "No matches found. Try another word or a shorter phrase.";
      const container = document.createElement("div");
      container.className = "search-page-groups";
      const terms = parseQuery(query).include;
      const pattern = terms.length ? new RegExp(terms.slice().sort((a,b)=>b.length-a.length).map(escapePattern).join("|"), "giu") : null;
      const sortedGroups = Array.from(groups.values()).sort((a, b) =>
        b.length - a.length || a[0].pageTitle.localeCompare(b[0].pageTitle));
      for (const pageMatches of sortedGroups) {
        const group = document.createElement("details");
        group.className = "search-page-group";
        const summary = document.createElement("summary");
        summary.textContent = `${pageMatches[0].pageTitle} (${pageMatches.length})`;
        const list = document.createElement("ul");
        list.className = "search";
        for (const match of pageMatches) {
          const item = document.createElement("li");
          const link = document.createElement("a");
          link.href = match.url;
          link.textContent = match.title;
          const excerpt = document.createElement("p");
          excerpt.className = "context";
          let offset = 0;
          for (const hit of match.excerpt.matchAll(pattern)) {
            excerpt.append(document.createTextNode(match.excerpt.slice(offset, hit.index)));
            const mark = document.createElement("mark");
            mark.className = "highlighted";
            mark.textContent = hit[0];
            excerpt.append(mark);
            offset = hit.index + hit[0].length;
          }
          excerpt.append(document.createTextNode(match.excerpt.slice(offset)));
          item.append(link, excerpt);
          list.append(item);
        }
        group.append(summary, list);
        container.append(group);
      }
      output.append(title, status, container);
    };
    // Sphinx normally initializes after this listener; support an already-loaded page too.
    if (document.readyState === "complete") {
      const query = new URLSearchParams(window.location.search).get("q");
      if (query) Search.performSearch(query);
    }
  };
  // Pure search helpers are also used by the offline verification tests.
  window.JTRACK_FIND_MATCHES = findMatches;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();
