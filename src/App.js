import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import ExamADD from "./components/ExamADD";
import StudentManagement from "./components/StudentManagement";
import ExamMode from "./components/ExamMode";
import StudentForm from "./StudentForm";
import PCAssign from "./components/PCAssign";
import ExamSchedule from "./components/ExamSchedule"; // Adjusted path
import Confirmation from "./components/Confirmation"; // Adjusted path
import ExamModeLayout from "./components/ExamModeLayout";
import Login from "./Login";
import AuthComponent from "./components/AuthComponent";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthComponent />}>
          <Route path="/" element={<MainLayout />}>
            {/* Home Routes */}
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="home/exam" element={<ExamADD />} />
            <Route path="home/register" element={<StudentForm />} />
            <Route path="home/assign" element={<PCAssign />} />
            <Route path="home/schedule" element={<ExamSchedule />} />

            {/* Other Routes */}
            <Route path="student-management" element={<StudentManagement />} />
            <Route path="exam-schedule" element={<ExamSchedule />} /> {/* Adjusted to use ExamSchedule */}
            

            {/* Confirmation Screen Route */}
            <Route
              path="confirmation"
              element={
                <Confirmation
                  message="Are you sure you want to activate this exam?"
                  onConfirmPath="/"
                  onCancelPath="/home"
                />
              }
            />
          </Route>

          <Route
            path="confirm-enter-exam-mode"
            element={
              <Confirmation
                message="Are you sure you want to enter Exam Mode?"
                onConfirmPath="/exam-mode"
                onCancelPath="/home"
              />
            }
          />

          {/* Exam Mode Route */}
          <Route
            path="exam-mode/:id"
            element={
              <ExamModeLayout>
                <ExamMode />
              </ExamModeLayout>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
