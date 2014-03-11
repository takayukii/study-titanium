var args = arguments[0] || {};

var model = Alloy.Collections.Candidate.where({
		alloy_id: args.candidate_id
	})[0];

transform = model.toJSON();
$.first_name.text = transform.first_name;
$.last_name.text = transform.last_name;
$.middle_name.text = transform.middle_name;
$.age.text = transform.age;
$.sex.text = transform.sex;
$.employment_status.text = transform.employment_status;
$.address.text = transform.address;
$.mobile_phone_number.text = transform.mobile_phone_number;
$.level.text = transform.level;
$.course.text = transform.course;
$.job1_position.text = transform.job1_position;
$.job1_years.text = transform.job1_years;
$.job1_months.text = transform.job1_months;
