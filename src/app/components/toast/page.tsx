'use client'

import { useContext } from 'react'
import {
	Button,
	Color,
	Position,
	Size,
	ToastContext,
	ToastType,
	User,
} from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const ToastPage = () => {
	const { showToast } = useContext(ToastContext)

	const sizes = ['sm', 'md', 'lg'] satisfies Size[]
	const positions = [
		'top-right',
		'top-left',
		'bottom-right',
		'bottom-left',
		'top-center',
		'bottom-center',
		'left-center',
		'right-center',
	] satisfies Position[]
	const colors = [
		'default',
		'primary',
		'secondary',
		'success',
		'warning',
		'danger',
	] satisfies Color[]
	const types = ['info', 'success', 'warning', 'danger'] satisfies ToastType[]

	return (
		<>
			<Intro
				title='Toast'
				description='Toast is a component that displays a message in a small box at the bottom of the screen.'
			/>

			<Section label='Sample'>
				<Button
					onClick={() =>
						showToast({
							content: (
								<>
									<User
										name='RenUI'
										description='Description'
										photoURL='/logo.jpg'
									/>
								</>
							),
						})
					}>
					Show toast
				</Button>
			</Section>

			<Section
				flex
				label='Sizes'>
				{sizes.map((size) => (
					<Button
						key={size}
						onClick={() =>
							showToast({
								size,
								content: (
									<>
										<User
											name='RenUI'
											description='Description'
											photoURL='/logo.jpg'
										/>
									</>
								),
							})
						}>
						{size}
					</Button>
				))}
			</Section>

			<Section
				flex
				label='Positions'>
				{positions.map((position) => (
					<Button
						key={position}
						onClick={() =>
							showToast({
								position,
								content: (
									<>
										<User
											name='RenUI'
											description='Description'
											photoURL='/logo.jpg'
										/>
									</>
								),
							})
						}>
						{position}
					</Button>
				))}
			</Section>

			<Section
				flex
				label='Colors'>
				{colors.map((color) => (
					<Button
						color={color}
						key={color}
						onClick={() =>
							showToast({
								color,
								content: (
									<>
										<User
											name='RenUI'
											description='Description'
											photoURL='/logo.jpg'
										/>
									</>
								),
							})
						}>
						{color}
					</Button>
				))}
			</Section>

			<Section
				flex
				label='Types'>
				{types.map((type) => (
					<Button
						key={type}
						onClick={() =>
							showToast({
								isRounded: true,
								type,
								content: type,
							})
						}>
						{type}
					</Button>
				))}
			</Section>

			<Section label='Rounded'>
				<Button
					onClick={() =>
						showToast({
							isRounded: true,
							content: '123',
						})
					}>
					Rounded
				</Button>
			</Section>
		</>
	)
}

export default ToastPage
