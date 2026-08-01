/*====================================================
        CHRIS ❤️ FAITH (FAY)
        SCRIPT.JS - PART 1
====================================================*/


/*=========================================
Loading Screen
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    document.body.classList.add("loaded");

    setTimeout(() => {

        loader.style.display = "none";

    },1000);

});


/*=========================================
Typewriter Effect
=========================================*/

const text = `My Dearest Faith ❤️,

Happy Girlfriend's Day.

You are my happiness,
my peace,
my best friend,
and my greatest blessing.

Thank you for loving me.

Thank you for believing in me.

Thank you for choosing me.

I promise to keep loving you,
respecting you,
supporting you,
and making you smile every day.

You will always have my heart.

Forever Yours,

Chris ❤️`;

const typing = document.getElementById("typing");

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}

typeWriter();



/*=========================================
Love Timer
Change this date to your anniversary
=========================================*/

const anniversary = new Date("2025-01-01T00:00:00");

function updateLoveTimer(){

    const now = new Date();

    const difference = now - anniversary;

    const days = Math.floor(difference/(1000*60*60*24));

    const hours = Math.floor((difference/(1000*60*60))%24);

    const minutes = Math.floor((difference/(1000*60))%60);

    const seconds = Math.floor((difference/1000)%60);

    document.getElementById("loveTimer").innerHTML =

    `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;

}

setInterval(updateLoveTimer,1000);

updateLoveTimer();



/*=========================================
Music
=========================================*/

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = function(){

    if(!playing){

        music.play();

        musicBtn.innerHTML = "⏸ Pause Music";

        playing = true;

    }

    else{

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

        playing = false;

    }

};



/*=========================================
Explore Button
=========================================*/

document.getElementById("exploreBtn").onclick=function(){

document.getElementById("story").scrollIntoView({

behavior"smooth"

});

};
/*====================================================
        CHRIS ❤️ FAITH (FAY)
        SCRIPT.JS - PART 2
====================================================*/


/*=========================================
Floating Hearts
=========================================*/

const heartsContainer = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize = (15 + Math.random()*30) + "px";

    heart.style.animationDuration = (6 + Math.random()*5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,400);



/*=========================================
Falling Rose Petals
=========================================*/

const petalsContainer = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random()*100 + "%";

    petal.style.fontSize = (18 + Math.random()*20) + "px";

    petal.style.animationDuration = (8 + Math.random()*5) + "s";

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },13000);

}

setInterval(createPetal,1200);



/*=========================================
Twinkling Stars
=========================================*/

const starsContainer = document.getElementById("stars");

for(let i=0;i<120;i++){

    const star = document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*3+"s";

    starsContainer.appendChild(star);

}



/*=========================================
Surprise Modal
=========================================*/

const modal=document.getElementById("modal");

const surpriseBtn=document.getElementById("surpriseBtn");

const closeModal=document.getElementById("closeModal");

surpriseBtn.onclick=function(){

    modal.style.display="flex";

}

closeModal.onclick=function(){

    modal.style.display="none";

}

window.onclick=function(e){

    if(e.target===modal){

        modal.style.display="none";

    }

};



/*=========================================
Fade In While Scrolling
=========================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(

".story-card,.reason-card,.gallery-item,.love-letter"

).forEach(item=>{

item.classList.add("fade");

observer.observe(item);

});



/*=========================================
Gallery Click Animation
=========================================*/

document.querySelectorAll(".gallery-item img").forEach(image=>{

image.addEventListener("click",()=>{

image.style.transform="scale(1.2)";

setTimeout(()=>{

image.style.transform="scale(1)";

},500);

});

});
/*====================================================
        CHRIS ❤️ FAITH (FAY)
        SCRIPT.JS - PART 3
====================================================*/


/*=========================================
Fireworks
=========================================*/

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const particles = [];

function launchFirework(){

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.6;

    for(let i=0;i<45;i++){

        particles.push({

            x:x,
            y:y,

            radius:2 + Math.random()*2,

            angle:Math.random()*Math.PI*2,

            speed:2 + Math.random()*4,

            alpha:1,

            color:`hsl(${Math.random()*360},100%,70%)`

        });

    }

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((particle,index)=>{

        particle.x += Math.cos(particle.angle)*particle.speed;

        particle.y += Math.sin(particle.angle)*particle.speed;

        particle.alpha -= 0.015;

        ctx.beginPath();

        ctx.arc(

            particle.x,

            particle.y,

            particle.radius,

            0,

            Math.PI*2

        );

        ctx.fillStyle = particle.color.replace("hsl","hsla").replace(")",`,`+particle.alpha+")");

        ctx.fill();

        if(particle.alpha <= 0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

setInterval(launchFirework,2500);



/*=========================================
Heart Burst
=========================================*/

function heartBurst(){

    for(let i=0;i<20;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=(45+Math.random()*10)+"%";

        heart.style.top=(45+Math.random()*10)+"%";

        heart.style.fontSize=(20+Math.random()*25)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="100000";

        heart.style.transition="all 2s ease";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform=
            `translate(${(Math.random()-0.5)*400}px,
            ${-200-Math.random()*300}px)
            scale(0.5)`;

            heart.style.opacity="0";

        },20);

        setTimeout(()=>{

            heart.remove();

        },2200);

    }

}



/*=========================================
Open Modal Fireworks
=========================================*/

surpriseBtn.addEventListener("click",()=>{

    launchFirework();

    launchFirework();

    launchFirework();

    heartBurst();

});



/*=========================================
Smooth Button Click Animation
=========================================*/

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.transform="scale(.95)";

        setTimeout(()=>{

            button.style.transform="";

        },120);

    });

});



/*=========================================
Welcome Message
=========================================*/

setTimeout(()=>{

    console.log(

`❤️
Welcome Faith!

This website was lovingly created by Chris.

Happy Girlfriend's Day!

❤️`);

},1500);



/*=========================================
End of Script
=========================================*/
