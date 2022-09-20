
var BMR;
var btn;

var createBtn = document.querySelector('#btn');
createBtn.onclick = function () {
    var name = document.querySelector('input[name=name]').value;
    var age = document.querySelector('input[name=age]').value;
    var sex = document.querySelector('input[name=sex]').value;
    var weight = document.querySelector('input[name=weight]').value;
    var height = document.querySelector('input[name=height]').value;

    var calo = document.querySelector('#calo');
    
        if (sex == "male") {
            BMR = (66 + (13.7*weight) + (5*height) - (6.8*age));
        }
        else BMR = (655 +(9.6*weight) + (1.8*height) - (4.7*age));
    console.log(BMR);
    var BMRrender = document.querySelector("#calo");
    var htmls = `<li>
             ${BMR}
             </li>`
    BMRrender.innerHTML = htmls;
}