import React, { useState } from 'react';
import s from './FileIcon.module.css';

type FileIconPropsType = {
	index: number
	file: File
	remove: (name: number) => void
}

export const FileIcon: React.FC<FileIconPropsType> = ({ index, file, remove}) => {
	const [preview, setPriview] = useState('')
	const onDelete = () => { 
		remove(index)
	}
	
	const reader = new FileReader()
	reader.readAsDataURL(file)
	reader.onload = () => {
		if(reader.result) setPriview(reader.result.toString())
	}

	return (
		<div className={s.fileIcon}>
			<img src={preview} alt='ooops'></img>
			<button onClick={onDelete}>x</button>
		</div>
	)
}
