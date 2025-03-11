'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { CiLight } from 'react-icons/ci'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { Button } from 'renui'

import Actions from './Actions'

const Header = () => {
	return (
		<header className='sticky top-0 inset-x-0 bg-white z-20 h-16 px-4 flex items-center justify-between shadow-md'>
			<motion.div
				initial={{ opacity: 0, translateY: 16 }}
				animate={{ opacity: 1, translateY: 0 }}
				className='flex items-center gap-3'>
				<Link href={'/'}>
					<Image
						src='/logo.jpg'
						alt='Logo'
						width={40}
						height={40}
						className='w-10 h-10 rounded-full object-cover'
					/>
				</Link>

				<div className='text-xl font-bold'>RenUI</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, translateY: 16 }}
				animate={{ opacity: 1, translateY: 0 }}
				className='flex items-center gap-3'>
				<Button
					isIconOnly
					isRounded>
					<CiLight size={20} />
				</Button>

				<Link
					target='_blank'
					href='https://github.com/hnamhocit'>
					<Button
						isIconOnly
						isRounded>
						<FaGithub size={20} />
					</Button>
				</Link>

				<Link
					href='https://discord.gg/WXK7Q6Ub'
					target='_blank'>
					<Button
						isIconOnly
						isRounded>
						<FaDiscord size={20} />
					</Button>
				</Link>

				<Actions />
			</motion.div>
		</header>
	)
}

export default Header
