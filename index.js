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

// const header = document.querySelector('#main-heading');
// header.style.textAlign = 'right';

// const Bheader = document.querySelector('#basket-heading');
// Bheader.style.color = 'brown';
// Bheader.style.marginLeft = '30px';



// const fruits = document.querySelector('.fruits');
// fruits.style.backgroundColor = 'gray';
// fruits.style.padding = '30px';
// fruits.style.margin = '30px';
// fruits.style.borderRadius = '5px';
// fruits.style.listStyleType = 'none';
// fruits.style.width = '50%';


// querySelectorAll  is  used to grab  all  Elements with class/tag

// const fruit = document.querySelectorAll('.fruit');

// for (let i = 0; i < fruit.length; i++) {
//     fruit[i].style.backgroundColor = 'white';
//     fruit[i].style.margin = '10px';
//     fruit[i].style.padding = '10px';
//     fruit[i].style.borderRadius = '5px';
// }

// const oddfruits = document.querySelectorAll(' .fruit:nth-child(odd) ');
// for (let i = 0; i < oddfruits.length; i++) {
//     oddfruits[i].style.backgroundColor = 'brown';
// }


// createElement  domrelation

// const head = document.createElement('h3');
// const headPara = document.createTextNode('Buy high quality organic fruits online');

// head.appendChild(headPara);

// head.style.fontStyle = 'italic';

// const divs = document.getElementsByTagName('div');
// const FirstDiv = divs[0];

// FirstDiv.appendChild(head);

// const para = document.createElement('p');
// const ParaText = document.createTextNode('Total fruits: 4');
// para.appendChild(ParaText);

// const SecDiv = divs[1];
// // const fruits = document.getElementsByClassName('')
// const basketHeading = document.getElementById('basket-heading');
// SecDiv.insertBefore(para, basketHeading);

// para.id = 'fruits-total';


// ADD AND DELETE FRUITS.................................................. 

// document.addEventListener('DOMContentLoaded', function () {


//     const form = document.querySelector('form');
//     const fruitsContainer = document.querySelector('.fruits');

//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         const fruitToAdd = document.getElementById('fruit-to-add');
//         // making new list
//         const newLi = document.createElement('li');
//         const newLiText = document.createTextNode(fruitToAdd.value);
//         newLi.appendChild(newLiText);
//         newLi.className = 'fruit';

//         // making dlt btn
//         const deleteBtn = document.createElement('button');
//         const deleteBtnText = document.createTextNode('x');
//         deleteBtn.appendChild(deleteBtnText);
//         deleteBtn.className = 'delete-btn';
//         newLi.appendChild(deleteBtn);
//         fruitsContainer.appendChild(newLi);
//     });
// });



// document.addEventListener('DOMContentLoaded', function () {

//     const form = document.querySelector('form');
//     const fruitsContainer = document.querySelector('.fruits');

//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         const fruitToAdd = document.getElementById('fruit-to-add');
//         const newLi = document.createElement('li');

//         const para = document.createElement('p');
//         const input = document.createElement('input');
//         input.placeholder = 'Decription..';
//         input.id = 'decriptionFruit';
//         para.appendChild(input);
//         const decriptionFruit = document.getElementById('decriptionFruit');
//         const btn = document.querySelector('button');
//         form.insertBefore(para, btn);
//         input.style.fontStyle = 'italic';

//         newLi.innerHTML = fruitToAdd.value + decriptionFruit.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">edit</button>';
//         fruitsContainer.appendChild(newLi);
//         newLi.appendChild(para);


//     });

document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('form');
    const fruitsContainer = document.querySelector('.fruits');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const fruitToAdd = document.getElementById('fruit-to-add');
        const newLi = document.createElement('li');

        const para = document.createElement('p');
        const input = document.createElement('input');
        input.placeholder = 'Decription..';
        input.id = 'decriptionFruit';
        para.appendChild(input);
        const decriptionFruit = document.getElementById('decriptionFruit');
        const btn = document.querySelector('button');
        form.insertBefore(para, btn);
        input.style.fontStyle = 'italic';
        para.innerHTML = decriptionFruit.value;
        para.class = 'inputFruit';

        newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">edit</button>';
        newLi.appendChild(para);
        fruitsContainer.appendChild(newLi);
    });

    fruitsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            deletefruit = event.target.parentElement;
            fruitsContainer.removeChild(deletefruit);
        }
    })

    const filter = this.getElementById('filter');
    filter.addEventListener('keyup', function (event) {
        const textEntered = event.target.value.toLowerCase();
        const fruitItem = document.getElementsByClassName('fruit');

        for (let i = 0; i < fruitItem.length; i++) {
            const currentFruitText = fruitItem[i].firstChild.textContent.toLowerCase();
            if (currentFruitText.indexOf(textEntered) === -1) {
                fruitItem[i].style.display = 'none';
            }
            else {
                fruitItem[i].style.display = 'flex';
            }
        }



        const fruit = document.getElementsByClassName('inputFruit');
        for (let i = 0; i < fruit.length; i++) {
            const fruitText = fruit[i].firstChild.textContent.toLowerCase();
            if (fruitText.indexOf(textEntered) === -1) {
                fruit[i].style.display = 'none';
            }
            else {
                fruit[i].style.display = 'flex';
            }
        }







    });







});





