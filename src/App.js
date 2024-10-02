import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import formData from "./assets/JSON/formData.json";
import PersonalInformationForm from "./Components/PersonalInformationForm";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        items={formData.form.groups}
        onSelect={setSelectedItem}
        selectedItem={selectedItem}
      />
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64 md:ml-64" : "ml-0"
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-4 md:ml-64 ml-0">
          <h1 className="text-2xl font-semibold	mb-4">Personal Information</h1>
          <PersonalInformationForm formData={formData.form.groups[selectedItem]} />
        </main>
      </div>
    </div>
  );
};

export default App;
