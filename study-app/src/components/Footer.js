import { Link } from "react-router-dom";


const Footer = ()=>{

    return(

        <div className="link">
                <nav>
                    <h1>Footer</h1>

                    
                <Link to = '/'> HOME|</Link>
            
                <Link to = '/about'> www.paulamam.co.za|</Link>
                
                <Link to = '/services'>   SERVICES|</Link>
                <Link to = '/products'>   PRODUCTS|</Link>
                <Link to = '/contacts'>   068 042 6550|</Link>
              <Link to = '/images'>images of our products|</Link>
              <Link to = '/lists'> |Products Lists </Link>
            </nav>

                <div>
                    <input type="text"/>
                    <button >Subscribe</button>
                    </div>
                    
         <div className="App-link">
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
     </div>
                 </div>

        
    )

}
export default Footer;