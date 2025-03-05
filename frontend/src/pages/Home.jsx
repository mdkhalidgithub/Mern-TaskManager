import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tasks from "../components/Tasks";
import MainLayout from "../layouts/MainLayout";
import Footer from "../components/Footer";

const Home = () => {
  const authState = useSelector((state) => state.authReducer);
  const { isLoggedIn, user } = authState;

  useEffect(() => {
    document.title = isLoggedIn ? `${user.name}'s Tasks` : "Task Manager";
  }, [isLoggedIn, user]);

  return (
    <MainLayout>
      {!isLoggedIn ? (
        <div className="bg-gradient-to-r from-blue-200 to-indigo-400 text-white h-[50vh] flex flex-col items-center justify-center text-center px-10">
          <h1 className="text-4xl font-bold">Welcome to Task Manager</h1>
          <p className="mt-4 text-lg">
            Organize your tasks efficiently and boost productivity.
          </p>
          <Link to="/signup" className="mt-6 bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-100 transition">
            Get Started
          </Link>
          <p className="h-50 mt-10 font-sans ">
          "Empower your productivity with our smart Task Manager—designed to help you organize, prioritize, 
          and achieve your goals effortlessly. Whether you're managing daily tasks, collaborating with a team, or tracking long-term projects, our intuitive platform ensures you stay on top of every deadline. With real-time tracking, seamless integration, and a user-friendly interface, your journey to efficiency starts here. Take control of your tasks, minimize stress, and maximize results—because your time matters!"



          </p>
         
          
        </div>
        
        
      ) : (
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">👋 Welcome, {user.name}!</h1>
          <Tasks />
        </div>
      )}
      
    </MainLayout>
  );
};

export default Home;
