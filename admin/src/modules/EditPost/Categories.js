import React from 'react';
import Category from './Category'

const Categories = ({categories, posts}) => (
	<section className="edit-post__categories">
		{categories.map((cat, idx) =>
			<Category
				key={cat+idx}
				name={cat}
				posts={posts.filter(post =>
					// Check if post.category is defined
					post.categories && post.categories.includes(cat)
				)}
			/>
		)}
	</section>
)

export default Categories
