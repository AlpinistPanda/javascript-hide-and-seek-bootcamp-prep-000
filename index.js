
function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div div div')
}

function increaseRankBy(n) {
  const lis = document
  .querySelectorAll('ul.ranked-list');
  
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (lis[i].innerHTML + n).toString();
}
}