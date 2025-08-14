import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css';
export default function SideBar() {
    return (
        <div className="sidebar">
        <h2 className="text-center text-white mt-5">Dashboard</h2>
        <Link to="/imageupload">Add image</Link>
        <Link to="/imagedelete">Delete image</Link>
       
       
        </div>  );
}
