var moment = require("alloy/moment");
function transCandidate(model) {
	var transform, created;
	transform = model.toJSON();
	
	transform.name = transform.first_name + " " + transform.last_name; 
	
	//created = transform.created;
	//transform.created = moment(Number(created)).format("YYYY/MM/DD hh:mm:ss");
	return transform;
}

// 未使用メソッド
function filterCandidate(collection) {
	
	// TODO .where をつけてないとtoJSONがundefinedになる。つまり、collection自体はmodelではないという事か…？
	return collection.where({
		//first_name: "test" <- where に何も入れないと何もひっかからない…
	});
}

function viewDetail(e){
	
	var arg = {
		candidate_id: e.rowData._id,
    };
	var controller = Alloy.createController('Detail', arg).getView();
	controller.open();
	
}
