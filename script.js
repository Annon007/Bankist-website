'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const lodeMore = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tab = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const contents = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
lodeMore.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});
//// NAV Page
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
///////////EVENT DELIGATION
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
////active tab

tab.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  /// remove avtive tab
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  ///remove active content
  contents.forEach(c => c.classList.remove('operations__content--active'));
  ///add active tab
  if (clicked) {
    clicked.classList.add('operations__tab--active');
    console.log(clicked.dataset.tab);
    //add active content
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  }
});

//// LINK ANNIMATION
const nav = document.querySelector('.nav');
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});
////Sticky navigation
const initialCoord = section1.getBoundingClientRect();
window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);
  if (window.scrollY > initialCoord.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
///////////////// Event Propagation

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   //this is same as {document.querySelector('.nav__link') also e.currentTarget}
//   // .nav__link CHILD ELEMENT
//   // when this Event handeler runs the parents are bubbles up to the parent[S] .nav__links .nav
//   // e in here each of EVENTS receives exact same events
//   // e.target -> where the event happend
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   // STOP propagation
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // .nav__links PARENT of .nav__link
//   //this is same as {document.querySelector('.nav__links')} also e.currentTarget}
//   // e.target -> where the event happend
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   // .nav PARENT of .nav__links
//   //this is same as {document.querySelector('.nav')} also e.currentTarget}
//   // e.target -> where the event happend
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

////////////// DOM TRAVERSING
/*
const h1 = document.querySelector('h1');
/// DOWNWARDS : child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'red';
h1.lastElementChild.style.color = 'red';
/// Going UPWARD: parent

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going SIDEWAYS: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.parentElement.children);
*/
