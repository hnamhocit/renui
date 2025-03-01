import { Accordion, Button, Dropdown, DropdownItem } from '../../../../lib/main'
import Section from '../../../components/Section'

const DropdownPage = () => {
	const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

	return (
		<div className='p-4 space-y-7'>
			<Section label='Simple dropdown'>
				<Dropdown
					position='top-left'
					trigger={<Button>Click me</Button>}>
					<DropdownItem>123</DropdownItem>
					<DropdownItem>123</DropdownItem>
					<DropdownItem>123</DropdownItem>
				</Dropdown>
			</Section>

			<Section
				flex
				label='Positions'>
				{positions.map((position) => (
					<Dropdown
						key={position}
						position={position}
						trigger={<Button>{position}</Button>}>
						<DropdownItem>123</DropdownItem>
						<DropdownItem>123</DropdownItem>
						<DropdownItem>123</DropdownItem>
					</Dropdown>
				))}
			</Section>

			<Section label='Dropdown with accordion'>
				<Dropdown
					position='top-left'
					trigger={<Button>Open</Button>}>
					<Accordion label='General'>
						<DropdownItem>1</DropdownItem>
						<DropdownItem>2</DropdownItem>
						<DropdownItem>3</DropdownItem>
					</Accordion>

					<Accordion label='Settings'>
						<DropdownItem>4</DropdownItem>
						<DropdownItem>5</DropdownItem>
						<DropdownItem>6</DropdownItem>
					</Accordion>
				</Dropdown>
			</Section>
		</div>
	)
}

export default DropdownPage
