var moment = require("alloy/moment");
function saveCandidate() {

	var candidate = Alloy.createModel("Candidate", {
		first_name : $.first_name.value,
		last_name : $.last_name.value,
		middle_name : $.middle_name.value,
		age: $.age.getSelectedRow(0).title,
		sex: $.sex.getSelectedRow(0).title,
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