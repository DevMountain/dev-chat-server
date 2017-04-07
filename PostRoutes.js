const { createPost, delayMiddleware, errorMiddleware, getPosts } = require( "./PostController" );

module.exports = app => {
	app.route( "/api/posts" )
		.get( delayMiddleware, errorMiddleware, getPosts )
		.post( delayMiddleware, errorMiddleware, createPost );
};
