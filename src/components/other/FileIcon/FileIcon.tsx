import { Delete } from '@mui/icons-material';
import { Box,  IconButton, Paper } from '@mui/material';
import React, { useState } from 'react';

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
		<Paper elevation={5} sx={{position: 'relative', m: 1}}>
			<Box 
				component='img' 
				sx={{width: 100 , height: '100%', objectFit: 'cover'}} 
				src={preview} 
				alt='ooops'>
			</Box>
			<IconButton color='inherit' size={'small'} onClick={onDelete} sx={{position: 'absolute', top: 1, right: 1}}>
				<Delete />
			</IconButton>
		</Paper>
	)
}
