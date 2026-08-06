import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Syllabus() {
  const syllabus = [
    {
      semester: "Semester 1",
      branch: "BCA",
    },
    {
      semester: "Semester 2",
      branch: "BCA",
    },
    {
      semester: "Semester 3",
      branch: "BCA",
    },
    {
      semester: "Semester 4",
      branch: "BCA",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">📚 Syllabus</h1>
          <p className="mt-4 text-xl">
            Download Semester-wise Syllabus
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {syllabus.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {item.semester}
              </h2>

              <p className="mt-3 text-gray-600">
                🎓 Branch: {item.branch}
              </p>

              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
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