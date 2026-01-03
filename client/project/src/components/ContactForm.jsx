import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/contacts";

export default function ContactForm({ fetchContacts }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [error, setError] = useState("");

  const isValid = form.name && form.phone;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!isValid) {
      setError("Name and Phone are required");
      return;
    }

    await axios.post(API, form);
    setForm({ name: "", email: "", phone: "", message: "" });
    setError("");
    fetchContacts();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Add New Contact
      </h2>

      <form onSubmit={submitHandler} className="space-y-4">
        <input
          className="w-full border rounded-lg bg-gray-500 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Name *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border rounded-lg bg-gray-500 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full border rounded-lg bg-gray-500 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Phone *"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          rows="3"
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          disabled={!isValid}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
