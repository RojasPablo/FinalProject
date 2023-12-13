const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById('email');
const form = document.getElementById("adoption-form");
const select = document.getElementById("adoption-kind");
const pastVolunteerWork = document.getElementById("past-volunteer-work");
const pokemonKind = document.getElementById("pokemon-kind");
const message = document.getElementById("message");
const volunteerField = document.getElementById("volunteer-field");
const adoptionFields = document.getElementById("adoption-fields");

let valid = false;

const validLength = (input, min, errorMessage) => {
    const errorElement = input.parentElement.querySelector(".error");
    if (input.value.trim().length >= min) {
        input.parentElement.classList.remove("invalid");
        errorElement.textContent = "";
        return true;
    } else {
        input.parentElement.classList.add("invalid");
        errorElement.textContent = errorMessage;
        return false;
    } 
};

const handleSelect = () => {
    const selectedValue = select.value;

    if (selectedValue === "volunteer") {
        volunteerField.classList.remove("hidden");
        adoptionFields.classList.add("hidden");
    } else if (selectedValue === "adopt") {
        adoptionFields.classList.remove("hidden");
        volunteerField.classList.add("hidden");
    }
};

select.addEventListener("change", handleSelect);

form.addEventListener("submit", (e) => {
    handleSelect();
    if (
        validLength(firstName, 3, "First Name is required and must be at least 3 characters") &&
        validLength(lastName, 3, "Last Name is required and must be at least 3 characters") &&
        validLength(email, 1, "Email is required") &&
        validLength(message, 10, "Message submission is required and should be at least 10 characters") &&
        (select.value === "volunteer" ? validLength(pastVolunteerWork, 1, "Example of helping nurse Joy is required") : true) &&
        (select.value === "adopt" ? pokemonKind.value !== "choose" : true)
    ) {
        valid = true;
    } else {
        valid = false;
        e.preventDefault();
    }

});


const maintenanceNotice = document.getElementById("maintenance-notice");


setTimeout(()=> {
    maintenanceNotice.remove()
},20000
);
