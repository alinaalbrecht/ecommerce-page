const header = (() => {
    const content = document.querySelector("#content");
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
    navbar.innerHTML = `
    <img class="donut-logo" src="images/donut-logo.png" alt="">
    <div class="nav-tabs">
        <div class="tab" data-name="home" data-type="tab">Home</div>
        <div class="tab" data-name="menu" data-type="tab">Menu</div>
        <div class="tab" data-name="shopping-cart">
        <div class="basket-quantity inactive" data-type="basket-quantity" data-quantity="0"></div>
        <i class="fa fa-shopping-basket"></i>
        </div>
    </div>
    <div class="hamburger-icon">
    <i class="fas fa-bars"></i>
    </div>`
    content.append(navbar);
})();

export { header }


