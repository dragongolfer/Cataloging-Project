var data = [];
var id = 0;//id is just
console.log(data.name);
console.log(id);

function newthing(){
	var dataitem = {//this var takes in my input values and stores them to array data
	id: id,//could also use data.length to keep track of id
	parentid: $("#field4").val(),//number of the thing that it is in
	name: $("#field1").val(),
	body: $("#field2").val(),
	Areas: $("#field3").val()
};
	id++;//increments my id
	console.log(id);//shows id
	(data).push(dataitem);//actually puts dataitem in data
	console.log("this works");
	console.log(data + "this works/start");
	
	//console.log(data);
	return false;
	//$.each(data, function )
}

function browsething(){
	for(var i=0; i < data.length; i++){
		console.log(i + data[i]);
	}
	console.log(data[i]);
	return false;
}
//console.log($(data).get[0]);

//function xxxxx(){
//	for data.item in data 
//}
//loop through arrays and show things, list everything in a dropdown from the array
//parent id should be shown as dropdown


// $(document).ready(function(){
	
// });
