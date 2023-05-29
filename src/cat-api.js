const BASE_URL = 'https://api.thecatapi.com/v1/';
const api_key= 'live_wgNTAeN88icjGIlOhkcRfT4NUokIxScBWIUBGF3hxxFEeCT8oTfofBfbuUqfmBxP';
const errorParagraph = document.querySelector('p.error');
errorParagraph.style.display = 'none';
export function fetchBreeds(){
 return fetch(`${BASE_URL}breeds?api_key=${api_key}`)
    .then(resp => {
        if (!resp.ok){
            throw new Error (errorParagraph.textContent);
        }
        return resp.json()
    }).then(data=> {
        return data.map(breed => ({
            id: breed.id,
            name: breed.name,
          }));
    })
}

fetchBreeds().then(cat => console.log(cat)).catch(error => {console.error(error).finally(() => {
    errorParagraph.style.display = 'none';
  });
errorParagraph.textContent = error.message; 
errorParagraph.style.display = 'block'; });

export function fetchCatByBreed(breedId){
return fetch(`${BASE_URL}images/search?api_key=${api_key}&breed_ids=${breedId}`)
.then(resp => {
    if (!resp.ok){
        throw new Error (resp.statusText);
    }
    return resp.json();
}).then(data => {
    if (data && data.length>0){
const catInfo = data[0].breeds[0];
console.log(catInfo)
return {
    images: data[0].url,
    breedName: catInfo.name,
    description: catInfo.description,
    temperament: catInfo.temperament,
  };
} 
}).catch(error => {
    throw new Error("Not found cat");
  });
}