import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Create from './components/Create/Create.jsx'
import Edit from './components/Update/Update.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Layout from './components/Layout/Layout'
import Read from './components/Read/Read'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: 'Create/',
        element: <Create />,
      },
      {
        path: 'Read/:id',
        element: <Read />,
      },
      {
        path: 'Update/:id',
        element: <Edit />,
      }
    ],
    errorElement: <NotFound />
  }
])

function App() {

  return (
    <div className='container mx-auto'>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
