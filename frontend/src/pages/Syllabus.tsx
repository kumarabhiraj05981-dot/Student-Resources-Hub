import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Syllabus() {
  const semesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
  ];

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">📚 Syllabus</h1>

          <p className="mt-4 text-xl">
            Latest University Semester-wise Syllabus
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {semesters.map((semester) => (
            <div
              key={semester}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-bold">
                {semester}
              </h2>

              <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                View Syllabus
              </button>
            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}