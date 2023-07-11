// Carousel Function--starts
let slideNum=0;
setInterval(()=>next(),2000);

function next()
{
    slideNum=slideNum+1;
    show(slideNum);
}

function show(s)
{
    let slides=document.getElementsByClassName("carousel-card");

    if(s>=slides.length)
    {
        s=0;
        slideNum=0;
    }
    for(let slide=0;slide<slides.length;slide++)
    {
        slides[slide].style.display="none";
    }
    slides[slideNum].style.display="block";
    console.log(slideNum)
}
//Carousel function--ends


//Using Quote API--starts
const thought=document.querySelector(".thought-content") 

fetch("https://api.quotable.io/quotes/random").then((response)=>response.json()).then((data)=>{
    console.log(data)
    console.log(data[0].author)
    let author=data[0].author
    let quote=data[0].content
    thought.innerText="\""+quote+"\"\n-"+author

})
//Using Quote API--ends


//Using News API for carousel window--starts
let newsMainCards=document.getElementsByClassName(".carousel-card-image")
