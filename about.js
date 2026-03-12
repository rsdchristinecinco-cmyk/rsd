// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});


// MODAL
function openModal(img, name, role, bio) {
  document.getElementById("modalImg").src = img;
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalRole").innerText = role;
  document.getElementById("modalBio").innerText = bio;
  document.getElementById("teamModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("teamModal").style.display = "none";
}

const stats = document.querySelectorAll(".stat");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.transform = "translateY(0)";
entry.target.style.opacity = "1";
}
});
});

stats.forEach(stat=>{
stat.style.opacity="0";
stat.style.transform="translateY(40px)";
stat.style.transition="all .6s ease";
observer.observe(stat);
});

function slideLeft(id){
const slider = document.getElementById(id);
slider.scrollBy({
left: -300,
behavior: "smooth"
});
}

function slideRight(id){
const slider = document.getElementById(id);
slider.scrollBy({
left: 300,
behavior: "smooth"
});
}

