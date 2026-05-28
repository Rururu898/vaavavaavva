/* ================= SLIDER ================= */
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = slide.length;

function updateSlide(){
    if(slides){
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

function nextSlide(){
    if(totalSlides === 0) return;
    currentIndex++;
    if(currentIndex >= totalSlides){
        currentIndex = 0;
    }
    updateSlide();
}

function prevSlide(){
    if(totalSlides === 0) return;
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = totalSlides - 1;
    }
    updateSlide();
}

if(nextBtn && prevBtn){
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    setInterval(nextSlide, 5000);
}

/* ================= NAVBAR CLICK EFFECT ================= */
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function(){
        this.classList.add("active");
        setTimeout(() => {
            this.classList.remove("active");
        }, 500);
    });
});
