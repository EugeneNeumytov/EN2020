import './Navbar.css'

const Navbar = () => {
    return(
       <div className="navbar">
           <div className="logo">Logo</div>
           <div className="nav">
               <ul>
                   <li>Start</li>
                   <li>About Me</li>
                   <li>Work</li>
                   <li>Contact</li>
               </ul>
           </div>
       </div>
    )
}

export default Navbar;