const recipients = ["Guadalupe", "Ollie", "Aki"];
const prefix = "Thank you";
const suffix = "for the wonderful surprise gift!";

function writeCards(arr) {
   const array = arr.map(item => (
      `${prefix}, ${item}, ${suffix}`
   ))
   return array
}

function countDown(num) {
   for(let i = 0; i <= num; i++) {
      console.log(i)
   }
}

countDown(10)


