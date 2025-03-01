import './globals.css'

import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import Header from './components/Header'
import routes from './routes'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			{routes.map((route) => {
				if (route.element) {
					return (
						<Route
							path={route.path}
							element={
								<>
									<Header />
									{route.element}
								</>
							}
						/>
					)
				} else if (route.children) {
					return (
						<Route path={route.path}>
							{route.children.map((_route) => (
								<Route
									path={_route.path}
									key={_route.path}
									element={
										<>
											<Header />
											{_route.element}
										</>
									}
								/>
							))}
						</Route>
					)
				}
			})}
		</Routes>
	</BrowserRouter>,
)
