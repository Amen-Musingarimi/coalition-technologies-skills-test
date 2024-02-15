const btnOpenModal = document.querySelector('.openModal');
const btnCloseModalBtn = document.querySelector('.closeModalBtn');
const body = document.querySelector('.body');
const navContainer = document.querySelector('.navConatiner');
const navLinks = document.querySelectorAll('.menuLink');

btnOpenModal.addEventListener('click', () => {
  body.classList.add('noScroll');
  navContainer.classList.add('responsive_nav');
});

btnCloseModalBtn.addEventListener('click', () => {
  body.classList.remove('noScroll');
  navContainer.classList.remove('responsive_nav');
});

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    body.classList.remove('noScroll');
    navContainer.classList.remove('responsive_nav');
  });
}

// Adding dynamic styles to an active link
const links = document.querySelectorAll('.climb-link');

links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    links.forEach(function(link) {
      link.classList.remove('active');
    });

    this.classList.add('active');
  });
});

const scheduleDataArr = [
  {
    id: 1,
    date: '25 Nov 2016',
    description: 'Vestibulum viverra',
  },
  {
    id: 2,
    date: '28 Nov 2016',
    description: 'Vestibulum viverra',
  },
  {
    id: 3,
    date: '16 Dec 2016',
    description: 'Vestibulum viverra',
  },
  {
    id: 4,
    date: '7 Jan 2017',
    description: 'Vestibulum viverra',
  },
];

// Dynamically displaying schedule data
const scheduleItem = document.querySelector('.scheduleData');
for (let i = 0; i < scheduleDataArr.length; i += 1) {
  const fetch = document.querySelector('.scheduleData').innerHTML;
  scheduleItem.innerHTML = `
<div class="table-element">
            <p>${scheduleDataArr[i].date}</p>
            <p>${scheduleDataArr[i].description}</p>
          </div>
${fetch}`;
}
