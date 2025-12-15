// Window
// Docuemnt
// Screen
console.log(window.document);
// window.close();

// console.log(document.getElementsByClassName('paragraph'));

// const elements = document.querySelector('p')
// console.log(elements[0].nodeName);


// document.getElementById('submitButton').onclick = function submitForm() {
//     const myFrm = document.forms['frm1'];
//     let text = '';
//     for (let i = 0; i < myFrm.length; i++) {
//         text += myFrm.elements[i].value + "<br>";

//     }

//     document.getElementById("demo").innerHTML = text;
// }


document.getElementById('submitButton').addEventListener("click", submitForm);

function submitForm(e) {
    e.preventDefault();
    console.log("🚀 ~ submitForm ~ e:", e);
    const myFrm = document.forms['frm1'];
    let text = '';
    for (let i = 0; i < myFrm.length; i++) {
        text += myFrm.elements[i].value + "<br>";

    }

    document.getElementById("demo").innerHTML = text;
}
