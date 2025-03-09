'use client'

import { IoNotifications } from 'react-icons/io5'
import { Badge, Button, Color, Size } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const BadgePage = () => {
	const sizes = ['lg', 'md', 'sm'] satisfies Size[]
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
				title='Badge'
				description='Badge component for display small number or data'
			/>

			<Section
				label='Sample'
				className='mt-4'>
				<Badge content={'123'}>
					<Button isIconOnly>
						<IoNotifications />
					</Button>
				</Badge>
			</Section>

			<Section
				flex
				className='gap-12 mt-4'
				label='Sizes'>
				{sizes.map((size, index) => (
					<Badge
						key={index}
						size={size}
						content={'123'}>
						<Button isIconOnly>
							<IoNotifications />
						</Button>
					</Badge>
				))}
			</Section>

			<Section
				flex
				className='gap-7 mt-4'
				label='Colors'>
				{colors.map((color, index) => (
					<Badge
						key={index}
						color={color}
						content={'123'}>
						<Button isIconOnly>
							<IoNotifications />
						</Button>
					</Badge>
				))}
			</Section>
		</>
	)
}

export default BadgePage
