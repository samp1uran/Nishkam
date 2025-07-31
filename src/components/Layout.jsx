import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Chat from "./Chat";
import { ToastContainer } from 'react-toastify'
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-20 p-4 flex-grow">
        <Chat/>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          toastClassName="toast-class"
          closeOnClick
          pauseOnHover
          draggable
        />
    </div>
  );
}
