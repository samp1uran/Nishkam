const allCourses = [
  {
    title: "Fundamentals of Accounting",
    description:
      "Learn the basics of accounting principles, journal entries, and financial statements.",
    price: 1999,
    image:
      "https://resources.tallysolutions.com/wp-content/uploads/2021/09/fundamentals-of-accounting-accounting-basics.jpg",
    duration: "6 weeks",
    certificate: true,
  },
  {
    title: "Business Economics",
    description:
      "Understand micro and macroeconomic concepts essential for business decision-making.",
    price: 1799,
    image:
      "https://msmesbusiness.com/wp-content/uploads/Types-of-Business-Economics-What-are-Business-Economics-Types-What-are-the-Types-of-Business-Economics.webp",
    duration: "5 weeks",
    certificate: true,
  },
  {
    title: "Financial Management",
    description:
      "Master concepts like capital budgeting, cost of capital, and working capital management.",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    duration: "8 weeks",
    certificate: true,
  },
  {
    title: "Taxation for Beginners",
    description:
      "Learn about GST, income tax filing, and basic tax planning for individuals and businesses.",
    price: 1499,
    image:
      "https://13karat.in/wp-content/uploads/2024/01/Income-tax-guide-.png",
    duration: "4 weeks",
    certificate: true,
  },
  {
    title: "Business Law Essentials",
    description:
      "Get familiar with contracts, company law, and legal structures in the business world.",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
    duration: "5 weeks",
    certificate: true,
  },
  {
    title: "Cost Accounting",
    description:
      "Explore methods of costing, cost control, and budgeting techniques used in organizations.",
    price: 2099,
    image:
      "https://finotor.com/wp-content/uploads/2023/01/cost-accounting-finotor.webp",
    duration: "6 weeks",
    certificate: true,
  },
  {
    title: "Entrepreneurship & Business Planning",
    description:
      "Learn how to develop business ideas, pitch to investors, and write effective business plans.",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80",
    duration: "5 weeks",
    certificate: true,
  },
  {
    title: "Digital Marketing for Commerce",
    description:
      "Understand SEO, email marketing, and social media strategies for business growth.",
    price: 1699,
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
    duration: "4 weeks",
    certificate: true,
  },
  {
    title: "Investment & Stock Market Basics",
    description:
      "An introductory course to equity, mutual funds, and risk management for beginners.",
    price: 1899,
    image:
      "https://www.bankrate.com/brp/2023/10/16124824/Investments-Stock-market-basics_9-tips-for-beginners.jpg?auto=webp&optimize=high&crop=16:9",
    duration: "6 weeks",
    certificate: true,
  },
  {
    title: "E-Commerce & Online Business",
    description:
      "Explore platforms like Shopify, Amazon, and how to run successful online stores.",
    price: 2199,
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=80",
    duration: "6 weeks",
    certificate: true,
  },
];

function Courses() {
  return (
    <>
      <div className="mt-8 min-h-screen max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {course.description}
                </p>
                <p className="mt-2 text-blue-600 font-semibold">
                  ₹{course.price}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Duration: {course.duration}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Certificate: {course.certificate ? "Yes" : "No"}
                </p>
                <button
                  to="/login"
                  className="mt-2 mb-1 text-center bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 shadow-xl transition-all"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
