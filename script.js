// Button Event
document.getElementById("magicBtn").addEventListener("click", () => {
    alert(" Magic Click!");
  });
  
  // Image Slideshow with Fade Transition
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop", // Mountain
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=300&h=200&fit=crop", // Forest
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop"  // Beach
  ];
  
  let currentIndex = 0;
  const slideImg = document.getElementById("slide");
  
  function showSlide(index) {
    slideImg.classList.add("fade-out");
  
    setTimeout(() => {
      slideImg.src = images[index];
      slideImg.classList.remove("fade-out");
    }, 500); // Matches CSS transition time
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }
  
  // Tabs
  function openTab(evt, tabName) {
    const contents = document.getElementsByClassName("tabContent");
    for (let content of contents) {
      content.classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
  }
  
  // Modal Logic
  const modal = document.getElementById("modal");
  const btn = document.getElementById("modalBtn");
  const close = document.getElementById("closeModal");
  
  btn.onclick = () => modal.style.display = "block";
  close.onclick = () => modal.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
  
