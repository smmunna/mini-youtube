// Showing the all data containing to this API;
const youtubeData = async () => {
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-02-01&sortBy=publishedAt&apiKey=8579cef86cab4dc2af1f112f61a614f9`;
    try {
        //  Fetching the Data from this API;
        const res = await fetch(url);
        const data = await res.json();
        videoItems(data.articles);

        // Get the regionCode from this Data;
        document.getElementById('regionCode').innerText = data.regionCode;

    } catch (error) {
        console.log(error + 'Find the error from this message.')
    }
}

// Get the items array from this API
const videoItems = (videoItem) =>{
    console.log(videoItem)

     // Card Main Div
     const mainDivCard = document.getElementById('mainDivCard');

    //  Get all the Items
    
}

// Calling this function;
youtubeData();