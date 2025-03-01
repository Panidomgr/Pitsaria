//Logic for Item Galleries:

let focusedPhoto = document.getElementById("item-focused-photo").querySelector("img");
let photoGallery = document.getElementById("item-gallery");

focusedPhoto.src = photoGallery.querySelector("img").src;

photoGallery.addEventListener("click", () => {
    focusedPhoto.src = event.target.src;
});