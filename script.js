// ===========================================
// Typewriter Effect
// ===========================================

const message =
"Mercy ❤️, you are the best thing that has ever happened to me. Every heartbeat reminds me how lucky I am to have you. Happy Girlfriend's Day, my beautiful Chercy. I love you today, tomorrow, forever, and always.";

let index = 0;

function typeWriter() {

    if (index < message.length) {

        document.getElementById("typing").innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    }

}

window.onload = () => {

    typeWriter();

};

// ===========================================
// Love Timer
// Change this date to the day you became
// a couple.
// ===========================================

const startDate = new Date("2025-01-01T00:00:00");

function updateTimer(){

    const now = new Date();

    const difference = now - startDate;

    const days = Math.floor(difference / (1000*60*60*24));

    const hours = Math.floor((difference/(1000*60*60))%24);

    const minutes = Math.floor((difference/(1000*60))%60);

    const seconds = Math.floor((difference/1000)%60);

    document.getElementById("loveTimer").innerHTML=

    `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;

}

setInterval(updateTimer,1000);

updateTimer();

// ===========================================
// Floating Hearts
// ===========================================

const heartsContainer=document.getElementById("hearts-container");

function createHeart(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*30)+"px";

    heart.style.animationDuration=(5+Math.random()*6)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,300);

// ===========================================
// Background Music
// ===========================================

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=function(){

    if(!playing){

        music.play();

        playing=true;

        musicBtn.innerHTML="⏸ Pause Music";

    }

    else{

        music.pause();

        playing=false;

        musicBtn.innerHTML="🎵 Play Music";

    }

}

// ===========================================
// Surprise Modal
// ===========================================

const modal=document.getElementById("modal");

const surpriseBtn=document.getElementById("surpriseBtn");

const closeModal=document.getElementById("closeModal");

surpriseBtn.onclick=function(){

    modal.style.display="flex";

    startFireworks();

}

closeModal.onclick=function(){

    modal.style.display="none";

}

window.onclick=function(e){

    if(e.target==modal){

        modal.style.display="none";

    }

}

// ===========================================
// Hero Button
// ===========================================

document.getElementById("heartBtn").onclick=function(){

    document.getElementById("letter").scrollIntoView({

        behavior:"smooth"

    });

}

// ===========================================
// Gallery Image Preview
// ===========================================

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.style.position="fixed";

        overlay.style.left="0";

        overlay.style.top="0";

        overlay.style.width="100%";

        overlay.style.height="100%";

        overlay.style.background="rgba(0,0,0,.9)";

        overlay.style.display="flex";

        overlay.style.justifyContent="center";

        overlay.style.alignItems="center";

        overlay.style.zIndex="10000";

        const image=document.createElement("img");

        image.src=img.src;

        image.style.maxWidth="90%";

        image.style.maxHeight="90%";

        image.style.borderRadius="20px";

        overlay.appendChild(image);

        overlay.onclick=()=>overlay.remove();

        document.body.appendChild(overlay);

    });

});

// ===========================================
// Fireworks
// ===========================================

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

});

let particles=[];

function Particle(x,y){

    this.x=x;

    this.y=y;

    this.radius=Math.random()*3+2;

    this.dx=(Math.random()-0.5)*8;

    this.dy=(Math.random()-0.5)*8;

    this.life=100;

}

Particle.prototype.update=function(){

    this.x+=this.dx;

    this.y+=this.dy;

    this.life--;

}

Particle.prototype.draw=function(){

    ctx.beginPath();

    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

    ctx.fillStyle=`hsl(${Math.random()*360},100%,70%)`;

    ctx.fill();

}

function startFireworks(){

    particles=[];

    for(let i=0;i<250;i++){

        particles.push(new Particle(

            canvas.width/2,

            canvas.height/2

        ));

    }

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        p.update();

        p.draw();

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

// ===========================================
// Falling Rose Petals
// ===========================================

function createPetal(){

    const petal=document.createElement("div");

    petal.innerHTML="🌹";

    petal.style.position="fixed";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-50px";

    petal.style.fontSize=(20+Math.random()*15)+"px";

    petal.style.zIndex="999";

    petal.style.pointerEvents="none";

    petal.style.transition="transform 10s linear";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.style.transform=`translateY(${window.innerHeight+100}px)
        rotate(${720*Math.random()}deg)`;

    },100);

    setTimeout(()=>{

        petal.remove();

    },10000);

}

setInterval(createPetal,1500);

// ===========================================
// Smooth Fade-In Sections
// ===========================================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(80px)";

    section.style.transition="1s";

    observer.observe(section);

});

// ===========================================
// Console Message
// ===========================================

console.log(`
❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

Happy Girlfriend's Day Mercy!

From Chris ❤️

Forever Yours.

❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
`);
