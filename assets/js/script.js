'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// ====================typed Reveal===============================
const typed = new Typed(".multiple-text", {
  strings: ["Android Developer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (var tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (var tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}



const portfolioImages = {
  "nikahyuk": [
      "./assets/images/COVER9.png"
  ],
  "tbpanijayalaksana": [
      "./assets/images/COVER10.png"
  ],
  "siswacare": [
      "./assets/images/COVER11.png"
  ],
  "yaspiba": [
      "./assets/images/COVER12.png"
  ],
  "easylearning": [
      "./assets/images/COVER13.png"
  ],
  "maistiq": [
      "./assets/images/COVER14.png"
  ],
  "pedulitbc": [
      "./assets/images/COVER15.png"
  ],
  "kiblat": [
      "./assets/images/BG1INCOVER8.png"
  ],
  "lovedthinks": [
      "./assets/images/BG1INCOVER7.png",
      "./assets/images/BG2INCOVER7.png",
      "./assets/images/BG3INCOVER7.png",
      "./assets/images/BG4INCOVER7.png"
  ],
  "diagnosatanaman": [
      "./assets/images/BG1INCOVER6.png",
      "./assets/images/BG2INCOVER6.png",
      "./assets/images/BG3INCOVER6.png",
      "./assets/images/BG4INCOVER6.png"
  ],
  "lovedthinks": [
      "./assets/images/BG1INCOVER7.png",
      "./assets/images/BG2INCOVER7.png",
      "./assets/images/BG3INCOVER7.png",
      "./assets/images/BG4INCOVER7.png"
  ],
  "bp": [
      "./assets/images/BG1INCOVER5.png",
      "./assets/images/BG2INCOVER5.png",
      "./assets/images/BG3INCOVER5.png",
      "./assets/images/BG4INCOVER5.png",
      "./assets/images/BG5INCOVER5.png"
  ],
  "absenekstrakulikuler": [
      "./assets/images/BG1INCOVER4.png",
      "./assets/images/BG2INCOVER4.png",
      "./assets/images/BG3INCOVER4.png"
  ],
  "asetpinjaman": [
      "./assets/images/BG1INCOVER3.png",
      "./assets/images/BG2INCOVER3.png",
      "./assets/images/BG3INCOVER3.png",
      "./assets/images/BG4INCOVER3.png"
  ],
  "kw": [
      "./assets/images/BG1INCOVER2.png",
      "./assets/images/BG2INCOVER2.png",
      "./assets/images/BG3INCOVER2.png",
      "./assets/images/BG4INCOVER2.png",
      "./assets/images/BG5INCOVER2.png"
  ],
  "suketdes": [
      "./assets/images/BG1INCOVER1.png",
      "./assets/images/BG2INCOVER1.png"
  ]
  // Tambahkan portfolio lainnya sesuai kebutuhan
};


// Object storing additional portfolio details
const portfolioDetails = {
  "nikahyuk": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "https://www.figma.com/design/5kvZoJnixkKoIu5Kewv3Wn/Somad---Wedding?node-id=98-2&t=JqP56lYHHPLFlJpm-1",
    fitur: "1. Pembayaran \n 2. Filter Project\n3. Chat\n4. Galeri Produk\n5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio\n2. Figma\n3.Diagrams.io\n4. Firebase Console\n5. Github"
  },
  "tbpanijayalaksana": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "https://www.figma.com/design/9VDz2s3i4pyiAMX6ee1A2p/Nisa---Applikasi-Toko?node-id=32-2&t=FRnGq2UUKwCvzys1-1",
    fitur: "1. Pembayaran\n2. Filter Project\n3. Chat\n4. Galeri Produk\n5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio\n2. Figma\n3.Diagrams.io\n4. Firebase Console\n5. Github"
  },
  "siswacare": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "https://www.figma.com/design/SD7aEInOnfDXdREL9CoXJB/Seli---App-Pengaduan-Bullying?node-id=8-2&t=YjLejQBtg0SDREAX-1",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
  },
  "yaspiba": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "https://www.figma.com/design/6oCnCrZPP5Pj7P19qpqU8t/Untitled?node-id=0-1&t=AHmceDZyG6eral08-1",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
  },
  "easylearning": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "https://www.figma.com/design/4RMlGLSgCfxiDZZwSqqjYm/Agus---EasyLearning?node-id=1-2&t=nKPNU89lJgYhBcCS-1",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
    },
  "maistiq": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "https://www.figma.com/design/rbaFlhHzsNEKSxtj65AJ6E/Hasan---Monitoring-Absen?node-id=1-2&t=gY4jJOmVnKnounLR-1",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
    },
  "pedulitbc": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "https://www.figma.com/design/FmC2dnlKhfsHPEnyCZuTLM/Untitled?node-id=0-1&t=9kMYT0xCCyH7QIXY-1",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
    },
  "kiblat": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
  },
  "lovedthinks": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
    },
  "diagnosatanaman": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
    },
  "lovedthinks": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
    },
  "bp": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "https://www.figma.com/design/IGOySDP2QZTT7TZHkiZwx1/Berbagi-Pendidikan?node-id=0-1&t=fKTm264r7y9EeEhm-1",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
    },
  "absenekstrakulikuler": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "https://www.figma.com/design/n1cITBf1946OSESNcQgZdu/Untitled?node-id=0-1&t=mcGrPAX6eb8DRnMH-1",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
    },
  "asetpinjaman": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "https://www.figma.com/design/FmC2dnlKhfsHPEnyCZuTLM/Untitled?node-id=0-1&t=9kMYT0xCCyH7QIXY-1",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
    },
  "kw": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "https://www.figma.com/design/VwDwRF3un55NT6oRWZ7DY1/Project-Kawan-Ternak?node-id=0-1&t=A9yk7ZfVyUFho4L9-1",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
    },
  "suketdes": {
    arsitektur: "MVP (Model View Presenter)",
    linkmockup: "",
    fitur: "1. Pembayaran /n 2. Filter Project /n 3. Chat /n 4. Galeri Produk /n 5. Mengelola Produk",
    database: "Firebase",
    metode: "XP (Extreme Programming)",
    tools: "1. Android Studio /n 2. Figma /n 3.Diagrams.io /n 4. Firebase Console /n 5. Github"
    }
  
};

