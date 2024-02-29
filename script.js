let input_area = document.getElementById('input_area');
let output_area = document.getElementById('output_area');
let storage_area = document.getElementById('storage_area');
let storage_list_container = document.getElementById('storage_list_container');
let output_storage = JSON.parse(localStorage.getItem('output_storage')) || [];
let output = "";

const ENCRYPT_BTN = document.getElementById('encrypt_btn');
const DECRYPT_BTN = document.getElementById('decrypt_btn');
const COPY_BTN = document.getElementById('copy_btn');
const STORAGE_BTN = document.getElementById('storage_btn');
const CLEAR_BTN = document.getElementById('clear_btn');
const CLOSE_BTN = document.getElementById('close_storage_btn');

ENCRYPT_BTN.addEventListener('click', encryptText);
DECRYPT_BTN.addEventListener('click', decryptText);
COPY_BTN.addEventListener('click', copyToClipboard);
STORAGE_BTN.addEventListener('click', openStorage);
CLEAR_BTN.addEventListener('click', clearStorage);
CLOSE_BTN.addEventListener('click', () => storage_area.style.display = "none");

let p = document.createElement('p');
let is_white_space = /^\s*$/;

function encryptText(){
    let user_txt = input_area.value;
    let new_txt = user_txt.replace(/a|e|i|o|u/g, (match) => {
        switch(match){
            case "a":
                return "ai";
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "o":
                return "ober";
            case "u":
                return "ufat";
            default:
                return match;
        }
    })

    output = new_txt;
    if (is_white_space.test(output)){
        alert("O campo está vazio, não há uma mensagem para ser criptografada.");
        input_area.value = "";
        input_area.focus();
    } else {
        getOutput();
        saveStorage();
        loadStorage();
    }
} 

function decryptText(){
    let user_txt = input_area.value;
    let new_txt = user_txt.replace(/ai|enter|imes|ober|ufat/g, (match) => {
        switch(match){
            case "ai":
                return "a";
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ober":
                return "o";
            case "ufat":
                return "u";
            default:
                return match;
        }
    })
   
    output = new_txt;
    if (is_white_space.test(output)){
        alert("O campo está vazio, não há uma mensagem para ser descriptografada.");
        input_area.value = "";
        input_area.focus();
    } else {
        getOutput();
    }
}

function getOutput(){
    let initial = document.getElementById('initial_info');
    initial.style.display = "none";
    output_area.style.display = "block";
    output_area.textContent = output;
}

function copyToClipboard(){
    let copy_target = output_area.textContent;
    navigator.clipboard.writeText(copy_target);
    alert('O texto foi copiado com sucesso para área de transferência.');
    input_area.focus();
}

function openStorage(){
    if (storage_area.style.display === "none"){
        storage_area.style.display = "flex";
    } else {
        storage_area.style.display = "none";
    }
}

function saveStorage(){
    output_storage.push({ text: output });
    localStorage.setItem('output_storage', JSON.stringify(output_storage));
}

function loadStorage(){
    storage_list_container.innerHTML = "";
    let storage_list = JSON.parse(localStorage.getItem('output_storage')) || [];
    for(let item of storage_list){
        let li = document.createElement('li');
        li.innerHTML = item.text;
        storage_list_container.appendChild(li);
    }
}

function clearStorage(){
    localStorage.clear();
    location.reload(true);
}

loadStorage();

