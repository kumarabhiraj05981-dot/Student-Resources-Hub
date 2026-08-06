import { useState } from "react";
import API from "../services/api";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [category, setCategory] = useState("notes");
  const [file, setFile] = useState<File | null>(null);

  const uploadFile = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subject", subject);
    formData.append("semester", semester);
    formData.append("category", category);
    formData.append("file", file);

    try {
      const res = await API.post("/resources/upload", formData);

      alert(res.data.message);

      setTitle("");
      setSubject("");
      setSemester("");
      setCategory("notes");
      setFile(null);
    } catch (err: any) {
      alert(err.response?.data?.message || "Upload Failed");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto" }}>
      <h1>Admin Upload</h1>

      <form onSubmit={uploadFile}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        />
        <br /><br />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="notes">Notes</option>
          <option value="pyq">PYQ</option>
          <option value="syllabus">Syllabus</option>
          <option value="ebooks">Ebooks</option>
        </select>

        <br /><br />

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(e.target.files ? e.target.files[0] : null)
          }
        />

        <br /><br />

        <button type="submit">Upload PDF</button>
      </form>
    </div>
  );
}