import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Notes() {
  const notes = [
    "Java Programming",
    "DBMS",
    "Operating System",
    "Computer Network",
    "Python",
    "Data Structure",
  ];

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">📄 Notes</h1>
          <p className="mt-4 text-xl">
            Download Semester-wise Notes
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notes.map((note) => (
            <div
              key={note}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-bold">{note}</h2>
              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                View PDF
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}