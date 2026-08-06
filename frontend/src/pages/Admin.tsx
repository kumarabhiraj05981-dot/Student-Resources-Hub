import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("notes");
  const [semester, setSemester] = useState(1);
  const [subject, setSubject] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/api/resources", {
        title,
        type,
        semester,
        subject,
        pdfUrl,
      });

      alert("✅ Resource Added Successfully");

      setTitle("");
      setType("notes");
      setSemester(1);
      setSubject("");
      setPdfUrl("");

    } catch (err) {
      alert("❌ Failed to Add Resource");
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-2xl mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Admin Panel
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            className="w-full border p-3 rounded"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className="w-full border p-3 rounded"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="notes">Notes</option>
            <option value="pyq">PYQ</option>
            <option value="syllabus">Syllabus</option>
            <option value="ebooks">E-books</option>
          </select>

          <input
            className="w-full border p-3 rounded"
            type="number"
            value={semester}
            onChange={(e) => setSemester(Number(e.target.value))}
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="PDF URL"
            value={pdfUrl}
            onChange={(e) => setPdfUrl(e.target.value)}
          />

          <button
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Add Resource
          </button>

        </form>
      </div>

      <Footer />
    </>
  );
}