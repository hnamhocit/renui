import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { Avatar, Button, Input, Link, ToastContext } from 'renui'

import { db } from '@/config/firebase'

const Footer = () => {
	const [email, setEmail] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const [disabled, setDisabled] = useState(false)
	const { showToast } = useContext(ToastContext)

	const handleSubmit = async () => {
		if (email.trim().length === 0) {
			setErrorMessage('Email is required!')
			return
		} else if (
			!RegExp(
				/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
			).test(email)
		) {
			setErrorMessage('Please enter valid email')
			return
		}

		try {
			setErrorMessage('')
			setDisabled(true)

			const emailQuery = query(
				collection(db, 'registers'),
				where('email', '==', email),
			)

			const snapshot = await getDocs(emailQuery)

			if (snapshot.docs.length > 0) {
				setEmail('')
				setDisabled(false)
				showToast({
					type: 'danger',
					isRounded: true,
					content: 'Email already exists!',
				})
				return
			}

			await addDoc(collection(db, 'registers'), { email })
			setDisabled(false)
			setEmail('')
		} catch (error: unknown) {
			setDisabled(false)
			showToast({
				type: 'danger',
				content: JSON.stringify(error),
				isRounded: true,
			})
		}
	}

	return (
		<div className='flex items-start justify-evenly flex-wrap gap-5 pt-12 p-4 bg-gray-900 space-y-4 text-white'>
			<div className='space-y-3'>
				<div className='flex items-center gap-3'>
					<Avatar
						src='/logo.jpg'
						alt='Logo'
						isRounded
					/>
					<div className='font-semibold text-xl'>RenUI</div>
				</div>

				<div>
					<div className='font-medium'>Keep up to date</div>
					<div className='text-sm text-gray-400'>
						Join our newsletter for regular updates. No spam ever.
					</div>
				</div>

				<div className='flex items-center gap-3'>
					<Input
						variant='light'
						placeholder='Eg: example@gmail.com'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						errorMessage={errorMessage}
						isError={errorMessage.length > 0}
					/>

					<Button
						onClick={handleSubmit}
						disabled={disabled}
						isLoading={disabled}
						variant='border'
						color='secondary'
						isRounded>
						Subscribe
					</Button>
				</div>
			</div>

			<div className='space-y-3'>
				<div className='text-xl font-semibold'>Products</div>

				<Link
					isUnderline
					color='secondary'
					target='_blank'
					href='https://github.com/hnamhocit/renui-lib'
					className='underline block'>
					RenUI
				</Link>

				<Link
					isUnderline
					color='secondary'
					target='_blank'
					href='https://npmjs.com/package/renui'
					className='underline block'>
					RenUI NPM
				</Link>
			</div>

			<div className='space-y-3'>
				<div className='text-xl font-semibold'>Contact</div>

				<Link
					isUnderline
					color='secondary'
					target='_blank'
					href='https://facebook.com/hnamhocit'
					className='flex items-center gap-3 underline'>
					Facebook
				</Link>

				<Link
					isUnderline
					color='secondary'
					target='_blank'
					href='https://m.me/hnamhocit'
					className='flex items-center gap-3 underline'>
					Messenger
				</Link>

				<Link
					isUnderline
					color='secondary'
					target='_blank'
					href='https://github.com/hnamhocit'
					className='flex items-center gap-3 underline'>
					Github
				</Link>
			</div>
		</div>
	)
}

export default Footer
