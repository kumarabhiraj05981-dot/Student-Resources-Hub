import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">
          📚 Student Resources Hub
        </h1>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/pyq">PYQ</Link>
          <Link to="/syllabus">Syllabus</Link>
          <Link to="/ebooks">Ebooks</Link>
          <Link to="/login">Login</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  );
}