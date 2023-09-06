
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MainPage from './main_page/MainPage';

// function App() {
//   return (
//     <div>
//       <MainPage/>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './main_page/MainPage';
import './App.css'; // Import your custom CSS file

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., loading data) using setTimeout.
    // Replace this with your actual data loading logic.
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when the data is loaded.
    }, 2000); // Simulate a 2-second delay (adjust as needed).
  }, []);

  return (
    <div className="app-container">
      {isLoading ? (
        // Display the loading spinner while isLoading is true.
        <div className="spinner-container">
          <Spinner animation="border" role="status"  className="custom-spinner">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        // Render the MainPage component when isLoading is false.
        <MainPage />
      )}
    </div>
  );
}

export default App;
