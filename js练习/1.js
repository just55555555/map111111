//跑马灯
var id,pause=0,position=0;
function banner(){
	var sb='     hello wowrld';
	var sc='           welcome';
	var msg =sb+sc;
	var speed=10;
	document.isform.banner.value=msg.substring(position,position+160);
	if(position++==msg.length){
		position=0;
	}
	id=setTimeout("banner()",2000/speed);
	
}
