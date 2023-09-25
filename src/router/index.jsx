import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootElement from './RootElement';

export const routes = createBrowserRouter(createRoutesFromElements(<Route path='*' element={<RootElement />}></Route>));
