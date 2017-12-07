// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'
const quoteText = document.querySelector('.quote-text')
const quoteAuthor = document.querySelector('.quote-author')
const button = document.querySelector('.button')



function getQuote() {
    $.ajax({
        type: "GET",
        url: API_URL,
        dataType: 'json',
        success: function(data){
            console.log(data.quoteText)
            quoteText.textContent = (data.quoteText)
            console.log(data.quoteAuthor)
            quoteAuthor.textContent = (data.quoteAuthor)
            
        },
        error: function(error){
            console.log(error)
            
            
        }
        
        
    })
}


getQuote()

button.addEventListener('click', function(e){
     getQuote()
}) 

