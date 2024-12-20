const searchParams = new URLSearchParams(window.location.search);

if (searchParams.has('id')){
    var id = searchParams.get('id');
    var restaurantName, review, michelinStars, michelinLink, website;
    

    fetch('https://www.alanbui.ca/data.json')
        .then((response) => response.json())
        .then((data) => {
            restaurantName = data[id]['name'];
            website = data[id]['website'];
            michelinStars = data[id]['michelinStars'];
            michelinLink = data[id]['michelinLink'];
            review = data[id]['review'];

            //TITLE
            setElementById('title', restaurantName);


            //LINK BAR
            const linkBar = document.getElementById('link-bar');

            if (michelinLink !== "."){
                const michelinGuide = document.createElement('a');
                michelinGuide.href = michelinLink;
                michelinGuide.className = 'michelinstar';
                michelinGuide.innerHTML = `<img src="../assets/images/food/michelinguide.svg">`
                linkBar.appendChild(michelinGuide);

            }

            for (let i=0; i<michelinStars; i++){
                const michelinStar = document.createElement('a');
                michelinStar.href = michelinLink;
                michelinStar.className = "michelinstar";
                michelinStar.innerHTML = `<img src="../assets/images/food/michelinstar.svg">`
    
                linkBar.appendChild(michelinStar);
            }

            const websiteLink = document.createElement('a');
            websiteLink.href = website;
            websiteLink.innerHTML = "Website";
            websiteLink.className = 'btn';
            linkBar.appendChild(websiteLink);

            const mapsLink = document.createElement('a');
            mapsLink.href = data[id]['location'];
            mapsLink.innerHTML = "Maps";
            mapsLink.className = 'btn';
            linkBar.appendChild(mapsLink);

            //PHOTOS LINK
            const photoLink = document.getElementsByClassName('link-photo')[0];
            photoLink.style.backgroundImage = `url("../assets/images/food/`+id+`.jpg")`;
            // if (data[id]["photoLink"] === )
            photoLink.href = ((data[id]["photosLink"] === ".") ? ("./photos.html?id="+id) : data[id]["photosLink"]);
            //REVIEW
            setElementById('review', review);
            setElementById('date', "&mdash;Alan | " + data[id]["visited"])

        });

    
} 

const setElementById = (id, content) => {
    document.getElementById(id).innerHTML = content;
}