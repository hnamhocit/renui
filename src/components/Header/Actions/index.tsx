import { IoMdMenu } from 'react-icons/io'
import { Button, Dropdown } from 'renui'

import Content from './Content'

const Actions = () => {
	return (
		<Dropdown
			trigger={
				<Button
					className='md:hidden'
					isIconOnly
					isRounded>
					<IoMdMenu size={20} />
				</Button>
			}>
			<Content />
		</Dropdown>
	)
}

export default Actions
