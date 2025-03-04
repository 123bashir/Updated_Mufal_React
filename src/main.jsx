import React from "react"
 import ReactDOM from 'react-dom/client' 
 import "./index.scss"
 import MainApp from "./App.jsx"
import { AuthContextProvider } from "./context/AuthContext.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 

<AuthContextProvider>
<MainApp />

</AuthContextProvider>
   
  
  
  


  </React.StrictMode>
)
