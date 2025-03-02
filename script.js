const navButton = document.getElementById("navButton");
const navContainer = document.getElementById("navContainer");
const navItems = document.querySelectorAll(".navItem");
const pizzaImg = navButton.querySelector("img");

let isOpen = false;

function disableAllLinks() {
    document.querySelectorAll("#navContainer a").forEach(link => {
        link.classList.add("disabled");
    });
}
  
function enableAllLinks() {
    document.querySelectorAll("#navContainer a").forEach(link => {
        link.classList.remove("disabled");
    });
}

disableAllLinks();


navButton.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
        navContainer.style.display = "flex"; // Make sure it's visible
        setTimeout(() => {
            navContainer.classList.add("nav-visible");
            enableAllLinks();
            [...navItems].reverse().forEach((item, index) => { // Reverse the order
                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "translateY(0)";
                }, index * 100); // Delayed animation per item
            });
        }, 10);
    } else {
        navContainer.classList.remove("nav-visible");
        disableAllLinks();
        navItems.forEach((item) => {
            item.style.opacity = "0";
            item.style.transform = "translateY(-50px)";
        });
    }

    pizzaImg.style.transform = isOpen ? "rotate(-90deg)" : "rotate(0deg)";
});
