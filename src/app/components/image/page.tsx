'use client'

import { Image } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const ImagePage = () => {
	return (
		<>
			<Intro
				title='Image'
				description='Image component for displaying images.'
			/>

			<Section
				flex
				label='Sample'>
				<Image
					src='/background.jpg'
					alt='Background'
				/>

				<Image
					src='/logo.jpg'
					alt='Logo'
				/>
			</Section>

			<Section
				flex
				label='With Zoom'>
				<Image
					src='/background.jpg'
					alt='Background'
					isZoom
				/>

				<Image
					src='/logo.jpg'
					alt='Logo'
					isZoom
				/>
			</Section>
		</>
	)
}

export default ImagePage
