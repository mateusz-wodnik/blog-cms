import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons'

const Category = ({name, posts}) => (
	<div className="edit-post__category card">
		<header className="card-header">
			<h5 className="card-title">{name}</h5>
		</header>
		<ul className="edit-post__posts list-group list-group-flush">
			{posts.map((post, idx) =>
				<li key={post+idx} className="edit-post__post list-group-item">
					<div className="edit-post__actions">
						<Link to={`/admin/edit-post/${post._id}`} className="edit-post__action edit-post__action--edit">
							<FontAwesomeIcon icon={faEdit} />
						</Link>
					</div>
					<p>{post.title}</p>
					<p className="edit-post__date">{new Date(post.updatedAt).toDateString()}</p>
				</li>
			)}
		</ul>
	</div>
)

export default Category
