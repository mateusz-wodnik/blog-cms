import React from 'react'

const ImageChange = ({label, name, file, handleImage}) => (
	<div className="config__logo form-group">
		<label htmlFor="#avatar">{label}</label>
		<div
			className="config__image"
			style={{backgroundImage: `url(/images/${file})`}}>
			<input type="file"
					className="form-control-file"
					id={name}
					name={name}
					onChange={handleImage}
					data-file={file}
			/>
		</div>
	</div>
)

export default ImageChange