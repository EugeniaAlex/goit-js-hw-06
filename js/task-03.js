const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEll = document.querySelector('.gallery');
galleryEll.style.display = "flex";
galleryEll.style.listStyle = "none";
galleryEll.style.justifyContent = "space-around";




// const galleryListItems = images.map(image => `<li><img src = "${image.url}" alt = "${image.alt}" width = "400" height = "200"></li>`).join("");


// galleryEll.insertAdjacentHTML("beforeend", galleryListItems);




const makeGalleryItems = imagesData => {
  return imagesData.map(image => `<li><img src = "${image.url}" alt = "${image.alt}" width = "400" height = "200"></li>`).join("");

};
const makeGallery = (imagesData, callback) => {
  galleryEll.insertAdjacentHTML("beforeend", callback(imagesData));
};

makeGallery(images, makeGalleryItems);

