let isCat = true;

const changePic=()=>{
     const img = document.getElementById('img');
    if (isCat) {
        img.src = './Assets/Images/dog.jpg';
        img.alt = 'Dog Image';
    } else {
        img.src = './Assets/Images/cat.jpg';
        img.alt = 'Cat Image';
    }
    isCat = !isCat;
}