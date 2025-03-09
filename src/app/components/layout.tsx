import { ReactNode } from 'react'

const ComponentsLayout = ({ children }: { children: ReactNode }) => {
	return <div className='p-4 space-y-4'>{children}</div>
}

export default ComponentsLayout
