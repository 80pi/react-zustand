import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppContainer from "./pages/AppContainer";
import TodoContainer from "./pages/Todo/TodoContainer";
import Header from "./pages/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AppContainer />} />
          <Route path="/todo" element={<TodoContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
