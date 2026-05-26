
//use search in bar or change style of search bar when searched instead
const elements = document.querySelectorAll('li')
const searchInput = document.querySelector('.input')

searchInput.addEventListener("input", (e) => {
    let value = e.target.value
    if (value && value.trim().length > 0){
        value = value.trim().toLowerCase()
        setList(people.filter(person => {
            return person.name.includes(value)

        }))
    } else {
            clearList()
    }
    clearButton.addEventListener("click", () => {

    })
})

const clearButton = document.getElementById('clear')

clearButton.addEventListener("click", () => {

})

function setList(results){
    clearList()
    for (const elements of results){
        const resultItem = document.createElement('li')
        resultItem.classList.add('result-item')
        const text = document.createTextNode(person.name)
        resultItem.appendChild(text)
        list.appendChild(resultItem)
    }
    if (results.length === 0){
        noResults()
    }
}

function clearList() {
    while (list.firstChild){
        list.removeChild(list.firstChild)
    }
}

function noResults(){
    const error = document.createElement('li')
    error.classList.add('error-message')
    const text = document.createTextNode('No results found.')
    error.appendChild(text)
    list.appendChild(error)
}

