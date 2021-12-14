let tab = document.querySelector(".nav li");
let tabs = document.querySelectorAll(".nav li");
let tabsArray = Array.from(tabs);
let section = document.querySelectorAll(".section");
let sectionArray = Array.from(section);
let nextButton = document.querySelector(".btn-next");
let prevButton = document.querySelector(".btn-prev");
let current = 0;

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        document.querySelector('.' + e.currentTarget.dataset.cont).checked = true;
        sectionArray.forEach((sec) => {
            sec.classList.remove("active");
        });
        document.querySelector('#' + e.currentTarget.dataset.cont).classList.add("active");
    });
});



let drops = document.querySelectorAll('.drop');

drops.forEach((drop) => {
    drop.addEventListener("click", function (e) {
        drop.parentNode.classList.toggle("active");
    });
});

/*Make next previous bottom*/
/*nextButton.addEventListener("click", function (e) {
    sectionArray.forEach((sec) => {
        sec.classList.remove("active");
        if (current >= sectionArray.length - 1) current = -1;
        current++;
        sectionArray[current].setAttribute("class", "active");
        console.log(sectionArray[current]);
    });


});

function prev() {
    if (current <= 0) current = sectionArray.length;
    current--;
    return setSection();

}

function next() {
    if (current >= sectionArray.length - 1) current = -1;
    current++;
    return setSection();
}

function setSection() {
    return tab.setAttribute("id", "active", sectionArray[current]);
}*/
/*-----------------------------------------------------------------------*/

/*put terms and needs check box into session array to print them later*/

function getTerms(el){
    
    let terms = document.querySelectorAll(`${el} .terms input[type='checkbox']`);
    console.log(terms);
    let termsValChecked = [];
    let termsValUnChecked = [];
    localStorage.removeItem("termschecked");
    localStorage.removeItem("termsunchecked");

    for (let i = 0; i < terms.length; i++) {
        if (terms[i].checked == true) {
            termsValChecked.push(terms[i].value);
        } else {
            termsValUnChecked.push(terms[i].value);
        }

    }
    window.localStorage.setItem("termschecked", JSON.stringify(termsValChecked));
    window.localStorage.setItem("termsunchecked", JSON.stringify(termsValUnChecked));
    window.open("print.html?value=term", "_blank");
}

function getNeed(el){    
let needs = document.querySelectorAll(`${el} .needs input[type='checkbox']`);
let needsValChecked = [];
let needsValUnChecked = [];
    localStorage.removeItem("termschecked");
    localStorage.removeItem("termsunchecked");
    for (let i = 0; i < needs.length; i++) {
        if (needs[i].checked == true) {
            needsValChecked.push(needs[i].value);
        } else {
            needsValUnChecked.push(needs[i].value);
        }

    }
    window.localStorage.setItem("needschecked", JSON.stringify(needsValChecked));
    window.localStorage.setItem("needsunchecked", JSON.stringify(needsValUnChecked));
    window.open("print.html?value=need", "_blank");
}