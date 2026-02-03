import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    // Outer container with overflow hidden to contain the blurred shapes
    <div className="isolate container box-shadow overflow-hidden bg-gray-900 py-24 sm:py-32 rounded-md">
      
      {/* Background blurred shape 1 */}
      <div
        className="absolute -top-40 left-[10%] -z-10 transform-gpu blur-3xl sm:left-[20%]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
        
      {/* Background blurred shape 2 */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[60%]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Main Content Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
        <p className="text-5xl font-semibold leading-8 text-white">404</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-300 max-w-xl mx-auto">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white backdrop-blur-sm transition-all"
          >
            Go back home
          </Link>
          <a href="#" className="text-sm font-semibold text-white hover:text-gray-300 transition-colors">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;