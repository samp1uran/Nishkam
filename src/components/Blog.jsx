import { NavLink } from "react-router-dom";

export default function Blog() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-64 bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            "url('https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-3xl font-bold z-10">BLOG</h1>
        <div className="absolute bottom-18 text-white text-sm z-10 flex gap-2">
          <NavLink
            to='/'
            className="hover:text-green-500 cursor-pointer transition duration-200"
          >
            Home
          </NavLink>
          <span>&gt;</span>
          <span className="hover:text-green-500 cursor-pointer transition duration-200">
            Blog
          </span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto my-8 flex flex-col sm:flex-row gap-6 px-4">
        {/* LEFT: Blog Cards */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Blog Card 1 */}
          <div className="bg-white border rounded-xl shadow overflow-hidden">
            <div className="relative">
              <img
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
                alt="Weekly Insights"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">UCC Weekly Updates</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                S.No. Act Notes Related Link 1 Income Tax CBDT notifies new
                income tax return forms for AY 2021-22 Notification No 21/2021
                Income Tax CBDT notifies provision of DTAA between India & Iran
                Notification No. 29/2021 Income Tax Income Tax 9th Amendment
                Rule, 2021 Notification No 31/2021
              </p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Read more
              </button>
            </div>
          </div>

          <div className="bg-white border rounded-xl shadow overflow-hidden">
            <div className="relative">
              <img
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
                alt="Weekly Insights"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">UCC Weekly Updates</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                S.No. Act Notes Related Link 1 Income Tax CBDT notifies new
                income tax return forms for AY 2021-22 Notification No 21/2021
                Income Tax CBDT notifies provision of DTAA between India & Iran
                Notification No. 29/2021 Income Tax Income Tax 9th Amendment
                Rule, 2021 Notification No 31/2021
              </p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Read more
              </button>
            </div>
          </div>

          <div className="bg-white border rounded-xl shadow overflow-hidden">
            <div className="relative">
              <img
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
                alt="Weekly Insights"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">UCC Weekly Updates</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                S.No. Act Notes Related Link 1 Income Tax CBDT notifies new
                income tax return forms for AY 2021-22 Notification No 21/2021
                Income Tax CBDT notifies provision of DTAA between India & Iran
                Notification No. 29/2021 Income Tax Income Tax 9th Amendment
                Rule, 2021 Notification No 31/2021
              </p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Read more
              </button>
            </div>
          </div>

          <div className="bg-white border rounded-xl shadow overflow-hidden">
            <div className="relative">
              <img
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
                alt="Weekly Insights"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">UCC Weekly Updates</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                S.No. Act Notes Related Link 1 Income Tax CBDT notifies new
                income tax return forms for AY 2021-22 Notification No 21/2021
                Income Tax CBDT notifies provision of DTAA between India & Iran
                Notification No. 29/2021 Income Tax Income Tax 9th Amendment
                Rule, 2021 Notification No 31/2021
              </p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Read more
              </button>
            </div>
          </div>

          <div className="bg-white border rounded-xl shadow overflow-hidden">
            <div className="relative">
              <img
                src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
                alt="Weekly Insights"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">UCC Weekly Updates</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                S.No. Act Notes Related Link 1 Income Tax CBDT notifies new
                income tax return forms for AY 2021-22 Notification No 21/2021
                Income Tax CBDT notifies provision of DTAA between India & Iran
                Notification No. 29/2021 Income Tax Income Tax 9th Amendment
                Rule, 2021 Notification No 31/2021
              </p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Read more
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT: Sticky Sidebar */}
        <aside className="hidden sm:block sm:w-1/3">
          <div className="sticky top-6 p-4 bg-white border rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Search</h3>
            <ul className="space-y-2 text-blue-600">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
