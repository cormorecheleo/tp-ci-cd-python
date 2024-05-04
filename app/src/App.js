import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from './components/home/home';
import Form from "./components/form/form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
