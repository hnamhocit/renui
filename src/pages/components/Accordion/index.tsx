import { Accordion } from '../../../../lib/main'
import Section from '../../../components/Section'

const AccordionPage = () => {
	return (
		<div className='p-4 space-y-7'>
			<Section label='Sample'>
				<Accordion label='Accordion'>
					<div className='p-2'>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Earum quam, dolores repellendus aliquam accusamus
						natus placeat temporibus iusto quibusdam eum repudiandae
						tenetur atque voluptatibus, perferendis magnam ipsum
						voluptatum nihil tempora.
					</div>
				</Accordion>
			</Section>
		</div>
	)
}

export default AccordionPage
