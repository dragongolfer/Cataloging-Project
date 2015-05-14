var data = [];
var id = 0;//id is just

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
	console.log(dataitem);
	//console.log(data);
	return false;
}
//loop through arrays and show things, list everything in a dropdown from the array
//parent id should be shown as dropdown


// $(document).ready(function(){
	
// });
