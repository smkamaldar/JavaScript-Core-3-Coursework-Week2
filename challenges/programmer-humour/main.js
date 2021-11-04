const endpoint = "https://xkcd.now.sh/?comic=latest"
const body = document.querySelector("body")

function getImage(){
    fetch(endpoint)
    .then(response => response.json() )
    .then(data=>{
        console.log(data)
        addImage(data.img)
    })

}

getImage()

function addImage(imageAddress){
    const img = document.createElement("img")
    img.setAttribute("src",imageAddress )
    body.appendChild(img)
}


