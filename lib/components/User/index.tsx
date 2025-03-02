import { FC, memo } from 'react'

import Avatar from '../Avatar'

interface UserProps {
	src: string | undefined
	name: string | undefined
	description: string | undefined
}

const User: FC<UserProps> = ({ src, name, description }) => {
	return (
		<div className='flex items-center gap-3'>
			<Avatar
				src={src}
				alt={name}
				rounded
				withZoom
			/>

			<div className='flex flex-col'>
				<span className='text-sm font-semibold'>{name}</span>
				<span className='text-xs text-gray-400'>{description}</span>
			</div>
		</div>
	)
}

export default memo(User)
