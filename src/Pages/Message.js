import { FaMailBulk, FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const messages = [
  { id: 1, sender: "John Doe", subject: "New Project Proposal", timestamp: "10:30 AM" },
  { id: 2, sender: "Jane Smith", subject: "Meeting Reminder", timestamp: "Yesterday" },
  { id: 3, sender: "Alex Johnson", subject: "Budget Review", timestamp: "2 days ago" },
  { id: 4, sender: "Emily Brown", subject: "Client Feedback", timestamp: "3 days ago" },
  { id: 5, sender: "Michael Wilson", subject: "Team Building Event", timestamp: "1 week ago" },
  { id: 6, sender: "Alex Johnson", subject: "Budget Review", timestamp: "2 days ago" },
  { id: 7, sender: "Emily Brown", subject: "Client Feedback", timestamp: "3 days ago" },
  { id: 8, sender: "Michael Wilson", subject: "Team Building Event", timestamp: "1 week ago" },
];

export default function Messages() {
  return (
    <div className="p-4 md:p-8 border">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Messages</h1>
        <Link to='/compose'>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow hover:bg-blue-700">
            <FaMailBulk className="mr-2" /> Compose
          </button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:none focus:outline-none"
          />
        </div>
      </div>

      {/* Messages Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md border border-gray-200">
          <thead className="bg-gray-300">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Sender</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Subject</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr
                key={message.id}
                className="border-t hover:bg-gray-100 cursor-pointer"
              >
                <td className="px-4 py-3 font-semibold ">{message.sender}</td>
                <td className="px-4 py-3 font-light ">{message.subject}</td>
                <td className="px-4 py-3">{message.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <button className="flex items-center px-4 py-2 text-sm font-medium border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
          <FaChevronLeft className="mr-2" />
          Previous
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
          Next
          <FaChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
