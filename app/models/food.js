var mongoose = require('mongoose');

module.exports = mongoose.model('food', {
    text: {
        type: String,
        default: ''
    },

    price: {
    	type: Number,
    	default: ''
    },



});

var t = function totalprice() {
	module.exports.aggregate([
{
		$group: {
			_id: null,
			total : {$sum: '$price'}
		}
	}
]);
	//return total;

};

