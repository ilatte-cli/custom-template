import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';

const App = loadable(() => import('../App'));
const Index = loadable(() => import('../pages'));

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/index',
        element: <Index />
    }
]);

export default Router;
