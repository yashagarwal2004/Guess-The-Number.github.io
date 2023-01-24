let button=document.querySelector('#play');
let heading=document.querySelector('#heading');
let number=document.querySelector('#num');
let num=Math.floor(Math.random()*50);
let count=0;
let flag=0;
button.addEventListener('click',function(){
if(flag==1)
{
	heading.innerHTML="Enter a number between 1 and 50";
	flag=0;
	button.innerHTML="Submit";
	number.value="";
	num=Math.floor(Math.random()*50)
}
else
{
let n=document.querySelector('#num').value;
count++;
if(n==num)
{
	heading.innerHTML=`Congratulations! You won and you took ${count} attempts`;
	button.innerHTML="Play Again";
	count=0;
	flag=1;
}
else if(n<num)
{
	heading.innerHTML="The actual number is greater than the entered number";
}
else
{
	heading.innerHTML="The actual number is lower than the entered number";
}
}
})