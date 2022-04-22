async function getData(){
    const response = await fetch("https://type.fit/api/quotes");
    return response.json();
}

function refreshQuote() {
    getData()
    .then(data => {
    var randomIndex = Math.floor(Math.random() * data.length);
    var textElement = document.getElementById("todaysQuote");
    textElement.innerHTML = "\""+data[randomIndex].text+"\"";
  })
}

refreshQuote()
setTimeout(refreshQuote, 1000);