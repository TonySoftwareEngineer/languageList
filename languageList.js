fetch(
    'https://raw.githubusercontent.com/TonySoftwareEngineer/myFirstWebsite/main/languages.txt'
)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }
        return response.text() // Access and return response's text content
    })

    .then(text => {

        const languages = text.split(';')
        const ul = document.querySelector('#languageList')
        //Iterate on the languages array
        languages.forEach(language => {
            //Display each language
            console.log(language)
            
            const li = document.createElement('li')
            li.textContent = language.trim()
            ul.appendChild(li)
        });
    })
    .catch(err => {
        console.error(err.message)
    })

