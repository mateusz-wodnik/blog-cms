import React from 'react';

const Category = ({name, posts}) => (
	<div className="edit-post__category card">
		<div className="card-body">
			<h5 className="card-title">{name}</h5>
		</div>
		<ul className="edit-post__posts list-group list-group-flush">
			{posts.map(post => <li className="edit-post__post list-group-item">{post.title}</li>)}
		</ul>
	</div>
)

export default Category
