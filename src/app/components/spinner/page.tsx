'use client'

import { Spinner } from 'renui'

import Section from '@/components/Section'

const SpinnerPage = () => {
	return (
		<>
			<Section
				flex
				label='Sample'>
				<Spinner />
			</Section>

			<Section
				flex
				label='Width & Height'>
				<Spinner
					$width={100}
					$height={100}
				/>
			</Section>

			<Section
				flex
				label='Color'>
				<Spinner $color='blue' />
			</Section>
		</>
	)
}

export default SpinnerPage
