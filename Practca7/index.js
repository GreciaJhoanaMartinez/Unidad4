fetch('https://epic.gsfc.nasa.gov/api/natural')
  .then(function(response) {
    return response.json()  
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.log(error)
  })

function getImage(data) {
    const url='https://epic.gsfc.nasa.gov/api/natural'
    const date = data.date
    .surbtr(0,10) //obtiene los primeros caracteres
    .split('-') //separa los caracteres por el guion
return'${url/$(date[0])}/$(date[1])/$(date[2])/png/${date.image}.png'
}

//funcion para obtener la url cada imagen


//creando nodos el el div
const app =documet.getElementById('app');
getImageFromNasa()
then.function(data)
    data.forEach(function (data){
    console.log(data)
    const img=document.createElement('img')
    img.src =getImage(data)
    img.alt=data.caption
    app.appendChild(img)
})
 
function getImageFromNasa()
returndata.forEach(function (data){
    const img=document.createElement('img')
    img.src =getImage(data)
    img.alt=data.caption
})

    
