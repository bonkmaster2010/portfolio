import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import AboutMe from './App.tsx';
import Projects from './components/Projects.tsx';
import Other from './components/OtherProjects.tsx';
import Contact from './components/Contact.tsx';
import NotFound from './components/NotFound.tsx';

createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
 <Routes>
  <Route element={<Layout/>}>
   <Route path='/' element={<AboutMe/>}/>
   <Route path='/projects' element={<Projects/>} />
   <Route path="/other" element={<Other/>}/>
   <Route path='/services' element={<Contact />}/>
   <Route path='*' element={<NotFound/>}/>
  </Route>
 </Routes>
 </BrowserRouter>
)
