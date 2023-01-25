// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// навердение на бургер и на крестик
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const burger = document.querySelector(".burger");
const burgerLines = document.querySelectorAll(".burger__line");
const nav = document.querySelector('.nav');
const fone = document.querySelector('.fone');
const navPoints = document.querySelectorAll(".nav__point");

burger.addEventListener('mouseover', () => {
  burgerLines.forEach(line => {
    line.style.backgroundColor = '#bdae82';
    //console.log('#bdae82');
  })
});

burger.addEventListener('mouseout', () => {
  burgerLines.forEach(line => {
    line.style.backgroundColor = '#fff';
    //console.log('#fff');
  })
});

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  nav.classList.toggle('nav-active');
  fone.classList.toggle('fone-active');
  //console.log('nav-active');
});

fone.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  nav.classList.toggle('nav-active');
  fone.classList.toggle('fone-active');
  //console.log('fone');
});

navPoints.forEach(point => {
  point.addEventListener('click', () => {
    burger.classList.remove('burger_active');
    nav.classList.remove('nav-active');
    fone.classList.remove('fone-active');
    //console.log('navPoints');
  });
})

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// наведение на лого, плей и линки
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

const logo = document.querySelector('.logo-img');

logo.addEventListener('mouseover', () => {
  logo.src = './assets/icons/logo_hover.svg';
});

logo.addEventListener('mouseout', () => {
  logo.src = './assets/icons/logo.svg';
});


const play = document.querySelector('.play');

play.addEventListener('mouseover', () => {
  play.src = './assets/icons/play-bottom_hover.svg';
});

play.addEventListener('mouseout', () => {
  play.src = './assets/icons/play-bottom.svg';
});


const links = document.querySelectorAll('.link-img');
const linksAlt = [
    [
    "./assets/icons/instagram_hover.svg",
    "./assets/icons/facebook_hover.svg",
    "./assets/icons/twit_hover.svg",
    "./assets/icons/pinterest_hover.svg" 
    ],
    [
    "./assets/icons/instagram.svg",
    "./assets/icons/facebook.svg",
    "./assets/icons/twit.svg",
    "./assets/icons/pinterest.svg" 
    ],
  ]
  
function linkOn(num){
  links[num].addEventListener('mouseover', () => {
    links[num].src = linksAlt[0][num];
    //console.log(linksAlt[0][num]);
  });
}
function linkOff(num){
  links[num].addEventListener('mouseout', () => {
    links[num].src = linksAlt[1][num];
    //console.log(linksAlt[1][num]);
  });
}

links.forEach(link => {
  let number;
  if ((link.src).includes("instagram")) {
    number = 0;
  } else if ((link.src).includes("facebook")) {
    number = 1;
  } else if ((link.src).includes("twit")) {
    number = 2;
  } else if ((link.src).includes("pinterest")) {
    number = 3;
  }

  link.addEventListener('mouseover', () => {
      linkOn(number);
  });

  link.addEventListener('mouseout', () => {
    linkOff(number);
  });
})

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// кнопка - "напиши" - переключает на цены
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const heroButtom = document.querySelector(".signature__button");
heroButtom.addEventListener('click', () => {
  console.log('Go to form!');
  window.location.hash="form";
})


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// переключаются сезоны и меняются картинки (слайдер)
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const themesPoints = document.querySelectorAll(".themes-list__point");
const errows = document.querySelectorAll('.errow');
const slider = document.querySelectorAll('.slider');
const sliderBloks = document.querySelectorAll('.slider__blok');
const slider1Imgs = document.querySelectorAll('.slider1__img');
const slider2Imgs = document.querySelectorAll('.slider2__img');
const slider3Imgs = document.querySelectorAll('.slider3__img');

const width = document.documentElement.clientWidth;
//console.log(width);

let numFotoOnSlide = 6;
if (width < 750) {
  numFotoOnSlide = 2;
} else if (width < 1000) {
  numFotoOnSlide = 4;
} else {
  numFotoOnSlide = 6;
}
//console.log(numFotoOnSlide);


const massivFotos = [];
let category = ['family', 'portrait', 'reportage'];
let chousenCategory;


function makeShotList() {

  let length = massivFotos.length;
  for (let index = 0; index < length; index++) {
    massivFotos.pop();
  }

  for (let index = 0; index < 18; index++) { //тут должно быть 18
    massivFotos.push(`./assets/bigfoto/${chousenCategory}/foto${index+1}.jpg`);
  }
  //console.log(massivFotos);
}

