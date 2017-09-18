import React from 'react'
import DavidTest from './david_test.js';

module.exports = function(props) {
	return (
		<div>
			<DavidTest val="123" />
			<DavidTest val="456" />
			<DavidTest val="789" />
		</div>
	);
};