let lightTotal, darkTotal, biasTotal;
let currentCount = 0;
let currentStage = "light";

function startCounter() {
    lightTotal = parseInt(document.getElementById("light-total").value) || 400;
    darkTotal = parseInt(document.getElementById("dark-total").value) || 20;
    biasTotal = parseInt(document.getElementById("bias-total").value) || 20;

    currentCount = 0;
    currentStage = "light";

    document.getElementById("setup-section").style.display = "none";
    document.getElementById("counter-section").style.display = "flex";
    document.getElementById("counter-title").innerText = "Light Frames Counter";
    document.getElementById("current-count").value = currentCount;
}

function incrementCounter() {
    currentCount++;

    if ((currentStage === "light" && currentCount >= lightTotal) ||
        (currentStage === "dark" && currentCount >= darkTotal) ||
        (currentStage === "bias" && currentCount >= biasTotal)) {

        if (currentStage === "light") {
            currentStage = "dark";
            currentCount = 0;
            document.getElementById("counter-title").innerText = "Dark Frames Counter";
        } else if (currentStage === "dark") {
            currentStage = "bias";
            currentCount = 0;
            document.getElementById("counter-title").innerText = "Bias Frames Counter";
        } else {
            alert("All frames completed!");
            resetCounter();
            return;
        }
    }

    document.getElementById("current-count").value = currentCount;
}

function resetCounter() {
    document.getElementById("setup-section").style.display = "flex";
    document.getElementById("counter-section").style.display = "none";
}

function decrementCounter() {
    if (currentCount > 0) {
        currentCount--;
        document.getElementById("current-count").value = currentCount;
    }
}
