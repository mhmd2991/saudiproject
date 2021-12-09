function printContent(el) {
    let restorpage = document.body.innerHTML;
    let printContent = document.getElementById(el).innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = restorpage;
}