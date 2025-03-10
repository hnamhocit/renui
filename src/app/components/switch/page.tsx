'use client'

import { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Color, Switch } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const SwitchPage = () => {
	const [checked, setChecked] = useState(true)
	const colors = [
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
				title='Switch'
				description='Switches are used to toggle between two states.'
			/>

			<Section
				code={`	<Switch
	checked={checked}
	onChange={setChecked}
/>`}
				label='Sample'>
				<Switch
					checked={checked}
					onChange={setChecked}
				/>
			</Section>

			<Section
				flex
				code={`const colors = ['default','primary','secondary','success','warning','danger',]
return colors.map((color, index) => (
		<Switch
			key={index}
			color={color}
			checked={checked}
			onChange={setChecked}
		/>
))`}
				label='Colors'>
				{colors.map((color, index) => (
					<Switch
						key={index}
						color={color}
						checked={checked}
						onChange={setChecked}
					/>
				))}
			</Section>

			<Section
				code={`const [checked, setChecked] = useState(true)

<Switch
	checked={checked}
	onChange={setChecked}
	icon={checked ? <FaMoon /> : <FaSun />}
/>`}
				label='With Icon'>
				<Switch
					checked={checked}
					onChange={setChecked}
					icon={checked ? <FaMoon /> : <FaSun />}
				/>
			</Section>
		</>
	)
}

export default SwitchPage
