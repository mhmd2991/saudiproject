let tabs = document.querySelectorAll(".nav li");
let tabsArray = Array.from(tabs);
let section = document.querySelectorAll(".section");
let sectionArray = Array.from(section);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        console.log(e.currentTarget.dataset.cont);
        document.querySelector('.' + e.currentTarget.dataset.cont).checked = true;
        sectionArray.forEach((sec) =>{
            sec.classList.remove("active");
        });
        document.querySelector('#' + e.currentTarget.dataset.cont).classList.add("active");
    });
});



let drops = document.querySelectorAll('.drop');

drops.forEach((drop)=>{
    drop.addEventListener("click", function(e) {
        drop.parentNode.classList.toggle("active");
    });
});
