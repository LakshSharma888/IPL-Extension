async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=e8050cda-3e94-46b8-81d8-193aef071816&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org
            const relevantData = matchesList.filter(match => match.series_id == "71a7c7dc-3929-408c-9641-1da6d96f8894").map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();