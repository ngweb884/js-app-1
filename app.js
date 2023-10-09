// local reviews data
const reviews = [
    {
      id: 1,
      desc: 'air bag inside',
      img: 'shoe1.jpg',
      text: "Explore Shoe",
    },
    {
      id: 2,
      desc: 'light weight',
      img: 'shoe2.jpg',
      text: 'Adventure shoe.',
    },
    {
      id: 3,
      desc: 'comfortable',
      img: 'shoe3.jpg',
      text: 'Sommer shoe.',
    },
    {
      id: 4,
      desc: 'super light',
      img: 'shoe4.jpg',
      text: 'After work shoe',
    },
    {
        id: 5,
        desc: 'marathon',
        img: 'shoe5.jpg',
        text: 'Running shoe',
      },
  ];
  // select items
  const img = document.getElementById('shoe-img');
  const text = document.getElementById('text');
  const desc = document.getElementById('desc');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    text.textContent = item.text;
    desc.textContent = item.desc;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    text.textContent = item.text;
    desc.textContent = item.desc;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });