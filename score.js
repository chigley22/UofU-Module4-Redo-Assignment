function renderScores()  {
    var response = JSON.parse(window.localStorage.getItem("results"))
    console.log(response)

        var resultsList = document.getElementById('results')

        for (i=0; i<response.length && i<10; i++){
        var currentListItem = document.createElement('li')
    
        currentListItem.innerHTML = `Results: ${response[i].result} Initials: ${response[i].initials}`
        console.log(response[i].result)
        console.log(currentListItem)

        resultsList.append(currentListItem)
        console.log(resultsList)
        }
}

renderScores() 
