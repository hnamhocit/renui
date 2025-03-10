'use client'

import {
	Button,
	Color,
	Position,
	Size,
	Tooltip,
	TooltipVariant,
	User,
} from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const TooltipPage = () => {
	const colors = [
		'default',
		'primary',
		'secondary',
		'success',
		'warning',
		'danger',
	] satisfies Color[]
	const positions = [
		'top-right',
		'top-left',
		'bottom-right',
		'bottom-left',
		'top-center',
		'right-center',
		'bottom-center',
		'left-center',
	] satisfies Position[]
	const sizes = ['sm', 'md', 'lg'] satisfies Size[]
	const variants = ['solid', 'border', 'flat'] satisfies TooltipVariant[]

	return (
		<>
			<Intro
				title='Tooltip'
				description='A simple tooltip component for display custom content when hovering over an element.'
			/>

			<Section
				code={`<Tooltip content='Hello RenUI'>
	<Button>Text</Button>
</Tooltip>`}
				label='Sample'>
				<Tooltip content='Hello RenUI'>
					<Button>Text</Button>
				</Tooltip>
			</Section>

			<Section
				flex
				code={`const sizes = ['sm', 'md', 'lg']
return sizes.map((size) => (
	<Tooltip
		key={size}
		content='Hello world'
		size={size}>
		<Button>{size}</Button>
	</Tooltip>
))`}
				label='Sizes'>
				{sizes.map((size) => (
					<Tooltip
						key={size}
						content='Hello world'
						size={size}>
						<Button>{size}</Button>
					</Tooltip>
				))}
			</Section>

			<Section
				code={`const colors = ['default','primary','secondary','success','warning','danger',]
return colors.map((color) => (
	<Tooltip
		key={color}
		content='Hello world'
		color={color}>
		<Button
			variant='light'
			color={color}>
			{color}
		</Button>
	</Tooltip>
))
				`}
				label='Colors'>
				{colors.map((color) => (
					<Tooltip
						key={color}
						content='Hello world'
						color={color}>
						<Button
							variant='light'
							color={color}>
							{color}
						</Button>
					</Tooltip>
				))}
			</Section>

			<Section
				flex
				code={`const variants = ['solid', 'border', 'flat']
return variants.map((variant) => (
	<div
		className='flex gap-2 flex-wrap'
		key={variant}>
		{colors.map((color) => (
			<Tooltip
				key={color}
				content='Hello world'
				color={color}
				variant={variant}
				rounded>
				<Button color={color}>
					{variant} {color}
				</Button>
			</Tooltip>
		))}
	</div>
))
					`}
				label='Variants'>
				{variants.map((variant) => (
					<div
						className='flex gap-2 flex-wrap'
						key={variant}>
						{colors.map((color) => (
							<Tooltip
								key={color}
								content='Hello world'
								color={color}
								variant={variant}
								rounded>
								<Button color={color}>
									{variant} {color}
								</Button>
							</Tooltip>
						))}
					</div>
				))}
			</Section>

			<Section
				flex
				code={`const positions = ['top-right','top-left','bottom-right','bottom-left','top-center','right-center','bottom-center','left-center',]
					
return positions.map((position) => (
	<Tooltip
		key={position}
		content='Hello world'
		position={position}>
		<Button>{position}</Button>
	</Tooltip>
))`}
				label='Positions'>
				{positions.map((position) => (
					<Tooltip
						key={position}
						content='Hello world'
						position={position}>
						<Button>{position}</Button>
					</Tooltip>
				))}
			</Section>

			<Section
				code={`<Tooltip
	content='Hello world'
	rounded>
	<Button>Rounded</Button>
</Tooltip>`}
				label='Rounded'>
				<Tooltip
					content='Hello world'
					rounded>
					<Button>Rounded</Button>
				</Tooltip>
			</Section>

			<Section
				code={`<Tooltip
	position='top-center'
	content={
				<User
					name='水瀬あいり🌸🌷'
					description='https://x.com/minaseairi_cos'
					isLinkDescription
					photoURL='https://pbs.twimg.com/profile_images/1690353860798554114/i6_yXSZ2_400x400.jpg'
				/>
	}>
	<Button>Custom content</Button>
</Tooltip>`}
				label='Custom content'>
				<Tooltip
					position='top-center'
					content={
						<User
							name='水瀬あいり🌸🌷'
							description='https://x.com/minaseairi_cos'
							isLinkDescription
							photoURL='https://pbs.twimg.com/profile_images/1690353860798554114/i6_yXSZ2_400x400.jpg'
						/>
					}>
					<Button>Custom content</Button>
				</Tooltip>
			</Section>
		</>
	)
}

export default TooltipPage
