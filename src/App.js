import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import ExamADD from "./components/ExamADD";
import StudentManagement from "./components/StudentManagement";
import Settings from "./components/Settings";
import ExamMode from "./components/ExamMode";
import StudentForm from "./StudentForm";
import PCAssign from "./components/PCAssign";
import ExamSchedule from "./ExamSchedule";
import Exam from "./components/ExamSchedule";
import Login from "./Login";
import Confirmation from "./components/Confirmation";
import ExamModeLayout from "./components/ExamModeLayout";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<MainLayout onLogout={handleLogout} />}>
              {/* Home Routes */}
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="home/exam" element={<ExamADD />} />
              <Route path="home/register" element={<StudentForm />} />
              <Route path="home/assign" element={<PCAssign />} />
              <Route path="home/schedule" element={<ExamSchedule />} />

              {/* Other Routes */}
              <Route path="student-management" element={<StudentManagement />} />
              <Route path="exam-schedule" element={<Exam />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Confirmation Screen Routes */}
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
              path="exam-mode"
              element={
                <ExamModeLayout>
                  <ExamMode />
                </ExamModeLayout>
              }
            />

            {/* Default Route */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
};

export default App;
