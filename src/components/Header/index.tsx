import { CiLight, CiSearch } from 'react-icons/ci'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { IoMdMenu } from 'react-icons/io'
import { Link } from 'react-router'

import { Accordion, Button, Dropdown, DropdownItem } from '../../../lib/main'

const components = [
	'button',
	'input',
	'modal',
	'dropdown',
	'loading',
	'accordion',
].sort()

const Header = () => {
	return (
		<header className='sticky top-0 inset-x-0 bg-white z-20 h-16 px-4 flex items-center justify-between shadow-md'>
			<div className='flex items-center gap-3'>
				<img
					src='/logo.jpg'
					alt='Logo'
					className='w-10 h-10 rounded-full object-cover'
				/>
				<div className='text-xl font-bold'>RENUI</div>
			</div>

			<div className='flex items-center gap-3'>
				<Button
					iconOnly
					rounded>
					<CiSearch size={20} />
				</Button>

				<Button
					iconOnly
					rounded>
					<CiLight size={20} />
				</Button>

				<Button
					iconOnly
					rounded>
					<FaGithub size={20} />
				</Button>

				<Button
					iconOnly
					rounded>
					<FaDiscord size={20} />
				</Button>

				<Dropdown
					trigger={
						<Button
							iconOnly
							rounded>
							<IoMdMenu size={20} />
						</Button>
					}>
					<DropdownItem className='border-2'>
						Version 0.0.1 beta
					</DropdownItem>

					<Accordion label='Components'>
						{components.map((component) => (
							<Link
								key={component}
								to={`/components/${component}`}>
								<DropdownItem className='capitalize font-medium'>
									{component}
								</DropdownItem>
							</Link>
						))}
					</Accordion>
				</Dropdown>
			</div>
		</header>
	)
}

export default Header
