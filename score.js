function renderScores()  {
    var results = JSON.parse(window.localStorage.getItem("results"))
    console.log(results)
}

function getResults() {
    fetch(window.localStorage.results)
    .then(function(response){
        return response.json();
    }) 
    .then(function (response) {

        for (i=0; i++; i<results.length){
        var setTableRow = document.createElement('tr')

        var setTableResults = document.createElement('td')

        var resultsList = document.createElement('ul')

        resultsList.innerHTML = [results,initials]

        setTableResults.appendChild(resultsList)

        setTableRow.appendChild(setTableResults)
        
        tableBody.appendChild(setTableRow)
    }
    })
}

renderScores() 
