
let title="India"
let url = "https://newsapi.org/v2/everything?q="+title+"&from=2023-06-10&sortBy=publishedAt&apiKey=ed8668a21719482a8d700d96b7a99f61";

fetch(url).then((response)=>response.json()).then((data)=>{
    console.log(data)
    
    console.log("My Findings")
    console.log(data.articles)
    let arts=data.articles
    console.log(arts[66])
    document.querySelector(".picture").style.backgroundImage="url("+arts[66].urlToImage+")"
    document.querySelector(".picture").innerText=arts[66].description
    
})