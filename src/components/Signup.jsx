import { Link } from "react-router-dom";
function Signup() {
  return (
    <>
      <div className="w-full mx-auto bg-white rounded-lg shadow dark:border md: mt-16 mb-16 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
            Create your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-900">
                    Remember me
                  </label>
                </div>
              </div>
              {/* <a
                href="#"
                className="text-sm font-medium text-gray-900 hover:underline"
              >
                Forgot password?
              </a> */}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white border-2 bg-primary-600 hover:bg-blue-600 shadow-2xl focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-900">
              Already have an account ?{" "}
              <Link to='/login' className="font-medium text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
