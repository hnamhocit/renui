'use client'

import { Avatar, Color, Size } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const AvatarPage = () => {
	const sizes = ['lg', 'md', 'sm']
	const colors = [
		'default',
		'primary',
		'secondary',
		'danger',
		'success',
		'warning',
	] satisfies Color[]

	return (
		<>
			<Intro
				title='Avatar'
				description='Avatar component for displaying user profile pictures.'
			/>

			<Section label='Sample'>
				<Avatar
					src='/logo.jpg'
					alt='Logo'
				/>
			</Section>

			<Section
				flex
				label='Sizes'>
				{sizes.map((size, index) => (
					<Avatar
						key={index}
						src='/logo.jpg'
						alt='Logo'
						size={size as Size}
					/>
				))}
			</Section>

			<Section label='Rounded'>
				<Avatar
					src='/logo.jpg'
					alt='Logo'
					isRounded
				/>
			</Section>

			<Section label='With Zoom'>
				<Avatar
					src='/logo.jpg'
					alt='Logo'
					isRounded
					isZoom
				/>
			</Section>

			<Section
				flex
				label='Border with Colors'>
				{colors.map((color, index) => (
					<Avatar
						key={index}
						src='/logo.jpg'
						alt='Logo'
						color={color}
						isRounded
						isBordered
					/>
				))}
			</Section>
		</>
	)
}

export default AvatarPage
