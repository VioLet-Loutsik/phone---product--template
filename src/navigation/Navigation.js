import { NavLink } from "react-router-dom";
import './navigation.css';

const Navigation = () => {
    return(
        <div className="classNavigation">
               <NavLink to='/' className='styleMenu'>HOME</NavLink>
               <NavLink to='/product' className='styleMenu'>PRODUCT</NavLink>
               <NavLink to='/contact' className='styleMenu'>CONTACT</NavLink>
        </div>     
    );
};

export default Navigation;