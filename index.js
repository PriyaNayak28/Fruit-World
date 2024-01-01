// getElementById method

// const mainheader = document.getElementById('main-heading');
// mainheader.textContent = 'Fruit World';
// mainheader.style.color = 'orange';

// const header = document.getElementById('header');
// header.style.backgroundColor = 'green';
// header.style.borderBottom = '4px solid orange';

// const basketheading = document.getElementById('basket-heading');
// basketheading.style.color = 'green';

// const thanks = document.getElementById('thanks');
// thanks.textContent = 'Please visit us again';

// getElementsByClassName Method

// const li = document.getElementsByClassName('fruit');
// li[2].style.backgroundColor = 'orange';

// for (let i = 0; i < li.length; i++) {
//     li[i].style.fontWeight = 'bold';
// }

// getElementsByTagName Method

// const liItems = document.getElementsByTagName('li');
// liItems[4].style.color = 'blue';
// for (let i = 0; i < liItems.length; i++) {
//     liItems[i].style.fontStyle = 'italic';
// }


// querySelector is only used to a single Element grab

// ('fruit : last-child');
//('fruit : nth-child(2)')

const header = document.querySelector('#main-heading');
header.style.textAlign = 'right';

const Bheader = document.querySelector('#basket-heading');
Bheader.style.color = 'brown';
Bheader.style.marginLeft = '30px';



const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';
fruits.style.width = '50%';


// querySelectorAll  is  used to grab  all  Elements with class/tag 

const fruit = document.querySelectorAll('.fruit');

for (let i = 0; i < fruit.length; i++) {
    fruit[i].style.backgroundColor = 'white';
    fruit[i].style.margin = '10px';
    fruit[i].style.padding = '10px';
    fruit[i].style.borderRadius = '5px';
}

const oddfruit = document.querySelectorAll(' .fruit:nth-child(odd) ');
for (let i = 0; i < oddfruit.length; i++) {
    oddfruit[i].style.backgroundColor = 'brown';
}







