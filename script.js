

function scrollToSection() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

function toggleTheme() {
  document.body.classList.toggle("light");
}
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.classList.add("active");
    }
  });
});
const skillBars = document.querySelectorAll(".fill");

window.addEventListener("scroll", () => {
  skillBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      bar.style.width = bar.classList.contains("html") ? "90%" :
                        bar.classList.contains("css") ? "85%" :
                        bar.classList.contains("js") ? "70%" :
                        "65%";
    }
  });
});
const topBtn = document.getElementById("topBtn");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
if (!localStorage.getItem("visited")) {
  setTimeout(() => {
    alert("أهلًا 👋 نورت موقعي الشخصي");
    localStorage.setItem("visited", "true");
  }, 1500);
}
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById("progress").style.width = progress + "%";
});
const text = "ابــو الــهــيــثــم";
let index = 0;
const typing = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typing.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}

typeEffect();
document.addEventListener("contextmenu", e => {
  e.preventDefault();
});


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

window.addEventListener("load", () => {
  const welcome = document.getElementById("welcome");
  welcome.style.opacity = "1";

  setTimeout(() => {
    welcome.style.opacity = "0";
  }, 3000);
});
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff9c";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
const light = document.getElementById("cursor-light");
window.addEventListener("load", () => {
  const s = document.getElementById("hackSound");
  s.volume = 0.2; // خفيف
  s.play().catch(()=>{});
});
let fxOn = true;
const fxBtn = document.getElementById("fxToggle");
const audio = document.getElementById("hackSound");
const matrixCanvas = document.getElementById("matrix");

fxBtn.onclick = () => {
  fxOn = !fxOn;
  fxBtn.textContent = fxOn ? "FX ON" : "FX OFF";
  if (audio) fxOn ? audio.play().catch(()=>{}) : audio.pause();
  if (matrixCanvas) matrixCanvas.style.display = fxOn ? "block" : "none";
};



document.addEventListener("mousemove", (e) => {
  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";
});
setTimeout(() => {
  const bar = document.getElementById("loader-bar");
  if (bar) bar.style.display = "none";
}, 2600);
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

let playing = false;

