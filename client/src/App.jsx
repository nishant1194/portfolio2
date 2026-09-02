import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skill from "./pages/Skills";
import Projects from "./pages/Projects";

import Chatbot from "./components/ChatBot";
import AllFaqs from "./components/AllFaqs";
import CreateFAQ from "./components/CreateFAQ";

function Mainpage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience /> 
      <Skill />
      <Projects />
      <Footer />
    </>
  );
}

function MainpageWithChatBot() {
  return (
    <>
      <Mainpage />
      <Chatbot />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainpageWithChatBot />,
    },
    {
      path: "/faqs",
      element: <AllFaqs />,
    },
    {
      path: "/create-faqs",
      element: <CreateFAQ />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;