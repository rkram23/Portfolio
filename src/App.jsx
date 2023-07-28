// import { useState,useEffect } from "react";
// import './App.css'
// // function Container() {
// //   return (
// //   <>
// //   <div>
// //     <h1>Hello</h1>
// //   </div>
// //   </>
// //   )
// // }
// // function App() {

// //   const [counter,setCounter] =useState(0);

// // useEffect(()=>{
//   // AddValue();
//   // const interval=setInterval(()=>{
  
//   //   setCounter(counter+1);
//   // },1000);
//   // return()=>clearInterval(interval);
// //   const timeout=setTimeout(()=>{
// //     setCounter(counter+1);
// //   },2000);
// //   return()=>clearInterval(timeout);

// // },[counter]);
// // const AddValue =()=>{
// //   setCounter(counter+1);
// // };


// //   return(
// //    <>
// //   <div>
// //     {counter}
// //   </div>
// //   </>
// //   )
// // }

// // export default App;

import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <div className="left-section">
          <div className="logo-container">
            <h3 className='name'>RamKumar </h3>
          </div>
          <div className='button-div'><button className='now-available' >NowAvailable</button></div>
        </div>
        <div>
          {/* Right side */}
          <div className='button'>
         <svg xmlns="http://www.w3.org/2000/svg" width="27" height="17" viewBox="0 0 27 17" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.21787 13.8421C7.55896 13.8421 7.88726 13.8112 8.19424 13.743C8.50762 13.6748 8.78369 13.5661 9.01712 13.4062C9.24949 13.2527 9.44562 13.0416 9.58525 12.7741C9.72595 12.5087 9.79311 12.1633 9.79311 11.7466C9.79311 10.9301 9.56287 10.3492 9.10559 9.9974C8.64832 9.64992 8.03755 9.47724 7.28609 9.47724H3.49251V13.8421H7.21787ZM7.02281 7.09485C7.63997 7.09485 8.15374 6.94882 8.55878 6.65036C8.96063 6.35724 9.15569 5.87331 9.15569 5.20925C9.15569 4.84045 9.0896 4.5356 8.96063 4.29896C8.82526 4.06233 8.64832 3.87793 8.42448 3.74789C8.20064 3.61252 7.94695 3.51978 7.65489 3.46969C7.36709 3.41319 7.06544 3.39187 6.75633 3.39187H3.49251V7.09485H7.02281ZM7.47309 0.690918C8.23202 0.690918 8.9174 0.755938 9.54309 0.892375C10.1645 1.02348 10.6953 1.24413 11.142 1.54578C11.5843 1.8485 11.9297 2.24928 12.178 2.75452C12.4189 3.25337 12.5394 3.87799 12.5394 4.61453C12.5394 5.4129 12.3592 6.08016 11.9968 6.61311C11.6323 7.145 11.0961 7.57989 10.3798 7.91885C11.3551 8.19919 12.0768 8.69377 12.5575 9.39514C13.0382 10.1018 13.2738 10.9482 13.2738 11.9405C13.2738 12.7432 13.1192 13.436 12.8112 14.0169C12.5021 14.6074 12.0789 15.0839 11.5587 15.4527C11.0332 15.8247 10.431 16.0976 9.75521 16.2745C9.08688 16.4515 8.39404 16.5421 7.68308 16.5421H0V0.690918H7.47309Z" fill="#AF48FF"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4774 7.75897C22.1033 7.3454 21.4691 7.12049 20.6942 7.12049C20.191 7.12049 19.7743 7.2047 19.4417 7.37844C19.1145 7.54899 18.848 7.76004 18.6423 8.01053C18.4387 8.26422 18.3001 8.53176 18.2181 8.81849C18.1392 9.09882 18.0891 9.35144 18.0763 9.57528H23.2054C23.1287 8.77159 22.8548 8.17681 22.4774 7.75897ZM18.8557 13.7898C19.329 14.2503 20.0111 14.4827 20.8959 14.4827C21.5301 14.4827 22.079 14.3217 22.5405 14.0009C22.9978 13.6811 23.275 13.3389 23.3837 12.984H26.1604C25.7116 14.3654 25.0369 15.3514 24.1117 15.9451C23.2014 16.542 22.0865 16.8372 20.7893 16.8372C19.8864 16.8372 19.0721 16.6923 18.3409 16.4034C17.6128 16.1114 17.001 15.7021 16.4883 15.1691C15.9884 14.634 15.6004 14.0009 15.3222 13.2569C15.0493 12.5182 14.9108 11.6985 14.9108 10.8117C14.9108 9.95253 15.0536 9.15204 15.335 8.41016C15.6217 7.66722 16.0182 7.02448 16.5352 6.48726C17.0596 5.94684 17.6747 5.51941 18.3963 5.2071C19.1168 4.89692 19.9099 4.74023 20.7893 4.74023C21.7592 4.74023 22.6109 4.92783 23.34 5.30836C24.0659 5.68356 24.6617 6.192 25.1307 6.82835C25.5976 7.4647 25.9312 8.19165 26.138 9.00707C26.3458 9.82036 26.4183 10.671 26.3576 11.5621H18.0765C18.0765 12.4691 18.3814 13.3272 18.8557 13.7898Z" fill="#AF48FF"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4314 3.15402H23.8546V1.59033H17.4314V3.15402Z" fill="#AF48FF"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.87298 0.690918C4.16541 0.690918 0.345703 4.51063 0.345703 9.2182C0.345703 13.9258 4.16541 17.7455 8.87298 17.7455C13.5713 17.7455 17.4003 13.9258 17.4003 9.2182C17.4003 4.51063 13.5713 0.690918 8.87298 0.690918ZM14.505 4.62167C15.5224 5.86099 16.1328 7.44253 16.1513 9.15353C15.9108 9.10728 13.5062 8.61711 11.083 8.92231C11.0275 8.80209 10.9813 8.67259 10.9258 8.54311C10.7778 8.19167 10.6113 7.83097 10.4449 7.48877C13.127 6.39743 14.3478 4.82515 14.505 4.62167ZM8.87242 1.94883C10.7222 1.94883 12.4147 2.64248 13.7002 3.78007C13.5707 3.96504 12.4701 5.43559 9.88054 6.40669C8.68745 4.21475 7.36488 2.42051 7.16142 2.14305C7.70708 2.01357 8.28051 1.94883 8.87242 1.94883ZM5.77435 2.63305C5.96857 2.89201 7.26339 4.69551 8.47496 6.84119C5.07145 7.74756 2.06564 7.72907 1.74193 7.72907C2.2136 5.47239 3.73964 3.59491 5.77435 2.63305ZM1.58474 9.22757C1.58474 9.15359 1.58474 9.0796 1.58474 9.0056C1.89919 9.01485 5.43219 9.0611 9.06691 7.96976C9.27963 8.3767 9.47385 8.79288 9.65882 9.20908C9.56634 9.23683 9.4646 9.26458 9.37212 9.29231C5.61717 10.5039 3.61945 13.8149 3.45298 14.0924C2.29688 12.8068 1.58474 11.0958 1.58474 9.22757ZM8.87251 16.5062C7.18926 16.5062 5.63547 15.9327 4.4054 14.9709C4.53489 14.7027 6.01468 11.8541 10.1211 10.4205C10.1396 10.4113 10.1488 10.4113 10.1673 10.402C11.1939 13.0564 11.6101 15.2853 11.7211 15.9235C10.8425 16.3027 9.88062 16.5062 8.87251 16.5062ZM12.9331 15.2576C12.8591 14.8136 12.4707 12.6864 11.5181 10.0691C13.8025 9.70838 15.8002 10.3003 16.0499 10.3835C15.7355 12.409 14.5701 14.157 12.9331 15.2576Z" fill="#AF48FF"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4781 15.2237H12.9503V11.2656C12.9503 10.3218 12.9331 9.10777 11.6359 9.10777C10.3198 9.10777 10.1177 10.1359 10.1177 11.1974V15.2237H7.59039V7.08468H10.0165V8.19678H10.0503C10.3881 7.55699 11.2132 6.88239 12.4438 6.88239C15.0052 6.88239 15.4781 8.56819 15.4781 10.7595V15.2237ZM4.73971 5.97214C3.92893 5.97214 3.27283 5.31495 3.27283 4.50521C3.27283 3.69619 3.92893 3.03899 4.73971 3.03899C5.54848 3.03899 6.20565 3.69619 6.20565 4.50521C6.20565 5.31495 5.54848 5.97214 4.73971 5.97214ZM3.4739 15.2237H6.00359V7.08466H3.4739V15.2237ZM16.7375 0.690918H2.20412C1.50964 0.690918 0.945312 1.2414 0.945312 1.91979V16.5149C0.945312 17.1942 1.50964 17.7455 2.20412 17.7455H16.7375C17.4332 17.7455 17.9999 17.1942 17.9999 16.5149V1.91979C17.9999 1.2414 17.4332 0.690918 16.7375 0.690918Z" fill="#AF48FF"/>
