'use client'

import { colors, Tabs } from 'renui'

import Intro from '@/components/Intro'
import Section from '@/components/Section'

const TabsPage = () => {
	return (
		<>
			<Intro
				title='Tabs'
				description='Use to switch between pages'
			/>
			<Section
				code={`<Tabs
	data={[
		{
			title: 'Page 1',
			children: <div>Page 1</div>,
		},
		{
			title: 'Page 2',
			children: <div>Page 2</div>,
		},
		{
			title: 'Page 3',
			children: <div>Page 3</div>,
		},
		{
			title: 'Page 4',
			children: <div>Page 4</div>,
		},
	]}
/>`}
				label='Sample'>
				<Tabs
					data={[
						{
							title: 'Page 1',
							children: <div>Page 1</div>,
						},
						{
							title: 'Page 2',
							children: <div>Page 2</div>,
						},
						{
							title: 'Page 3',
							children: <div>Page 3</div>,
						},
						{
							title: 'Page 4',
							children: <div>Page 4</div>,
						},
					]}
				/>
			</Section>

			<Section
				code={`const colors = ${JSON.stringify(colors)}
				
return colors.map((color) => (
	<Tabs
		key={color}
		color={color}
		data={[
			{ title: 'tab 1', children: <div>Content 1</div> },
			{ title: 'tab 2', children: <div>Content 2</div> },
			{ title: 'tab 3', children: <div>Content 3</div> },
			{ title: 'tab 4', children: <div>Content 4</div> },
			{ title: 'tab 5', children: <div>Content 5</div> },
			{ title: 'tab 6', children: <div>Content 6</div> },
			{ title: 'tab 7', children: <div>Content 7</div> },
			{ title: 'tab 8', children: <div>Content 8</div> },
			{ title: 'tab 9', children: <div>Content 9</div> },
			{
				title: 'tab 10',
				children: <div>Content 10</div>,
			},
		]}
	/>
))
				`}
				label='Colors'>
				{colors.map((color) => (
					<Tabs
						key={color}
						color={color}
						data={[
							{ title: 'tab 1', children: <div>Content 1</div> },
							{ title: 'tab 2', children: <div>Content 2</div> },
							{ title: 'tab 3', children: <div>Content 3</div> },
							{ title: 'tab 4', children: <div>Content 4</div> },
							{ title: 'tab 5', children: <div>Content 5</div> },
							{ title: 'tab 6', children: <div>Content 6</div> },
							{ title: 'tab 7', children: <div>Content 7</div> },
							{ title: 'tab 8', children: <div>Content 8</div> },
							{ title: 'tab 9', children: <div>Content 9</div> },
							{
								title: 'tab 10',
								children: <div>Content 10</div>,
							},
						]}
					/>
				))}
			</Section>

			<Section
				code={`<Tabs
	isFullWidth
	data={[
		{
			title: 'Tab 1',
			children: <div>Content 1</div>,
		},
		{
			title: 'Tab 2',
			children: <div>Content 2</div>,
		},
	]}
/>`}
				label='Full width'>
				<Tabs
					isFullWidth
					data={[
						{
							title: 'Tab 1',
							children: <div>Content 1</div>,
						},
						{
							title: 'Tab 2',
							children: <div>Content 2</div>,
						},
					]}
				/>
			</Section>
		</>
	)
}

export default TabsPage
