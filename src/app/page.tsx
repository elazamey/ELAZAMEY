export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to CELIA FASHION DESIGN
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover unique and elegant fashion designs
        </p>
        <a
          href="/portfolio"
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
        >
          View Portfolio
        </a>
      </div>
    </div>
  );
}
