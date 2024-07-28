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