import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './screens/Home';
import { Details } from './screens/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, {
    path: "/details",
    element: <Details />,
  },
], {basename: '/Prototype'});

function App() {
  return <RouterProvider  router={router} />;
}

export default App;
