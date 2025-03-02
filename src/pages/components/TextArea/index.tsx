import { useState } from 'react'

import { TextArea } from '../../../../lib/components'
import Intro from '../../../components/Intro'
import Section from '../../../components/Section'

const TextAreaPage = () => {
	const [value, setValue] = useState('')

	return (
		<>
			<Intro
				title='Textarea'
				description='Textarea component with full custom styles and auto height when typing'
			/>

			<Section label='Sample'>
				<TextArea
					label='Content'
					value={value}
					onChange={setValue}
					placeholder='Content here...'
				/>

				<div>Input: {value}</div>
			</Section>

			<Section label='Error handling'>
				<TextArea
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

export default TextAreaPage
