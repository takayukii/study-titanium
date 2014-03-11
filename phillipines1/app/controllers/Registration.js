var moment = require("alloy/moment");
function saveCandidate() {

	var candidate = Alloy.createModel("Candidate", {
		first_name : $.first_name.value,
		last_name : $.last_name.value,
		middle_name : $.middle_name.value,
		age: $.age.value,
		sex: $.sex.getSelectedRow(0).title,
		employment_status : $.employment_status.getSelectedRow(0).title,
		address : $.address.value,
		mobile_phone_number : $.mobile_phone_number.value,
		level : $.level.getSelectedRow(0).title,
		course : $.course.getSelectedRow(0).title,
		job1_position : $.job1_position.value,
		job1_years : $.job1_years.getSelectedRow(0).title,
		job1_months : $.job1_months.getSelectedRow(0).title,
		created: moment(Date.now()).format("YYYY/MM/DD hh:mm:ss"),
	});

	if (candidate.isValid()) {

		candidate.save();
		alert("Saved");

		Alloy.Collections.Candidate.fetch();

	} else {

		candidate.destroy();
		alert("Failed");

	}
}