import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home/HomePage.tsx'
import ProjectsPage from './pages/Projects/ProjectsPage.tsx'
import ErrorPage from './pages/Error/ErrorPage.tsx'
import Root from './pages/Root/Root.tsx'
import ProjectDetails from './pages/Projects/ProjectDetails.tsx'
import NewProject from './pages/Projects/NewProject.tsx'


const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetails />,
      },
      {
        path: "newProject",
        element: <NewProject />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
