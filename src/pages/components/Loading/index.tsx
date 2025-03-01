import { Loading } from '../../../../lib/components'
import Section from '../../../components/Section'

const LoadingPage = () => {
	return (
		<div className='p-4 space-y-7'>
			<Section
				flex
				label='Sample'>
				<Loading />
			</Section>

			<Section
				flex
				label='Width & Height'>
				<Loading
					$width={100}
					$height={100}
				/>
			</Section>

			<Section
				flex
				label='Color'>
				<Loading $color='blue' />
			</Section>
		</div>
	)
}

export default LoadingPage
