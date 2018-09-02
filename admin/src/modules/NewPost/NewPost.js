import React from 'react';
import './NewPost.css'
import Form from './components/Form/Form'
import { Editor } from '@tinymce/tinymce-react'
import Post from './components/Live/Post/Post'

const NewPost = ({post, methods, allCategories, isEdited}) => {
	const { featured, slider, categories, title, next, prev } = post
	const { handleForm, handleEditorChange, handleSave, handleEditorInstance, imagesUploadHandler } = methods
	return (
		<main className="new-post">
			<section className="new-post__edit">
				<Form
					categories={allCategories}
					postCategories={categories}
					featured={featured}
					slider={slider}
					title={title}
					handler={handleForm}
					next={next}
					prev={prev}
				/>
				<Editor
					onEditorChange={handleEditorChange}
					plugins="image"
					init={{
						theme: `modern`,
						height: '500px',
						images_upload_handler: imagesUploadHandler,
						init_instance_callback: handleEditorInstance,
					}}
				/>
				<button onClick={handleSave} className={`new-post__save btn ${isEdited ? 'btn-warning' : 'btn-success'}`}>{isEdited ? 'Save' : 'Saved'}</button>
			</section>
			<section className="new-post__live">
				<Post post={post}/>
			</section>
		</main>
	)
}

export default NewPost;
