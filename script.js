// Array that holds the image information. It includes the file path to the optimized image, the HD image, the caption, and the alt text description
const images = [
    {
        optimizedImage: "images/optimized/Finn-0-OP.jpg",
        hdImage: "images/hd/Finn-0-HD.jpg",
        caption: "Finn feels the wind in his hair (very dramatically).",
        altText: "A small black fluffy dog with his ears blowing in the wind."
    },
    {
        optimizedImage: "images/optimized/Finn-1-OP.jpg",
        hdImage: "images/hd/Finn-1-HD.jpg",
        caption: "Finn yawns, tired after a day of sleeping",
        altText: "Closeup of a small black fluffy dog mid-yawn"
    },
    {
        optimizedImage: "images/optimized/Finn-2-OP.jpg",
        hdImage: "images/hd/Finn-2-HD.jpg",
        caption: "Finn smiling to someone off camera as we wait for our ice cream at The Merry Dairy.",
        altText: "A small black fluffy dog panting, looking off camera"
    },
    {
        optimizedImage: "images/optimized/Finn-3-OP.jpg",
        hdImage: "images/hd/Finn-3-HD.jpg",
        caption: "Finn at the park, smiling at the camera mid-walk.",
        altText: "A high shot of small black fluffy dog on a leash, panting looking at the camera"
    },
    {
        optimizedImage: "images/optimized/Finn-4-OP.jpg",
        hdImage: "images/hd/Finn-4-HD.jpg",
        caption: "Finn at the park, still smiling, but from a low angle.",
        altText: "A low shot of small black fluffy dog on a leash, panting looking at the camera"
    },
    {
        optimizedImage: "images/optimized/Finn-5-OP.jpg",
        hdImage: "images/hd/Finn-5-HD.jpg",
        caption: "Finn sits in the grass at the park, looking off screen",
        altText: "A small black fluffy dog lying down in the vibrant green grass"
    },
    {
        optimizedImage: "images/optimized/Finn-6-OP.jpg",
        hdImage: "images/hd/Finn-6-HD.jpg",
        caption: "Finn at the park, posing in front of the telephone pole",
        altText: "A small black fluffy dog looking seriously at the camera from a low angle"
    },
    {
        optimizedImage: "images/optimized/Finn-7-OP.jpg",
        hdImage: "images/hd/Finn-7-HD.jpg",
        caption: "Finn at the park, sitting on the bench",
        altText: "A high angle shot of a small black fluffy dog sitting on a park bench"
    },
    {
        optimizedImage: "images/optimized/Finn-8-OP.jpg",
        hdImage: "images/hd/Finn-8-HD.jpg",
        caption: "Finn at the park, taking a side profile shot",
        altText: "A profile shot of a small black fluffy dog panting"
    },
    {
        optimizedImage: "images/optimized/Finn-9-OP.jpg",
        hdImage: "images/hd/Finn-9-HD.jpg",
        caption: "Finn at the park, a close-up on his beautiful smile",
        altText: "A close-up shot of a small black fluffy dog sitting in the grass"
    },
    {
        optimizedImage: "images/optimized/Finn-10-OP.jpg",
        hdImage: "images/hd/Finn-10-HD.jpg",
        caption: "Finn at the park, a close-up of him tuckered out, yawning",
        altText: "A close-up shot of a small black fluffy dog sitting in the grass, yawning"
    },
    {
        optimizedImage: "images/optimized/Finn-11-OP.jpg",
        hdImage: "images/hd/Finn-11-HD.jpg",
        caption: "Finn at the park, wondering when this impromptu photoshoot will end?",
        altText: "A 3/4 view of a small black fluffy dog sitting in the grass"
    }
];

// Defines the container the images will go into
const $gallery = document.getElementById('gallery');

// Defines the container for the modal overlay
const $modal = document.getElementById('modal')
console.log($modal);
// An array to keep the image templates in 
const imageTemplates = [];

// Adds templates of each of the images to the template array
images.forEach(image => imageTemplates.push(`<img class="gallery-item" src="${image.optimizedImage}" alt="${image.altText}" data-hd="${image.hdImage}" data-caption="${image.caption}">`));

// Adds the image templates to the innerHTML of the gallery
$gallery.innerHTML = imageTemplates.join('');

// Uses event delegation on the entire gallery to listen for a click event through
$gallery.addEventListener('click', function(e){
    // If the click event targets an element with the class gallery-item (so, if they click an image)
    if(e.target.classList.contains('gallery-item')){
        // Adds the HD image and its associated caption using the data attributes from the image that was clickedon
        $modal.innerHTML = `<img src="${e.target.dataset.hd}"><h3>${e.target.dataset.caption}</h3>`;
        // Adds the "show" class to the modal, which makes it visible.
        $modal.classList.add('show');
    }
})

// Adds a click event to the modal
$modal.addEventListener('click', function(){
    // Removes the class "show" from the modal to remove it from the screen 
    $modal.classList.remove('show');
})