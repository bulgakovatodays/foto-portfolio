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

// перевод на русский

// кнопка - "найми" - переключает на цены

// переключаются сезоны и меняются картинки


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
  console.log(isPlay);
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
          console.log(input.classList[1] + " error!");
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
  
      let result = await response.json();
  
      alert(result.message);

      //Код из ВИДЕО фрилансера:
    //   let response = await fetch('sendmail.php', {
    //     method: 'POST',
    //     body: formData
    //   });
    //   if (response.ok) {
    //     let result = await response.json();
    //     alert(result.message);
    //     form.reset();
    //   } else {
    //     alert('Упс! К сожалению, что-то пошло не так.');
    //   }
    // } else {
    //   alert('К сожалению, где-то ошибка. Проверьте, пожалуйста, все поля');
    }
  }

  
})

