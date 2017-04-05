const { createPost, delayMiddleware, errorMiddleware, getPosts } = require( "./PostController" );

module.exports = app => {
	app.route( "/api/posts" )
		.get( errorMiddleware, delayMiddleware, getPosts )
		.post( errorMiddleware, delayMiddleware, createPost );
};
