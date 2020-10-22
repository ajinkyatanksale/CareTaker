//const mongoose = require("mongoose");
var ReportModel = require('Database/MongoDBSetup').Report;

module.exports.delete = function(){
	ReportModel.deleteMany({}, function(err){
		if(err) throw err;
	});
}

module.exports.find = function(){
	return new Promise((resolve, reject) => {
		ReportModel.find({}, function(err, reports){
			if (err);
			resolve(reports);
		}).sort({_id:-1}).limit(7);
	});
}

module.exports.save = function(hr, bs, bp, bo){
	var report = new ReportModel({
		heartrate : hr,
		bloodsugar : bs,
		bloodpressure : bp,
		bloodoxygen: bo
	});
	
	return new Promise((resolve, reject) => {	
		//console.log('report: ', report);
		report.save(function(err, result){
			if(err) throw err;
			resolve(result);
		})
	});
}

module.exports.update = function(fn){
	ReportModel.updateMany({}, function(err){
		if (err) throw err;
	});
}