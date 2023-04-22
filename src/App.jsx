import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TaskPage from "./pages/TaskPage";
import TaskFormPage from "./pages/TaskFormPage";
import {Toaster} from "react-hot-toast"


function App() {


  return (
   <Router>
    <Routes>
    <Route path="/" element={<TaskPage/>}></Route>
      <Route path="/tasks" element={<TaskPage/>}></Route>
      <Route path="/create-task" element={<TaskFormPage/>}></Route>
      <Route path="/create-task/:id" element={<TaskFormPage/>}></Route>
    </Routes>
    <Toaster></Toaster>
   </Router>
  )
}

export default App;