function makeBigList() {

  let length = massivFotos.length;
  for (let index = 0; index < length; index++) {
    massivFotos.pop();
  }

  for (let index = 0; index < 12; index++) {
    massivFotos.push(`./assets/bigfoto/${category[0]}/foto${index+1}.jpg`);
    massivFotos.push(`./assets/bigfoto/${category[1]}/foto${index+1}.jpg`);
    massivFotos.push(`./assets/bigfoto/${category[2]}/foto${index+1}.jpg`);
  }
  //console.log(massivFotos);
}
makeBigList();

//выбор категории и формирование списка фото
themesPoints.forEach(element => {
  
  element.addEventListener('click', () => {

    themesPoints.forEach(element => {
      element.classList.remove('chouse-point');
    });
    element.classList.add('chouse-point');

    if (element.textContent === 'Family') {
      chousenCategory = category[0];
      console.log(chousenCategory);

      makeShotList();

    } else if (element.textContent === 'Portrait') {
      chousenCategory = category[1];
      console.log(chousenCategory);

      makeShotList();

    } else if (element.textContent === 'Reportage') {
      chousenCategory = category[2];
      console.log(chousenCategory);

      makeShotList();

    } else {
      console.log('all');

      makeBigList();
    }

    addImage();
  })
});

function addImage() {
  let number = 0;

  for (let index = 0; index < numFotoOnSlide; index++) {
    slider1Imgs[index].src = massivFotos[index];
    slider2Imgs[index].src = massivFotos[index+numFotoOnSlide];
    slider3Imgs[index].src = massivFotos[index+2*numFotoOnSlide];
  }
}
addImage();

function goToShadows() {
  slider1Imgs.forEach(element => {
    element.style.opacity = 0;
  });

  slider2Imgs.forEach(element => {
    element.style.opacity = 0;
  });

  slider3Imgs.forEach(element => {
    element.style.opacity = 0;
  });
}

let count = 0;
//console.log('first blok!');
errows[0].addEventListener('click', () => {
  
  //console.log('назад');

  goToShadows();

  if (count === 0) {
    count = 2;
    //console.log('third blok!'); // 2
    slider3Imgs.forEach(element => {
      element.style.opacity = 1;
    });

  } else if (count === 2) {
    count--;
    //console.log('second blok!'); // 1
    slider2Imgs.forEach(element => {
      element.style.opacity = 1;
    });
    
  } else if (count === 1) {
    count--;
    //console.log('first blok!'); //0
    slider1Imgs.forEach(element => {
      element.style.opacity = 1;
    });
  }  
  //console.log("count = " + count);
});

errows[1].addEventListener('click', () => {
  //console.log('вперед');
  goToShadows();

  if (count === 0) {
    //console.log('second blok!');
    slider2Imgs.forEach(element => {
      element.style.opacity = 1;
    });
    count++;

  } else if (count === 1) {
    //console.log('third blok!');
    slider3Imgs.forEach(element => {
      element.style.opacity = 1;
    });
    count++;
  } else if (count === 2) {
    //console.log('first blok!');
    slider1Imgs.forEach(element => {
      element.style.opacity = 1;
    });
    count = 0;
  }
  //console.log("count = " + count);


})

/*
numFotoOnSlide
massivFotos
slider1Imgs
slider2Imgs
slider3Imgs
*/



// слайдер все: собираем каталог по 2шт из каждой папки
// слайдер тематический - выбираем определенную папку

// XXXXXXXXXXXXXXXXX
// запускается видео
// XXXXXXXXXXXXXXXXX

const video = document.querySelector('video');
function playVideo() {
  video.currentTime = 0;
  video.play();
}
function pauseVideo() {
  video.pause();
}

let isPlay = false;

play.addEventListener('click', () => {
  if (isPlay === true) {
    video.pause();
    isPlay = false;
  } else {
    video.play();
    
    isPlay = true;
  }
  //console.log(isPlay);
  play.classList.toggle("video__bottom-active");
});

// цена - выезжает поп-ап с заявкой на звонок: имя/телефон/желаемая дата съемки

// контакт - запрос на звонок


