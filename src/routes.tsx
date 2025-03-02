import App from './App'
import AccordionPage from './pages/components/Accordion'
import AvatarPage from './pages/components/Avatar'
import BadgePage from './pages/components/Badge'
import ButtonPage from './pages/components/Button'
import CheckboxPage from './pages/components/Checkbox'
import DropdownPage from './pages/components/Dropdown'
import ImagePage from './pages/components/Image'
import InputPage from './pages/components/Input'
import ModalPage from './pages/components/Modal'
import RadioPage from './pages/components/Radio'
import SkeletonLoadingPage from './pages/components/SkeletonLoading'
import SpinnerPage from './pages/components/Spinner'
import TextAreaPage from './pages/components/TextArea'
import UserPage from './pages/components/User'

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
				element: <ButtonPage />,
			},
			{
				path: 'input',
				element: <InputPage />,
			},
			{
				path: 'modal',
				element: <ModalPage />,
			},
			{
				path: 'dropdown',
				element: <DropdownPage />,
			},
			{
				path: 'spinner',
				element: <SpinnerPage />,
			},
			{ path: 'skeleton-loading', element: <SkeletonLoadingPage /> },
			{
				path: 'accordion',
				element: <AccordionPage />,
			},
			{
				path: 'image',
				element: <ImagePage />,
			},
			{
				path: 'avatar',
				element: <AvatarPage />,
			},
			{
				path: 'badge',
				element: <BadgePage />,
			},
			{
				path: 'checkbox',
				element: <CheckboxPage />,
			},
			{
				path: 'radio',
				element: <RadioPage />,
			},
			{
				path: 'textarea',
				element: <TextAreaPage />,
			},
			{
				path: 'user',
				element: <UserPage />,
			},
		],
	},
]

export default routes
