import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import TopPage from './pages/TopPage';
import ChordSearch from './pages/chordsearch';
import Keep from './pages/keep';
import NotFound from './pages/Page404';

import Diatonic from './pages/diatonic';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/toppage" replace /> },
        { path: 'toppage', element: <TopPage /> },
        { path: 'diatonic', element: <Diatonic /> },
        { path: 'chordsearch', element: <ChordSearch /> },
        { path: 'keep', element: <Keep /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <NotFound /> }
      ]
    },

    { path: '*', element: <NotFound /> }
  ]);
}
