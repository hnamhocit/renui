import { FC, memo } from 'react'

interface IntroProps {
	title: string
	description: string
}

const Intro: FC<IntroProps> = ({ title, description }) => {
	return (
		<div className='space-y-4'>
			<div className='text-3xl font-bold primary-heading'>{title}</div>
			<div className='font-medium text-gray-700 italic'>
				{description}
			</div>
		</div>
	)
}

export default memo(Intro)
