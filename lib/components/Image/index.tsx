import clsx from 'clsx'
import { FC, memo, useRef, useState } from 'react'

interface ImageProps {
	src: string | undefined
	alt: string | undefined
	className?: string
	withZoom?: boolean
	rounded?: boolean
}

const Image: FC<ImageProps> = ({ src, alt, className, withZoom, rounded }) => {
	const [isHover, setIsHover] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const imgRef = useRef<HTMLImageElement | null>(null)

	const handleImageLoad = () => setIsLoading(false)
	const toggleIsHover = () => setIsHover((prev) => !prev)

	return (
		<div
			className={clsx(
				'relative overflow-hidden w-fit rounded-md',
				rounded && '!rounded-full',
			)}>
			{isLoading && (
				<div className='animate-pulse w-40 h-24 bg-gray-300'></div>
			)}

			<img
				ref={imgRef}
				src={src}
				alt={alt}
				className={clsx(
					'w-full h-full rounded-md object-cover duration-300 transition-all',
					rounded && '!rounded-full',
					className,
					isHover && withZoom && 'scale-130 cursor-pointer',
				)}
				onMouseEnter={toggleIsHover}
				onMouseLeave={toggleIsHover}
				onLoad={handleImageLoad}
			/>
		</div>
	)
}

export default memo(Image)
