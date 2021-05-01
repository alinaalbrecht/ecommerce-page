const menu = (() => {
    const content = document.querySelector("#content");
    const menu = document.createElement("div");
    menu.classList.add("inactive");
    menu.classList.add("container");
    menu.setAttribute("data-type", "page");
    menu.setAttribute("data-name", "menu");
    menu.innerHTML = `
    <h1>Our Menu</h1>
<p class="subtitle">Either place an order online or visit us in person to tase our tasty treats</p>
<div class="product-grid">
    <div class="donut-item container">
        <div class="donut-image">
        <img src="images/donut-red.png" alt="">
        </div>
        <div class="donuts-added inactive" data-quantity="0"></div>
        <p class="donut-name">Strawberry €2</p>
        <div class="quantity-selector" data-quantity="0">
        <div class="subtract">-</div>
        <div class="quantity inactive">0</div>
        <div class="add">+</div>
        </div>
        <button class="small-button" data-type="add-to-basket">Add to Basket</button>
    </div>
    <div class="donut-item container">
        <div class="donut-image">
        <img src="images/brown-covered.png" alt="">
        </div>
        <div class="donuts-added inactive" data-quantity="0"></div>
        <p class="donut-name">Chocolate €2</p>
        <div class="quantity-selector" data-quantity="0">
        <div class="subtract">-</div>
        <div class="quantity inactive">0</div>
        <div class="add">+</div>
        </div>
        <button class="small-button" data-type="add-to-basket">Add to Basket</button>
    </div>
    <div class="donut-item container">
        <div class="donut-image">
        <img src="images/brown-streaks.png" alt="">
        </div>
        <div class="donuts-added inactive" data-quantity="0"></div>
        <p class="donut-name">Peanut Butter Fudge €2</p>
        <div class="quantity-selector" data-quantity="0">
        <div class="subtract">-</div>
        <div class="quantity inactive">0</div>
        <div class="add">+</div>
        </div>
        <button class="small-button" data-type="add-to-basket">Add to Basket</button>
    </div>
    <div class="donut-item container">
        <div class="donut-image">
        <img src="images/sprinkles-white.png" alt="">
        </div>
        <div class="donuts-added inactive" data-quantity="0"></div>
        <p class="donut-name">Lemon €2</p>
        <div class="quantity-selector" data-quantity="0">
        <div class="subtract">-</div>
        <div class="quantity inactive">0</div>
        <div class="add">+</div>
        </div>
        <button class="small-button" data-type="add-to-basket">Add to Basket</button>
    </div>
    <div class="donut-item container">
        <div class="donut-image">
        <img src="images/black-white.png" alt="">
        </div>
        <div class="donuts-added inactive" data-quantity="0"></div>
        <p class="donut-name">Cookie & Cream €3</p>
        <div class="quantity-selector" data-quantity="0">
        <div class="subtract">-</div>
        <div class="quantity inactive">0</div>
        <div class="add">+</div>
        </div>
        <button class="small-button" data-type="add-to-basket">Add to Basket</button>
    </div>
    <div class="donut-item container">
        <div class="donut-image">
        <img src="images/yellow-white-streaks.png" alt="">
        </div>
        <div class="donuts-added inactive" data-quantity="0"></div>
        <p class="donut-name">Caramel €3</p>
        <div class="quantity-selector" data-quantity="0">
        <div class="subtract">-</div>
        <div class="quantity inactive">0</div>
        <div class="add">+</div>
        </div>
        <button class="small-button" data-type="add-to-basket">Add to Basket</button>
    </div>
        <div class="donut-item container">
        <div class="donut-image">
        <img src="images/pink.png" alt="">
        </div>
        <div class="donuts-added inactive" data-quantity="0"></div>
        <p class="donut-name">Pink Frosting €2</p>
        <div class="quantity-selector" data-quantity="0">
        <div class="subtract">-</div>
        <div class="quantity inactive">0</div>
        <div class="add">+</div>
        </div>
        <button class="small-button" data-type="add-to-basket">Add to Basket</button>
    </div>

</div>`;
    content.append(menu);
})();

export { menu }