$('#grid-show-btn').click(() => {
  let btnText = document.getElementById('grid-show-btn').innerHTML;
  
  if (btnText == 'Show More') {
    document.getElementById('collapsible-grid').classList.add('grid-unfold');
    document.getElementById('grid-show-btn').innerHTML = 'Show Less';
  } else {
    document.getElementById('collapsible-grid').classList.remove('grid-unfold');
    document.getElementById('grid-show-btn').innerHTML = 'Show More';

  }

})