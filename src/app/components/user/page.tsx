'use client'

import { ImageStack, User } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const UserPage = () => {
	return (
		<>
			<Intro
				title='User'
				description='User component is used to display user information.'
			/>

			<Section
				code={`<User
	photoURL='https://avatars.githubusercontent.com/u/98753616?v=4'
	name='Nguyen Hoang Nam'
	description='CEO | FOUNDER of RenUI'
/>`}
				label='User'>
				<User
					photoURL='https://avatars.githubusercontent.com/u/98753616?v=4'
					name='Nguyen Hoang Nam'
					description='CEO | FOUNDER of RenUI'
				/>
			</Section>

			<Section
				code={`<ImageStack
	images={[
		'/logo.jpg',
		'/logo.jpg',
		'/logo.jpg',
		'/logo.jpg',
		'/logo.jpg',
		'/logo.jpg',
	]}
/>`}
				label='Stack'>
				<ImageStack
					images={[
						'/logo.jpg',
						'/logo.jpg',
						'/logo.jpg',
						'/logo.jpg',
						'/logo.jpg',
						'/logo.jpg',
					]}
				/>
			</Section>
		</>
	)
}

export default UserPage
