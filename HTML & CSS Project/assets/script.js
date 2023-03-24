const sidebar = document.querySelector(".sidebar");

document.querySelector(".hamburger").addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

document.querySelector("#sidebar-close").addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
