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
            let checkBox = document.querySelector(`#${database[i].sectorN}`);
            sectionName.classList.add("active");
            checkBox.checked = true;
        }
    }
}

function checkSection() {
    let checks = document.querySelectorAll(".checktitle");

    checks.forEach((check) => {
        check.addEventListener("click", function (e) {
            let checkVal = check.value;
            let section = document.querySelector(`.${checkVal}`);
            if (check.checked) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });

}

function toggle(source) {
    checkboxes = document.getElementsByName('checksection');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
        checkVal = checkboxes[i].value;
        let section = document.querySelector(`.${checkVal}`);
        if (source.checked) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }
}

checkSection();

let faqs = document.querySelectorAll(".allsector .box .sectortitle");

faqs.forEach((faq) => {
    faq.addEventListener("click", function (e) {
        faq.parentNode.classList.toggle("active");
    });
});

let plus = document.querySelectorAll(".allsector .box .plus");

plus.forEach((p) => {
    p.addEventListener("click", function (e) {
        p.parentNode.nextElementSibling.classList.toggle("active");
    });
});

getTitle();

/*const allSector = document.querySelector('.allsector');
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
});*/