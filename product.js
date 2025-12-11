document.addEventListener('DOMContentLoaded', () => {

    // Sections for Switch Toggle
    const servicesSection = document.getElementById("services-section");
    const productsSection = document.getElementById("products-section");
    productsSection.style.display = "none"; // hide products by default


    // SERVICE BOOKING MODAL
    const bookingModal = document.getElementById("booking-modal");
    const bookingClose = document.querySelector(".close");
    const serviceButtons = document.querySelectorAll(".service-btn");

    const bookingForm = document.getElementById("booking-form");
    const selectedTourInput = document.getElementById("selected-tour");
    const selectedPriceInput = document.getElementById("selected-price");

    serviceButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const title = btn.dataset.title;
            const price = btn.dataset.price;

            selectedTourInput.value = title;
            selectedPriceInput.value = "$" + price;

            bookingModal.style.display = "block";
        });
    });

    bookingClose.addEventListener("click", () => {
        bookingModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === bookingModal) bookingModal.style.display = "none";
    });

    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your eco adventure is booked!");
        bookingModal.style.display = "none";
        bookingForm.reset();
    });


    // PRODUCT PAYMENT MODAL
    const paymentModal = document.getElementById("payment-modal");
    const paymentClose = document.querySelector(".pay-close");
    const productButtons = document.querySelectorAll(".product-btn");

    const paymentForm = document.getElementById("payment-form");
    const productNameInput = document.getElementById("product-name");
    const productPriceInput = document.getElementById("product-price");

    productButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const product = btn.dataset.title;
            const price = btn.dataset.price;

            productNameInput.value = product;
            productPriceInput.value = "$" + price;

            paymentModal.style.display = "block";
        });
    });

    paymentClose.addEventListener("click", () => {
        paymentModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === paymentModal) paymentModal.style.display = "none";
    });

    paymentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Payment successful! Your product is on the way.");
        paymentModal.style.display = "none";
        paymentForm.reset();
    });


    // SLIDING SWITCH (Services ↔ Products)
    const switchToggle = document.getElementById("switch");
    const toggleLabel = document.getElementById("toggle-label");

    switchToggle.addEventListener("click", () => {
        switchToggle.classList.toggle("active");

        const isActive = switchToggle.classList.contains("active");

        if (isActive) {
            servicesSection.style.display = "none";
            productsSection.style.display = "grid";
            toggleLabel.textContent = "Products";
        } else {
            servicesSection.style.display = "grid";
            productsSection.style.display = "none";
            toggleLabel.textContent = "Services";
        }
    });

});
