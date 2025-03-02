import { motion } from 'motion/react'
import { FC, memo } from 'react'

interface IntroProps {
	title: string
	description: string
}

const Intro: FC<IntroProps> = ({ title, description }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			className='space-y-4'>
			<div className='text-3xl font-bold primary-heading'>{title}</div>
			<div className='font-medium text-gray-700 italic'>
				{description}
			</div>
		</motion.div>
	)
}

export default memo(Intro)
