import { FaBook, FaCheck } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import { IoCopy } from 'react-icons/io5'

import { Button, Input } from '../lib/main'

export default function App() {
	return (
		<div className='min-h-screen'>
			<div
				className='h-[calc(100vh-64px)] flex items-center justify-center bg-cover bg-center bg-no-repeat'
				style={{
					backgroundImage:
						'url(https://wallpapercat.com/w/full/b/a/9/1209998-3840x2160-desktop-4k-glow-in-the-dark-background-photo.jpg)',
				}}>
				<div className='flex flex-col text-white items-center justify-center gap-5'>
					<h1 className='text-5xl font-black'> React New UI </h1>
					<p className='text-2xl font-semibold'>
						Build by developers for developers
					</p>
					<div className='flex items-center gap-3'>
						<Button
							variant='ghost'
							rounded
							shadow>
							<FaBook size={20} />
							Docs
						</Button>

						<div className='flex items-center gap-3 py-1 px-4 bg-gray-900 rounded-full shadow-xl border-2'>
							<div className='text-lg font-semibold'>
								npm i renui
							</div>

							<Button
								rounded
								shadow
								iconOnly
								color='primary'>
								<IoCopy />
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className='space-y-4 p-4'>
				<div className='text-4xl font-bold'>
					Why{' '}
					<span className='bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text'>
						RENUI
					</span>
					?
				</div>
				<div>
					<span className='font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text'>
						RENUI
					</span>{' '}
					is a new react ui library with motto is "Build by developers
					for developers", aim to fast, reliable, free and beautiful
					🔥.
				</div>

				<div>
					Build on top tailwindcss and motion for optimize performant
					and animations ⚡.
				</div>

				<div className='flex flex-col gap-3 py-3 px-6 border rounded-2xl'>
					<div className='text-center text-3xl font-bold'>
						Join our wait list
					</div>

					<Input
						variant='underlined'
						label='Email'
					/>

					<Input
						variant='underlined'
						label='DisplayName'
					/>

					<div className='space-y-4'>
						<div className='flex items-center gap-3'>
							<div className='shrink-0 flex items-center justify-center w-5 h-5 border-2 rounded-md bg-indigo-600 text-white border-indigo-700 shadow-md cursor-not-allowed'>
								<FaCheck size={12} />
							</div>

							<div className='text-sm text-gray-700'>
								I agree to the terms and conditions and privacy
								policy of RENUI
							</div>
						</div>

						<div className='flex items-center gap-3'>
							<div className='shrink-0 flex items-center justify-center w-5 h-5 border-2 rounded-md bg-indigo-600 text-white border-indigo-700 shadow-md cursor-not-allowed'>
								<FaCheck size={12} />
							</div>

							<div className='text-sm text-gray-700'>
								Send me the latest information about the
								products
							</div>
						</div>
					</div>

					<Button
						shadow
						rounded
						color='primary'>
						<IoIosSend size={20} />
						Register
					</Button>
				</div>
			</div>
		</div>
	)
}
