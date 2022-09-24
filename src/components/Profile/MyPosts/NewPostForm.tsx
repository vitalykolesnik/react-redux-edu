import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from 'redux/reduxStore';
import { getIsAdding } from 'redux/profileSelectors';
import { addUserPost } from 'redux/profileReduser';

import { FileIcon } from 'components/other/FileIcon/FileIcon';
import { Button, IconButton, Stack} from '@mui/material';
import { AddAPhoto } from '@mui/icons-material';
import TextField from 'components/other/Forms/TextField/TextField';

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
	const onSubmit = (values: any, {resetForm}: any) => {
		dispatch(addUserPost({
			text: values.text,
			images: files
		}))
		setFile([])
		resetForm({})
	}

	const filePreviews = files.map((f, i)=> (<FileIcon key={i} file={f} index={i} remove={executeDelete} />))
	return(
		<>
			<Stack direction={'row'} sx={{m: 1, height: 100}}>
				{filePreviews}
					{(files.length < ICONS_COUNT) ? (
						<IconButton component='label' sx={{width: 100}} >
							<input 
								hidden 
								type="file"
								placeholder="Place your image..."
								onChange={executeAddFiles}
								value={''}
								accept=".jpg, .jpeg, .png, .pbf, .bmp"/>
								<AddAPhoto />
						</IconButton>
					): ("")}
			</Stack>
		 	<Formik
				initialValues={{ text: '' }}
				validationSchema={validator}
				onSubmit={onSubmit}
			>
				{() => {
					return (
						<Form>
							<TextField name='text' />
								{/* placeholder="Enter your post..." />	 */}
							<Button variant='outlined' type='submit' disabled={process}>
								Add post...
							</Button>
						</Form>
					);
				}}
		 	</Formik>
		</>
	)
};
