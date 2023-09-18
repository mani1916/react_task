import { createContext, useState,useEffect } from "react";

const DataContext = createContext(); // Remove { Children }

export const DataProvider = ({ children }) => { // Destructure children
    
  const [art1, Setart1] = useState([]);
  const [art, Setart] = useState([
    {
      id: 1,
      name: 'mani'
    },
    {
      id: 2,
      name: 'guru'
    }
  ]);
  
  useEffect(() => {
    // Load data from localStorage when the component mounts
    // const storedArt1 = JSON.parse(localStorage.getItem('art1') || '[]');
    // const storedArt = JSON.parse(localStorage.getItem('art') || '[]');

    // Setart1(storedArt1);
    // Setart(storedArt);
  }, []);



  return (
    <DataContext.Provider value={{ art1, art, Setart,Setart1 }}>
      {children} {/* Render the child components */}
    </DataContext.Provider>
  );
};

export default DataContext;
