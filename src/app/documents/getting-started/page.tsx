'use client'

import CodeDisplay from '@/components/CodeDisplay'

const GettingStarted = () => {
	return (
		<>
			<div className='space-y-3'>
				<div className='text-2xl font-bold'>Installation</div>
				<CodeDisplay
					code={`npm i renui
yarn i renui`}
				/>
			</div>

			<div className='space-y-3'>
				<div className='text-2xl font-bold'>Usage</div>
				<CodeDisplay
					code={`// "use client" if you are using nextjs
import "renui/style.css" // import at top of project
import { Button } from "renui"

<Button>Click me</Button>`}
				/>
			</div>
		</>
	)
}

export default GettingStarted
