const startBtn = document.getElementById("startBtn");
const giftBtn = document.getElementById("giftBtn");
const music = document.getElementById("music");

const letter = document.querySelector(".letter");
const gallery = document.querySelector(".gallery");
const timeline = document.querySelector(".timeline");
const gift = document.querySelector(".gift");
const wish = document.getElementById("wish");

// Open Surprise
startBtn.addEventListener("click", () => {

    music.play().catch(() => {});

    startBtn.style.display = "none";

    letter.classList.remove("hidden");
    gallery.classList.remove("hidden");
    timeline.classList.remove("hidden");
    gift.classList.remove("hidden");

    letter.scrollIntoView({
        behavior: "smooth"
    });

});

// Open Gift
giftBtn.addEventListener("click", () => {

    wish.classList.remove("hidden");

    launchConfetti();

    launchHearts();

});

// Photo Click Effect
document.querySelectorAll(".photos img").forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.left = "0";
        overlay.style.top = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "20px";

        overlay.appendChild(image);

        overlay.onclick = () => overlay.remove();

        document.body.appendChild(overlay);

    });

});

// Floating Hearts
function launchHearts(){

    for(let i=0;i<25;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="100vh";
        heart.style.fontSize=(20+Math.random()*25)+"px";
        heart.style.transition="all 5s linear";
        heart.style.zIndex="9999";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.top="-50px";
            heart.style.opacity="0";

        },100);

        setTimeout(()=>{

            heart.remove();

        },5200);

    }

}

// Confetti
function launchConfetti(){

    const colors=["#ff4d6d","#ffd60a","#7b2cbf","#4cc9f0","#ffffff"];

    for(let i=0;i<120;i++){

        const conf=document.createElement("div");

        conf.style.position="fixed";
        conf.style.width="8px";
        conf.style.height="8px";
        conf.style.background=colors[Math.floor(Math.random()*colors.length)];
        conf.style.left=Math.random()*100+"vw";
        conf.style.top="-10px";
        conf.style.borderRadius="50%";
        conf.style.transition="all 4s linear";
        conf.style.zIndex="9999";

        document.body.appendChild(conf);

        setTimeout(()=>{

            conf.style.top="110vh";
            conf.style.transform=`translateX(${Math.random()*250-125}px) rotate(720deg)`;

        },50);

        setTimeout(()=>{

            conf.remove();

        },4200);

    }

}

// Countdown
const birthday = new Date("July 15, 2026 00:00:00").getTime();

const timer = document.createElement("div");

timer.style.textAlign="center";
timer.style.fontSize="26px";
timer.style.marginTop="20px";

document.querySelector(".hero").appendChild(timer);

setInterval(()=>{

    const now = new Date().getTime();

    const diff = birthday - now;

    if(diff<=0){

        timer.innerHTML="🎉 Happy Birthday Sneha! 🎉";

        return;

    }

    const d=Math.floor(diff/(1000*60*60*24));
    const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const m=Math.floor((diff%(1000*60*60))/60000);
    const s=Math.floor((diff%(60000))/1000);

    timer.innerHTML=
    `⏳ ${d}d ${h}h ${m}m ${s}s`;

},1000);

// Shooting Stars
setInterval(()=>{

    const star=document.createElement("div");

    star.style.position="fixed";
    star.style.left=Math.random()*100+"vw";
    star.style.top="0";
    star.style.width="3px";
    star.style.height="120px";
    star.style.background="linear-gradient(white,transparent)";
    star.style.transform="rotate(35deg)";
    star.style.opacity=".8";
    star.style.zIndex="-1";
    star.style.transition="all 1.5s linear";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.style.top="120vh";
        star.style.left=(parseFloat(star.style.left)+20)+"vw";

    },50);

    setTimeout(()=>{

        star.remove();

    },1600);

},2500);