</svg>
</div>
        </div>
      </div>
      <div>
        <h2 className='name1'>👋 Hi, I’m RamKumar</h2>
      </div>
      <div>
        <p className='about'>I'm Studing <span className='p2b'>B.Tech Information Technology</span> in Dr.NGP Insitute of Technology.<br></br>I Completed My Schooling in Venkateshwara Vidhyalaya High School...</p>
      </div>
        <div className='row'>
          <p className='p2'>I’m looking for new opportunities <br></br>Previously I worked at <span className='p2b'>Multiplica Talent Chile</span></p>
          <p className='p2'>Email: <br></br><span className='p2b'>ramkumara@drngpit.ac.in</span></p>
      </div>
      <div className='layout'>
        <div><img className='ar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhslCvaaB6QbHEsoq2elvpR_OGHioH2IvH0X6uaYvWGxvrr90CTdsSM3YrnCAGGxLIVU&usqp=CAU'></img></div>
      <div className='absolute'><h4 className='txt'>Ramkumar</h4></div>
      </div>
      <div className='absolute2'><h4 className='txt2'>coimbatore</h4></div>
      <div>
        <p className='p2'>👇 Check some projects</p>
        <div className='lay2'></div>
      </div>
      <div className='layout2'>
        <div className='lay3'></div>
      </div>
      <div className='layout3'>
        <div className='lay4'></div>
      </div>
      <div className='layout4'></div>
      <div className='lay5'><h4 className='ft'>🔤 Fonts</h4></div>
      <div className='layout5'></div>
      <div className='lay6'><h4 className='ft2'>🔀  Flow charts</h4></div>
      <div className='layout1'></div>
      <div className='layout6'></div>
      <div className='lay7'><h4 className='ft3'>🔍  User Research</h4></div>
      <div className='layout7'></div>
      <div className='lay8'><h4 className='ft8'>🎨  UI Kit</h4></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


