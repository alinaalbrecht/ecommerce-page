const footer = (() => {
    const content = document.querySelector("#content");
    const footer = document.createElement("div");
    footer.classList.add("beige-area");
    footer.classList.add("footer");
    footer.innerHTML = `
    <p>Jobs</p>
    <p>FAQ</p>
    <p>Privacy Policy</p>
    <p>Shipping Information</p>
    `;
    content.append(footer);
})();

export { footer }