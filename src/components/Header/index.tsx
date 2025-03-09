'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CiLight } from 'react-icons/ci'
import { FaDiscord, FaGithub, FaSearch } from 'react-icons/fa'
import { IoMdMenu } from 'react-icons/io'
import { Accordion, Button, Dropdown, DropdownItem, Input } from 'renui'

const routes = [
	'accordion',
	'avatar',
	'badge',
	'button',
	'checkbox',
	'dropdown',
	'image',
	'input',
	'modal',
	'radio',
	'skeleton-loading',
	'spinner',
	'textarea',
	'toast',
	'tooltip',
	'user',
]

const Header = () => {
	const [q, setQ] = useState('')

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

				<Dropdown
					trigger={
						<Button
							isIconOnly
							isRounded>
							<IoMdMenu size={20} />
						</Button>
					}>
					<Input
						type='search'
						placeholder='Search here...'
						value={q}
						onChange={(e) => setQ(e.target.value)}
						endIcon={<FaSearch />}
					/>

					{q.trim().length > 0 && (
						<div className='p-2'>
							{routes
								.filter((route) =>
									route.includes(q.trim().toLowerCase()),
								)
								.map((route) => (
									<Link
										key={route}
										href={`/components/${route}`}>
										<DropdownItem className='capitalize font-medium'>
											{route}
										</DropdownItem>
									</Link>
								))}
						</div>
					)}

					<Accordion label='Components'>
						{routes.map((route) => (
							<Link
								key={route}
								href={`/components/${route}`}>
								<DropdownItem className='capitalize font-medium'>
									{route}
								</DropdownItem>
							</Link>
						))}
					</Accordion>
				</Dropdown>
			</motion.div>
		</header>
	)
}

export default Header
