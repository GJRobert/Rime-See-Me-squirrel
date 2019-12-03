function exConvert(name,color){
	a=color.toString();
	a= a[4]+a[5]+a[2]+a[3]+a[0]+a[1];
	color=a.toUpperCase();
	document.getElementById(name+'_color').innerHTML='0x'+color;}
function writeIn(name, value){
	document.getElementById(name).innerHTML=value;}
function changeNumber(value)
	{
	var a= parseInt(value);b=a+1;
	for(var i=a;i>=1;i--)
		document.getElementById('n'+i).style.display='inherit';for(var j=b;j<=9;j++)document.getElementById('n'+j).style.display='none';}
function changeColor(element,mode,name,color){
	var BG = "bg", BD = "bd";
	switch(mode){
	case BG: 
	document.getElementById(element).style.backgroundColor = '#'+color;break;
	case BD:
	document.getElementById(element).style.borderColor = '#'+color;break;
	default: document.getElementById(element).style.color = '#'+color;}
	color=exConvert(name,color);}
function exMode(origin,direction,color){
	a=color.toString();
	if(a.length!=6){alert("Error!");}
	else{
	b= a[4]+a[5]+a[2]+a[3]+a[0]+a[1];
	a=a.toUpperCase();
	b=b.toUpperCase();
	if(origin=="rgb"){
	document.getElementById(origin).style.backgroundColor = '#'+a;
	document.getElementById(direction).style.backgroundColor = '#'+a;
	document.getElementById(origin).value=a;
	document.getElementById(direction).value=b;}
	else if(origin=="bgr"){
	document.getElementById(origin).style.backgroundColor = '#'+b;
	document.getElementById(origin).value=a;
	document.getElementById(direction).style.backgroundColor = '#'+b;
	document.getElementById(direction).value=b;}
	}}