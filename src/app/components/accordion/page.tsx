'use client'

import { Accordion } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const AccordionPage = () => {
	return (
		<>
			<Intro
				title='Accordion'
				description='Accordion component for collapsed data'
			/>

			<Section
				label='Sample'
				code={`<Accordion label='Accordion'>
	<div>
		Lorem ipsum, dolor sit amet consectetur adipisicing
		elit. Earum quam, dolores repellendus aliquam accusamus
		natus placeat temporibus iusto quibusdam eum repudiandae
		tenetur atque voluptatibus, perferendis magnam ipsum
		voluptatum nihil tempora.
	</div>
</Accordion>`}>
				<Accordion label='Accordion'>
					<div>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Earum quam, dolores repellendus aliquam accusamus
						natus placeat temporibus iusto quibusdam eum repudiandae
						tenetur atque voluptatibus, perferendis magnam ipsum
						voluptatum nihil tempora.
					</div>
				</Accordion>
			</Section>
		</>
	)
}

export default AccordionPage
