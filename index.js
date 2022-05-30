import ListItems from "./components/list-items.js";

if (document.readyState==='loading'){
    document.addEventListener('DOMContentLoader',init)
} else {
    init();
}

function init(){
    new ListItems(document.getElementById('list-items'));  
}



