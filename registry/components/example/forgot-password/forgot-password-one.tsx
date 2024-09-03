const forgotPassword = () => {
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-3 flex justify-center">
            <img
              src="https://ui.metamorix.com/favicon.ico"
              className="size-12"
            />
          </div>
          <h2 className="text-center text-xl font-bold leading-tight md:text-2xl">
            Forgot your password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
            Enter your email to reset your password
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900 dark:text-gray-100"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-600 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-neutral-800 dark:focus:ring-offset-neutral-800"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <button className="group flex h-10 w-full items-center justify-center rounded-md border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#fdba74] active:[box-shadow:none]">
                <span className="block group-active:[transform:translate3d(0,1px,0)]">
                  Get started now
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default forgotPassword;
