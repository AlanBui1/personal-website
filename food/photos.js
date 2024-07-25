const searchParams = new URLSearchParams(window.location.search);

if (searchParams.has('id')){
    var id = searchParams.get('id');
    var numPhotos, restaurantName;

    fetch('https://www.alanbui.ca/data.json')
        .then((response) => response.json())
        .then((data) => {
            numPhotos = data[id]['numPhotos'];
            restaurantName = data[id]['name'];

            const titleElement = document.getElementById('title');
            titleElement.innerHTML = restaurantName;
            titleElement.href = "./review.html?id=" + id;

            for (let i=0; i<numPhotos; i++){
                let newEle = document.createElement("img");
                newEle.src = "../assets/images/food/"+id+"/"+(i)+".svg"
                newEle.alt = id+i;
                newEle.id = i;
                
                photos.appendChild(newEle);    
            }

        });

    
} 