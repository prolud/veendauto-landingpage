import { Route, Routes } from "react-router-dom";
import Home from "./home";

export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}