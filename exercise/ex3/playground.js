// const paragraphs = document.querySelectorAll("p");

// console.log(paragraphs);

window.onload = function () {
  //   const heading = document.createElement("h1");
  //   const heading_text = document.createTextNode("Big Head");

  //   heading.appendChild(heading_text);
  //   document.body.appendChild(heading);
  //   document.getElementById("demo").innerHTML = "Hello world";
  //   const h4 = document.getElementsByTagName("h4");
  //   const res = document.querySelectorAll("p.intro"); // css selector
  //   console.log(res);
  const frms = document.forms["frm1"];
  let text = "";
  for (let i = 0; i < frms.length; i++) {
    text += frms.elements[i].value + "<br>";
  }
  document.getElementById("submitBtn").onclick = function () {
    alert("button clicked");
  };

  document.getElementById("submitBtn").addEventListener("click", () => {
    console.log("button clicked");
  });
  document.getElementById("thirdP").style.color = "red";

  console.log(document.body);
  //   document.getElementById("thirdP").style.fontSi
};

// Modern Javascript

// OOP {}
// protoType
// ES6 Class
// asyn/await
// promise
// closure
