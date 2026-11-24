// 1. Welcome Message

window.addEventListener("load", function() {
    console.log("Welcome to My Personal Portfolio!");
});


// 2. Smooth Scrolling

const navigationLinks = document.querySelectorAll("nav ul li a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// 3. Active Navigation Highlighting

window.addEventListener("scroll", function() {

    let currentSection = "";

    document.querySelectorAll("section").forEach(function(section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// 4. Dynamic Footer Year

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML = `
        <p>© ${new Date().getFullYear()} My Personal Portfolio.
        All Rights Reserved.</p>
    `;

}


// 5. Contact Welcome Interaction

const contactButton = document.querySelector(
    '#contact .btn'
);

if (contactButton) {

    contactButton.addEventListener("click", function() {
        console.log("Thank you for visiting my portfolio!");
    });

}