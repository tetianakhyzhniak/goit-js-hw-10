
// import SlimSelect from 'slim-select';
  // new SlimSelect({
    //     select: '.breed-select',
    //   })
import * as catApi from './cat-api';

const loader = document.querySelector('.loader');
const catInfoContainer = document.querySelector('.cat-info');
const selectBreed= document.querySelector('.breed-select');
const errorParagraph = document.querySelector('p.error');
errorParagraph.style.display = 'none'

catApi.fetchBreeds().then(data=> {
selectBreed.style.display = 'none';
loader.style.display = 'block';
    return data.map(breed => ({
        id: breed.id,
        name: breed.name,
      }));
})
.then(data => {
selectBreed.style.display = 'block';
loader.style.display = 'none';
    const markUp = data.map(({id, name}) => `<option value="${id}">${name}</option>`).join('');
    selectBreed.insertAdjacentHTML('beforeend', markUp);
  
})
.catch((error) => {console.log(error);
    errorParagraph.style.display = 'block'
});

selectBreed.addEventListener('change', onChange)
function onChange(e){
e.preventDefault();
loader.style.display = 'block';
errorParagraph.style.display = 'none'; 
catApi.fetchCatByBreed(e.target.value).then(data => {
    loader.style.display = 'none'
const catInfoHtml = data.map(({breeds, url})=> `<img src="${url}" width = 300>
<p>Breed: ${breeds[0].name}</p>
<p>Description: ${breeds[0].description}</p>
<p>Temperament: ${breeds[0].temperament}</p>`).join('');
catInfoContainer.innerHTML = catInfoHtml;
}).catch((error) => {console.log(error);
    errorParagraph.style.display = 'block';
})
}





