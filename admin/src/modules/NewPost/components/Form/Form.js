import React from 'react';

import './Form.css'

const Form = ({ categories,
								postCategories,
								featured,
								slider,
								handler,
								title,
								next,
								prev
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
			<div className="form-check">
				<input type="checkbox"
						className="form-check-input"
						name="featured"
						id="featured"
						aria-describedby="featured"
						checked={featured}
				/>
				<label className="form-check-label" htmlFor="featured">featured</label>
			</div>
			<div className="form-check">
				<input type="checkbox"
						className="form-check-input"
						name="slider"
						id="slider"
						aria-describedby="slider"
						checked={slider}
				/>
				<label className="form-check-label" htmlFor="slider">slider</label>
			</div>
		</div>
		<div className="form__image form-group">
			<input type="file"
						 className="form-control-file"
						 id="img"
						 name="img"
			/>
		</div>
		<div className="form__link form-group">
			<input type="text"
						 className="form-control"
						 id="prev-name"
						 name="prev"
						 aria-describedby="title"
						 placeholder="text"
						 value={prev.name}
			/>
			<input type="text"
						 className="form-control"
						 id="prev-link"
						 name="prev"
						 aria-describedby="title"
						 placeholder="link"
						 value={prev.link}
			/>
		</div>
		<div className="form__link form-group">
			<input type="text"
						 className="form-control"
						 id="next-name"
						 name="next"
						 aria-describedby="title"
						 placeholder="text"
						 value={next.name}
			/>
			<input type="text"
						 className="form-control"
						 id="next-link"
						 name="next"
						 aria-describedby="title"
						 placeholder="link"
						 value={next.link}
			/>
		</div>
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
								 checked={featured}
					/>
				</div>
			</div>
			<input type="text" className="form-control" value={name} disabled={true} />
		</div>
	</div>
)
