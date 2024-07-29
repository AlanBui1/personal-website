const filter = (filt) => {
    var buttonElement = document.getElementById(filt);
    if (buttonElement.className === 'btn clicked'){
        buttonElement.className = 'btn';
    }
    else buttonElement.className = 'btn clicked';

    const filters = [];
    var btns = document.getElementsByClassName('btn');
    for (let i=0; i<btns.length; i++){
        if (btns[i].className === 'btn clicked'){
            filters.push(btns[i].id);
        }
    }

    var filterString = (filters.length > 0) ? "Filter: " : "Filter: None";
    for (let i=0; i<filters.length; i++){
        filterString += filters[i];
        if (i != filters.length-1){
            filterString += " "
        }
    }

    var filterElement = document.getElementById('filter-button');
    filterElement.innerText = filterString;

    var cards = document.getElementsByClassName('card');

    for (let i=0; i<cards.length; i++){
        var card = cards[i];

        if (match(filters, card.classList)){
            card.style.display = '';
        }
        else{
            card.style.display = 'none';
        }
    }
}

const find = (want, list) => {
    for (let i=0; i<list.length; i++){
        if (want === list[i]) return true;
    }
    return false;
}

const match = (wantList, list) => {
    for (let i=0; i<wantList.length; i++){
        if (!(find(wantList[i], list))) return false;
    }
    return true;
}

const toggleFilter = () => {
    var buttonElement = document.getElementById('filter-button');
    console.log(buttonElement.classList)
    if (find('clicked', buttonElement.classList)){
        document.getElementById('filter-main').style.display = "none";
        buttonElement.className = 'btn filter-text';
    }
    else{
        document.getElementById('filter-main').style.display = "";
        buttonElement.className = 'clicked btn filter-text';
    }
}