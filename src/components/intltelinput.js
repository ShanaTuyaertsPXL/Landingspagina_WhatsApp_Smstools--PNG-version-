// BRON: https://stackoverflow.com/questions/37390665/html-input-that-takes-only-numbers-and-the-symbol
// TEL INPUT MET +
let inputEl = document.getElementById("telephone");
let goodKey = "0123456789+ ";

let checkInputTel = function (e) {
    let key = typeof e.which == "number" ? e.which : e.keyCode;
    let start = this.selectionStart,
        end = this.selectionEnd;

    let filtered = this.value.split("").filter(filterInput);
    this.value = filtered.join("");

    /* Prevents moving the pointer for a bad character */
    let move =
        filterInput(String.fromCharCode(key)) || key == 0 || key == 8 ? 0 : 1;
    this.setSelectionRange(start - move, end - move);
};

let filterInput = function (val) {
    return goodKey.indexOf(val) > -1;
};

inputEl.addEventListener("input", checkInputTel);

// Location-aware
function getIp(callback) {
    fetch("https://ipinfo.io/json?token=25170116de0e36", {
        headers: { Accept: "application/json" },
    })
        .then((resp) => resp.json())
        .catch(() => {
            return {
                country: "be",
            };
        })
        .then((resp) => callback(resp.country));
}

const phoneInputField = document.querySelector("#telefoon");
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "auto",
    geoIpLookup: getIp,
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const info = document.querySelector(".alert-info");

function process(event) {
    event.preventDefault();

    const phoneNumber = phoneInput.getNumber();

    info.style.display = "";
    info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
}
