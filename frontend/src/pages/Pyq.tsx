import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PYQ() {
  const pyqs = [
    "Java Programming 2024",
    "DBMS 2024",
    "Operating System 2023",
    "Computer Network 2023",
    "Python 2024",
    "Data Structure 2024",
  ];

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">📝 Previous Year Questions</h1>
          <p className="mt-4 text-xl">
            Download Previous Year Question Papers
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pyqs.map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-bold">{item}</h2>

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