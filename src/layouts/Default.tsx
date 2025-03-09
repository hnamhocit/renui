import { ReactNode } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const DefaultLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default DefaultLayout
