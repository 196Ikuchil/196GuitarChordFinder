import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import TopPage from './pages/TopPage';
import ChordSearch from './pages/chordsearch';
import Keep from './pages/keep';
import Fretboard from './pages/fretboard';
import NotFound from './pages/Page404';

import Diatonic from './pages/diatonic';
import Policy from './pages/Policy';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <TopPage /> },
        { path: 'scrapbook', element: <Diatonic /> },
        { path: 'chordsearch', element: <ChordSearch /> },
        { path: 'keep', element: <Keep /> },
        { path: 'fretboard', element: <Fretboard /> },
        { path: '*', element: <Navigate to="/" /> },
        { path: '/policy', element: <Policy /> }
      ]
    },
    { path: '*', element: <NotFound /> }
  ]);
}