document.addEventListener('DOMContentLoaded', () => {

  //вешаем вспомогательные классы "ошибка" и "правильно"
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
    input.parentElement.classList.remove('_right');
    input.classList.remove('_right');
  }
  
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
    input.parentElement.classList.add('_right');
    input.classList.add('_right');
  }

  //проверяем емейл на содержание
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  //проверяем телефон на содержание
  function phoneTest(input) {
    let mass = input.value.split('');
    let sum = 0;
    mass.forEach(el => {
      sum +=el;
    });
    return !isNaN(sum);
  }

  //вешаем слушатель на форму
  const form = document.getElementById('form');

  //проверяем валидацию полей по мере их заполнения
  form.addEventListener('input', function (e) {
    let target = e.target;

  //если инпут === емейл
    if (target.classList.contains('_email')) {
      if (emailTest(target)){
        formAddError(target);
      } else {
        formRemoveError(target);
      }

  //если инпут === телефон
    } else if (target.classList.contains('_phone')){
      if (target.value.length !== 10 || !phoneTest(target)) {
        formAddError(target);
      } else {
        formRemoveError(target);
      }

  //если инпут === сообщение
    } else if (target.classList.contains('_message')) {
      if (target.value === ''){
        formAddError(target); 
      } else {
        formRemoveError(target);
      }
    } 
   }, false);

  //функция проверки полей при попытке отправки формы
   function formValidate(form) {
    let right = 0;
    let formNes = document.querySelectorAll('.form__input');

    formNes.forEach(input => {
        if (input.classList.contains('_right')) {
          right++;
        } else {
          //console.log(input.classList[1] + " error!");
          formAddError(input);
        }
      });
      return right;
  }


  form.addEventListener('submit', formSend);

  async function formSend(event) {
    event.preventDefault();

    let rights = formValidate(form);

    let formData = new FormData(form);


    if (rights === 3) {
      console.log("Форма заполнена. Можно отправлять!");

      let response = await fetch('./sendmail.php', {
        method: 'POST',
        body: formData
      });
  
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
      } else {
        alert('Упс! К сожалению, что-то пошло не так.');
      }
    } else {
      alert('К сожалению, где-то ошибка. Проверьте, пожалуйста, все поля');
    }
  } 
})




// ХХХХХХХХХХХХХХХХХХ
// перевод на русский
// ХХХХХХХХХХХХХХХХХХ


let contentVariants = {
  ".nav-link": [
    [
    "Skills", 
    "Portfolio", 
    "Video", 
    "Price", 
    "Contacts"
    ], 
    [
      "Навыки",
      "Портфолио",
      "Видео",
      "Цены",
      "Контакты"
    ]
  ],


  ".leng__var": [
    ["en", "/" , "ru"],
    ["англ", "/", "рус"]
  ],


  ".signature__title": [
    ["Svetlana Mormul"],
    ["Светлана Мормуль"]
  ],

  ".signature__txt": [
    ["Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Svetlana Mormul."],
    ["Сохраните искренние эмоции, романтические чувства и счастливые моменты жизни вместе с профессиональным фотографом Светланой Мормуль."]
    ],
  
  ".signature__button": [
    ["Book a photo shoot"],
    ["Заказать фотосессию"]
  ],
  
  ".section__title": [
    [
      "Skills", 
      "Portfolio", 
      "Video",
      "Price", 
      "Contact me"
      ],
      [
        "Навыки",
        "Портфолио",
        "Видео",
        "Цена",
        "Свяжитесь со мной"
      ]
  ],


  ".skill__title": [
    [
    "Digital photography", 
    "Video shooting", 
    "Retouch", 
    "Audio"
    ],
    [
      "Цифровая фотография",
      "Видеосъемка",
      "Ретушь",
      "Аудио"
    ]
  ],

  ".skill__txt": [
    [
    "High-quality photos in the studio and on the nature",
    "Capture your moments so that they always stay with you",
    "I strive to make photography surpass reality",
    "Professional sounds recording for video, advertising, portfolio"
    ],
    [
      "Качественные фото в студии и на природе",
      "Ловите свои моменты, чтобы они всегда оставались с вами",
      "Я стремлюсь к тому, чтобы фотография превзошла реальность",
      "Профессиональная звукозапись для видео, рекламы, портфолио"
    ]
  ],

  ".themes-list__point": [
    [
    "All",
    "Family",
    "Portrait",
    "Reportage"
    ], 
    [
      "Все",
      "Семья",
      "Портрет",
      "Репортаж"
    ]
  ],


  ".prise-variant__title": [
    [
    "Minimum",
    "Standard",
    "Premium"
    ],
    [
      "Минимум",
      "Стандарт",
      "Премиум"
    ]
  ],


  ".prise1": [
    [
    "One location",
    "120 photos in color",
    "12 photos in retouch",
    "Readiness 2-3 month",
    "Make up, visage"
    ],
    [
      "Одно место",
      "120 фотографий в цвете",
      "12 фото в ретуши",
      "Готовность 2-3 месяца",
      "Макияж, визаж"
    ]
  ],

  ".prise2": [
    [
    "One or two locations",
    "200 photos in color",
    "20 photos in retouch",
    "Readiness 1-2 month", 
    "Make up, visage"
    ],
    [
      "Одна или две локации",
      "200 фотографий в цвете",
      "20 фото в ретуши",
      "Готовность 1-2 месяца",
      "Макияж, визаж"
    ]
  ],

  ".prise3": [
    [
    "Three locations or more",
    "300 photos in color",
    "50 photos in retouch",
    "Readiness 1 month" ,
    "Make up, visage, hairstyle"
    ], 
    [
      "Три локации и более",
      "300 фотографий в цвете",
      "50 фото в ретуши",
      "Готовность 1 месяц" ,
      "Макияж, визаж, прическа"
    ]
  ],

  ".prise-variant__button": [
    "Order shooting", 
    "Заказать"
  ],

  ".form__input": [
    [
    "E-mail",
    "Phone (format: 3803456789)",
    "Message"
    ],     
    [
      "Электронный адрес",
      "Телефон (в формате: 3803456789)",
      "Ваше сообщение"
    ]
  ],

  ".form__button": [
    "Send message", 
    "Отправить сообщение"
  ],

  ".link__title": [
    "The social networks:",
    "Социальные сети:"
  ]
}

