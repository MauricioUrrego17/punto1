 let colors = ["tomato", "grey", "red", "violet", "purple", "blue", "teal", "gold"];
 let colors2 = ["white", "orange", "indigo", "pink", "lightcoral", "black", "cyan"];

 function btnChanger() {
         let random = Math.floor(Math.random() * colors.length);
         let random2 = Math.floor(Math.random() * colors2.length);
         console.log("Random2 value: " + random2);
         let z = document.getElementById("container").style.background = colors2[random2];
 }



