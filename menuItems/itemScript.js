//Logic for Item Galleries:

document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".item-blurred-photo img");
    const focusedImg = document.querySelector("#item-focused-photo img");
    const focusedLink = document.querySelector("#item-focused-photo a");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            const newSrc = thumbnail.getAttribute("src");

            focusedImg.setAttribute("src", newSrc);

            if (newSrc.includes("_Main")) {
                const fullSrc = newSrc.replace("_Main", "_Full");
                focusedLink.setAttribute("href", fullSrc);
            } else {
                focusedLink.setAttribute("href", newSrc);
            }
        });
    });
});