var popup = document.getElementById("popup");
var popupTitle = document.getElementById("popup-title");
var popupDesc = document.getElementById("popup-desc");
var popupCategory = document.getElementById("popup-category");
var closeBtn = document.getElementsByClassName("close")[0];

// var sliderImages = document.querySelectorAll('.image-slider img');


// Automatically change image every 5 seconds

// Get references to elements
var imageSlider = document.getElementById("image-slider");


// Function to open popup and display details
function openPopup(projectId) {
  var images = portfolioImages[projectId];
  var details = portfolioDetails[projectId];
  if (!images || !details) return;

  // Clear previous images and details
  imageSlider.innerHTML = '';
  var detailContainer = document.getElementById('popup-details');
  detailContainer.innerHTML = '';

  // Add images to the slider
  images.forEach((src, index) => {
    var img = document.createElement("img");
    img.src = src;
    if (index === 0) img.classList.add("active"); // Set first image as active
    imageSlider.appendChild(img);
  });

  // Populate the grid with the details
  Object.keys(details).forEach(key => {
    var listItem = document.createElement("li");
    listItem.className = "grid-item";
    listItem.innerHTML = `<div><h3 class="judul">${capitalizeFirstLetter(key)}</h3><h3 class="isi">${details[key]}</h3></div>`;
    detailContainer.appendChild(listItem);
  });

  // Set title, category, and description
  popupTitle.textContent = document.querySelector(`[data-portfolio="${projectId}"] .project-title`).textContent;
  popupCategory.textContent = document.querySelector(`[data-portfolio="${projectId}"] .project-category`).textContent;
  popupDesc.textContent = document.querySelector(`[data-portfolio="${projectId}"] .project-description`).textContent;

  // Set link for the mockup button
  var mockupButton = document.getElementById("view-mockup-btn");
  mockupButton.onclick = function() {
    window.open(details.linkmockup, "_blank"); // Open link in a new tab
  };

  // Display the popup
  popup.style.display = "block";

  // Start the image slider
  startSlider();
}

// Function to capitalize the first letter of each detail key
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to close popup
closeBtn.onclick = function() {
  popup.style.display = "none";
}

// Function to start image slider
function startSlider() {
  var slides = imageSlider.querySelectorAll("img");
  let currentIndex = 0;

  function showNextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }

  setInterval(showNextSlide, 5000); // Change image every 5 seconds
}

// Add event listener to project items to open popup on click
document.querySelectorAll(".project-item a").forEach(item => {
  item.addEventListener("click", function(event) {
    event.preventDefault();
    var projectId = this.closest(".project-item").getAttribute("data-portfolio");
    openPopup(projectId);
  });
});