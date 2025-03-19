import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HomePage } from "@/pages/ui/Home/Home";
import { Login } from "@/pages/ui/Login/ui/Login";
import { Profile } from "@/pages/ui/Profile/Profile";
import { News } from "@/pages/ui/News/News";
import { Weather } from "@/pages/ui/Weather/WeatherPage";
import { Currency } from "@/pages/ui/Currency/Currency";
import { NotFound } from "@/pages/ui/NotFound/NotFound";
import { BaseLayout } from "./layout/BaseLayout";
import { ProtectedRoute } from "./providers/ui/router/ui/ProtectedRoute/ProtectedRoute";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<BaseLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
          </Route>
        </Route>

        <Route element={<BaseLayout />}>
          <Route path="/weather" element={<Weather />} />
          <Route path="/currency" element={<Currency />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default AppRouter;
