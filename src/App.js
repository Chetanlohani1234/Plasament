
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import CollegeDetail from './Pages/CollegeDetail';
import About from './Pages/About';
import CourseFilter from './Pages/CourseFilter';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/collegeDetail' element = {<CollegeDetail/>}/>
       <Route path='/about' element = {<About/>}/>
       <Route path='/course-filter' element = {<CourseFilter />}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
