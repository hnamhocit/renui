'use client'

import { Color, Link } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const LinkPage = () => {
	const colors = [
		'default',
		'primary',
		'danger',
		'secondary',
		'success',
		'warning',
	] satisfies Color[]

	return (
		<>
			<Intro
				title='Link'
				description='A link is a text element that can be used to navigate to another page or resource.'
			/>

			<Section label='Sample'>
				<Link
					target='_blank'
					href='https://renui.vercel.app'>
					RenUI
				</Link>
			</Section>

			<Section
				flex
				label='Colors'>
				{colors.map((color) => (
					<Link
						href='#'
						key={color}
						color={color}>
						{color}
					</Link>
				))}
			</Section>

			<Section label='Underline'>
				<Link
					isUnderline
					color='secondary'
					target='_blank'
					href='https://github.com/hnamhocit'>
					Github (hnamhocit)
				</Link>
			</Section>
		</>
	)
}

export default LinkPage
