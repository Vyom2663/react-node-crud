import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import Users from './components/Users';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<Users />} /> {/* Use element prop for components */}
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
