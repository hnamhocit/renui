'use client'

import { Tabs } from 'renui'

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
		</>
	)
}

export default TabsPage
