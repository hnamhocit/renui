import clsx from 'clsx'
import { FC, memo, ReactNode, useState } from 'react'

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface DropdownProps {
	children: ReactNode
	trigger: ReactNode
	position?: Position
}

const Dropdown: FC<DropdownProps> = ({
	children,
	trigger,
	position = 'top-right',
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [y, x] = position.split('-')

	const toggleIsOpen = () => setIsOpen((prev) => !prev)

	return (
		<div className='relative w-fit'>
			<div onClick={toggleIsOpen}>{trigger}</div>

			<div
				className={clsx(
					'absolute min-w-52 p-2 space-y-1 bg-white z-30 max-h-60 overflow-y-scroll scrollbar-hide min-h-40 rounded-2xl shadow-lg transition-all border',
					{
						'opacity-100 visible': isOpen,
						'opacity-0 invisible': !isOpen,
						'top-full': y === 'top',
						'bottom-full': y === 'bottom',
						'left-0': x === 'left',
						'right-0': x === 'right',
						'translate-y-3':
							(y === 'top' && isOpen) ||
							(y === 'bottom' && !isOpen),
						'-translate-y-3':
							(y === 'top' && !isOpen) ||
							(y === 'bottom' && isOpen),
					},
				)}>
				{children}
			</div>
		</div>
	)
}

export default memo(Dropdown)
