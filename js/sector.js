//Select Element passed in
function selectElement(selector) {
    return document.querySelector(selector);
}

function getTitle() {
    let parms = new URLSearchParams(document.location.search);
    let id = parms.get("id");
    for (let i = 0; i < database.length; i++) {

        if (database[i].sectorCode === id) {
            let sectionName = document.querySelector(`.${database[i].sectorN}`);
            sectionName.classList.add("active");
            
        }
    }
}

const allSector = document.querySelector('.allsector');
let active = null;

allSector.addEventListener('click', e => {
	const box = e.target.closest('.box');
  if (!box) {return;} // Quit, irrelevant element
  if (active) {
  	active.classList.remove('active');
    if (box === active) {
    	active = null;
    	return; // Quit, clicked on the active box
    } 
  }
  active = box;
  box.classList.add('active');  
});


getTitle();