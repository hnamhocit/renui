import Link from 'next/link'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Accordion, DropdownItem, Input } from 'renui'

const routes = [
	'accordion',
	'avatar',
	'badge',
	'button',
	'carousel',
	'checkbox',
	'dropdown',
	'image',
	'input',
	'link',
	'modal',
	'radio',
	'skeleton-loading',
	'spinner',
	'switch',
	'tabs',
	'textarea',
	'toast',
	'tooltip',
	'user',
]

const Content = () => {
	const [q, setQ] = useState('')

	return (
		<>
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

			<Accordion label='Documents'>
				<Link href={'/documents/getting-started'}>
					<DropdownItem>Getting started</DropdownItem>
				</Link>
				<Link href={'/documents/core-concepts'}>
					<DropdownItem>Core concepts</DropdownItem>
				</Link>
			</Accordion>

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
		</>
	)
}

export default Content
