	alert("Hello world!");
	var data = [];//array where everything is stored
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
		//return dataitem;
		return false;

		//$.each(data, function )
	}

	function browsething(){
		var s = $('<select />');
		//for(dataitem in data){
		//	$("<option />", {value: val, text: data[dataitem]}).appendTo(s);
		//}
		for(var i=0; i < data.length; i++){
			s += '<option value="' + data[i] + '">' + data[i] + '</option>';}
			s += '</select>';
			$('#stuff').append(s);
			console.log(i + data[i]);
			console.log(i + s);
			return false;
		}
	//console.log($(data).get[0]);

	//function xxxxx(){
	//	for data.item in data 
	//}
	//loop through arrays and show things, list everything in a dropdown from the array
	//parent id should be shown as dropdown
$(document).ready(function(){
browsething();
	// $(document).ready(function(){
		
	// });
});

// bind newthing to submit button or any button using .on
// $("submit").on("click", newthing(){
// 	alert("The paragraph was clicked");
// });