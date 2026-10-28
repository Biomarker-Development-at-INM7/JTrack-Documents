// Excerpts use build-time data, so local file previews need no page fetches.
(() => {
  const wordsAroundMatch = (text, query) => {
    text = text.replace(/\s+/gu, " ").trim();
    const words = Array.from(text.matchAll(/\S+/gu));
    if (!words.length) return "";
    const lower = text.toLowerCase();
    let start = query ? lower.indexOf(query.toLowerCase()) : -1;
    let finish = start + query.length;
    if (start < 0) {
      const terms = query.toLowerCase().split(/\s+/u).filter(Boolean);
      const word = words.find(word => terms.some(term => word[0].toLowerCase().includes(term)));
      start = word ? word.index : 0;
      finish = word ? word.index + word[0].length : 0;
    }
    const first = Math.max(0, words.findIndex(word => word.index + word[0].length > start));
    let last = first;
    while (last + 1 < words.length && words[last + 1].index < finish) last++;
    const from = Math.max(0, first - 8);
    const to = Math.min(words.length, last + 9);
    return (from ? "… " : "") + words.slice(from, to).map(word => word[0]).join(" ")
      + (to < words.length ? " …" : "");
  };
  const initialize = () => {
    const results = document.getElementById("search-results");
    if (!results || !window.JTRACK_SEARCH_CONTEXT) return;
    // The normal fetch-based summaries cannot work on file:// previews.
    if (typeof DOCUMENTATION_OPTIONS !== "undefined") {
      DOCUMENTATION_OPTIONS.SHOW_SEARCH_SUMMARY = false;
    }
    const query = (new URLSearchParams(window.location.search).get("q") || "")
      .replace(/\s+/gu, " ").trim();
    const addExcerpts = () => {
      results.querySelectorAll("ul.search > li").forEach(item => {
        if (item.querySelector("p.context")) return;
        const link = item.querySelector("a");
        if (!link) return;
        const url = new URL(link.href, window.location.href);
        const path = decodeURIComponent(url.pathname);
        const data = window.JTRACK_SEARCH_CONTEXT;
        const doc = Object.keys(data).find(name =>
          path.endsWith(`/${name}.html`) || path.endsWith(`/${name}/`));
        if (!doc) return;
        const anchor = decodeURIComponent(url.hash.slice(1));
        const text = data[doc][anchor] || data[doc][""];
        if (!text) return;
        const summary = document.createElement("p");
        summary.className = "context";
        const excerpt = wordsAroundMatch(text, query);
        // Highlight literal query terms without interpreting document text as HTML.
        const terms = query.split(/\s+/u).filter(Boolean)
          .map(term => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
        const pattern = terms.length ? new RegExp(terms.join("|"), "giu") : null;
        let offset = 0;
        if (pattern) {
          for (const match of excerpt.matchAll(pattern)) {
            summary.append(document.createTextNode(excerpt.slice(offset, match.index)));
            const mark = document.createElement("mark");
            mark.className = "highlighted";
            mark.textContent = match[0];
            summary.append(mark);
            offset = match.index + match[0].length;
          }
        }
        summary.append(document.createTextNode(excerpt.slice(offset)));
        item.append(summary);
      });
    };
    new MutationObserver(addExcerpts).observe(results, { childList: true, subtree: true });
    addExcerpts();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();
