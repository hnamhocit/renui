'use client'

import { Color, Input, InputVariant, Size } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const InputPage = () => {
	const sizes = ['sm', 'md', 'lg'] satisfies Size[]
	const variants = [
		'solid',
		'light',
		'bordered',
		'underlined',
	] satisfies InputVariant[]
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
				title='Input'
				description='Input component for handle form input & error handling'
			/>

			<Section
				flex
				label='Sizes'>
				{sizes.map((size) => (
					<Input
						key={size}
						size={size}
						label={size}
					/>
				))}
			</Section>

			<Section label='Variants'>
				{variants.map((variant) => (
					<Input
						key={variant}
						variant={variant}
						label={variant}
					/>
				))}
			</Section>

			<Section label='Colors'>
				{variants
					.filter((item) => item !== 'light')
					.map((variant) => (
						<div key={variant}>
							{colors.map((color) => (
								<Input
									key={color}
									variant={variant}
									color={color}
									label={color}
								/>
							))}
						</div>
					))}
			</Section>

			<Section label='Error handling'>
				<Input
					isError
					label='Error'
					errorMessage='Please enter valid email!'
				/>
			</Section>
		</>
	)
}

export default InputPage
