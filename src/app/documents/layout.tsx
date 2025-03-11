import { ReactNode } from 'react'

const DocumentsLayout = ({ children }: { children: ReactNode }) => {
	return <div className='p-4 space-y-7'>{children}</div>
}

export default DocumentsLayout
