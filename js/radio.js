let tabs = document.querySelectorAll(".nav li");
let tabsArray = Array.from(tabs);


tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        console.lof(e.currentTarget.dataset.cont);
        document.querySelector('.' + e.currentTarget.dataset.cont).checked = true;
        //document.querySelector('#' + e.currentTarget.dataset.cont).classList.add("active");
    });
});



let drops = document.querySelectorAll('.drop');

drops.forEach((drop)=>{
    drop.addEventListener("click", function(e) {
        drop.parentNode.classList.toggle("active");
    });
});
