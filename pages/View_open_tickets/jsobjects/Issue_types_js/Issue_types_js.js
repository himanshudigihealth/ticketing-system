export default {
	myFun1: () => {
	var myVar1= DETAILES.data[0].issue_type;
	var myVar2 = [];
	var myVar3= myVar1.split(',');		
		for(var i=0; i< myVar3.length;i++){
			myVar2.push({"label":myVar3[i],
"value":myVar3[i]})
		}
		return		myVar2;
	}
	
}