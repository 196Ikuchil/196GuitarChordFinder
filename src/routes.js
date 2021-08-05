import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import TopPage from './pages/TopPage';
import ChordSearch from './pages/chordsearch';
import Keep from './pages/keep';
import NotFound from './pages/Page404';

import Diatonic from './pages/diatonic';
import Policy from './pages/Policy';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/196GuitarChordFinder',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <TopPage /> },
        { path: 'scrapbook', element: <Diatonic /> },
        { path: 'chordsearch', element: <ChordSearch /> },
        { path: 'keep', element: <Keep /> },
        { path: '*', element: <Navigate to="/196GuitarChordFinder/" /> },
        { path: '/policy', element: <Policy /> }
      ]
    },
    { path: '*', element: <NotFound /> }
  ]);
}
