// ! burger bar

let navigation = document.querySelector(".nav");
let burger = document.querySelector(".bar");
let header = document.querySelector("header");
let inputSection = document.querySelector(".first-section");

burger.addEventListener("click", function () {
  navigation.classList.toggle("active");
  burger.classList.toggle("burger-active");
  header.classList.toggle("newHeader");
  inputSection.classList.toggle("newFirstSection");
});

// ! list

let form = document.querySelector(".form");
let inputElement = document.querySelector(".input-text");
let addButton = document.querySelector(".button");
let ul = document.querySelector(".ul");
let removeButton = document.querySelector(".new");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = inputElement.value;
  if (value == " ") {
    return;
  }

  let li = document.createElement("li");

  let deleteLi = document.createElement("button");
  deleteLi.classList.add("new-button");
  deleteLi.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteLi.addEventListener("click", function () {
    li.remove();
  });

  li.innerText = value;

  li.appendChild(deleteLi);
  ul.appendChild(li);

  inputElement.value = " ";
});

removeButton.addEventListener("click", function () {
  ul.innerHTML = " ";
});

//! severTan dakavsireba

function getServerInfo() {
  let info = new XMLHttpRequest()
  info.open('GET', 'https://reqres.in/api/unknown')
  info.addEventListener('load', function(){
    let gatedInfo = this.responseText
    let parsedInfo = JSON.parse(gatedInfo)
    console.log(parsedInfo);

    let ul = document.createElement('ul')
    parsedInfo.data.forEach(i => {
      let li = document.createElement('li')
      li.innerText = `${i.name} ${i.color}`
      ul.appendChild(li)
      ul.classList.add('js-ul')
    })
    document.getElementById('container').appendChild(ul)
  })

  info.addEventListener('error', function() {
    console.log(error);
  })

  info.send()
  
}

getServerInfo()
