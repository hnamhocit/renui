import { resolve } from 'path'
import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		lib: {
			entry: resolve(__dirname, 'lib/main.js'),
			name: 'renui',
			fileName: 'renui',
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				globals: {
					React: 'react',
					ReactDOM: 'react-dom',
					ReactJsxRuntime: 'react/jsx-runtime',
				},
			},
		},
	},
})
