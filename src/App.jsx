import Footer from "./components/Footer"
import Navbar from "./components/Navbar" 
import AppRoutes from "./routes/AppRoutes"

 

const App = () => {
  return (
    <div className=" w-full h-full">
    <Navbar/> 
      <AppRoutes/>
    <Footer />
    </div>

  )
}

export default App