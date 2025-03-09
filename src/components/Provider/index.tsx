'use client'

import { ReactNode } from 'react'
import { ToastProvider } from 'renui'

import DefaultLayout from '@/layouts/Default'

const Provider = ({ children }: { children: ReactNode }) => {
	return (
		<ToastProvider>
			<DefaultLayout>{children}</DefaultLayout>
		</ToastProvider>
	)
}

export default Provider
