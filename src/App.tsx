import { useState } from 'react'
import { FaBook } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import { IoCopy } from 'react-icons/io5'

import { Button, Checkbox, Input } from '../lib/main'

export default function App() {
	const [checked, setChecked] = useState(true)

	return (
		<div className='min-h-screen'>
			<div
				className='h-[calc(100vh-64px)] flex items-center justify-center bg-cover bg-center bg-no-repeat'
				style={{
					backgroundImage: 'url(/background.jpg)',
				}}>
				<div className='flex flex-col text-white items-center justify-center text-center gap-5'>
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
					Why <span className='primary-heading'>RENUI</span>?
				</div>
				<div>
					<span className='font-semibold primary-heading'>RENUI</span>{' '}
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
						<Checkbox
							checked={checked}
							color='secondary'
							onChecked={setChecked}
							description='I agree to the terms and conditions and privacy
								policy of RENUI'
						/>

						<Checkbox
							checked={checked}
							color='secondary'
							onChecked={setChecked}
							description='I agree to receive the latest information about the products'
						/>
					</div>

					<Button
						disabled={!checked}
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
