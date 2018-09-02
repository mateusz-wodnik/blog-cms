import React from 'react';

import './Form.css'

const Form = ({ categories,
				postCategories,
				featured,
				slider,
				handler,
				title,
				next,
				prev,
				children
}) => (
	<form className="new-post__form" onChange={handler}>
		<div className="form__title form-group">
			<input type="text"
					className="form-control"
					id="title"
					name="title"
					aria-describedby="title"
					placeholder="Title"
					value={title}
			/>
		</div>
		<div className="form__categories form-group">
			{categories.map((cat, idx) =>
				<Category key={cat + idx} name={cat} featured={postCategories.includes(cat)} />
			)}
			<div className="form-check">
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<input type="checkbox"
									className="form-check-input"
									name="newCategory"
									id="newCategory"
									aria-describedby="categories"
							/>
						</div>
					</div>
					<input type="text"
							name="newCategory"
							className="form-control"
							placeholder="New category"
					/>
				</div>
			</div>
		</div>
		<div className="form__appearance form-group">
			<Appearance id="featured" value={featured} />
			<Appearance id="slider" value={slider} />
		</div>
		<div className="form__image form-group">
			<input type="file"
					className="form-control-file"
					id="img"
					name="img"
			/>
		</div>
		<Link id="prev" name={prev.name} link={prev.link} />
		<Link id="next" name={next.name} link={next.link} />
		{children}
	</form>
)

export default Form

const Category = ({name, featured}) => (
	<div className="form-check">
		<div className="input-group mb-3">
			<div className="input-group-prepend">
				<div className="input-group-text">
					<input type="checkbox"
							className="form-check-input"
							name="categories"
							id={name}
							aria-describedby="categories"
							defaultChecked={featured}
					/>
				</div>
			</div>
			<input type="text" className="form-control" value={name} disabled={true} />
		</div>
	</div>
)

const Link = ({name, link, id}) => (
	<div className="form__link form-group">
		<input type="text"
				className="form-control"
				id={`${id}-name`}
				name={id}
				placeholder="text"
				value={name}
		/>
		<input type="text"
				className="form-control"
				id={`${id}-link`}
				name={id}
				placeholder="link"
				value={link}
		/>
	</div>
)

const Appearance = ({id, value}) => (
	<div className="form-check">
		<input type="checkbox"
				className="form-check-input"
				name={id}
				id={id}
				checked={value}
		/>
		<label className="form-check-label" htmlFor={id}>{id}</label>
	</div>
)
