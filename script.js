let date=new Date();
let month=date.getMonth()+1;
let year=date.getFullYear();
let day=date.getDate();
let container=document.querySelector(".news-container")


function search()
{
    let newsContainer=document.querySelector(".news-container")
    let keyword=document.querySelector(".searchByKeyword").value
    if(keyword=="")
    {
        alert("Please Enter a valid Keyword")
        return
    }
    else{
        let url = "https://newsapi.org/v2/everything?q="+keyword+"&from="+year+"-"+(month-1)+"-"+day+"&sortBy=publishedAt&apiKey=ed8668a21719482a8d700d96b7a99f61";
        
        fetch(url).then((response)=>response.json()).then((data)=>
        {
            if(data.totalResults==0)
            {
                alert("Please Enter a valid Keyword")
                return 
            }
            newsContainer.innerHTML=""
            let articles=data.articles
        let j=0;
        while(j!=articles.length)
        {
            if(articles[j].urlToImage!=null)
            {
            let newElement=document.createElement("div")
            newElement.className="news-card"
            newElement.url=articles[j].url
            newElement.innerHTML=`<img src=${articles[j].urlToImage} alt="News Image" class="card-image" /><h2 class="card-headline">${articles[j].title}</h2><a href=${articles[j].url} target="_blank">Read More</a>`
            container.appendChild(newElement)
            j++
            continue
            }
          j++
        }
    })
}
}