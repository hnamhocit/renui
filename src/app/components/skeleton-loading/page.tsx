'use client'

import { SkeletonLoading } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const SkeletonLoadingPage = () => {
	return (
		<>
			<Intro
				title='Skeleton Loading'
				description='Skeleton Loading is a component that is used to display a loading state of a component.'
			/>

			<Section
				flex
				code={`<div className='flex items-center gap-3 border p-4 rounded-2xl'>
	<SkeletonLoading className='w-12 h-12 !rounded-full' />

	<div className='space-y-2'>
		<SkeletonLoading className='w-32 h-6' />
		<SkeletonLoading className='w-24 h-4' />
	</div>
</div>`}
				label='Sample'>
				<div className='flex items-center gap-3 border p-4 rounded-2xl'>
					<SkeletonLoading className='w-12 h-12 !rounded-full' />

					<div className='space-y-2'>
						<SkeletonLoading className='w-32 h-6' />
						<SkeletonLoading className='w-24 h-4' />
					</div>
				</div>
			</Section>
		</>
	)
}

export default SkeletonLoadingPage
