// Showing the all data containing to this API;
const newsData = async () => {
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-02-01&sortBy=publishedAt&apiKey=8579cef86cab4dc2af1f112f61a614f9`;
    try {
        //  Fetching the Data from this API;
        const res = await fetch(url);
        const data = await res.json();
        newsItems(data.articles);

        // Get the regionCode from this Data;
        //document.getElementById('regionCode').innerText = data.regionCode;

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

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        `;

        mainDivCard.appendChild(div);
    })
}

// Calling this function;
newsData();