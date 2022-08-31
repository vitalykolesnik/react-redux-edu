import React, {  useState } from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { AppStateType } from 'redux/reduxStore';
import { getIsAdding } from 'redux/profileSelectors';
import { useDispatch, useSelector } from 'react-redux';

import s from './NewPostForm.module.css';
import { addUserPost } from 'redux/profileReduser';
import { Dispatch } from 'redux';
import { FileIcon } from 'components/other/FileIcon/FileIcon';

const ICONS_COUNT = 6;

export const NewPostForm = () => {
	const [files, setFile] = useState<Array<File>>([])

	const executeDelete = (index: number) => {		
		setFile([...files.slice(0, index),  ...files.slice(index + 1)])
	}

	const executeAddFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(e.target.files) {
			if(files.length < ICONS_COUNT) 
				setFile([...files, e.target.files[0]])
		}
	}    

	const validator = Yup.object({
		text: Yup.string().max(100, 'Must be 100 chars or less')
	})

	const dispatch: Dispatch<any>= useDispatch()
	const process = useSelector((state: AppStateType) => getIsAdding(state))
	const onSubmit = (values: any) => {
		dispatch(addUserPost({
			text: values.text,
			images: files
		}))
		setFile([])
	}

	const filePreviews = files.map((f, i)=> (<FileIcon key={i} file={f} index={i} remove={executeDelete} />))
	return(
		<div className={s.postForm}>
			<div className={s.filePreview}>
				{filePreviews}
				<div className={s.addButton}>					
					{(files.length < ICONS_COUNT) ? (
						<input
						type="file"
						placeholder="Place your image..."
						onChange={executeAddFiles}
						value={''}
						accept=".jpg, .jpeg, .png, .pbf, .bmp"
					/>
					): ("")}
				</div>
			</div>
		 	<Formik
				initialValues={{ text: '' }}
				validationSchema={validator}
				onSubmit={onSubmit}
			>
			{({errors,handleSubmit}) => (
				<form onSubmit={handleSubmit}>
					<Field
						type="text"
						name="text"
						placeholder="Enter your post..."
						className={errors.text ? s.errorArea : ''}
					/>
					<ErrorMessage name="text" component="div" />
					<button className={s.submitButton} type="submit" disabled={process}>
								Add post
					</button>	
					<div className={errors ? s.errorMessage : ''}>
							{errors ? errors.text : ''}
					</div>
				</form>
			)}
		 	</Formik>
		 </div>
		)

		// const formik = useFormik({
		//     initialValues: {
		//         newPostText: '',
		//         img: null,
		//     },
		//     onSubmit: {(values) => {
		//         alert(JSON.stringify(values));
		//     }},
		//     validationSchema: Yup.object({
		//         newPostText: Yup.string().max(100, 'Must be 100 chars or less'),
		//     }),
		// });

		// const  executeChange = (files: any) => {
		//     formik.values.img = files
		// }

		// return (
		//     <Form>
		//         <Field
		//             name="newPostText"
		//             className={formik.errors.newPostText ? s.errorArea : ''}
		//             placeholder="Enter your post..."
		//             value={formik.values.newPostText}
		//             onBlur={formik.handleBlur}
		//             onChange={formik.handleChange}
		//         />
		//         <Field
		//             name="image"
		//             type="file"
		//             placeholder="Place your image..."
		//             multiple
		//             onChange={(e) => executeChange(e.currentTarget.files)}
		//         />
		//         <button type="submit" disabled={process}>
		//             Add post
		//         </button>
		//         <div className={formik.errors ? s.errorMessage : ''}>
		//             {formik.errors ? formik.errors.newPostText : ''}
		//         </div>
		//     </Form>
		// );
};
