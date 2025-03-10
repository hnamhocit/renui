'use client'

import { Spinner } from 'renui'

import Section from '@/components/Section'

const SpinnerPage = () => {
	return (
		<>
			<Section
				flex
				code={`<Spinner />`}
				label='Sample'>
				<Spinner />
			</Section>

			<Section
				flex
				code={`<Spinner $width={100} $height={100} />`}
				label='Width & Height'>
				<Spinner
					$width={100}
					$height={100}
				/>
			</Section>

			<Section
				flex
				code={`<Spinner $color='blue' />`}
				label='Color'>
				<Spinner $color='blue' />
			</Section>
		</>
	)
}

export default SpinnerPage
