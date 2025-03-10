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
				description='I recommend you use the library/framework Link from react-router or next router because it has built in prefetch underground. If you want to go out website use RenUI Link'
			/>

			<Section
				code={`<Link
	target='_blank'
	href='https://renui.vercel.app'>
	RenUI
</Link>`}
				label='Sample'>
				<Link
					target='_blank'
					href='https://renui.vercel.app'>
					RenUI
				</Link>
			</Section>

			<Section
				flex
				code={`const colors = ['default','primary','danger','secondary','success','warning']
return colors.map((color) => (
	<Link
		href='#'
		key={color}
		color={color}>
		{color}
	</Link>
))`}
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

			<Section
				code={`<Link
	isUnderline
	color='secondary'
	target='_blank'
	href='https://github.com/hnamhocit'>
	Github (hnamhocit)
</Link>`}
				label='Underline'>
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
