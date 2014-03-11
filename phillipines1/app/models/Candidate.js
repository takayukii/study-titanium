exports.definition = {
	config : {
		columns : {
		    "first_name": "text",
		    "last_name": "text",
		    "middle_name": "text",
		    "age": "integer",
		    "sex": "text",
		    "employment_status": "text",
		    "address": "text",
		    "mobile_phone_number": "text",
		    "level": "text",
		    "course": "text",
		    "job1_position": "text",
		    "job1_years": "integer",
		    "job1_months": "integer",
		    "created": "text",
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
				if ((attr.first_name).length <= 0) {
					return "Error: First Name is not input.";
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