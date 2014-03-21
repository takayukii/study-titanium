var args = arguments[0] || {};

var savingCandidate = args.saving_candidate;
var clear = args.clear;
var setPosition = args.focus;



$.first_name.text = savingCandidate.first_name;
$.last_name.text = savingCandidate.last_name;
$.middle_name.text = savingCandidate.middle_name;
$.birthday.text = savingCandidate.birthday;

var moment = require("alloy/moment");
$.age.text = moment(savingCandidate.birthday, "YYYY/MM/DD").fromNow(true);

$.sex.text = savingCandidate.sex;
$.employment_status.text = savingCandidate.employment_status;
$.address.text = savingCandidate.address;
$.mobile_phone_number.text = savingCandidate.mobile_phone_number;
$.level.text = savingCandidate.level;
$.course.text = savingCandidate.course;
$.job1_position.text = savingCandidate.job1_position;
$.job1_years.text = savingCandidate.job1_years;
$.job1_months.text = savingCandidate.job1_months;
$.job2_position.text = savingCandidate.job2_position;
$.job2_years.text = savingCandidate.job2_years;
$.job2_months.text = savingCandidate.job2_months;
$.job3_position.text = savingCandidate.job3_position;
$.job3_years.text = savingCandidate.job3_years;
$.job3_months.text = savingCandidate.job3_months;

function saveCandidate() {
	
	var candidate = Alloy.createModel("Candidate");
	
	if (candidate.set(savingCandidate)) {

		candidate.save();
		alert("Saved");

		Alloy.Collections.Candidate.fetch();
		
		//parent.initializeValues();
		//parent.first_name.focus();
		//parent.registrationWindow.close();
		
		$.detailWindow.close();
		clear();
		setPosition();

	} else {

		// callbackメソッドが呼ばれるのみ

	}
	
}