var args = arguments[0] || {};

console.log("Registration Initialized");

initializeEventListener();

var savedCandidate = args.candidate;

if ( typeof savedCandidate !== 'undefined') {

	// 修正時はここにくる
	console.log("candidate is here");

	modifyEventListener();
	setExistingValues();

} else {
	console.log("candidate is not here");
}

function modifyEventListener() {

	$.save.removeEventListener('click', saveCandidate);
	$.save.addEventListener('click', saveUpdatedCandidate);

}

function setExistingValues() {

	transform = savedCandidate.toJSON();
	$.first_name.value = transform.first_name;
	$.last_name.value = transform.last_name;
	$.middle_name.value = transform.middle_name;
	$.address.value = transform.address;
	$.mobile_phone_number.value = transform.mobile_phone_number;
	$.workexp1_position.value = transform.job1_position;
	$.workexp2_position.value = transform.job2_position;
	$.workexp3_position.value = transform.job3_position;

	var rows = $.age.columns[0].rows;
	$.age.setSelectedRow(0, getRowNum(rows, transform.age), true);
	rows = $.sex.columns[0].rows;
	;
	$.sex.setSelectedRow(0, getRowNum(rows, transform.sex), true);
	rows = $.employment_status.columns[0].rows;
	;
	$.employment_status.setSelectedRow(0, getRowNum(rows, transform.employment_status), true);
	rows = $.level.columns[0].rows;
	$.level.setSelectedRow(0, getRowNum(rows, transform.level), true);

	rows = $.course.columns[0].rows;
	$.course.setSelectedRow(0, getRowNum(rows, transform.course), true);

	rows = $.job1_years.columns[0].rows;
	$.job1_years.setSelectedRow(0, getRowNum(rows, transform.job1_years), true);
	rows = $.job1_months.columns[0].rows;
	$.job1_months.setSelectedRow(0, getRowNum(rows, transform.job1_months), true);

	rows = $.job2_years.columns[0].rows;
	$.job1_years.setSelectedRow(0, getRowNum(rows, transform.job2_years), true);
	rows = $.job2_months.columns[0].rows;
	$.job1_months.setSelectedRow(0, getRowNum(rows, transform.job2_months), true);

	rows = $.job2_years.columns[0].rows;
	$.job1_years.setSelectedRow(0, getRowNum(rows, transform.job2_years), true);
	rows = $.job2_months.columns[0].rows;
	$.job1_months.setSelectedRow(0, getRowNum(rows, transform.job2_months), true);

}

function getRowNum(rows, title) {

	for (var x = 0; x < rows.length; x++) {
		var _title = rows[x].title;

		if (_title == title) {
			return x;
		}
	}
	return 0;
}

function initializeValues() {

	$.first_name.value = "";
	$.last_name.value = "";
	$.middle_name.value = "";
	$.address.value = "";
	$.mobile_phone_number.value = "";
	$.workexp1_position.value = "";
	$.workexp2_position.value = "";
	$.workexp3_position.value = "";

	$.age.setSelectedRow(0, 0, true);
	$.sex.setSelectedRow(0, 0, true);
	$.employment_status.setSelectedRow(0, 0, true);
	$.level.setSelectedRow(0, 0, true);
	$.course.setSelectedRow(0, 0, true);
	$.job1_years.setSelectedRow(0, 0, true);
	$.job1_months.setSelectedRow(0, 0, true);
	$.job2_years.setSelectedRow(0, 0, true);
	$.job2_months.setSelectedRow(0, 0, true);
	$.job3_years.setSelectedRow(0, 0, true);
	$.job3_months.setSelectedRow(0, 0, true);

}

var moment = require("alloy/moment");
function saveCandidate() {

	console.log("saveCandidate is called");

	var candidate = Alloy.createModel("Candidate");

	var data = {
		first_name : $.first_name.value,
		last_name : $.last_name.value,
		middle_name : $.middle_name.value,
		age : $.age.getSelectedRow(0).title,
		sex : $.sex.getSelectedRow(0).title,
		employment_status : $.employment_status.getSelectedRow(0).title,
		address : $.address.value,
		mobile_phone_number : $.mobile_phone_number.value,
		level : $.level.getSelectedRow(0).title,
		course : $.course.getSelectedRow(0).title,
		job1_position : $.workexp1_position.value,
		job1_years : $.job1_years.getSelectedRow(0).title,
		job1_months : $.job1_months.getSelectedRow(0).title,
		job2_position : $.workexp2_position.value,
		job2_years : $.job2_years.getSelectedRow(0).title,
		job2_months : $.job2_months.getSelectedRow(0).title,
		job3_position : $.workexp3_position.value,
		job3_years : $.job3_years.getSelectedRow(0).title,
		job3_months : $.job3_months.getSelectedRow(0).title,
		created : moment(Date.now()).format("YYYY/MM/DD hh:mm:ss"),
	};

	candidate.on('error', function(model, error) {
		Ti.API.info('error handled: ' + error);
		alert(error);
	});

	if (candidate.set(data)) {

		candidate.save();
		alert("Saved");

		Alloy.Collections.Candidate.fetch();

		initializeValues();
		$.first_name.focus();

	} else {

		// callbackメソッドが呼ばれるのみ

	}
}

