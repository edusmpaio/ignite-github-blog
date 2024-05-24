import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'
import { DefaultLayout } from './layouts/Default'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:issueNumber',
        element: <Post />,
      },
    ],
  },
])
