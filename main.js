document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded successfully!");

    // Smooth scrolling for section links
    document.querySelectorAll("nav a, .top-bar a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            } else if (this.getAttribute("href") === "index2.html") {
                window.location.href = "index2.html";
            }
        });
    });

    // Search Functionality
    const searchInput = document.getElementById("search-input");
    if (!searchInput) {
        console.error("Search box not found!");
        return;
    }

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const products = document.querySelectorAll(".product");

        products.forEach(product => {
            const productName = product.querySelector("h3").innerText.toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });

    console.log("JS Loaded!");
});


// 🔹 Attach event listener to all .top-link spans
document.querySelectorAll(".top-link").forEach(span => {
    span.addEventListener("click", function () {
        const link = this.getAttribute("data-link"); // Get the data-link value
        if (link) {
            window.location.href = link; // Redirect to the specified link
        }
    });
});

console.log("Top bar navigation working.");
