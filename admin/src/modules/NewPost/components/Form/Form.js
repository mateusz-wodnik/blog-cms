import React from 'react';

import './Form.css'

const Form = ({categories, postCategories, selected, carousel, handler}) => (
	<form className="new-post__form d-flex flex-wrap" onChange={handler}>
		<div className="form-group w-100">
			<input type="text"
						 className="form-control"
						 id="title"
						 name="title"
						 aria-describedby="title"
						 placeholder="Title"
			/>
		</div>
		<div className="form-group form__list">
			{categories.map((cat, idx) => <Category key={idx} name={cat} selected={postCategories.includes(cat)} />)}
		</div>
		<div className="form-group form__apearance d-flex flex-column justify-content-center align-items-end">
			<div className="form-check">
				<input type="checkbox"
							 className="form-check-input"
							 name="selected"
							 id="selected"
							 aria-describedby="selected"
							 defaultChecked={selected}
				/>
				<label className="form-check-label" htmlFor="selected">selected</label>
			</div>
			<div className="form-check">
				<input type="checkbox"
							 className="form-check-input"
							 name="carousel"
							 id="carousel"
							 aria-describedby="carousel"
							 defaultChecked={carousel}
				/>
				<label className="form-check-label" htmlFor="carousel">carousel</label>
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
	</form>
)

export default Form

const Category = ({name, selected}) => (
	<div className="form-check">
		<input type="checkbox"
					 className="form-check-input"
					 name="categories"
					 id={name}
					 aria-describedby="categories"
					 defaultChecked={selected}
		/>
		<label className="form-check-label" htmlFor={name}>{name}</label>
	</div>
)
