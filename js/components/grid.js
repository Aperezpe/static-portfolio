//////////// COLLAPSIBLE PROJECTS  //////////////////////
// COLLAPSIBLE PROJECT: is any project inside the noteworthy section with i > 5
let collapsibleProjets = [];
$(document).ready(() => {
  
  /// Clones all collapsible project into array (memory)
  let htmlCollection = document.getElementsByClassName('noteworthy-project');

  for (let i = 0; i < htmlCollection.length; i++) {
    if (i > 5)  {
      collapsibleProjets.push(htmlCollection[i].cloneNode(true));
    }
  }

  removeCollapsibles();
})

$('#grid-show-btn').click(() => {
  let btnText = document.getElementById('grid-show-btn').innerHTML;
  let noteworthyProjects = document.querySelector('#noteworthy-projects');
  
  if (btnText == 'Show More') {
    let clonedNodes = [];
    for (let i = 0; i < collapsibleProjets.length; i++) {
      const clonedNode = collapsibleProjets[i].cloneNode(true);
      clonedNodes.push(clonedNode);
      noteworthyProjects.appendChild(clonedNode);
    }

    // It delays .07s to mimic a grid transition
    for (let i = 0; i < clonedNodes.length; i++) {
      setTimeout(function() {
        clonedNodes[i].classList.add('scrolled-grid-elem');
      }, i * 70);
    }

    
    document.getElementById('grid-show-btn').innerHTML = 'Show Less';
  } else {
    removeCollapsibles();
    document.getElementById('grid-show-btn').innerHTML = 'Show More';
  }

})

/**
 * Removes all collapsible project nodes from DOM
 */
 removeCollapsibles = () => {
  let htmlCollection = document.getElementsByClassName('noteworthy-project');

  let i = 0;
  while(i < htmlCollection.length) {
    if (i > 5) {
      htmlCollection[i].remove();
      --i;
    } 
    ++i;
  }
}
