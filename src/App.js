
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import CollegeDetail from './Pages/CollegeDetail';
import About from './Pages/About';
import CourseFilter from './Pages/CourseFilter';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/collegeDetail' element = {<CollegeDetail/>}/>
       <Route path='/about' element = {<About/>}/>
       <Route path='/course-filter' element = {<CourseFilter />}/>
       <Route path='/contact' element = {<Contact />}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
