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
				code={`<Badge content={'123'}>
	<Button isIconOnly>
		<IoNotifications />
	</Button>
</Badge>
					`}
				className='mt-4'>
				<Badge content={'123'}>
					<Button isIconOnly>
						<IoNotifications />
					</Button>
				</Badge>
			</Section>

			<Section
				flex
				code={`const sizes = ['lg', 'md', 'sm']
return sizes.map((size, index) => (
	<Badge
		key={index}
		size={size}
		content={'123'}>
		<Button isIconOnly>
			<IoNotifications />
		</Button>
	</Badge>))`}
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
				code={`const colors = ['default','primary','secondary','success','warning','danger']

return colors.map((color, index) => (
	<Badge
		key={index}
		color={color}
		content={'123'}>
		<Button isIconOnly>
			<IoNotifications />
		</Button>
	</Badge>))`}
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
