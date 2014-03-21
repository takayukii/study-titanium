exports.definition = {
	config : {
		columns : {
			"first_name" : "text",
			"last_name" : "text",
			"middle_name" : "text",
			"birthday" : "text",
			//"age" : "integer",
			"sex" : "text",
			"employment_status" : "text",
			"address" : "text",
			"mobile_phone_number" : "text",
			"level" : "text",
			"course" : "text",
			"job1_position" : "text",
			"job1_years" : "integer",
			"job1_months" : "integer",
			"job2_position" : "text",
			"job2_years" : "integer",
			"job2_months" : "integer",
			"job3_position" : "text",
			"job3_years" : "integer",
			"job3_months" : "integer",
			"created" : "text",
		},
		adapter : {
			type : "sql",
			collection_name : "Candidate"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here

			validate : function(attr) {
				
				for(key in attr){
	    			console.log("key: " + key + ", value: " + attr[key]);
	    		}
				

				if ((attr.first_name).length <= 0) {
					return "Error: first_name is empty.";
				}
				if ((attr.first_name).length > 30) {
					return "Error: first_name is too long.";
				}

				if ((attr.last_name).length <= 0) {
					return "Error: last_name is empty.";
				}
				if ((attr.last_name).length > 30) {
					return "Error: last_name is too long.";
				}

				if ((attr.middle_name).length <= 0) {
					return "Error: middle_name is empty.";
				}
				if ((attr.middle_name).length > 30) {
					return "Error: middle_name is too long.";
				}

				/*
				if (!(attr.age).match(/^[1-9][0-9]*$/)) {
					return "Error: age is not number.";
				}*/
				
				if ((attr.sex).length <= 0) {
					return "Error: sex is empty.";
				}
				
				if ((attr.employment_status).length <= 0) {
					return "Error: employment_status is empty.";
				}
				
				if ((attr.address).length <= 0) {
					return "Error: address is empty.";
				}
				if ((attr.address).length > 50) {
					return "Error: address is too long.";
				}
				
				if ((attr.mobile_phone_number).length <= 0) {
					return "Error: mobile_phone_number is empty.";
				}
				if (!(attr.mobile_phone_number).match(/^[0-9][0-9]*$/)) {
					return "Error: mobile_phone_number contains characters.";
				}
				
				if ((attr.level).length <= 0) {
					return "Error: level is empty.";
				}
				if((attr.level).match(/Vocational/) || (attr.level).match(/College/)){
					if ((attr.course).length <= 0) {
						return "Error: first_name is empty.";
					}
				}
				
				if ((attr.job1_position).length > 0) {
					
					if ((attr.job1_years).length <= 0) {
						return "Error: job1_years is empty.";
					}
					if ((attr.job1_months).length <= 0) {
						return "Error: job1_months is empty.";
					}
				}
				
				if ((attr.job2_position).length > 0) {
					
					if ((attr.job2_years).length <= 0) {
						return "Error: job2_years is empty.";
					}
					if ((attr.job2_months).length <= 0) {
						return "Error: job2_months is empty.";
					}
				}

				if ((attr.job3_position).length > 0) {
					
					if ((attr.job3_years).length <= 0) {
						return "Error: job3_years is empty.";
					}
					if ((attr.job3_months).length <= 0) {
						return "Error: job3_months is empty.";
					}					
				}

			}
		});

		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};
