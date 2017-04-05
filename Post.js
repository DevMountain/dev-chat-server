const mongoose = require( "mongoose" );

const Post = new mongoose.Schema( {
	author: {
		  required: true
		, type: String
	}
	, content: {
		  required: true
		, type: String
	}
	, displayTime: {
		  required: true
		, type: String
	}
}, { timestamps: true } );

module.exports = mongoose.model( "Post", Post );
