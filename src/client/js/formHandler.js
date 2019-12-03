function handleSubmit(event) {
    event.preventDefault()

    //Get input from form
    var url = document.querySelectorAll('input[name=test-url]')

    //check that input is a valid url
    if(Client.validURL(JSON.parse(JSON.stringify(url[0].value))))
    {
        console.log("::: Form Submitted :::")
        
        console.log("BUILDING REQUEST");
        console.log(JSON.stringify(url[0].value));
        fetch('http://localhost:3000/article', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: url[0].value})
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res); // for debugging
            document.querySelector('section.url-results #polarity').innerHTML = res.polarity
            document.querySelector('section.url-results #subjectivity').innerHTML = res.subjectivity
            document.querySelector('section.url-results #polarity_confidence').innerHTML = res.polarity_confidence
            document.querySelector('section.url-results #subjectivity_confidence').innerHTML = res.subjectivity_confidence
            document.querySelector('section.url-results #excerpt').innerHTML = res.text
        })

    }else{
        // Display error message if URL is not valide
        var error_sec = document.querySelector('section.errors');
        var error = document.querySelector('section.errors #error');
        error.innerHTML = "URL:\"" +JSON.stringify(url[0].value)+"\" is not valide. Please enter a valid url"
        error_sec.style.display = "block";
        
    } 
}

module.exports = handleSubmit;
