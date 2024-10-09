import Champion from "./classes/Champion"
import Mage from "../assets/Mage.png"
import Assassin from "../assets/Assassin.png"
import Tank from "../assets/Tank.png"
import Support from "../assets/Support.png"
import Marksman from "../assets/Marksman.png"
import Fighter from "../assets/Fighter.png"

var champions = [];

function getChampImage(tag) {
    let imageUrl;

    switch (tag) {
        case 'Mage':
            imageUrl = Mage;
            break;
        case 'Assassin':
            imageUrl = Assassin;
            break;
        case 'Tank':
            imageUrl = Tank;
            break;
        case 'Support':
            imageUrl = Support;
            break;
        case 'Marksman':
            imageUrl = Marksman;
            break;
        case 'Fighter':
            imageUrl = Fighter;
            break;
        default:
            imageUrl = ""; // Valor por defecto si no coincide con ningún caso
            break;
    }

    return imageUrl;
}

function openModal(key) {
    let modal = document.getElementById("modal");
    let champ = champions[key];
    
    let champImg = getChampImage(champ.tags[0])

    let strTags = `
        <div class="modalTag">
            <div class="text modalTagText">${champ.tags[0]}</div>
            <img class="modalTagImg" src="${champImg}"></img>
        </div>
    `;

    if(champ.tags.length > 1){
        champImg = getChampImage(champ.tags[1])

        strTags += `
            <div class="modalTag">
                <div class="text modalTagText">${champ.tags[1]}</div>
                <img class="modalTagImg" src="${champImg}"></img>
            </div>          
        `;
    }

    modal.innerHTML = `
    <div class="modalContainer">
        <div class="modalHeader">
            <img class="modalImg" src="https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/${champ.image}" alt="${champ.name}">
            
            <div class="modalLeftHeader">
                <div class="modalHeaderContainer">
                    <h1 class="text modalName">${champ.name}</h1>
                    <h3 class="text modalTittle">${champ.title}</h3>
                </div>
                
                <div class="modalTagContainer">
                    ${strTags}
                </div>
            </div>
        </div>

        <div class="modalBodyContainer">
            <div class="text modalType">${champ.type}</div>

            <div class="text modalTextBody">${champ.blurb}</div>

            <button class="text modalbtn" onclick="closeModal()">Cerrar</button>
        </div>
    </div>
    `;

    modal.classList.add("active");
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.classList.remove("active");
}

window.openModal = openModal;
window.closeModal = closeModal;

async function fetchData() {
    let data = await fetch("https://ddragon.leagueoflegends.com/cdn/14.20.1/data/es_ES/champion.json")
    .then(async response => {
        let jsondata = (await response.json()).data;
        return jsondata;
    }).catch(err => {
        console.log(err.json());
    });
    
    for(let key in data) {
        let c = new Champion(data[key]);
        champions.push(c);
    }

    setHtml(champions);
}

function setHtml(champions) {
    let container = document.getElementById("container");

    for (const key in champions) {
        let champ = champions[key];
        let div = document.createElement("div");
        div.classList.add("championCard");

        let strTags="";

        if(champ.tags.length > 1){
            strTags = `
                <div class="tagsConatiner">
                    <p class="text tag"><strong>${champ.tags[0]}</strong></p>
                    <p class="text tag"><strong>${champ.tags[1]}</strong></p>
                    <button class="btn tag" onclick="openModal(${key})">Ver Mas</button>
                </div>                
            `;
        }else {
            strTags = `
                <div class="tagsConatiner">
                    <p class="text tag"><strong>${champ.tags[0]}</strong></p>
                    <button class="btn tag" onclick="openModal(${key})">Ver Mas</button>
                </div>                
            `;
        }

        div.innerHTML = `
            <div class="championCardHeader">
                <img class="champPic" src="https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champ.image}" alt="${champ.name}">
                <div class="championCardHeaderTittle">
                    <h2 class="text">${champ.name}</h2>
                    <h3 class="text">${champ.type}</h3>
                </div>
            </div>
            <h4 class="text ">${champ.title}</h4>
            <p class="text textBody">${champ.blurb}</p>
            ${strTags}
        `;

        //div.(openModal(key));
        container.appendChild(div);
    }
}

fetchData();