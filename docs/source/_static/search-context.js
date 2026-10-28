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
  const findHeadings = (documents, query) => {
    const { include, exclude } = parseQuery(query);
    if (!include.length) return [];
    const phrase = include.join(" ");
    const results = [];
    for (const doc of documents) {
      for (const heading of doc.headings || []) {
        const text = heading.heading.toLowerCase();
        if (!include.every(term => text.includes(term)) || exclude.some(term => text.includes(term))) continue;
        const words = heading.text.split(/\s+/u).filter(Boolean);
        results.push({ url: doc.url + (heading.anchor ? "#" + heading.anchor : ""),
          title: heading.title, excerpt: words.slice(0,18).join(" ") + (words.length>18 ? " …" : ""),
          rank: text === phrase ? 0 : text.includes(phrase) ? 1 : 2 });
      }
    }
    return results.sort((a,b) => a.rank-b.rank || a.title.localeCompare(b.title));
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
      const headings = findHeadings(window.JTRACK_SEARCH_CONTEXT, query);
      const groups = new Map();
      matches.forEach(match => {
        if (!groups.has(match.pageUrl)) groups.set(match.pageUrl, []);
        groups.get(match.pageUrl).push(match);
      });
      status.textContent = headings.length || matches.length
        ? `${headings.length} matching headings · ${matches.length} text matches across ${groups.size} pages.`
        : "No matches found. Try another word or a shorter phrase.";
      const container = document.createElement("div");
      container.className = "search-page-groups";
      const terms = parseQuery(query).include;
      const pattern = terms.length ? new RegExp(terms.slice().sort((a,b)=>b.length-a.length).map(escapePattern).join("|"), "giu") : null;
      const renderMatch = match => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = match.url;
        link.textContent = match.title.replaceAll(" > ", " → ");
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
        return item;
      };
      const sortedGroups = Array.from(groups.values()).sort((a, b) =>
        b.length - a.length || a[0].pageTitle.localeCompare(b[0].pageTitle));
      for (const pageMatches of sortedGroups) {
        const group = document.createElement("details");
        group.className = "search-page-group";
        const summary = document.createElement("summary");
        summary.textContent = `${pageMatches[0].pageTitle} (${pageMatches.length})`;
        const list = document.createElement("ul");
        list.className = "search";
        for (const match of pageMatches) list.append(renderMatch(match));
        group.append(summary, list);
        container.append(group);
      }
      output.append(title, status);
      if (headings.length) {
        const headingTitle = document.createElement("h3");
        headingTitle.textContent = "Matching headings";
        const headingList = document.createElement("ul");
        headingList.className = "search search-heading-matches";
        headings.forEach(heading => headingList.append(renderMatch(heading)));
        output.append(headingTitle, headingList);
      }
      if (matches.length) {
        const textTitle = document.createElement("h3");
        textTitle.textContent = "Matches in text";
        const hint = document.createElement("p");
        hint.textContent = "Expand a page to see its text matches from top to bottom.";
        output.append(textTitle, hint, container);
      }
    };
    // Sphinx normally initializes after this listener; support an already-loaded page too.
    if (document.readyState === "complete") {
      const query = new URLSearchParams(window.location.search).get("q");
      if (query) Search.performSearch(query);
    }
  };
  // Pure search helpers are also used by the offline verification tests.
  window.JTRACK_FIND_MATCHES = findMatches;
  window.JTRACK_FIND_HEADINGS = findHeadings;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();
