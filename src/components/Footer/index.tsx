import Link from 'next/link'
import { Avatar, Button, Input } from 'renui'

const Footer = () => {
	return (
		<div className='flex items-start justify-evenly flex-wrap gap-5 pt-12 p-4 bg-gray-900 space-y-4 text-white'>
			<div className='space-y-3'>
				<div className='flex items-center gap-3'>
					<Avatar
						src='/logo.jpg'
						alt='Logo'
						isRounded
					/>
					<div className='font-semibold text-xl'>RenUI</div>
				</div>

				<div>
					<div className='font-medium'>Keep up to date</div>
					<div className='text-sm text-gray-400'>
						Join our newsletter for regular updates. No spam ever.
					</div>
				</div>

				<div className='flex items-center gap-3'>
					<Input
						variant='light'
						placeholder='Eg: example@gmail.com'
					/>

					<Button
						variant='border'
						color='secondary'
						isRounded>
						Subscribe
					</Button>
				</div>
			</div>

			<div className='space-y-3'>
				<div className='text-xl font-semibold'>Products</div>

				<Link
					target='_blank'
					href='https://github.com/hnamhocit/renui'
					className='underline block'>
					RenUI website
				</Link>

				<Link
					target='_blank'
					href='https://github.com/hnamhocit/renui-lib'
					className='underline block'>
					RenUI library
				</Link>
			</div>

			<div className='space-y-3'>
				<div className='text-xl font-semibold'>Contact</div>

				<Link
					target='_blank'
					href='https://facebook.com/hnamhocit'
					className='flex items-center gap-3 underline'>
					Facebook
				</Link>

				<Link
					target='_blank'
					href='https://m.me/hnamhocit'
					className='flex items-center gap-3 underline'>
					Messenger
				</Link>

				<Link
					target='_blank'
					href='https://github.com/hnamhocit'
					className='flex items-center gap-3 underline'>
					Github
				</Link>
			</div>
		</div>
	)
}

export default Footer
