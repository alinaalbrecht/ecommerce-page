import { header } from "./header";
import { home } from "./home";
import { menu } from "./menu";
import { footer } from "./footer";

import '@fortawesome/fontawesome-free/js/all';

//show clicked tab page contents
const tabs = [...document.querySelectorAll("[data-type='tab']")];
tabs.forEach(tab => tab.addEventListener("click", showPageContents));


function showPageContents(e) {
    const pages = [...document.querySelectorAll("[data-type='page']")];
    pages.forEach(page => page.classList.add("inactive"));
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].dataset.name === e.target.dataset.name) {
            pages[i].classList.remove("inactive");
        }
    }
}

//Add and Subtract items
const addButtons = document.querySelectorAll(".add");
addButtons.forEach(button => button.addEventListener("click", increment));

const subtractButtons = document.querySelectorAll(".subtract");
subtractButtons.forEach(button => button.addEventListener("click", decrement));

function increment(e) {
    let quantity = e.target.previousElementSibling;
    let overallQuantity = e.target.parentElement;
    let currentCount = parseInt(quantity.textContent);
    currentCount++;
    if (currentCount >= 0) {
        quantity.textContent = currentCount;
        overallQuantity.setAttribute("data-quantity", currentCount)
    }
    if (currentCount > 0) {
        quantity.classList.remove("inactive")
    }
}

function decrement(e) {
    let quantity = e.target.nextElementSibling;
    let overallQuantity = e.target.parentElement;
    let currentCount = parseInt(quantity.textContent);
    currentCount--;
    if (currentCount >= 0) {
        quantity.textContent = currentCount;
        overallQuantity.setAttribute("data-quantity", currentCount);
    }
    if (currentCount === 0) {
        quantity.classList.add("inactive");
    }
}

//Add item to basket
const addToBasketButtons = [...document.querySelectorAll("[data-type='add-to-basket']")];
addToBasketButtons.forEach(button => button.addEventListener("click", addToBasket));

function addToBasket(e) {
    let currentDonutCount = parseInt(e.target.previousElementSibling.dataset.quantity);
    if (currentDonutCount > 0) {
        let basketQuantity = document.querySelector("[data-type='basket-quantity']");
        let newBasketCount = parseInt(basketQuantity.dataset.quantity)+currentDonutCount;
        let updateBasketCount = basketQuantity.setAttribute("data-quantity", newBasketCount);
        basketQuantity.textContent = newBasketCount;
        basketQuantity.classList.remove("inactive");
    
        let donutSiblings = [...e.target.parentNode.children];
        let donutsAdded = donutSiblings.filter(sibling => sibling.classList.contains("donuts-added"))[0];
        
        donutsAdded.textContent = `Added to cart`;
        donutsAdded.classList.remove("inactive");
        setTimeout(function() {
            donutsAdded.classList.add("inactive");
          }, 1000);
    }
}

//Hamburger menu
const hamburgerIcon = document.querySelector(".hamburger-icon");
hamburgerIcon.addEventListener("click", () => setTimeout(toggleMenu, 300));

tabs.forEach(tab => tab.addEventListener("click", () => setTimeout(toggleMenu, 300)));
function toggleMenu() {
    let tabs = document.querySelector(".nav-tabs");
    tabs.style.display === "none" ? tabs.style.display = "flex" : tabs.style.display = "none";
    tabs.classList.add("hamburger-menu");
}
