import { motion } from 'motion/react'
import Link from 'next/link'
import { useContext } from 'react'
import { FaBook, FaCopy } from 'react-icons/fa'
import { Button, ToastContext } from 'renui'

const Hero = () => {
	const { showToast } = useContext(ToastContext)

	return (
		<div
			className='h-[calc(100vh-64px)] flex items-center justify-center flex-1 bg-cover bg-center bg-no-repeat'
			style={{
				backgroundImage: 'url("/background.jpg")',
			}}>
			<motion.div
				initial={{ opacity: 0, translateY: 16 }}
				whileInView={{ opacity: 1, translateY: 0 }}
				className='text-center space-y-4 max-w-sm text-white'>
				<div className='text-xl sm:text-3xl md:text-5xl font-semibold space-y-2'>
					<div>Build by developers for developers, </div>
					<div className='text-xl py-1 px-2 bg-white rounded-full text-blue-600 font-semibold'>
						fast, reliable, easy to use 💅
					</div>
				</div>

				<div className='flex items-center justify-center gap-3'>
					<Link href={'/documents/getting-started'}>
						<Button
							isRounded
							variant='flat'
							color='secondary'>
							<FaBook size={20} />
							Documents
						</Button>
					</Link>

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

						<FaCopy size={20} />
					</Button>
				</div>
			</motion.div>
		</div>
	)
}

export default Hero
