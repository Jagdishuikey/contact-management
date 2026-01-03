import axios from "axios";

const API = "http://localhost:5000/api/contacts";

export default function ContactList({ contacts, fetchContacts }) {
  const deleteContact = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchContacts();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Contact List
      </h2>

      {contacts.length === 0 ? (
        <p className="text-gray-500">No contacts found.</p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left hidden md:table-cell">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr
                key={c._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3">{c.name}</td>
                <td className="p-3 hidden md:table-cell">{c.email}</td>
                <td className="p-3">{c.phone}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => deleteContact(c._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
