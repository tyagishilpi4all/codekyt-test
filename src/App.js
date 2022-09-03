import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/header';
import CoadingPage from "./pages/coading";
import CommentsPage from "./pages/comments";
import HomePage from './pages/home';
import CustomLayout from "./templates/customLayout"; 

const App = () => {
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/comments" element={<CommentsPage />}/>
          <Route path="/layout" element={<CustomLayout />}/>
          <Route path="/coding" element={<CoadingPage />}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
