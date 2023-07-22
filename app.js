let date=new Date();
let month=date.getMonth()+1;
let year=date.getFullYear();
let day=date.getDate();

refreshAPI("in")
// Carousel Function--starts
let slideNum=0;
setInterval(()=>next(),5000);

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
}
//Carousel function--ends


//Using Quote API--starts
const thought=document.querySelector(".thought-content") 

fetch("https://api.quotable.io/quotes/random").then((response)=>response.json()).then((data)=>{
    let author=data[0].author
    let quote=data[0].content
    thought.innerText="\""+quote+"\"\n-"+author

})
//Using Quote API--ends

//Using News API --starts
let newsMainCards=document.getElementsByClassName("carousel-card-image")
let newsMainHeadlines=document.getElementsByClassName("news-headlines")
let latestNewsImage=document.getElementsByClassName("latest-news-image")
let latestNewsHeadlines=document.getElementsByClassName("latest-news-headlines")
let BusinessNewsImage=document.getElementsByClassName("business-card-image")
let BusinessNewsHeadlines=document.getElementsByClassName("business-news-headline")
let HealthNewsImage=document.getElementsByClassName("health-card-image")
let HealthNewsHeadlines=document.getElementsByClassName("health-news-headlines")
let GeneralNewsImage=document.getElementsByClassName("general-card-image")
let GeneralNewsHeadlines=document.getElementsByClassName("general-news-headline")
let SportsNewsImage=document.getElementsByClassName("sports-card-image")
let SportsNewsHeadlines=document.getElementsByClassName("sports-news-headline")
let ScienceNewsImage=document.getElementsByClassName("science-card-image")
let ScienceNewsHeadlines=document.getElementsByClassName("science-news-headline")
let EntertainmentNewsImage=document.getElementsByClassName("entertainment-card-image")
let EntertainmentNewsHeadlines=document.getElementsByClassName("entertainment-news-headline")
let TechnologyNewsImage=document.getElementsByClassName("tech-card-image")
let TechnologyNewsHeadlines=document.getElementsByClassName("technology-news-headline")

document.getElementById("country").value=""

