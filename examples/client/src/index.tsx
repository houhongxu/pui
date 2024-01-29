import { routeConfig } from './routes/config'
import '@/styles/global.css'
import 'high-order-ui/lib/index.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'viewerjs/dist/viewer.css'

const root = document.getElementById('root')

const router = createBrowserRouter(routeConfig)

if (root) {
  createRoot(root).render(<RouterProvider router={router}></RouterProvider>)
}
