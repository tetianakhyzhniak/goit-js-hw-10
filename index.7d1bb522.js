const e=document.querySelector(".loader"),t=document.querySelector(".cat-info"),n=document.querySelector(".breed-select"),o=document.querySelector("p.error");o.style.display="none",fetch("https://api.thecatapi.com/v1/breeds?api_key=live_wgNTAeN88icjGIlOhkcRfT4NUokIxScBWIUBGF3hxxFEeCT8oTfofBfbuUqfmBxP").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((t=>(n.style.display="none",e.style.display="block",t.map((e=>({id:e.id,name:e.name})))))).then((t=>{n.style.display="block",e.style.display="none";const o=t.map((({id:e,name:t})=>`<option value="${e}">${t}</option>`)).join("");n.insertAdjacentHTML("beforeend",o)})).catch((e=>{console.log(e),o.style.display="block"})),n.addEventListener("change",(function(n){n.preventDefault(),e.style.display="block",o.style.display="none",(s=n.target.value,fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_wgNTAeN88icjGIlOhkcRfT4NUokIxScBWIUBGF3hxxFEeCT8oTfofBfbuUqfmBxP&breed_ids=${s}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((n=>{e.style.display="none";const o=n.map((({breeds:e,url:t})=>`<img src="${t}" width = 300>\n<p>Breed: ${e[0].name}</p>\n<p>Description: ${e[0].description}</p>\n<p>Temperament: ${e[0].temperament}</p>`)).join("");t.innerHTML=o})).catch((e=>{console.log(e),o.style.display="block"}));var s}));
//# sourceMappingURL=index.7d1bb522.js.map