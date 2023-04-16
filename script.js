//your JS code here. If required.
function nonRepeat(str){
let obj=new Object();
for(let i=0;i<str.length;i++){
	let ch = str.charAt(i);
	if(obj[ch]>0){
	  obj[ch]=obj[ch]+1;
	}
	else{
		obj[ch]=1;
	}
}

for(let i in obj){
	if(obj[i]==1)
		return i;
}
}
let str = prompt("Enter a string"); 
alert(nonRepeat(str));