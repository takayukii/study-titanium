var args = arguments[0] || {};

var model = Alloy.Collections.Candidate.where({
alloy_id: args.candidate_id
})[0];

transform = model.toJSON();
$.first_name.text = transform.first_name;
$.last_name.text = transform.last_name;
$.middle_name.text = transform.middle_name;
$.birthday.text = transform.birthday;

var moment = require("alloy/moment");
$.age.text = moment(transform.birthday, "YYYY/MM/DD").fromNow(true);

//$.age.text = transform.age;
$.sex.text = transform.sex;
$.employment_status.text = transform.employment_status;
$.address.text = transform.address;
$.mobile_phone_number.text = transform.mobile_phone_number;
$.level.text = transform.level;
$.course.text = transform.course;
$.job1_position.text = transform.job1_position;
$.job1_years.text = transform.job1_years;
$.job1_months.text = transform.job1_months;
$.job2_position.text = transform.job2_position;
$.job2_years.text = transform.job2_years;
$.job2_months.text = transform.job2_months;
$.job3_position.text = transform.job3_position;
$.job3_years.text = transform.job3_years;
$.job3_months.text = transform.job3_months;

function editCandidate(e) {

	var arg = {
		candidate : model,
	};
	var controller = Alloy.createController('Registration', arg).getView();
	controller.open();
	$.detailWindow.close();

}

var dialogs = require("alloy/dialogs");
function deleteCandidate(e) {

	dialogs.confirm({
		message : "Are you sure?",
		callback : function() {

			model.destroy();
			Alloy.Collections.Candidate.fetch();

			$.detailWindow.close();

		}
	});
}