function saveUpdatedCandidate() {

	console.log("saveUpdatedCandidate is called");

	var candidate = Alloy.createModel("Candidate");

	transform = savedCandidate.toJSON();

	var data = {
		alloy_id : transform.alloy_id,
		first_name : $.first_name.value,
		last_name : $.last_name.value,
		middle_name : $.middle_name.value,
		age : $.age.getSelectedRow(0).title,
		sex : $.sex.getSelectedRow(0).title,
		employment_status : $.employment_status.getSelectedRow(0).title,
		address : $.address.value,
		mobile_phone_number : $.mobile_phone_number.value,
		level : $.level.getSelectedRow(0).title,
		course : $.course.getSelectedRow(0).title,
		job1_position : $.workexp1_position.value,
		job1_years : $.job1_years.getSelectedRow(0).title,
		job1_months : $.job1_months.getSelectedRow(0).title,
		job2_position : $.workexp2_position.value,
		job2_years : $.job2_years.getSelectedRow(0).title,
		job2_months : $.job2_months.getSelectedRow(0).title,
		job3_position : $.workexp3_position.value,
		job3_years : $.job3_years.getSelectedRow(0).title,
		job3_months : $.job3_months.getSelectedRow(0).title,
		created : transform.created
	};

	console.log(JSON.stringify(data));

	candidate.on('error', function(model, error) {
		Ti.API.info('error handled: ' + error);
		alert(error);
	});

	if (candidate.set(data)) {

		candidate.save();
		alert("Saved");

		Alloy.Collections.Candidate.fetch();

		// 戻る
		$.registrationWindow.close();

	} else {

		// callbackメソッドが呼ばれるのみ

	}
}

function blurTextField(e) {
	
	//console.log(var_dump(e));
	//console.log(e.source.apiName);
	
	if(e.source.apiName != "Ti.UI.ScrollView"){
		return;
	}
	console.log(e.source.apiName);
	
	var children = $.registrationWrap.getChildren();
	
	for (var i = 0; i < children.length; i++) {
		var child = children[i];
		
		//console.log(child.id + ": " + child.hasFocus);
		
		if (child.hasFocus) {
			//console.log(child.id + ": " + child.hasFocus);
			child.blur();
		}
	}
}

function initializeEventListener() {

	$.first_name.addEventListener('focus', function() {
		this.hasFocus = true;
	});
	$.first_name.addEventListener('blur', function() {
		this.hasFocus = false;
	});

	$.last_name.addEventListener('focus', function() {
		this.hasFocus = true;
	});
	$.last_name.addEventListener('blur', function() {
		this.hasFocus = false;
	});

	$.middle_name.addEventListener('focus', function() {
		this.hasFocus = true;
	});
	$.middle_name.addEventListener('blur', function() {
		this.hasFocus = false;
	});

	$.address.addEventListener('focus', function() {
		this.hasFocus = true;
	});
	$.address.addEventListener('blur', function() {
		this.hasFocus = false;
	});

	$.mobile_phone_number.addEventListener('focus', function() {
		this.hasFocus = true;
	});
	$.mobile_phone_number.addEventListener('blur', function() {
		this.hasFocus = false;
	});

	$.workexp1_position.addEventListener('focus', function() {
		this.hasFocus = true;
	});
	$.workexp1_position.addEventListener('blur', function() {
		this.hasFocus = false;
	});

	$.workexp2_position.addEventListener('focus', function() {
		this.hasFocus = true;
	});
	$.workexp2_position.addEventListener('blur', function() {
		this.hasFocus = false;
	});

	$.workexp3_position.addEventListener('focus', function() {
		this.hasFocus = true;
	});
	$.workexp3_position.addEventListener('blur', function() {
		this.hasFocus = false;
	});
}

/**
 * Debug : var_dump
 * 
 * @var: Var
 * @level: Level max
 * 
 */
function var_dump(_var, _level) {
  var dumped_text = "";
  if(!_level) _level = 0;
     
  //The padding given at the beginning of the line.
  var level_padding = "";
  for(var j=0; j<_level+1; j++) level_padding += "    ";
     
    if(typeof(_var) == 'object') { //Array/Hashes/Objects 
      for(var item in _var) {
    var value = _var[item];
             
    if(typeof(value) == 'object') { // If it is an array,
      dumped_text += level_padding + "'" + item + "' ...\n";
      dumped_text += var_dump(value, _level+1);
    } else {
      dumped_text += level_padding +"'"+ item +"' => \""+ value +"\"\n";
    }
      }
    } else { //Stings/Chars/Numbers etc.
      dumped_text = "===>"+ _var +"<===("+ typeof(_var) +")";
    }
  return dumped_text;
};