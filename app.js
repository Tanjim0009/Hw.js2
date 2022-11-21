//HW-> Grade Calculation based on user input

//Optional HW -> Find odd & Even number



let num = 100;

if (num >= 80 && num <= 100) {
   document.write('A+')
} else if (num >= 70 && num < 80) {
   document.write('A')
} else if (num >= 60 && num < 70) {
   document.write('A-')
} else if (num >= 50 && num < 60) {
   document.write('B')
} else if (num >= 40 && num < 50) {
   document.write('C')
} else if (num >= 33 && num < 40) {
   document.write('TTP')
} else if (num >= 0 && num < 33) {
   document.write('Jibon Sesh (Failed)')
}else {
   document.write('Ultapalta Number pawa jabena.')
}





// function sum(num1, num2) {
//    document.write(num1 + num2)
//    document.write('<br>')
// }
// sum(10,20);
// sum(100,200);
// sum(500,500);


function showText() {
   // var button = document.getElementById('btn')
   // button.innerText = 'Clicked';
   // button.style.color = 'red'
   // button.style.fontSize = '50px'


   var test =document.getElementById('input').value

   document.getElementById('result').innerText = test;
}
