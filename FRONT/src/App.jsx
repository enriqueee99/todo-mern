import { Route, Routes } from "react-router-dom";
import CreateNote from "./pages/CreateNotePage";
import EditNote from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <div className="w-full max-w-[1200] mx-auto px-3.5">
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/createNote" element={<CreateNote></CreateNote>}></Route>
          <Route path="/editNote/:id" element={<EditNote></EditNote>}></Route>
        </Routes>
        <ToastContainer
          position="botton-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="light"
        ></ToastContainer>
      </div>
    </div>
  );
}

export default App;
