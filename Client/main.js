import React from 'react'
import ReactDOM from 'react-dom'
import WPAPI from 'wpapi'
import TestList from './components/test_list.js';

const wpapi = new WPAPI({
    endpoint: 'http://33.33.33.111/wp-json',
    // This assumes you are using basic auth, as described further below
    username: 'admin ',
    password: 'avantime'
});

const posts = wpapi.posts()
	.perPage(7)
	.order('desc')
	.orderby('date')
	.then(function( data ) {
    	console.log('posts', data);
	}).catch(function( err ) {
	    console.log('posts error', err);
	});;



ReactDOM.render(
  	<TestList />,
  	document.getElementById('david-app')
);