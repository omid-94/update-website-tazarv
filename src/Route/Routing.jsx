import { Routes ,Route} from 'react-router-dom';
import { DatabaseUpdate, Custom404 } from '../Pages'
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<DatabaseUpdate/>}/>
      <Route path="*" element={<Custom404/>}/>
    </Routes>
  //   <Routes>
  //     <Route path="/" element={<Home/>}/>
  //     <Route path="/aboutus" element={<AboutUs/>}/>
  //     <Route path="/contactus" element={<ContactUs/>}/>
  //     <Route path="/movies/:id" element={<MoviesDetails/>}/>
  //     <Route path="/movies" element={<Movies/>}/>
  //     <Route path="/search" element={<Search/>}/>
  //     <Route path="/tvseries" element={<TVSeries/>}/>
  //     <Route path="/signin" element={<SignIn/>}/>
  //     <Route path="/signup" element={<SignUp/>}/>
  //     <Route path="*" element={<Custom404/>}/>
  // </Routes>
  )
}

export default Routing
