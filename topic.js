let date=new Date();
let month=date.getMonth()+1;
let year=date.getFullYear();
let day=date.getDate();


function search(category)
{
    let country=document.getElementById("country").value
let container=document.querySelector(".news-container")
let newsContainer=document.querySelector(".news-container")
newsContainer.innerHTML=""
let url=`https://newsapi.org/v2/top-headlines?country=`+country+`&category=`+category+`&apiKey=ed8668a21719482a8d700d96b7a99f61`

fetch(url).then((response)=>response.json()).then((data)=>
{
    let articles=data.articles
    let j=0;
    while(j!=articles.length)
    {
        let newElement=document.createElement("div")
        newElement.className="news-card"
        newElement.url=articles[j].url
        if(articles[j].urlToImage!=null)
        imageURL=articles[j].urlToImage
        else
        imageURL="images/no_picture.png"
        newElement.innerHTML=`<img src=${imageURL} alt="News Image" class="card-image" /><h2 class="card-headline">${articles[j].title}</h2><a href=${articles[j].url} target="_blank">Read More</a>`
        container.appendChild(newElement)
        j++
        continue
    }
})
}