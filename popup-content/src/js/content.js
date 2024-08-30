document.addEventListener("DOMContentLoaded", function () {
    const activateButton = document.querySelector("button:nth-of-type(1)");
    const deactivateButton = document.querySelector("button:nth-of-type(2)");

    activateButton.addEventListener("click", () => {
        console.log("Activate Auto Answer button clicked");
    });

    deactivateButton.addEventListener("click", () => {
        console.log("Deactivate Auto Answer button clicked");
    });
});
