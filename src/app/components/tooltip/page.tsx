'use client'

import {
	Button,
	Color,
	Image,
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

			<Section label='Sample'>
				<Tooltip content='Hello RenUI'>
					<Button>Text</Button>
				</Tooltip>
			</Section>

			<Section
				flex
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

			<Section label='Colors'>
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

			<Section label='Rounded'>
				<Tooltip
					content='Hello world'
					rounded>
					<Button>Rounded</Button>
				</Tooltip>
			</Section>

			<Section label='Custom content'>
				<Tooltip
					position='bottom-right'
					content={
						<>
							<>
								<Image
									src='https://pbs.twimg.com/media/GlWFcsgWAAABVVX?format=jpg&name=medium'
									alt='Random image'
								/>

								<User
									name='水瀬あいり🌸🌷'
									description='https://x.com/minaseairi_cos'
									isLinkDescription
									photoURL='https://pbs.twimg.com/profile_images/1690353860798554114/i6_yXSZ2_400x400.jpg'
								/>
							</>
						</>
					}>
					<Button>Custom content</Button>
				</Tooltip>
			</Section>
		</>
	)
}

export default TooltipPage
