import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Layout from './Layout'
import WomenPage from './Pages/Women'
import MenPage from './Pages/MenPage'
import KidsPage from './Pages/KidsPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "/women",
        element: <WomenPage />
      },
      {
        path: "/men",
        element: <MenPage />
      },
      {
        path: "/kids",
        element: <KidsPage />
      },

    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
