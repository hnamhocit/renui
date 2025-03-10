'use client'

import { Button, Dropdown, DropdownItem, Position } from 'renui'

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

			<Section
				code={`<Dropdown
	position='top-left'
	trigger={<Button>Click me</Button>}>
	<DropdownItem>123</DropdownItem>
	<DropdownItem>123</DropdownItem>
	<DropdownItem>123</DropdownItem>
</Dropdown>`}
				label='Simple dropdown'>
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
				code={`const positions = ['top-left','top-right','bottom-left','bottom-right',]
return positions.map((position) => (
	<Dropdown
		key={position}
		position={position}
		trigger={<Button>{position}</Button>}>
		<DropdownItem>123</DropdownItem>
		<DropdownItem>123</DropdownItem>
		<DropdownItem>123</DropdownItem>
	</Dropdown>))`}
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
		</>
	)
}

export default DropdownPage
