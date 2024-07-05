document.addEventListener("DOMContentLoaded", () => {
    const formSteps = document.querySelectorAll(".form-step");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    let currentStep = 0;

    const showStep = (step) => {
        formSteps.forEach((formStep, index) => {
            formStep.classList.toggle("active", index === step);
        });
    };

    const nextStep = () => {
        if (currentStep < formSteps.length - 1) {
            currentStep += 1;
            showStep(currentStep);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            currentStep -= 1;
            showStep(currentStep);
        }
    };

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            nextStep();
        }
    });

    nextBtn.addEventListener("click", nextStep);
    prevBtn.addEventListener("click", prevStep);

    showStep(currentStep);
});