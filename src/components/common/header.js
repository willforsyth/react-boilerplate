import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
   return (
     <header>
       <nav>
         <IndexLink to="/" activeClassName="active">Home</IndexLink>
         {" | "}
         <Link to="about" activeClassName="active">About</Link>
         {" | "}
         <Link to="courses" activeClassName="active">Courses</Link>
       </nav>
     </header>
   );
};

export {Header};
