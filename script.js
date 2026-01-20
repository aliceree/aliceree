// Minimal JS for small dynamic bits (safe placeholder for later).

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Keep placeholder nav links non-navigable.
document.querySelectorAll('a[aria-disabled="true"]').forEach((a) => {
  a.addEventListener("click", (e) => e.preventDefault());
});

