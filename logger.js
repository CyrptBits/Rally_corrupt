document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".search-bar input");
  if (!input) return;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const q = input.value.trim();
      if (!q) return;
      const site = window.location.hostname;
      const url = `https://www.google.com/search?q=site:${encodeURIComponent(site)}+${encodeURIComponent(q)}`;
      window.open(url, "_blank");
    }
  });
});
