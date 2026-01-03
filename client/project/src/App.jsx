import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const API = "http://localhost:5000/api/contacts";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get(API);
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Management App
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Form Section */}
          <div>
            <ContactForm fetchContacts={fetchContacts} />
          </div>

          {/* List Section */}
          <div>
            <ContactList contacts={contacts} fetchContacts={fetchContacts} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
