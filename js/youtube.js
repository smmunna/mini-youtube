// Showing the all data containing to this API;
const youtubeData = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCvrh9k-LFww3n5xrbLdiwE09FLDyPRxvU&type=video`;
    try {
        //  Fetching the Data from this API;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        // Get the regionCode from this Data;
        document.getElementById('regionCode').innerText = data.regionCode;
        const mainDivCard = document.getElementById('mainDivCard');

    } catch (error) {
        console.log(error + 'Find the error from this message.')
    }
}

// Calling this function;
youtubeData();