/* navbar */


/* caruosel */
// สร้างตัวแปรเก็บ element ต่างๆของ Carousel
const carousel = document.querySelector(".carousel");
const carouselItems = carousel.querySelectorAll(".carousel-item");
const carouselNumbers = carousel.querySelectorAll(".carousel-number");

// กำหนดตัวเลขเริ่มต้นและเวลาเปลี่ยนภาพ
let currentImage = 0;
let imageInterval = setInterval(changeImage, 100000);

// เพิ่ม event listener ให้กับตัวเลขใน Carousel
carouselNumbers.forEach((number, index) => {
  number.addEventListener("click", () => {
    currentImage = index;
    showImage();
    clearInterval(imageInterval);
    imageInterval = setInterval(changeImage, 100000);
  });
});

// ฟังก์ชันเปลี่ยนภาพ
function changeImage() {
  currentImage++;
  if (currentImage >= carouselItems.length) {
    currentImage = 0;
  }
  showImage();
}

// ฟังก์ชันแสดงภาพ
function showImage() {
  carouselItems.forEach((item) => {
    item.style.display = "none";
  });
  carouselNumbers.forEach((number) => {
    number.classList.remove("active");
  });
  carouselItems[currentImage].style.display = "block";
  carouselNumbers[currentImage].classList.add("active");
}

/* category */
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    
    // ซ่อนเนื้อหา Tab 2 และ Tab 3 เมื่อแสดงเนื้อหา All
    if (tabName === "all") {
      document.getElementById("tab2").style.display = "none";
      document.getElementById("tab3").style.display = "none";
    }
  }
  ;

