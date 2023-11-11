import './App.css';
import About from './Components/AboutPage/About';
import Courses from './Components/CoursesPage/Courses';

import Footer from './Components/Footer/Footer';
import HomePage from './Components/Homepage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import { Route } from 'react-router';
import { Routes } from 'react-router';

// import images



function App() {
  return (
    <div className="App">
       {/* carousel */}

       <Navbar/>
       <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/courses" element={<Courses/>}></Route>
      <Route path='/about' element={<About/>}></Route>

       </Routes>
      
      <Footer/>

      
      



 
      





    </div>
    
  );
}

export default App;
