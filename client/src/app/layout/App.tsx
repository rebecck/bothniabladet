import { useEffect, useState } from "react";
import { Image } from "../models/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import StartNavbar from "./Navbar";
import { Outlet } from "react-router-dom";
import agent from "../api/agent";

function App() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    agent.ImageCatalog.list().then(images => setImages(images))
  }, []) // avoid infinity loop 

  // Function to add images to the list
  function addImage() {
    setImages(prevState => [...prevState, 
      {
        id: prevState.length + 1,
        imgName: "Image " + (prevState.length + 1),
        description: 'Image description ' + (prevState.length + 1), 
    }])
  }

  return (
    <div>
      <StartNavbar />
      {/* <h1>Bothniabladet</h1>
      <ul>
        {images.map(image => (
          <li key={image.id}>{image.imgName} - {image.description}</li>
        ))}
      </ul>
      <button onClick={addImage}>Add product</button> */}
      <Outlet />
    </div>
  );
}

export default App;
