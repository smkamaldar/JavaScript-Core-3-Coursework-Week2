const ul = document.querySelector("#gallery");
const btn = document.getElementById("btn");


btn.addEventListener("click",getImage)

function getImage() {
  const link = "https://dog.ceo/api/breeds/image/random";
  fetch(link)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        
        addImage(data.message);
    });
}

// create li and img tags and set the src attribute 
// finally append li to ul
function addImage(imageAddress){
    const li = document.createElement("li")
    const img = document.createElement("img")
    img.setAttribute("src",imageAddress)
    li.appendChild(img)
    ul.innerHTML =""
    ul.appendChild(li)
}


