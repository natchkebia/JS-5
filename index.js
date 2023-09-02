// ! burger bar

let navigation = document.querySelector('.nav')
let burger = document.querySelector('.bar')
let header = document.querySelector('header')
let inputSection = document.querySelector('.first-section')



  burger.addEventListener('click', function(){
    navigation.classList.toggle('active')
    burger.classList.toggle('burger-active')
    header.classList.toggle('newHeader')
    inputSection.classList.toggle('newFirstSection')
  })

// ! list 

let form = document.querySelector('.form')
let inputElement = document.querySelector('.input-text')
let addButton = document.querySelector('.button')
let ul = document.querySelector('.ul')
let removeButton = document.querySelector('.new')

form.addEventListener('submit', function(e){
    e.preventDefault()
    let value = inputElement.value
    if (value == ' ') {
        return
    }

    let li = document.createElement('li')

    let deleteLi = document.createElement("button");
    deleteLi.classList.add('new-button')
    deleteLi.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    deleteLi.addEventListener("click", function () {
      li.remove();
    });

    li.innerText = value

    li.appendChild(deleteLi)
    ul.appendChild(li)

    inputElement.value = ' '
})

removeButton.addEventListener('click', function(){
    ul.innerHTML= ' '
})