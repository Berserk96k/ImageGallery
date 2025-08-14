import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import SideBar from './SideBar';

export default function DeleteImageList() {
  const [images, setImages] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:8082/getAll");
      setImages(response.data);
      setSelectedId(""); // Reset selected
    } catch (error) {
      setMessage("Failed to fetch images.");
    }
  };

  const handleDelete = async () => {
    if (!selectedId) {
      setMessage("Please select an image to delete.");
      return;
    }

    try {
      await axios.delete(`http://localhost:8082/delete/${selectedId}`);
      setMessage(`Image with ID ${selectedId} deleted successfully.`);
      fetchImages(); // Refresh list
    } catch (error) {
      setMessage("Failed to delete image.");
    }
  };

  return (
   <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
          <h2>Delete Image by Name</h2>
          <p className="upload-message">{message}</p>

          <select
            className="upload-input"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            <option value="">-- Select Image --</option>
            {images.map((img) => (
              <option key={img.id} value={img.id}>
                {img.name}
              </option>
            ))}
          </select>

          <button className="upload-button" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div> );
}