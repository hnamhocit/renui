import clsx from 'clsx'
import { FC, memo } from 'react'

import { Color, Size } from '../../types'
import Image from '../Image'

interface AvatarProps {
	src: string | undefined
	alt: string | undefined
	size?: Size
	rounded?: boolean
	bordered?: boolean
	withZoom?: boolean
	color?: Color
	className?: string
}

const Avatar: FC<AvatarProps> = ({
	src,
	size = 'md',
	color = 'default',
	alt,
	withZoom,
	rounded,
	bordered,
	className,
}) => {
	const variants = {
		sizes: {
			sm: '!w-8 !h-8',
			md: '!w-12 !h-12',
			lg: '!w-16 !h-16',
		},
		colors: {
			default: '!border-gray-200',
			primary: '!border-blue-600',
			secondary: '!border-indigo-600',
			success: '!border-green-600',
			warning: '!border-amber-600',
			danger: '!border-red-600',
		},
	}

	return (
		<Image
			rounded={rounded}
			src={src}
			alt={alt}
			className={clsx(
				variants.sizes[size],
				bordered && 'border-2 border-gray-200',
				variants.colors[color],
				className,
			)}
			withZoom={withZoom}
		/>
	)
}

export default memo(Avatar)
