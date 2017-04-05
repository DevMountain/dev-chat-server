const moment = require( "moment" );

const Post = require( "./Post" );

module.exports = {
	createPost( { body }, res ) {
		new Post( Object.assign( {}, body, {
			displayTime: moment().format( "h:mm A" )
		} ) )
			.save( ( err, post ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}

				return res.status( 201 ).json( post );
			} );
	}
	, getPosts( _, res ) {
		Post
			.find()
			.limit( 50 )
			.sort( "-createdAt" )
			.exec()
			.then( posts => res.status( 200 ).json( posts ) )
			.catch( err => res.status( 500 ).json( err ) );
	}
	, delayMiddleware( { query }, _, next ) {
		if ( query.delay && query.delay > 1 ) {
			setTimeout( next, parseInt( query.delay ) );
		} else {
			next();
		}
	}
	, errorMiddleware( { query }, _, next ) {
		if ( query.error ) {
			return res.status( 500 ).json( { error: "You requested an error be delivered!" } );
		}

		next();
	}
};
