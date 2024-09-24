// import React from 'react'

// const Header = () => {
//   return (
//     <>

//        {/* HEADER SECTION START */}
//   <header  className="bg-edblue ed-header--2 relative z-[2] px-[7.9%] xxxxl:px-[6.5%] xxxl:px-[1%] lg:px-[15px] py-[25px] xxs:py-[16px] flex items-center justify-between to-be-fixed" style={{height:'70px'}}>
//     {/* <div className="logo xxs:max-w-[40%]">
//       <a href='/'>
//         <img src="assets/img/Plasaent Logo.png" alt="logo" className="logo" style={{marginTop:'20px'}}/>
//       </a> */}
//                <div className="max-w-[300px] xxs:max-w-full">
//           <a href="/" className="inline-block mb-[23px]">
//             <img src="assets/img/Plasaent Logo.png" style={{marginTop:'80px',backgroundColor:'transparent'}} alt="logo" />
//           </a>
//     </div>

//     <div className="flex lg:items-center lg:gap-[30px]">
//       <div className="flex lg:flex-col items-center gap-[60px] xxl:gap-[25px] xl:gap-[30px] md:gap-y-[15px]">
//         {/* search form */}
//         <form
//           action="#"
//           className="to-go-to-sidebar-in-mobile max-w-[455px] xxl:max-w-[395px] lg:max-w-[95%] lg:mx-auto border border-white/20 lg:border-black/20 rounded-[6px] overflow-hidden h-[60px] flex xl:hidden lg:flex lg:my-[10px]"
//         >
//           <input
//             type="text"
//             name="search"
//             id="ed-2-header-search"
//             className="w-full bg-transparent px-[20px] text-white lg:text-black focus:outline-0 focus-visible:outline-none"
//           />
//           <button type="submit" className="text-white lg:text-black pr-[20px]">
//             <i className="fa-solid fa-magnifying-glass" />
//           </button>
//         </form>
//         {/* nav */}
//         <ul className="to-go-to-sidebar-in-mobile ed-header-nav flex lg:flex-col gap-x-[43px] xxl:gap-x-[33px] font-kanit text-[17px] font-normal">
//           <li className="has-sub-menu relative">
//             <a href='/course-filter' role="button">Explore Courses</a>
//           </li>
//           <li>
//             <a href="/clglist">Top Colleges</a>
//           </li>
//           <li className="has-sub-menu relative">
//             <a role="button">More</a>
//             <ul className="ed-header-submenu" style={{textAlign:"left"}}>
//               <li>
//                 <a href="/tieup">Tie Up/Partner</a>
//               </li>
//               <li>
//                 <a href="/ai">AI Integration</a>
//               </li>
//               <li>
//                 <a href="/jobPlacement">Jobs & Placement</a>
//               </li>
//               <li>
//                 <a href="/about">About Us</a>
//               </li>
//               <li>
//                 <a href="/contact">Contact Us</a>
//               </li>
//               <li>
//                 <a href="/blog">Blogs</a>
//               </li>
//               <li>
//                 <a href="/faq">Q&As</a>
//               </li>
//               <li>
//                 <a href="/collegeDetail">Free Resources</a>
//               </li>
//               <li>
//                 <a href="/collegeDetail">Best Course for You(AI-Powered)</a>
//               </li>
//               <li>
//                 <a href="/collegeDetail">Profile Sync with Placement.com</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="/collegeDetail">Login</a>
//           </li>
//         </ul>
//         {/* right actions */}
//         <div className="flex items-center gap-x-[60px] xxl:gap-x-[25px] lg:gap-x-[20px]">

          
//         </div>
//       </div>
//       {/* mobile menu button */}
//       <button
//         type="button"
//         className="ed-mobile-menu-open-btn hidden lg:inline-block text-white text-[18px] hover:text-edyellow"
//       >
//         <i className="fa-solid fa-bars" />
//       </button>
//     </div>
//   </header>
//   {/* HEADER SECTION END */}
      
//     </>
//   )
// }

// export default Header;

import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubMenu = () => {
      setIsSubMenuOpen(!isSubMenuOpen);
  };

    const handleMouseEnter = () => {
        setIsSubMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setIsSubMenuOpen(false);
    };

    return (
        <header className="header1">
            <div className="logo1">
                <a href="/">
                    <img src="assets/img/Plasaent Logo.png" alt="logo" />
                </a>
            </div>

            <div className={`nav-container1 ${isMenuOpen ? 'open' : ''}`}>
                <form className="search-form1">
                    <input type="text" name="search" id="ed-2-header-search" placeholder="Search..." />
                </form>

                <button type="button" className="mobile-menu-button1" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars" />
                </button>

                <ul className={`nav-menu1 ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href='/course-filter'>Explore Courses</a></li>
                    <li><a href="/clglist">Top Colleges</a></li>
                    <li 
                        className="has-sub-menu1" 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <a role="button" onClick={toggleSubMenu}>More</a>
                        {isSubMenuOpen && (
                            <ul className="submenu1">
                                <li><a href="/tieup">Tie Up/Partner</a></li>
                                <li><a href="/ai">AI Integration</a></li>
                                <li><a href="/jobPlacement">Jobs & Placement</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="/blog">Blogs</a></li>
                                <li><a href="/faq">Q&As</a></li>
                                <li><a href="/collegeDetail">Free Resources</a></li>
                                <li><a href="/collegeDetail">Best Course for You (AI-Powered)</a></li>
                                <li><a href="/collegeDetail">Profile Sync with Placement.com</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="/collegeDetail">Login</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;





