import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/Github/GithubContext";
import User from "./pages/User";
function App() {
  return (
    <GithubProvider>
    <Router>
    <div className="flex flex-col h-screen justify-between">
      <Navbar/>
      <main className="container mx-auto pb-12">

        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/users/:login" element={<User/>}/>
        <Route path="/notfound" element={<NotFound/>}/>
        <Route path="/*" element={<NotFound/>}/>
        </Routes>    
          
      </main>
      <Footer/>
    </div>
    </Router>
    </GithubProvider>
  );
}

export default App;
