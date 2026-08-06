import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Ebooks() {
  const ebooks = [
    {
      title: "C Programming",
      author: "Yashwant Kanetkar",
    },
    {
      title: "Data Structures",
      author: "Schaum Series",
    },
    {
      title: "Operating System",
      author: "Galvin",
    },
    {
      title: "Computer Networks",
      author: "Forouzan",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">📖 E-Books</h1>
          <p className="mt-4 text-xl">
            Download Free Study Books
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {ebooks.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {book.title}
              </h2>

              <p className="mt-3 text-gray-600">
                ✍️ Author: {book.author}
              </p>

              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Read Book
              </button>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </>
  );
}