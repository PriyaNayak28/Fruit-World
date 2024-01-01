// getElementById method

const mainheader = document.getElementById('main-heading');
mainheader.textContent = 'Fruit World';
mainheader.style.color = 'orange';

const header = document.getElementById('header');
header.style.backgroundColor = 'green';
header.style.borderBottom = '4px solid orange';

const basketheading = document.getElementById('basket-heading');
basketheading.style.color = 'green';

const thanks = document.getElementById('thanks');
thanks.textContent = 'Please visit us again';

// getElementsByClassName Method

const li = document.getElementsByClassName('fruit');
li[2].style.backgroundColor = 'orange';

for (let i = 0; i < li.length; i++) {
    li[i].style.fontWeight = 'bold';
}

// getElementsByTagName Method

const liItems = document.getElementsByTagName('li');
liItems[4].style.color = 'blue';
for (let i = 0; i < liItems.length; i++) {
    liItems[i].style.fontStyle = 'italic';
}