function refreshAPI(country)
{
//Using News API for carousel window--starts
let url = "https://newsapi.org/v2/everything?q="+country+"&from="+year+"-"+(month-1)+"-"+day+"&sortBy=publishedAt&apiKey=ed8668a21719482a8d700d96b7a99f61";

fetch(url).then((response)=>response.json()).then((data)=>{
    let i=0;
    let j=50;
    while(i!=5)
    {
        if(data.articles[j].urlToImage!=null)
        {
            newsMainCards[i].src=data.articles[j].urlToImage
            newsMainHeadlines[i].innerHTML=data.articles[j].title
            newsMainCards[i].url=data.articles[j].url;
            i++;
            j++;
            continue;
        }
        j++;
    }
    i=0,j=5;
    while(i!=4)
    {
        if(data.articles[j].urlToImage!=null)
        {
            latestNewsImage[i].src=data.articles[j].urlToImage
            latestNewsHeadlines[i].innerHTML=data.articles[j].title
            latestNewsImage[i].url=data.articles[j].url;
            i++;
            j++;
            continue;
        }
        j++;
    }

    // Business News Section
    let businessURL="https://newsapi.org/v2/top-headlines?country="+country+"&category=business&apiKey=ed8668a21719482a8d700d96b7a99f61"
    fetch(businessURL).then((response)=>response.json()).then((businessData)=>{
        let articles=businessData.articles
        i=0,j=0;
        while(i!=BusinessNewsImage.length)
        {
            if(articles[j].urlToImage==null)
            BusinessNewsImage[i].src="images/no_picture.png"
            else
            BusinessNewsImage[i].src=articles[j].urlToImage
            
            BusinessNewsHeadlines[i].innerText=articles[j].title
            BusinessNewsImage[i].url=articles[j].url

            i++;
            j++;
            continue;
        }
    })

    // Health News Section
    let HealthURL="https://newsapi.org/v2/top-headlines?country="+country+"&category=health&apiKey=ed8668a21719482a8d700d96b7a99f61"
    fetch(HealthURL).then((response)=>response.json()).then((healthData)=>{
        let articles=healthData.articles
        i=0,j=3;
        while(i!=HealthNewsImage.length)
        {
            if(articles[j].urlToImage==null)
            HealthNewsImage[i].src="images/no_picture.png"
            else
            HealthNewsImage[i].src=articles[j].urlToImage
            HealthNewsHeadlines[i].innerText=articles[j].title
            HealthNewsImage[i].url=articles[j].url

            i++;
            j++;
            continue;
        }
    })

    // General News Section
    let GeneralURL="https://newsapi.org/v2/top-headlines?country="+country+"&category=general&apiKey=ed8668a21719482a8d700d96b7a99f61"
    fetch(GeneralURL).then((response)=>response.json()).then((GeneralData)=>{
        let articles=GeneralData.articles
        i=0,j=3;
        while(i!=GeneralNewsImage.length)
        {
            if(articles[j].urlToImage==null)
            GeneralNewsImage[i].src="images/no_picture.png"
            else
            GeneralNewsImage[i].src=articles[j].urlToImage
            GeneralNewsHeadlines[i].innerText=articles[j].title
            GeneralNewsImage[i].url=articles[j].url


            i++;
            j++;
            continue;
        }
    })

    // Sports News Section
    let SportsURL="https://newsapi.org/v2/top-headlines?country="+country+"&category=sports&apiKey=ed8668a21719482a8d700d96b7a99f61"
    fetch(SportsURL).then((response)=>response.json()).then((SportsData)=>{
        let articles=SportsData.articles
        i=0,j=3;
        while(i!=SportsNewsImage.length)
        {
            if(articles[j].urlToImage==null)
            SportsNewsImage[i].src="images/no_picture.png"
            else
            SportsNewsImage[i].src=articles[j].urlToImage
            SportsNewsHeadlines[i].innerText=articles[j].title
            SportsNewsImage[i].url=articles[j].url

            i++;
            j++;
            continue;
        }
    })


    // Science News Section
    let ScienceURL="https://newsapi.org/v2/top-headlines?country="+country+"&category=science&apiKey=ed8668a21719482a8d700d96b7a99f61"
    fetch(ScienceURL).then((response)=>response.json()).then((ScienceData)=>{
        let articles=ScienceData.articles
        i=0,j=3;
        while(i!=ScienceNewsImage.length)
        {
            if(articles[j].urlToImage==null)
            ScienceNewsImage[i].src="images/no_picture.png"
            else
            ScienceNewsImage[i].src=articles[j].urlToImage
            ScienceNewsHeadlines[i].innerText=articles[j].title
            ScienceNewsImage[i].url=articles[j].url


            i++;
            j++;
            continue;
        }
    })


    // Entertainment News Section
    let EntertainmentURL="https://newsapi.org/v2/top-headlines?country="+country+"&category=entertainment&apiKey=ed8668a21719482a8d700d96b7a99f61"
    fetch(EntertainmentURL).then((response)=>response.json()).then((EntertainmentData)=>{
        let articles=EntertainmentData.articles
        i=0,j=5;
        while(i!=EntertainmentNewsImage.length)
        {
            if(articles[j].urlToImage==null)
            EntertainmentNewsImage[i].src="images/no_picture.png"
            else
            EntertainmentNewsImage[i].src=articles[j].urlToImage
            EntertainmentNewsHeadlines[i].innerText=articles[j].title
            EntertainmentNewsImage[i].url=articles[j].url


            i++;
            j++;
            continue;
        }
    })

     // Technology News Section
     let TechnologyURL="https://newsapi.org/v2/top-headlines?country="+country+"&category=technology&apiKey=ed8668a21719482a8d700d96b7a99f61"
     fetch(TechnologyURL).then((response)=>response.json()).then((TechnologyData)=>{
         let articles=TechnologyData.articles
         i=0,j=5;
         while(i!=TechnologyNewsImage.length)
         {
            if(articles[j].urlToImage==null)
            TechnologyNewsImage[i].src="images/no_picture.png"
            else
            TechnologyNewsImage[i].src=articles[j].urlToImage
             TechnologyNewsHeadlines[i].innerText=articles[j].title
             TechnologyNewsImage[i].url=articles[j].url
 
             i++;
             j++;
             continue;
         }
     })
})
}
