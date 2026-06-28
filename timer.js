// ===================== Elements =====================
let hr = document.getElementById("thr");
let min = document.getElementById("tmin");
let sec = document.getElementById("tsec");

let start = document.getElementById("tstart");
let stop = document.getElementById("tstop");
let reset = document.getElementById("treset");

let timer = null;

// ===================== Only Numbers =====================
function onlyNumbers(element) {
    element.addEventListener("keydown", (e) => {
        const allowedKeys = [
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
            "Tab"
        ];

        if (
            allowedKeys.includes(e.key) ||
            (e.key >= "0" && e.key <= "9")
        ) {
            return;
        }

        e.preventDefault();
    });

    element.addEventListener("input", () => {
        element.textContent = element.textContent.replace(/\D/g, "");

        // Max 2 digits
        if (element.textContent.length > 2) {
            element.textContent = element.textContent.slice(0, 2);
        }
    });
}

onlyNumbers(hr);
onlyNumbers(min);
onlyNumbers(sec);

// ===================== Max Value =====================
function setMax(element, max) {
    element.addEventListener("input", () => {
        let value = Number(element.textContent);

        if (value > max) {
            element.textContent = String(max).padStart(2, "0");
        }
    });
}

setMax(hr, 99);
setMax(min, 59);
setMax(sec, 59);

// ===================== Start =====================
start.addEventListener("click", () => {

    clearInterval(timer);

    timer = setInterval(() => {

        let h = Number(hr.textContent);
        let m = Number(min.textContent);
        let s = Number(sec.textContent);

        if (h === 0 && m === 0 && s === 0) {
            clearInterval(timer);
            return;
        }

        if (s > 0) {
            s--;
        }
        else if (m > 0) {
            m--;
            s = 59;
        }
        else if (h > 0) {
            h--;
            m = 59;
            s = 59;
        }

        hr.textContent = String(h).padStart(2, "0");
        min.textContent = String(m).padStart(2, "0");
        sec.textContent = String(s).padStart(2, "0");

    }, 1000);

});

// ===================== Stop =====================
stop.addEventListener("click", () => {
    clearInterval(timer);
});

// ===================== Reset =====================
reset.addEventListener("click", () => {
    clearInterval(timer);

    hr.textContent = "00";
    min.textContent = "00";
    sec.textContent = "00";
});