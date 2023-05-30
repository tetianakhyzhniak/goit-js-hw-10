const BASE_URL = 'https://api.thecatapi.com/v1/';
const api_key= 'live_wgNTAeN88icjGIlOhkcRfT4NUokIxScBWIUBGF3hxxFEeCT8oTfofBfbuUqfmBxP';


export function fetchBreeds(){
 return fetch(`${BASE_URL}breeds?api_key=${api_key}`)
    .then(resp => {
        if (!resp.ok){
            throw new Error (resp.statusText);
        }
        return resp.json()
    })
}

export function fetchCatByBreed(breedId){
return fetch(`${BASE_URL}images/search?api_key=${api_key}&breed_ids=${breedId}`)
.then(resp => {
    if (!resp.ok){
        throw new Error (resp.statusText);
    }
    return resp.json();
})
}