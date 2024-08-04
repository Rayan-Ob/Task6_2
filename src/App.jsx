import './App.css';
import About from './Components/AboutPage/About';
import Courses from './Components/CoursesPage/Courses';

import Footer from './Components/Footer/Footer';
import HomePage from './Components/Homepage/HomePage';
import Navbar from './Components/Navbar/Navbar';
// import { Route } from 'react-router';
// import { Routes } from 'react-router';
import { Routes, Route } from 'react-router-dom';


// import images



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route  path="/" element={<HomePage />} ></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path='/about' element={<About />}></Route>
        {/* <Route path='*'>
          <Redirect to = "/"></Redirect>

        </Route> */}

      </Routes>

      <Footer />

    </div>

  );
}

export default App;
