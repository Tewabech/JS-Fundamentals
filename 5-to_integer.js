
/*{
if (num >= 0)
console.log("My number:",num);

else
console.log("Not a number");

} */
const num=parseInt(process.argv[2]);
if(isNaN(num)){
console.log("Not a number");
}
else
{
return console.log("My number:",num);}