import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import Users from './components/Users';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <Router>
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<Users />} /> {/* Use element prop for components */}
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
