const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ReportDB');

var schema = mongoose.Schema;

var reportSchema = new schema({
	heartrate : String,
	bloodsugar : String,
	bloodpressure : String,
	bloodoxygen: String

});


var Report = mongoose.model('Report', reportSchema, 'report');

module.exports = {
	Report
};
