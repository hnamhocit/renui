import { Image } from '../../../../lib/main'
import Intro from '../../../components/Intro'
import Section from '../../../components/Section'

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
					withZoom
				/>

				<Image
					src='/logo.jpg'
					alt='Logo'
					withZoom
				/>
			</Section>
		</>
	)
}

export default ImagePage
