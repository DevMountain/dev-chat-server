const express = require( "express" );
const cors = require( "cors" );
const mongoose = require( "mongoose" );
const { json } = require( "body-parser" );
const app = express();
const port = process.env.port || 8080;

app.use( cors() );
app.use( json() );

mongoose.Promise = global.Promise;
mongoose.connect( "mongodb://localhost:27017/dev-chat" );

require( "./PostRoutes" )( app );

app.listen( port, () => console.log( `Express listening on ${ port }` ) );
