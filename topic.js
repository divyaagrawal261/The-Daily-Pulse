

function search(category)
{
    let country=document.getElementById("country").value
    let url=`https://newsapi.org/v2/top-headlines?country=`+country+`&category=`+category+`&apiKey=ed8668a21719482a8d700d96b7a99f61`
    fetch(url).then((response)=>response.json()).then((data)=>{
        console.log(data)
    })
}





































// let businessURL="https://newsapi.org/v2/top-headlines?country="+country+"&category=business&apiKey=ed8668a21719482a8d700d96b7a99f61"