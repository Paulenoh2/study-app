import { Link } from "react-router-dom";



const NavHeader = ()=>{

    return(

                <nav className ="header-navi">
                <h1>WELCOME TO CAMEROON HIGH COMMISION</h1>
                <Link to= '/'> HOME</Link>
                
                <Link to= '/about'>   ABOUT</Link>
                
                <Link to = '/services'>    SERVICES</Link>
                <Link to = '/contacts'>   CONTACTS</Link>
                <Link to = '/products'>   PRODUCTS</Link>
                <Link to = '/images'>   IMAGES</Link>
                <Link to = '/slides'>    AUTHOMATIC SLIDES</Link>
               
            </nav>

        

        
    )

}
export default NavHeader;