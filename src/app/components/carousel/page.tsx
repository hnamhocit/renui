'use client'

import { Carousel } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const CarouselPage = () => {
	return (
		<>
			<Intro
				title='Carousel'
				description='Carousel component use to switch between images smoothly'
			/>

			<Section
				code={`	<Carousel
    images={[
        'https://www.topgear.com/sites/default/files/2021/12/18.%20Koenigsegg%20Jesko.jpeg',
        'https://robbreport.com/wp-content/uploads/2021/12/29.jpg?w=800',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvfLmr6sqx6AJh7DT4rBJQ1u38TpFsgJMuCVf5R6q0zt8hdhflmlj7E7pmZ1rcjB3jL8&usqp=CAU',
    ]}
/>`}
				label='Sample'>
				<Carousel
					images={[
						'https://www.topgear.com/sites/default/files/2021/12/18.%20Koenigsegg%20Jesko.jpeg',
						'https://robbreport.com/wp-content/uploads/2021/12/29.jpg?w=800',
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvfLmr6sqx6AJh7DT4rBJQ1u38TpFsgJMuCVf5R6q0zt8hdhflmlj7E7pmZ1rcjB3jL8&usqp=CAU',
					]}
				/>
			</Section>
		</>
	)
}

export default CarouselPage
