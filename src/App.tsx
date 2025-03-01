import { AiFillThunderbolt } from 'react-icons/ai'
import { FaBook } from 'react-icons/fa'

import Button from '../lib/components/Button'

export default function App() {
	return (
		<div className='min-h-screen space-y-7'>
			<div
				className='h-[calc(100vh-64px)] flex items-center justify-center bg-cover bg-center bg-no-repeat'
				style={{
					backgroundImage:
						'url(https://wallpapercat.com/w/full/b/a/9/1209998-3840x2160-desktop-4k-glow-in-the-dark-background-photo.jpg)',
				}}>
				<div className='flex flex-col text-white items-center gap-5'>
					<h1 className='text-5xl font-black'> React New UI </h1>
					<p className='text-2xl font-semibold'>
						Build by developers for developers
					</p>
					<div className='flex items-center gap-3'>
						<Button
							variant='ghost'
							rounded
							shadow>
							<FaBook size={20} />
							Docs
						</Button>

						<Button
							rounded
							shadow
							color='primary'>
							<AiFillThunderbolt size={20} />
							Get started
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
