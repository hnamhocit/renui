import clsx from 'clsx'
import { motion } from 'motion/react'
import { FC, ReactNode } from 'react'

interface SectionProps {
	label: string
	children: ReactNode
	flex?: boolean
	className?: string
}

const Section: FC<SectionProps> = ({ children, label, flex, className }) => {
	return (
		<motion.div
			initial={{
				translateY: 16,
				opacity: 0,
			}}
			whileInView={{ translateY: 0, opacity: 1 }}
			className='space-y-2'>
			<div className='text-xl font-semibold'>{label}</div>

			<div
				className={clsx(
					flex && 'flex items-center gap-3 flex-wrap',
					className,
				)}>
				{children}
			</div>
		</motion.div>
	)
}

export default Section
