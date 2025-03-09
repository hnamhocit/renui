'use client'

import { useContext } from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import { FaAngleRight, FaCopy } from 'react-icons/fa'
import { FaBookOpenReader } from 'react-icons/fa6'
import { IoShieldCheckmark } from 'react-icons/io5'
import { Button, Image, ToastContext } from 'renui'

export default function Home() {
	const { showToast } = useContext(ToastContext)
	return (
		<>
			<div
				className='h-[calc(100vh-64px)] flex items-center justify-center bg-cover bg-center bg-no-repeat'
				style={{
					backgroundImage: 'url("/background.jpg")',
				}}>
				<div className='text-center space-y-4 max-w-sm text-white'>
					<div className='flex items-center justify-center gap-3 flex-wrap'>
						<div className='text-lg p-1 font-medium bg-red-600 rounded-md uppercase'>
							beta version. Documentation will be added later
						</div>
						<h1 className='text-5xl font-bold'>RenUI</h1>
					</div>

					<div className='text-xl font-semibold space-y-2'>
						<div>Build by developers for developers, </div>
						<div className='py-1 px-2 bg-white rounded-full text-blue-600 font-semibold'>
							fast, reliable, easy to use 💅
						</div>
					</div>

					<div className='flex items-center justify-center gap-3'>
						<Button
							isRounded
							color='secondary'
							variant='ghost'>
							Documents
						</Button>

						<Button
							onClick={() => {
								navigator.clipboard.writeText('npm i renui')
								showToast({
									type: 'success',
									content: 'Copy successfully!',
								})
							}}
							isRounded
							color='primary'>
							<div>npm i renui</div>

							<FaCopy />
						</Button>
					</div>
				</div>
			</div>

			<div className='p-4 space-y-12 bg-gray-900 text-white'>
				<div className='space-y-7'>
					<div className='text-3xl font-bold text-center text-blue-600'>
						Why RenUI?
					</div>

					<div className='grid sm:grid-cols-2 md:grid-c md:grid-cols-3 gap-5'>
						<div className='p-4 space-y-2 shadow-md rounded-md bg-gray-950 hover:scale-105 transition-all'>
							<div className='flex items-center gap-3 font-semibold text-indigo-600'>
								<AiFillThunderbolt size={20} />
								<div className='text-xl'>Fast</div>
							</div>

							<div className='text-sm'>Unpacked Size 463 kB</div>
						</div>

						<div className='p-4 space-y-2 shadow-md rounded-md bg-gray-950 hover:scale-105 transition-all'>
							<div className='flex items-center gap-3 font-semibold text-indigo-600'>
								<IoShieldCheckmark size={20} />
								<div className='text-xl'>Reliable</div>
							</div>

							<div className='text-sm'>
								Test & debug & update, release new components
								often
							</div>
						</div>

						<div className='p-4 space-y-2 shadow-md rounded-md bg-gray-950 hover:scale-105 transition-all'>
							<div className='flex items-center gap-3 text-indigo-600 font-semibold'>
								<FaBookOpenReader size={20} />
								<div className='text-xl'>Easy to use</div>
							</div>

							<div className='text-sm'>
								Full documents with storybook, code examples.
							</div>
						</div>
					</div>

					<div className='flex items-center justify-evenly gap-5'>
						<Image
							src='https://mui.com/static/branding/companies/spotify-dark.svg'
							alt=''
						/>

						<Image
							src='https://mui.com/static/branding/companies/amazon-dark.svg'
							alt=''
						/>

						<Image
							src='https://mui.com/static/branding/companies/nasa.svg'
							alt=''
						/>

						<Image
							src='https://mui.com/static/branding/companies/netflix.svg'
							alt=''
						/>

						<Image
							src='https://mui.com/static/branding/companies/unity-dark.svg'
							alt=''
						/>

						<Image
							src='https://mui.com/static/branding/companies/shutterstock-dark.svg'
							alt=''
						/>
					</div>

					<div className='text-center'>
						The world&apos;s best product teams trust RenUI to
						deliver an unrivaled experience for both developers and
						users.{' '}
						<span className='text-red-600 font-semibold'>
							Just for fun :))
						</span>
					</div>
				</div>

				<div className='flex items-center justify-center'>
					<div className='space-y-4 max-w-md text-center'>
						<div className='font-medium text-blue-600'>
							Start now
						</div>
						<div className='text-2xl font-bold'>
							Ship your next project{' '}
							<span className='font-extrabold text-blue-600'>
								faster
							</span>
						</div>

						<div>
							Find out why MUI&apos;s tools are trusted by
							thousands of open-source developers and teams around
							the world.
						</div>

						<div className='flex justify-center'>
							<Button
								color='primary'
								isRounded>
								Discover the core library
								<FaAngleRight />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
