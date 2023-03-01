const youtubeData = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCvrh9k-LFww3n5xrbLdiwE09FLDyPRxvU&type=video`;
    try {
        //  Fetching the Data from this API;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error + 'Find the error from this message.')
    }
}

// Calling this function;
youtubeData();