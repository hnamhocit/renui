import clsx from 'clsx'
import { FC, ReactNode } from 'react'

interface SectionProps {
	label: string
	children: ReactNode
	flex?: boolean
}

const Section: FC<SectionProps> = ({ children, label, flex }) => {
	return (
		<div className='space-y-2'>
			<div className='text-xl font-semibold'>{label}</div>

			<div className={clsx(flex && 'flex items-center gap-3 flex-wrap')}>
				{children}
			</div>
		</div>
	)
}

export default Section
