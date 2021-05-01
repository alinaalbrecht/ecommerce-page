const home = (() => {
    const content = document.querySelector("#content");
    const homePage = document.createElement("div");
    homePage.classList.add("container");
    homePage.setAttribute("data-type", "page");
    homePage.dataset.name = "home";
    homePage.innerHTML = `
    <img class="donut-hero" src="images/donut-hero.png" alt="">
    <h1>The Donut Hole</h1>
    <p class="subtitle">visit us for a coffee and a donut</p>
    <button class="cta" data-name="menu" data-type="tab">Order Now</button>
    <div class="beige-area container">
    <h2>Our Locations</h2>
    <div class="locations">
        <div class="product-card">
            <img src="images/location-1.png" alt="">
            <div class="location-info">
                <p class="large-black-text">South-West</p>
                <p><i class="fas fa-map-marker-alt"></i>
                Akazienstr. 2410823 Berlin-Schöneberg</p>
                <p>Tel.: 030-54309-207</p>
                <p>Opening hours: 9:00-18:00 Mon-Sun</p>
            </div>
        </div>
        <div class="product-card">
            <img src="images/location-2.png" alt="">
            <div class="location-info">
                <p class="large-black-text">North East</p>
                <p><i class="fas fa-map-marker-alt"></i>
                 Knaackstr. 41, 10435 Berlin–Prenzlauer Berg</p>
                <p>Tel.: 030-32608-406</p>
                <p>Opening hours: 9:00-18:00 Mon-Sun</p>
            </div>
        </div>
    </div>
    </div>`;
    content.append(homePage);

})();

export { home }