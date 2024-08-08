import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <section>
      <div className="absolute inset-0 -z-10 mx-auto h-[400px] w-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] md:w-[600px]" />

      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="w-full md:max-w-sm xl:mx-auto ">
          <h2 className="text-center text-xl font-bold leading-tight md:text-2xl">
            {isSignIn ? "Sign in to your account" : "Create a new account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
            {isSignIn ? (
              <>
                Don&apos;t have an account?{" "}
                <a
                  href="#"
                  title=""
                  className="font-semibold text-black transition-all duration-200 hover:underline dark:text-white"
                  onClick={() => setIsSignIn(false)}
                >
                  Create a free account
                </a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a
                  href="#"
                  title=""
                  className="font-semibold text-black transition-all duration-200 hover:underline dark:text-white"
                  onClick={() => setIsSignIn(true)}
                >
                  Sign in
                </a>
              </>
            )}
          </p>

          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="flex w-full items-center space-x-2 rounded-lg border border-[#e4e4e7] p-1 dark:border-[#27272a]">
              <TabButton
                isActive={isSignIn}
                onClick={() => setIsSignIn(true)}
                label="Sign in"
              />
              <TabButton
                isActive={!isSignIn}
                onClick={() => setIsSignIn(false)}
                label="Sign up"
              />
            </div>
          </div>

          <form className="mt-8">
            <div className="space-y-5">
              {!isSignIn && (
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900 dark:text-gray-100"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-600 dark:text-gray-100 dark:placeholder:text-gray-400/50 dark:focus:ring-neutral-800 dark:focus:ring-offset-neutral-800"
                      type="text"
                      placeholder="Dau lipa"
                    />
                  </div>
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900 dark:text-gray-100"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-600 dark:text-gray-100 dark:placeholder:text-gray-400/50 dark:focus:ring-neutral-800 dark:focus:ring-offset-neutral-800"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900 dark:text-gray-100"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    title=""
                    className="text-sm font-semibold text-black hover:underline dark:text-white"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-600 dark:text-gray-100 dark:placeholder:text-gray-400/50 dark:focus:ring-neutral-800 dark:focus:ring-offset-neutral-800"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md bg-gradient-to-t from-blue-500 to-sky-500 px-3 py-2.5 font-semibold text-white transition-all duration-200 focus:outline-none"
                >
                  Get started <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>

          <div className="my-3">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-px w-14 bg-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">
                or continue with
              </span>
              <div className="h-px w-14 bg-gray-400" />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-200 focus:bg-gray-100 focus:text-black focus:outline-none dark:border-neutral-600 dark:bg-neutral-800/20 dark:text-gray-100 dark:hover:bg-neutral-700/40 dark:hover:text-white dark:focus:bg-neutral-700 dark:focus:text-white dark:focus:ring-1 dark:focus:ring-offset-1"
            >
              <span className="mr-2 inline-block">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 256 262"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  />
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  />
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  />
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  />
                </svg>
              </span>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({ isActive, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive
          ? "text-black dark:text-white"
          : "text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
      } relative w-full rounded-md px-2 py-1.5 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10">{label}</span>
      {isActive && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-black/10 dark:bg-white/10"
        />
      )}
    </button>
  );
};

export default Login;
