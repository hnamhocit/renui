import App from './App'
import Accordion from './pages/components/Accordion'
import Button from './pages/components/Button'
import Dropdown from './pages/components/Dropdown'
import Input from './pages/components/Input'
import Loading from './pages/components/Loading'
import Modal from './pages/components/Modal'

const routes = [
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'components',
		children: [
			{
				path: 'button',
				element: <Button />,
			},
			{
				path: 'input',
				element: <Input />,
			},
			{
				path: 'modal',
				element: <Modal />,
			},
			{
				path: 'dropdown',
				element: <Dropdown />,
			},
			{
				path: 'loading',
				element: <Loading />,
			},
			{
				path: 'accordion',
				element: <Accordion />,
			},
		],
	},
]

export default routes