const bottomsLeng = document.querySelectorAll(".leng__var");

const navLinks = document.querySelectorAll(".nav-link");
const heroName = document.querySelector(".signature__title");
const heroTxt = document.querySelector(".signature__txt");

const sectionTitles = document.querySelectorAll(".section__title");
const skillTitles = document.querySelectorAll(".skill__title");
const skillTxt = document.querySelectorAll(".skill__txt");

const priseTitles = document.querySelectorAll(".prise-variant__title");
const prise1 = document.querySelectorAll(".prise1");
const prise2 = document.querySelectorAll(".prise2");
const prise3 = document.querySelectorAll(".prise3");
const priseButtons = document.querySelectorAll(".prise-variant__button");
const formInputs = document.querySelectorAll(".form__input");
const formButton = document.querySelector(".form__button");
const linkTitle = document.querySelector(".link__title");

bottomsLeng.forEach(point => {

  point.addEventListener('click', () => {
    //console.log(point.classList[1]);
    let num = 0;
    if (point.classList[1] === "lengRu") {
      //console.log(num);
      num = 1;
      bottomsLeng[0].style.color = '#fff';
      bottomsLeng[2].style.color = '#beaf83';
      video.src = './assets/video/foto-stroll.mp4';
    } else if (point.classList[1] === "lengEn") {
      num = 0;
      bottomsLeng[2].style.color = '#fff';
      bottomsLeng[0].style.color = '#beaf83';
      video.src = './assets/video/portfolio.mp4';
    }
    
    heroName.textContent = contentVariants[".signature__title"][num];
    heroTxt.textContent = contentVariants[".signature__txt"][num]; //1
    heroButtom.textContent = contentVariants[".signature__button"][num]; //1

    for (let index = 0; index < navLinks.length; index++) {
      navLinks[index].textContent = contentVariants[".nav-link"][num][index]; 
    }

    for (let index = 0; index < sectionTitles.length; index++) {
      sectionTitles[index].textContent = contentVariants[".section__title"][num][index]; 
    }

    for (let index = 0; index < skillTitles.length; index++) {
      skillTitles[index].textContent = contentVariants[".skill__title"][num][index]; 
    }
    
    for (let index = 0; index < skillTxt.length; index++) {
      skillTxt[index].textContent = contentVariants[".skill__txt"][num][index]; 
    }

    for (let index = 0; index < themesPoints.length; index++) {
      themesPoints[index].textContent = contentVariants[".themes-list__point"][num][index]; 
    }

    for (let index = 0; index < priseTitles.length; index++) {
      priseTitles[index].textContent = contentVariants[".prise-variant__title"][num][index]; 
    }

    for (let index = 0; index < prise1.length; index++) {
      prise1[index].textContent = contentVariants[".prise1"][num][index]; 
    }

    for (let index = 0; index < prise2.length; index++) {
      prise2[index].textContent = contentVariants[".prise2"][num][index]; 
    }

    for (let index = 0; index < prise3.length; index++) {
      prise3[index].textContent = contentVariants[".prise3"][num][index]; 
    }
    
    priseButtons.forEach(element => {
      element.textContent = contentVariants[".prise-variant__button"][num];
    });  //8

    for (let index = 0; index < formInputs.length; index++) {
      formInputs[index].placeholder = contentVariants[".form__input"][num][index]; 
    }

    formButton.textContent = contentVariants[".form__button"][num];

    linkTitle.textContent = contentVariants[".link__title"][num];
  });

});

