// ==========================================
// CURRENT YEAR
// ==========================================

const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;


// ==========================================
// FAQ ACCORDION
// ==========================================

// Find all FAQ question buttons
const faqQuestions = document.querySelectorAll(".faq-question");


// Add a click event to each FAQ button
faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        // Find the parent FAQ item
        const faqItem = question.parentElement;

        // Add/remove the "open" class
        faqItem.classList.toggle("open");

    });

});


// ==========================================
// ENERGY CALCULATOR
// ==========================================

// Get the calculator form
const energyForm = document.getElementById("energyForm");


// Listen for the form submission
energyForm.addEventListener("submit", function (event) {

    // Stop the webpage from refreshing
    event.preventDefault();


    // ======================================
    // Read user input
    // ======================================

    const power = parseFloat(
        document.getElementById("power").value
    );

    const hours = parseFloat(
        document.getElementById("hours").value
    );

    const price = parseFloat(
        document.getElementById("price").value
    );


    const errorMessage =
        document.getElementById("errorMessage");


    // Remove an old error message
    errorMessage.textContent = "";


    // ======================================
    // Input validation
    // ======================================

    if (
        isNaN(power) ||
        isNaN(hours) ||
        isNaN(price)
    ) {

        errorMessage.textContent =
            "Please complete all fields before investigating the suspect.";

        return;
    }


    if (power <= 0) {

        errorMessage.textContent =
            "Power must be greater than 0 watts.";

        return;
    }


    if (hours <= 0 || hours > 24) {

        errorMessage.textContent =
            "Daily usage must be between 0 and 24 hours.";

        return;
    }


    if (price <= 0) {

        errorMessage.textContent =
            "Electricity price must be greater than 0.";

        return;
    }


    // ======================================
    // Calculations
    // ======================================

    // Daily energy consumption in kWh
    const dailyEnergy =
        (power * hours) / 1000;


    // Approximate 30-day month
    const monthlyEnergy =
        dailyEnergy * 30;


    // 365 days
    const yearlyEnergy =
        dailyEnergy * 365;


    // Convert cents to dollars
    const electricityPrice =
        price / 100;


    // Estimated cost
    const monthlyCost =
        monthlyEnergy * electricityPrice;


    const yearlyCost =
        yearlyEnergy * electricityPrice;


    // ======================================
    // Update webpage
    // ======================================

    document.getElementById("dailyEnergy").textContent =
        dailyEnergy.toFixed(2) + " kWh";


    document.getElementById("monthlyEnergy").textContent =
        monthlyEnergy.toFixed(2) + " kWh";


    document.getElementById("yearlyEnergy").textContent =
        yearlyEnergy.toFixed(2) + " kWh";


    document.getElementById("monthlyCost").textContent =
        "$" + monthlyCost.toFixed(2);


    document.getElementById("yearlyCost").textContent =
        "$" + yearlyCost.toFixed(2);


    // ======================================
    // Funny result message
    // ======================================

    const damageMessage =
        document.getElementById("damageMessage");


    if (yearlyCost < 50) {

        damageMessage.textContent =
            "Not bad. Your wallet survives another year. 👍";

    }

    else if (yearlyCost < 150) {

        damageMessage.textContent =
            "Your appliance is getting a little hungry. 👀";

    }

    else if (yearlyCost < 300) {

        damageMessage.textContent =
            "That's some serious electricity snacking. ⚡";

    }

    else {

        damageMessage.textContent =
            "Your electricity meter would like to have a word with you. 💀";

    }

});