'use client'

import { useState } from 'react'
import { Textarea } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const TextareaPage = () => {
	const [value, setValue] = useState('')

	return (
		<>
			<Intro
				title='Textarea'
				description='Textarea component with full custom styles and auto height when typing'
			/>

			<Section
				code={`const [value, setValue] = useState('')

<Textarea
	label='Content'
	value={value}
	onChange={setValue}
	placeholder='Content here...'
/>

<div>Input: {value}</div>`}
				label='Sample'>
				<Textarea
					label='Content'
					value={value}
					onChange={setValue}
					placeholder='Content here...'
				/>

				<div>Input: {value}</div>
			</Section>

			<Section
				code={`<Textarea
	label='Content'
	placeholder='Content here...'
	value={value}
	isError
	errorMessage='Min 12 characters!'
	onChange={setValue}
/>`}
				label='Error handling'>
				<Textarea
					label='Content'
					placeholder='Content here...'
					value={value}
					isError
					errorMessage='Min 12 characters!'
					onChange={setValue}
				/>
			</Section>
		</>
	)
}

export default TextareaPage
