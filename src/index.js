
import SlimSelect from 'slim-select';
import * as catApi from './cat-api';

document.addEventListener('DOMContentLoaded', () =>{
    new SlimSelect({
        select: '#breed-select',
        searchable: false,
      })
})


const loader = document.querySelector('.loader');
const catInfoContainer = document.querySelector('.cat-info');
const selectBreed= document.querySelector('.breed-select');

selectBreed.addEventListener('change', OnChange)
const selectCatByBreed = selectBreed.value;
function OnChange(){
// catApi.fetchCatByBreed()

}

function getCatInfo(selectCatByBreed){
    return catApi.fetchCatByBreed(selectCatByBreed)
    .then((catInfo) => {
        const catInfoHtml =` <img src="${catInfo.imageUrl}">
        <p>Breed: ${catInfo.breedName}</p>
        <p>Description: ${catInfo.description}</p>
        <p>Temperament: ${catInfo.temperament}</p>`;
        catInfoContainer.innerHTML = catInfoHtml;
    }).catch(error => console.log(error));
}
catApi.fetchCatByBreed()
getCatInfo()
//отримання кошар за породами
catApi.fetchBreeds()
.then((breeds) => breeds.forEach((breed) => {
    let option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    selectBreed.appendChild(option);
}));
   



