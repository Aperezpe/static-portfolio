//////////// COLLAPSIBLE PROJECTS  //////////////////////
// COLLAPSIBLE PROJECT: is any project inside the noteworthy section with i > 5

// const createGrid = () => {

//   let nProjectsData = JSON.parse(sessionStorage.getItem('portfolioData')).work;
//   let nProjectNodes = document.querySelectorAll('.noteworthy-project');
//   let nProjectClone = nProjectNodes[0].cloneNode(true);

//   $(nProjectNodes).remove();

//   let clickableDiv = $(nProjectClone).find('a.noteworthy-project__clickable-div');
//   $(clickableDiv).attr('href', nProjectsData[0].links[0].url);

//   // First IconLink is Git
//   let rightIcons = $(nProjectClone).find('a.noteworthy-project__right-icon');
//   let gitLink = rightIcons[0];

//   gitLink.forEach((linkEl) => {
//     linkEl
//   })

  
//   $('#noteworthy-projects').append(nProjectClone);

// }

// $('#grid-show-btn').click(() => {
//   let btnText = document.getElementById('grid-show-btn').innerHTML;
//   let noteworthyProjects = document.querySelector('#noteworthy-projects');
  
//   if (btnText == 'Show More') {
//     let clonedNodes = [];
//     for (let i = 0; i < collapsibleProjets.length; i++) {
//       const clonedNode = collapsibleProjets[i].cloneNode(true);
//       clonedNodes.push(clonedNode);
//       noteworthyProjects.appendChild(clonedNode);
//     }

//     // It delays .07s to mimic a grid transition
//     for (let i = 0; i < clonedNodes.length; i++) {
//       setTimeout(function() {
//         clonedNodes[i].classList.add('scrolled-grid-elem');
//       }, i * 70);
//     }

    
//     document.getElementById('grid-show-btn').innerHTML = 'Show Less';
//   } else {
//     removeCollapsibles();
//     document.getElementById('grid-show-btn').innerHTML = 'Show More';
//   }

// })

// /**
//  * Removes all collapsible project nodes from DOM
//  */
//  removeCollapsibles = () => {
//   let htmlCollection = document.getElementsByClassName('noteworthy-project');

//   let i = 0;
//   while(i < htmlCollection.length) {
//     if (i > 5) {
//       htmlCollection[i].remove();
//       --i;
//     } 
//     ++i;
//   }

// }

// const showCollapsibles = () => {
//   console.log("SHOW!");
// }

const showProject = (showMore, index) => {
  if (showMore) return true;
  console.log()
  return index < 6;
}

const generateGridElemClass = (index) => {
  if (index < 6) return 'noteworthy-project scroll-elem'
  return 'noteworthy-project';
}


const getNoteworthyProjects = async () => {
  let portfolioData = await getPorfolioData();

  let noteworthyProjects = portfolioData.work.filter((work) => !work.featuredProject);

  return noteworthyProjects;
}

const displayShowMore = async () => {

  let noteworthyProjects = await getNoteworthyProjects();

  count = 0;
  for (noteWorthyProject in noteworthyProjects) {
    if (!noteWorthyProject.featuredProject) ++count;
  }

  console.log(count);

  return count > 6;
}
