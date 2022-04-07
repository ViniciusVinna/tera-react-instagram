import React from 'react';

export default function Feed(props) {
	return (
		<div className="container">
			<section className="feed">
				{props.children}
			</section>
		</div>
	);
}
