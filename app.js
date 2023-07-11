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