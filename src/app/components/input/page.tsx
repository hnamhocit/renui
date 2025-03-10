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
				code={`const sizes = ['sm', 'md', 'lg']
return sizes.map((size) => (
	<Input
		key={size}
		size={size}
		label={size}
	/> ))`}
				label='Sizes'>
				{sizes.map((size) => (
					<Input
						key={size}
						size={size}
						label={size}
					/>
				))}
			</Section>

			<Section
				code={`const variants = ['solid','light','bordered','underlined',]
return variants.map((variant) => (
	<Input
		key={variant}
		variant={variant}
		label={variant}
	/>
))`}
				label='Variants'>
				{variants.map((variant) => (
					<Input
						key={variant}
						variant={variant}
						label={variant}
					/>
				))}
			</Section>

			<Section
				code={`const variants = ['solid','light','bordered','underlined',]
const colors = ['default','primary','secondary','success','warning','danger',]
return variants
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
	))`}
				label='Colors'>
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

			<Section
				code={`<Input
	isError
	label='Error'
	errorMessage='Please enter valid email!'
/>`}
				label='Error handling'>
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
