'use client'

import { Button, ButtonVariant, Color, Size } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

export default function ButtonPage() {
	const colors = [
		'default',
		'primary',
		'secondary',
		'danger',
		'success',
		'warning',
	] satisfies Color[]

	const sizes = ['sm', 'md', 'lg'] satisfies Size[]
	const variants = [
		'solid',
		'flat',
		'border',
		'light',
	] satisfies ButtonVariant[]

	return (
		<>
			<Intro
				title='Button'
				description='Button component for triggering an action.'
			/>

			<Section
				code={`<Button>RenUI</Button>`}
				label='Sample'>
				<Button>RenUI</Button>
			</Section>

			<Section
				flex
				code={`const sizes = ['sm', 'md', 'lg']
return sizes.map((size) => (
	<Button
		key={size}
		size={size}>
		Text
	</Button>))`}
				label='Size'>
				{sizes.map((size) => (
					<Button
						key={size}
						size={size}>
						Text
					</Button>
				))}
			</Section>

			<Section
				flex
				code={`const colors = ['default','primary','secondary','danger','success','warning',]
return colors.map((color) => (
	<Button
		key={color}
		color={color}>
		Text
	</Button>))`}
				label='Color'>
				{colors.map((color) => (
					<Button
						key={color}
						color={color}>
						Text
					</Button>
				))}
			</Section>

			<Section
				flex
				code={`const variants = ['solid','flat','border','light',]
return variants.map((variant) => (
	<div
		key={variant}
		className='space-y-2'>
			{colors.map((color) => (
				<Button
					isRounded
					variant={variant}
					key={color}
					color={color}>
					{variant}
				</Button>
			))}
	</div>))`}
				label='Variant'>
				{variants.map((variant) => (
					<div
						key={variant}
						className='space-y-2'>
						{colors.map((color) => (
							<Button
								isRounded
								variant={variant}
								key={color}
								color={color}>
								{variant}
							</Button>
						))}
					</div>
				))}
			</Section>

			<Section
				flex
				code={`const colors = ['default','primary','secondary','danger','success','warning',]
return colors.map((color) => (
	<Button
		key={color}
		color={color}
		isShadow>
		{color}
	</Button>))`}
				label='Shadow'>
				{colors.map((color) => (
					<Button
						key={color}
						color={color}
						isShadow>
						{color}
					</Button>
				))}
			</Section>

			<Section
				flex
				code={`return <>
	<Button
		color='primary'
		isRounded
		disabled={true}>
		Disabled
	</Button>

	<Button
		color='primary'
		isRounded
		disabled
		isLoading>
		Loading
	</Button> </>`}
				label='State'>
				<Button
					color='primary'
					isRounded
					disabled={true}>
					Disabled
				</Button>

				<Button
					color='primary'
					isRounded
					disabled
					isLoading>
					Loading
				</Button>
			</Section>

			<Section
				flex
				code={`return <>
	<Button
		isRounded
		color='primary'>
		Rounded
	</Button>

	<Button
		isFullWidth
		isRounded
		color='secondary'>
		Full width
	</Button>
</>`}
				label='Other'>
				<Button
					isRounded
					color='primary'>
					Rounded
				</Button>

				<Button
					isFullWidth
					isRounded
					color='secondary'>
					Full width
				</Button>
			</Section>
		</>
	)
}
