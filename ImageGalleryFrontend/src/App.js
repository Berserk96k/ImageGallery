import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import AdminDashBoard from './components/AdminDashBoard';
import ImageList from './components/ImageList';
import AddImage from './components/AddImage';
import DeleteImageList from './components/DeleteImageList';
function App() {
  return (
    <>
    <BrowserRouter>
       
      <div className="container-fluid1">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
      
          <Route path="/imagelist" element={<ImageList />} />
          <Route path="/login"  element={<Login />} />

          <Route path="/admin-dashboard"  element={<AdminDashBoard />} />
          <Route path="/imageupload"  element={<AddImage />} />
          <Route path="/imagedelete"  element={<DeleteImageList />} />
          </Routes>
      </div>
    
    </BrowserRouter>

    
</>
  );
}

export default App;
