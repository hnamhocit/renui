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
				flex
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
