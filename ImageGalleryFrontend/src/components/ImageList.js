import React ,{useEffect,useState}from 'react'
import axios from 'axios';


export default function ImageList() {
    const [images, setImages] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8082/getAll")
        .then(response => {
          setImages(response.data);
        })
        .catch(error => {
          console.error("Error fetching images:", error);
        });
    }, []);
  
    return (
      <div style={styles.container}>
        {images.map((image) => (
          <div key={image.id} style={styles.card}>
            <img
              src={`http://localhost:8082/download/${image.id}`}
              alt={image.name}
              style={styles.image}
            />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    );
}

const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      padding: "20px",
      justifyContent: "center"
    },
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      textAlign: "center",
      width: "200px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    },
    image: {
      width: "100%",
      height: "auto",
      objectFit: "cover",
      borderRadius: "4px"
    }
  };
  