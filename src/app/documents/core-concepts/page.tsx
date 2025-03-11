'use client'

const CoreConcepts = () => {
	const classNames = { container: '', name: '', title: '' }
	return (
		<>
			<div className='space-y-3'>
				<div className='text-2xl font-bold'>Convention</div>

				<div className='border-2 p-4 relative rounded-md border-blue-600'>
					<div className='text-blue-600 font-semibold'>Container</div>

					<div className='border-2 p-4 rounded-md min-h-32 border-indigo-600'>
						<div className='text-indigo-600 font-semibold'>
							Main
						</div>

						<div className='flex items-center gap-3'>
							<div>
								<div className='border-2 rounded-full h-10 w-10 p-4 border-red-600'></div>
								<div className='text-red-600'>Avatar</div>
							</div>
							<div className='space-y-2'>
								<div className='h-10 p-2 w-24 border-2 rounded-md text-amber-600'>
									Title
								</div>

								<div className='h-10 p-2 w-16 border-2 rounded-md text-green-600'>
									Name
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='text-sm text-gray-700'>
					This is an example of user component we has convention, so
					props classNames will look like classNames=
					{JSON.stringify(classNames)}, main do not exists in
					classNames, you must be use className instead
				</div>

				<div className='text-sm text-gray-700'>
					All boolean props we use with prefix is like isRounded,...
					except some properties like checked
				</div>
			</div>

			<div className='space-y-3'>
				<div className='text-2xl font-bold'>Popular props</div>
				<div className='flex flex-wrap scrollbar-hide'>
					<div className='p-2 border flex-1'>className</div>
					<div className='p-2 border flex-1'>classNames</div>
					<div className='p-2 border flex-1 overflow-y-scroll scrollbar-hide'>
						color{' '}
						{JSON.stringify([
							'default',
							'primary',
							'success',
							'secondary',
							'danger',
							'warning',
						])}
					</div>
					<div className='p-2 border flex-1'>
						size {JSON.stringify(['sm', 'md', 'lg'])}
					</div>
					<div className='p-2 border flex-1'>isRounded</div>
				</div>
			</div>
		</>
	)
}

export default CoreConcepts
