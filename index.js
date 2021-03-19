// Dark Mode
let darkMode = localStorage.getItem("darkMode");

function enableDarkMode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  enableDarkMode();
}

// Listeners

const darkModeToggle = document.querySelector("#dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});

// Akhir dark mode

// Form Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbznpY2KjxwBtoP2Rl8myTelLRuckn1zbrpEq-_dht8lAflEjY8sY8Izg6oxA-LPhapU/exec'
const form = document.forms['juice-contact-form']; 
const btnSend = document.querySelector('.btn-send');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
      
form.addEventListener('submit', e => {
e.preventDefault();
// ketika tombol submit di klik
// ketika tombol loading, hilangkan tombol kiri
btnLoading.classList.toggle('d-none');
btnSend.classList.toggle('d-none');
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => { 
// tampilkan tombol kirim, hilangkan tombol loading
  btnLoading.classList.toggle('d-none');
  btnSend.classList.toggle('d-none');
// my alet
  myAlert.classList.toggle('d-none');
// form reset
  form.reset();
  console.log('Success!', response);
})
  .catch(error => console.error('Error!', error.message));
});