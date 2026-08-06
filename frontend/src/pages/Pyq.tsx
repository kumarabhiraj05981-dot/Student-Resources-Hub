import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PYQ() {
  const pyqs = [
    {
      title: "Mathematics PYQ",
      semester: "Semester 1",
      year: "2025",
    },
    {
      title: "Physics PYQ",
      semester: "Semester 1",
      year: "2024",
    },
    {
      title: "C Programming PYQ",
      semester: "Semester 2",
      year: "2025",
    },
    {
      title: "Data Structures PYQ",
      semester: "Semester 3",
      year: "2024",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">📝 Previous Year Questions</h1>
          <p className="mt-4 text-xl">
            Download Semester-wise PYQs
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pyqs.map((pyq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {pyq.title}
              </h2>

              <p className="mt-3 text-gray-600">📚 {pyq.semester}</p>
              <p className="text-gray-600">📅 Year: {pyq.year}</p>

              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
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