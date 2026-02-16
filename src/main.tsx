import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'next-themes'
import './index.css' // Import Tailwind
import './scss/index.scss' // Import original SCSS

const rootElement = document.getElementById('root')
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <App />
            </ThemeProvider>
        </React.StrictMode>,
    )
}
