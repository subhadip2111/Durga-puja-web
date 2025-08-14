import { useState } from "react";
import Navigation from "../components/ui/navigation";
import Footer from "../components/ui/footer";
import HomePage from "../components/sections/HomePage";
import SchedulePage from "../components/sections/SchedulePage";
import SocialActivitiesPage from "../components/sections/SocialActivitiesPage";
import ContactPage from "../components/sections/ContactPage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "schedule":
        return <SchedulePage />;
      case "social":
        return <SocialActivitiesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
