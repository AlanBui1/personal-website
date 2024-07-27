const filter = (filt) => {
    var cards = document.getElementsByClassName('card');

    for (let i=0; i<cards.length; i++){
        var card = cards[i];
        
        if (!(find(filt, card.classList))){
            card.style.display = 'none';
        }
        else{
            card.style.display = '';
        }
    }
}

const find = (want, list) => {
    for (let i=0; i<list.length; i++){
        if (want === list[i]) return true;
    }
    return false;
}