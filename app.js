// PouchDB.plugin({
// 	sayHello:function(){
// 		console.log("Hello there!");
// 	}
// });
var db = new PouchDB('mydb');
//var remoteCouch = false;
console.log(db.adapter);
console.log(db);
PouchDB.debug.enable('*');//prints pouchdebug information to console
function create(Name, Description){
    var id = 0;//was missing this damn semicolon
console.log("first");
	db.allDocs({
		include_docs:true,
		descending: true,
		limit: 1}).then(function (res){
			//id = id + 1; surpeflupous line, handled by id++ below
			//return id; return throws error crashes it at hey there
			id++;//id increments
			console.log(res);
			console.log(id);
			console.log(Name);
			console.log(Description);
		});

console.log("hey there")//this prints two times, so it gets this far for sure
	var box = {
		_id: id,
		parentboxid: id,
		name: Name,
		description: Description,
		completed: false
	};
console.log("this works");
	db.put(box).then(function (err, res){
		console.log("works too");//confirms things going into db successfully
		console.log(box);
		//return db.get(box);
		if (!err){
			console.log("Oh noes! We got an error!");
			console.log(box);
			console.log(_id);
		}
	});

	// function showcreate(){ //meant to test db.alldocs 
	// 	db.allDocs({include_docs: true, descending: true}, function(err, doc) {
	// 	redrawpouchdbUI(doc.rows);
	// });
	// }
	// showcreate();

}//modify function to just change the name of item/box/room because they are all the same
create("dog", "scary dog", "hi", "surprise");
create( "wolf", "sheep", "mouse", "rat");
create("Hi", "there")
create("alpha", "omega")
create("gamma", "delta")

function search(){
	db.get(docId, [options], [callback]);
}

function deletes(){
	db.remove(room);
}




