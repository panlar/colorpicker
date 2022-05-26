const d = document,
  ls = localStorage;

let format = ls.getItem('format') || 'rgb';
let favorites = JSON.parse(ls.getItem('favorites')) || [];

const $btns = document.querySelectorAll('.format-btn');
const $menuBtn = document.querySelector('.menu-btn');
const $menu = document.querySelector('menu');

const toggleClassBtns = (btns) =>
  btns.forEach(($btn) => $btn.classList.toggle('active', $btn.id === format));

const copyToClipboard = (value, successCallback, errorCallback) => {
  const { clipboard } = window.navigator;

  if (clipboard === undefined)
    return alert('Clipboard not supported in this navigator');

  const successMessage = 'Text copied to clipboard';
  const errorMessage = 'An error ocurried';

  clipboard
    .writeText(value)
    .then(() =>
      successCallback ? successCallback(value) : alert(successMessage)
    )
    .catch(() => (errorCallback ? errorCallback(value) : alert(errorMessage)));
};

const showAlert = (color) => {
  const $alert = document.querySelector('.alert');
  const $codeColor = $alert.querySelector('.alert-color');
  $alert.style.backgroundColor = color;
  $codeColor.textContent = color;
  $alert.classList.add('active');
  setTimeout(() => $alert.classList.remove('active'), 1000);
};

const handleClickColor = (color) => {
  const code =
    format === 'rgb' ? color.style.backgroundColor : color.dataset.color;
  copyToClipboard(code, showAlert);
};

const Color = ([name, code]) => {
  const $color = document.createElement('div');
  $color.classList.add('color');
  $color.dataset.color = code;
  $color.style.backgroundColor = code;
  $color.innerHTML = `
    <span class="color-copy">COPIAR</span>
    <span class="color-title">${name}</span>
  `;

  $color.addEventListener('click', () => handleClickColor($color));

  return $color;
};

const fillFavoritesLinks = () => {
  $menu.innerHTML = '';
  let one = true;
  if (favorites.length === 0) {
    $menu.innerHTML =
      '<p>No tienes paletas favoritas.<br>Haz click en la estrella al lado de ellas para agregarlas aqui</p>';
  } else {
    if (one) {
      $menu.innerHTML = '<h3>Paletas Favoritas</h3>';
      one = false;
    }
    favorites.forEach(([name, link]) => {
      $menu.innerHTML += `<a href="#${link}">${name}</a>`;
    });
  }
};

const handleFavoriteClick = ($favBtn) => {
  let exist = favorites.some((fav) => fav.includes($favBtn.dataset.link));

  if (exist) {
    favorites = favorites.filter((fav) => !fav.includes($favBtn.dataset.link));
    $favBtn.classList.remove('active');
  } else {
    favorites = [...favorites, [$favBtn.dataset.name, $favBtn.dataset.link]];
    $favBtn.classList.add('active');
  }
  fillFavoritesLinks();
  ls.setItem('favorites', JSON.stringify(favorites));
};

const renderColors = ({ name, codigos }) => {
  const $title = document.createElement('h2');
  const $container = document.createElement('section');
  const $favBtn = document.createElement('i');

  const link = name.split(' ').join('').toLowerCase();

  $title.classList.add('title');
  $title.textContent = name;
  $title.id = link;

  $favBtn.className = 'bx bxs-star';
  if (favorites.some((fav) => fav.includes(link))) {
    $favBtn.classList.add('active');
  }
  $favBtn.dataset.name = name;
  $favBtn.dataset.link = link;
  $favBtn.addEventListener('click', () => handleFavoriteClick($favBtn));

  $container.classList.add('color-container');

  codigos.forEach((color) => {
    $container.appendChild(Color(color));
  });
  $title.appendChild($favBtn);
  $main.append($title, $container);
};

$btns.forEach(($btn) => {
  toggleClassBtns($btns);
  $btn.addEventListener('click', () => {
    format = $btn.id;
    ls.setItem('format', $btn.id);
    toggleClassBtns($btns);
  });
});

$menuBtn.addEventListener('click', () => $menu.classList.toggle('active'));
$menu.addEventListener('click', (e) => {
  if (e.target.matches('a')) $menu.classList.remove('active');
});

fetch('https://cdn.jsdelivr.net/gh/panlar/db/colors.json')
  .then((res) => res.json())
  .then((palletes) => {
    $main = document.querySelector('main');
    fillFavoritesLinks();
    palletes.forEach(renderColors);
  });
