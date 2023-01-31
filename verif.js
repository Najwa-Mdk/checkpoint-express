let day = new Date().getDay() ; //return current date
let hours = new Date().getHours(); // retur current hours 

console.log(hours);

function verif (req, res, next) {
   if (day > 0 && day < 6 && hours > 8 && hours < 18) next();
   else 
   res.send(
      `<h1>Welcome sevice closed now..., service open 8h --> 17h </h1>`
     
   )
}
module.exports = verif 