'use client'

import { useState } from 'react'
import { Checkbox, Color, Size } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const CheckboxPage = () => {
	const [checked, setChecked] = useState(true)

	const sizes = ['lg', 'md', 'sm']
	const color = [
		'default',
		'primary',
		'secondary',
		'success',
		'warning',
		'danger',
	] satisfies Color[]

	return (
		<>
			<Intro
				title='Checkbox'
				description='Checkbox component for form input.'
			/>

			<Section label='Sample'>
				<Checkbox
					checked={checked}
					onChecked={setChecked}
				/>
			</Section>

			<Section
				flex
				label='Sizes'>
				{sizes.map((size) => (
					<Checkbox
						key={size}
						checked={checked}
						onChecked={setChecked}
						size={size as Size}
					/>
				))}
			</Section>

			<Section
				flex
				label='Colors'>
				{color.map((color) => (
					<Checkbox
						key={color}
						checked={checked}
						onChecked={setChecked}
						color={color}
					/>
				))}
			</Section>

			<Section
				flex
				label='With description'>
				{sizes.map((size) => (
					<Checkbox
						key={size}
						checked={checked}
						onChecked={setChecked}
						size={size as Size}
						description='Description'
					/>
				))}
			</Section>
		</>
	)
}

export default CheckboxPage
