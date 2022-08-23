// 1. Listen to user call
// 2. get the image URL
// 3. Get the current the viewer mode image URL (bigger resolution)
// 4. Display the viewer image above the image list

const images = document.querySelectorAll('img');
console.log(images);
const bigPhotoContainer = document.querySelector('#bigPhoto');

function renderPhoto(photo) {
    
    bigPhotoContainer?.firstElementChild?.remove();
    
    bigPhotoContainer?.append(photo);
}

images[0].addEventListener ('click', function () {
    const currentUrl = this.src;
    const bigPhotoUrl = currentUrl
        .replace('300', '900')
        .replace('200', '600');
    console.log(bigPhotoUrl)
    //Remove first element elemtn (child) from container
    
    const photo = document.createElement('img');
    photo.src = bigPhotoUrl;
    renderPhoto(photo);
    
 } )//img 1
images[1] //img 2
images[2] //img 3