import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./home";

function RedirectToHome() {
  return <Navigate to="/" replace />;
}


export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="*" element={<RedirectToHome />} />
      </Route>
    </Routes>
  )
}