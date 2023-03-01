// Showing the all data containing to this API;
const newsData = async () => {
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-02-01&sortBy=publishedAt&apiKey=8579cef86cab4dc2af1f112f61a614f9`;
    try {
        //  Fetching the Data from this API;
        const res = await fetch(url);
        const data = await res.json();
        newsItems(data.articles.slice(0,6));

        // Get the regionCode from this Data;
        //document.getElementById('regionCode').innerText = data.regionCode;

        // 

    } catch (error) {
        console.log(error + 'Find the error from this message.')
    }
}

// Get the items array from this API
const newsItems = (news) =>{
    console.log(news)

     // Card Main Div
     const mainDivCard = document.getElementById('mainDivCard');

    //  Get all the Items
    news.forEach(teslaNews=>{
        console.log(teslaNews)
        // Destructuring
        const {author, urlToImage,content,description,title,url,publishedAt} = teslaNews;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
          <img src="${urlToImage ? urlToImage:'../images/credit-uni.png'}" class="card-img-top w-100" alt="...">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description? description.slice(0,100)+'......' : '<p class="text-danger">No Description here!</p>'}</p>
            <p class="text-body-tertiary">Published at: ${publishedAt}</p>
            
          </div>
        </div>
        `;

        mainDivCard.appendChild(div);
    })
}

// Calling this function;
newsData();