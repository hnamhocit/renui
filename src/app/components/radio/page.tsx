'use client'

import { useState } from 'react'
import { Color, Radio, Size } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const RadioPage = () => {
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
				title='Radio'
				description='Radio component is used to select one option from a list of options.'
			/>

			<Section label='Sample'>
				<Radio
					checked={checked}
					onChecked={setChecked}
				/>
			</Section>

			<Section
				flex
				label='Sizes'>
				{sizes.map((size) => (
					<Radio
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
					<Radio
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
					<Radio
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

export default RadioPage
