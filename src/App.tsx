import { motion } from 'motion/react'
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
					<motion.h1
						initial={{ opacity: 0, translateY: 16 }}
						animate={{ opacity: 1, translateY: 0 }}
						className='text-5xl font-black'>
						{' '}
						React New UI{' '}
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, translateY: 16 }}
						animate={{ opacity: 1, translateY: 0 }}
						className='text-2xl font-semibold'>
						Build by developers for developers
					</motion.p>

					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						className='flex items-center gap-3'>
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
					</motion.div>
				</div>
			</div>

			<div className='space-y-4 p-4'>
				<motion.div
					initial={{ opacity: 0, translateY: 16 }}
					whileInView={{ opacity: 1, translateY: 0 }}
					className='text-4xl font-bold'>
					Why <span className='primary-heading'>RENUI</span>?
				</motion.div>

				<motion.div
					initial={{ opacity: 0, translateY: 16 }}
					whileInView={{ opacity: 1, translateY: 0 }}>
					<span className='font-semibold primary-heading'>RENUI</span>{' '}
					is a new react ui library with motto is "Build by developers
					for developers", aim to fast, reliable, free and beautiful
					🔥.
				</motion.div>

				<motion.div
					initial={{ opacity: 0, translateY: 16 }}
					whileInView={{ opacity: 1, translateY: 0 }}>
					Build on top tailwindcss and motion for optimize performant
					and animations ⚡.
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					className='flex flex-col gap-3 py-3 px-6 border rounded-2xl'>
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
				</motion.div>
			</div>
		</div>
	)
}
