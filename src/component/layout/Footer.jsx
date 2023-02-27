import {FaHandshake} from 'react-icons/fa'
function Footer() {
    const footerYear=new Date().getFullYear()
    console.log(footerYear)
    return (
        <footer className="footer footer-center bg-gray-700 gap-1 py-6 ">          
           <div><FaHandshake size={30}/></div>
           <p>Copyrights &copy; {footerYear} All</p>
        </footer>
      );
}

export default Footer;