function features_menu() {
  document.getElementById("featuresDropdown").classList.toggle("Show");
  document.getElementById("companyDropdown").classList.remove("Show");
}

function company_menu() {
  document.getElementById("companyDropdown").classList.toggle("Show");
  document.getElementById("featuresDropdown").classList.remove("Show");
}

window.onclick = function (e) {
  console.log("company");
  if (
    !e.target.matches(".menu__company") &&
    !e.target.matches(".menu__features")
  ) {
    let companyDropdown = document.getElementById("companyDropdown");
    if (companyDropdown.classList.contains("Show")) {
      companyDropdown.classList.remove("Show");
    }
    let featuresDropdown = document.getElementById("featuresDropdown");
    if (featuresDropdown.classList.contains("Show")) {
      featuresDropdown.classList.remove("Show");
    }
  }
};
