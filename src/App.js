
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
import CourseDetail from './Pages/CourseDetail';
import Blog from './Pages/Blog';
import Faq from './Pages/Faq';
import JobsPlacement from './Pages/JobPlacement';
import PartnerTieUp from './Pages/Tieup';
import UniversityPage from './Pages/University';
import CollegePage from './Pages/TopCollege';
import SingleBlog from './Pages/SingleBlog';
import Integration from './Pages/Integration';
import Next from './Pages/Next';
import Form from './Pages/Form';

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
       <Route path='/courseDetail' element = {<CourseDetail/>}/>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/faq' element={<Faq/>}/>
       <Route path='/jobPlacement' element={<JobsPlacement/>}/>
       <Route path='/tieup' element={<PartnerTieUp/>}/>
       <Route path='/university' element={<UniversityPage/>}/>
       <Route path='/clglist' element={<CollegePage/>}/>
       <Route path='/singleBlog' element={<SingleBlog/>}/>
       <Route path='/ai' element={<Integration/>}/>
       <Route path='/next' element={<Next/>}/>
       <Route path='/form' element={<Form/>}/>
      


     </Routes>
     <Footer/> 
     </BrowserRouter>
    </>
  );
}

export default App;
