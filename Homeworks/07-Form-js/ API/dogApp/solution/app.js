const dogSelector   = document.getElementById('dogSelector');
const dogimg        = document.getElementById('dogImg');

function renderSelectOptions(zeka) {
    zeka.forEach(breed => {
        dogSelector.innerHTML += `<option value=${breed.value}>${breed.name}</option>`
    })
} 

function renderDogData(data) {
    dogImg.innerHTML = `<img src='${data.message}'>`
}

function getDogImg() {    
    const url = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`;

    fetch(url)
        .then(response => response.json())
        .then(data => renderDogData(data))
        .catch(error => alert(error));
}

renderSelectOptions(dogBreeds);
dogSelector.addEventListener('change', getDogImg);
