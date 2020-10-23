
var file = require('fs');
const interface = require('Interface/DBOperations');

module.exports = {


        home : function(req, reply){
				var html = file.readFileSync('./public/index.html');
				const response = reply.response(html);
				response.type('text/html');
				return response;
		},
		
		addRecords : function(req, reply){
			var html = file.readFileSync('./public/addRecords.html');
			const response = reply.response(html);
			response.type('text/html');
			return response;
		},

		getRecords : function(req, reply){
			var html = file.readFileSync('./public/getRecords.html');
			const response = reply.response(html);
			response.type('text/html');
			return response;
		},

		getIndexBG : function(req, reply){
			var image = file.readFileSync('./public/indexbg1.jpg');
			const response = reply.response(image);
			response.type('image/jpg');
			return response;
		},

		getsidebarbg : function(req, reply){
			var image = file.readFileSync('./public/sidebarbg.jpg');
			const response = reply.response(image);
			response.type('image/jpg');
			return response;
		},

		sendMail : function(req, reply){
			var html = file.readFileSync('./public/sendMail.html');
			const response = reply.response(html);
			response.type('text/html');
			return response;
		},

		welcome : function(req, reply){
			var html = file.readFileSync('./public/welcome.html');
			const response = reply.response(html);
			response.type('text/html');
			return response;
		},
        
        save : async function(req, reply){

				// console.log(typeof(req.query));
				// console.log(typeof(req.payload));

                var hr = req.payload.heartrate;
                var bs = req.payload.bloodsugar;
				var bp = req.payload.bloodpressure;
				var bo = req.payload.bloodoxygen;

                //console.log(hr + " " + bs + " " + bp + " " + bo);

                //const save = require('./Interface/DBOperations/Save');
				var result = await(interface.save(hr, bs, bp, bo));
				//console.log(result);
		        const response = reply.response('');
		        response.type('text/html');
				return response;
				
        },

        find : async function(req, reply){
                //var find = require('./Interface/DBOperations/find');
				reports = await (interface.find());
				let obj = {
					reports : [],
					condition : {
						heartrate : '',
						bloodsugar : '',
						bloodpressure : '',
						bloodoxygen : ''
					}
				};

				let heartavg=0, sugaravg=0, pressureavg=0, oxygenavg=0;

				reports.forEach(element => {
					let report1 = {
						heartrate : element.heartrate,
						bloodsugar : element.bloodsugar,
						bloodpressure : element.bloodpressure,
						bloodoxygen : element.bloodoxygen
					}
					obj.reports.push(report1);
					heartavg = heartavg + parseInt(element.heartrate);
					sugaravg = sugaravg + parseInt(element.bloodsugar);
					pressureavg = pressureavg + parseInt(element.bloodpressure);
					oxygenavg = oxygenavg + parseInt(element.bloodoxygen);
				});

				heartavg = heartavg/7;
				sugaravg = sugaravg/7;
				pressureavg = pressureavg/7;
				oxygenavg = oxygenavg/7;

				// console.log(heartavg + " " + sugaravg);
				// console.log(pressureavg + ' ' + oxygenavg);


				if (heartavg >=60 && heartavg <=100) {
					obj.condition.heartrate = "Normal";
				}
				else {
					obj.condition.heartrate = " Not Normal";
				}
		
				if (sugaravg >=90 && sugaravg <=140) {
					obj.condition.bloodsugar = "Normal";
				}
				else {
					obj.condition.bloodsugar = " Not Normal";
				}
		
				if (pressureavg >=90 && pressureavg <=120) {
					obj.condition.bloodpressure = "Normal";
				}
				else {
					obj.condition.bloodpressure = " Not Normal";
				}
		
				if (oxygenavg >=75 && oxygenavg <=100) {
					obj.condition.bloodoxygen = "Normal";
				}
				else {
					obj.condition.bloodoxygen = " Not Normal";
				}

				//console.log(obj);
				
				const response = reply.response(obj);
				response.type('text/json');
				return response;
			},

        update : function(req, reply){

                var fn = req.payload.firstname;

                //var update = require('./Interface/DBOperations/Update');
		        interface.update(fn);
		        const response = reply.response('Reports updated!!');
		        response.type('text/plain');
		        return response;
        },

        delete : function(req, reply){
                //var Delete = require('./Interface/DBOperations/Delete');
		        interface.delete();
		        const response = reply.response('Reports deleted!!');
		        response.type('text/plain');
		        return response;
        }
}