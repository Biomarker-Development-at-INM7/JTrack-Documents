// Keep long page contents compact while retaining ordinary heading links.
document.addEventListener("DOMContentLoaded", () => {
  const branches = [];
  document.querySelectorAll(".toc-tree li").forEach((item, index) => {
    const children = Array.from(item.children);
    const list = children.find(child => child.tagName === "UL");
    const link = children.find(child => child.tagName === "A");
    if (!list || !link) return;
    // Sphinx wraps the page's headings in a page-title entry linking to #.
    // Keep that wrapper open so the main headings are always visible.
    if (link.getAttribute("href") === "#") {
      list.hidden = false;
      return;
    }
    list.id = `toc-branch-${index}`;
    list.hidden = true;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "toc-branch-toggle";
    button.textContent = "▸";
    button.setAttribute("aria-controls", list.id);
    button.setAttribute("aria-expanded", "false");
    const setOpen = open => {
      list.hidden = !open;
      button.textContent = open ? "▾" : "▸";
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", `${open ? "Collapse" : "Expand"} ${link.textContent.trim()}`);
    };
    setOpen(false);
    const branch = { item, link, setOpen, manuallyOpen: false };
    button.addEventListener("click", () => {
      branch.manuallyOpen = list.hidden;
      setOpen(branch.manuallyOpen);
    });
    link.before(button);
    item.classList.add("toc-branch");
    branches.push(branch);
  });
  let currentLink = null;
  const revealBranch = link => {
    if (!link || link === currentLink) return;
    currentLink = link;
    branches.forEach(branch => {
      branch.setOpen(branch.manuallyOpen || branch.item.contains(link));
    });
  };
  const revealTarget = () => {
    if (!window.location.hash) return;
    const link = Array.from(document.querySelectorAll(".toc-tree a"))
      .find(link => link.hash === window.location.hash);
    revealBranch(link);
  };
  // Furo emits this event when its scroll tracker changes the active section.
  document.addEventListener("gumshoeActivate", event => {
    const link = event.detail && event.detail.link;
    if (link && link.closest(".toc-tree")) revealBranch(link);
  });
  revealTarget();
  // Furo may have initialized its tracker before this listener was registered.
  const activeLink = document.querySelector(".toc-tree li.scroll-current > a");
  if (activeLink) revealBranch(activeLink);
  window.addEventListener("hashchange", revealTarget);
});
