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

			<Section label='User'>
				<User
					photoURL='/logo.jpg'
					name='Nguyen Hoang Nam'
					description='CEO | FOUNDER of RenUI'
				/>
			</Section>

			<Section label='Stack'>
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
