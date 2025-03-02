import { CiLight } from 'react-icons/ci'
import { FaDiscord, FaGithub, FaSearch } from 'react-icons/fa'
import { IoMdMenu } from 'react-icons/io'
import { Link } from 'react-router'

import {
	Accordion,
	Button,
	Dropdown,
	DropdownItem,
	Input,
} from '../../../lib/main'
import routes from '../../routes'

const Header = () => {
	return (
		<header className='sticky top-0 inset-x-0 bg-white z-20 h-16 px-4 flex items-center justify-between shadow-md'>
			<div className='flex items-center gap-3'>
				<Link to={'/'}>
					<img
						src='/logo.jpg'
						alt='Logo'
						className='w-10 h-10 rounded-full object-cover'
					/>
				</Link>

				<div className='text-xl font-bold'>RENUI</div>
			</div>

			<div className='flex items-center gap-3'>
				<Button
					iconOnly
					rounded>
					<CiLight size={20} />
				</Button>

				<Link
					target='_blank'
					to='https://github.com/hnamhocit'>
					<Button
						iconOnly
						rounded>
						<FaGithub size={20} />
					</Button>
				</Link>

				<Link
					to='https://discord.gg/WXK7Q6Ub'
					target='_blank'>
					<Button
						iconOnly
						rounded>
						<FaDiscord size={20} />
					</Button>
				</Link>

				<Dropdown
					trigger={
						<Button
							iconOnly
							rounded>
							<IoMdMenu size={20} />
						</Button>
					}>
					<Input
						type='search'
						placeholder='Search here...'
						endIcon={<FaSearch />}
					/>

					<Accordion label='Components'>
						{(routes[1]?.children ?? [])
							.sort(function (a, b) {
								if (a.path < b.path) {
									return -1
								}

								if (a.path > b.path) {
									return 1
								}

								return 0
							})
							.map((route) => (
								<Link
									key={route.path}
									to={`/components/${route.path}`}>
									<DropdownItem className='capitalize font-medium'>
										{route.path}
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
