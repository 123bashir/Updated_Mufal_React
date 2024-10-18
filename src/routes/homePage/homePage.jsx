import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
function HomePage() {
  const {currentUser}=useContext(AuthContext)
  return (
     <div>
  
     </div>
  );
}

export default HomePage;
