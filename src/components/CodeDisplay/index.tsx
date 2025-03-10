import { FC, memo } from 'react'
import { CodeBlock, dracula } from 'react-code-blocks'
import { IoCopy } from 'react-icons/io5'
import { Button } from 'renui'

interface CodeDisplayProps {
	code: string
}

const CodeDisplay: FC<CodeDisplayProps> = ({ code }) => {
	return (
		<div className='space-y-2'>
			<div className='flex justify-end'>
				<Button
					variant='border'
					isRounded
					onClick={() => navigator.clipboard.writeText(code)}>
					<IoCopy />
					Copy
				</Button>
			</div>

			<CodeBlock
				text={code}
				language='jsx'
				showLineNumbers
				theme={dracula}
			/>
		</div>
	)
}

export default memo(CodeDisplay)
