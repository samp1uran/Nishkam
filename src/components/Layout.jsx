import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Chat from "./Chat";
import WhatsappAndCall from "./WhatsappAndCall";
import { ToastContainer } from "react-toastify";
import { ActiveProvider } from "../Context/ActiveContext";
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ActiveProvider>
        
        <Header />
        <main className="pt-6 pb-4 flex-grow">
          <WhatsappAndCall />
          {/* <Chat /> */}
          <Outlet />
        </main>
        <Footer />
      </ActiveProvider>

      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        limit={3}
      />
    </div>
  );
}
