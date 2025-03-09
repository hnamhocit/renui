'use client'

import { Accordion, Button, Dropdown, DropdownItem, Position } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const DropdownPage = () => {
	const positions = [
		'top-left',
		'top-right',
		'bottom-left',
		'bottom-right',
	] as Position[]

	return (
		<>
			<Intro
				title='Dropdown'
				description='Dropdowns allow users to select one or more items from a list of options.'
			/>

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
		</>
	)
}

export default DropdownPage
