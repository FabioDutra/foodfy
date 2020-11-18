const currentPage = location.pathname;
const menuItems = document.querySelectorAll('.navbar-link');

console.log(menuItems)

for (item of menuItems) {
    console.log(item);
    if(currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}