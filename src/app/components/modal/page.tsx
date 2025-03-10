'use client'

import { Button, Modal, ModalBody, ModalHeader, useModal } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const ModalPage = () => {
	const { isOpen, onOpen, onOpenChange } = useModal()

	return (
		<>
			<Intro
				title='Modal'
				description='Modal component for displaying a modal.'
			/>

			<Section
				code={`const { isOpen, onOpen, onOpenChange } = useModal()
					
<Button onClick={onOpen}>Open Modal</Button>

<Modal
	isOpen={isOpen}
	onOpenChange={onOpenChange}>
	<ModalHeader>Test modal</ModalHeader>
	<ModalBody>
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>

		<Button
			isRounded
			isFullWidth>
			Continue
		</Button>
	</ModalBody>
</Modal>`}
				label='Sample'>
				<Button onClick={onOpen}>Open Modal</Button>

				<Modal
					isOpen={isOpen}
					onOpenChange={onOpenChange}>
					<ModalHeader>Test modal</ModalHeader>
					<ModalBody>
						<div>1</div>
						<div>2</div>
						<div>3</div>
						<div>4</div>

						<Button
							isRounded
							isFullWidth>
							Continue
						</Button>
					</ModalBody>
				</Modal>
			</Section>
		</>
	)
}

export default ModalPage
