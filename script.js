const words = [
"Appointment Scheduling",
"EMR Management",
"Insurance Verification",
"Patient Support",
"Medical Documentation"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[i];

if(isDeleting){
j--;
}else{
j++;
}

document.getElementById("typing").textContent =
currentWord.substring(0,j);

if(!isDeleting && j === currentWord.length){

setTimeout(()=>{
isDeleting=true;
},1000);

}else if(isDeleting && j===0){

isDeleting=false;
i++;

if(i===words.length){
i=0;
}

}

setTimeout(type,isDeleting ? 50 : 100);
}

type();

new Swiper(".projectSwiper",{
loop:true,

navigation:{
nextEl:"#projects .swiper-button-next",
prevEl:"#projects .swiper-button-prev"
}
});

new Swiper(".certSwiper",{
loop:true,

navigation:{
nextEl:"#certifications .swiper-button-next",
prevEl:"#certifications .swiper-button-prev"
}
});

new Swiper(".testimonialSwiper",{
loop:true,

navigation:{
nextEl:"#feedbacks .swiper-button-next",
prevEl:"#feedbacks .swiper-button-prev"
}
});

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");
const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

document
.getElementById("themeToggle")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});
