import React from 'react';

import './Form.css'

const Form = ({categories, postCategories, featured, slider, handler, title}) => (
	<form className="new-post__form d-flex flex-wrap" onChange={handler}>
		<div className="form-group w-100">
			<input type="text"
						 className="form-control"
						 id="title"
						 name="title"
						 aria-describedby="title"
						 placeholder="Title"
						 value={title}
			/>
		</div>
		<div className="form-group form__list">
			{categories.map((cat, idx) => <Category key={idx} name={cat} featured={postCategories.includes(cat)} />)}
		</div>
		<div className="form-group form__apearance d-flex flex-column justify-content-center align-items-end">
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
		<div className="form-group">
			<div className="form-group">
				<input type="file"
							 className="form-control-file"
							 id="img"
							 name="img"
				/>
			</div>
		</div>
		<div className="form-group">
			<input type="text"
						 className="form-control"
						 id="prev-name"
						 name="prev"
						 aria-describedby="title"
						 placeholder="text"
			/>
			<input type="text"
						 className="form-control"
						 id="prev-link"
						 name="prev"
						 aria-describedby="title"
						 placeholder="link"
			/>
		</div>
		<div className="form-group">
			<input type="text"
						 className="form-control"
						 id="next-name"
						 name="next"
						 aria-describedby="title"
						 placeholder="text"
			/>
			<input type="text"
						 className="form-control"
						 id="next-link"
						 name="next"
						 aria-describedby="title"
						 placeholder="link"
			/>
		</div>
	</form>
)

export default Form

const Category = ({name, featured}) => (
	<div className="form-check">
		<input type="checkbox"
					 className="form-check-input"
					 name="categories"
					 id={name}
					 aria-describedby="categories"
					 checked={featured}
		/>
		<label className="form-check-label" htmlFor={name}>{name}</label>
	</div>
)
