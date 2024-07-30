import React from "react";

// Inspired by https://posthog.com

const Feature = () => {
  return (
    <section className="mt-12 mb-24 px-5">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl m-0 text-center mb-6 sm:mb-10 font-bold">
          <span className="bg-gradient-to-r bg-clip-text text-transparent from-orange-500 via-amber-500 to-yellow-500 ">
            Full control
          </span>{" "}
          of your customer data
        </h2>
        <div className="flex justify-center">
          <ul className="m-0 p-0 list-none inline-grid sm:grid-cols-2 justify-evenly relative  after:absolute after:w-full after:left-0 after:top-1/2 after:-translateY-1/2 before:absolute before:h-full before:top-0 before:left-1/2 after:-translateX-1/2  sm:after:block after:hidden sm:before:block before:hidden">
            <li className="relative md:max-w-md py-4 md:py-8 pl-16 pr-2 md:pl-20 md:pr-6 ">
              <span className="absolute left-4 md:left-8 top-4.5 md:top-6.5 inline-block size-8 text-primary dark:text-primary-dark opacity-60">
                <svg
                  className="LemonIcon"
                  width="100%"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0976 3.10613C12.0352 3.07966 11.9648 3.07965 11.9024 3.10613L4.65236 6.18189C4.55999 6.22107 4.5 6.31169 4.5 6.41203V13C4.5 17.1421 7.85786 20.5 12 20.5C16.1421 20.5 19.5 17.1421 19.5 13V6.41203C19.5 6.31169 19.44 6.22107 19.3476 6.18189L12.0976 3.10613ZM11.3165 1.72526C11.7533 1.53995 12.2467 1.53995 12.6835 1.72525L19.9335 4.80101C20.5801 5.07533 21 5.70965 21 6.41203V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13V6.41203C3 5.70965 3.41994 5.07533 4.06654 4.80101L11.3165 1.72526ZM15.7702 9.20976C16.0686 9.49708 16.0776 9.97187 15.7902 10.2702L11.4569 14.7702C11.3155 14.9171 11.1205 15 10.9167 15C10.7128 15 10.5178 14.9171 10.3764 14.7702L8.20976 12.5202C7.92244 12.2219 7.9314 11.7471 8.22977 11.4598C8.52814 11.1724 9.00292 11.1814 9.29024 11.4798L10.9167 13.1688L14.7098 9.22977C14.9971 8.93141 15.4719 8.92245 15.7702 9.20976Z"
                  />
                </svg>
              </span>
              <h5 className="text-lg font-bold m-0 pb-0 pr-4 text-[#b62ad9]">
                Privacy controls
              </h5>
              <p className="m-0 text-[15px] opacity-75">
                Track users without cookies, anonymize users, configure a
                reverse proxy
              </p>
            </li>
            <li className="relative md:max-w-md py-4 md:py-8 pl-16 pr-2 md:pl-20 md:pr-6 ">
              <span className="absolute left-4 md:left-8 top-4.5 md:top-6.5 inline-block size-8 text-primary dark:text-primary-dark opacity-60">
                <svg
                  className="LemonIcon"
                  width="100%"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 5.75C2 4.784 2.784 4 3.75 4h16.5c.966 0 1.75.784 1.75 1.75v12.5A1.75 1.75 0 0 1 20.25 20H3.75A1.75 1.75 0 0 1 2 18.25V5.75Zm1.75-.25a.25.25 0 0 0-.25.25v5.5h17v-5.5a.25.25 0 0 0-.25-.25H3.75Zm16.75 7.25h-17v5.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-5.5Z"
                  />
                  <path d="M7 8.375a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 7.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 8.375a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 7.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-6.75a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 7.25a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
                  />
                </svg>
              </span>
              <h5 className="text-lg font-bold m-0 pb-0 pr-4 text-[#30abc6]">
                Choose your hosting location
              </h5>
              <p className="m-0 text-[15px] opacity-75">
                Store user data in the US or EU depending on your needs
              </p>
            </li>
            <li className="relative md:max-w-md py-4 md:py-8 pl-16 pr-2 md:pl-20 md:pr-6 ">
              <span className="absolute left-4 md:left-8 top-4.5 md:top-6.5 inline-block size-8 text-primary dark:text-primary-dark opacity-60">
                <svg
                  className="LemonIcon"
                  width="100%"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.801 4.894c-.277.232-.301.38-.301.425 0 .046.024.194.301.426.274.229.714.468 1.323.684 1.212.43 2.936.71 4.876.71 1.94 0 3.664-.28 4.876-.71.61-.216 1.05-.455 1.323-.684.277-.232.301-.38.301-.426 0-.046-.024-.193-.301-.425-.274-.229-.714-.469-1.323-.685C15.664 3.78 13.94 3.5 12 3.5c-1.94 0-3.664.28-4.876.71-.61.215-1.05.455-1.323.684ZM18.5 7.344a7.274 7.274 0 0 1-1.123.5c-1.412.5-3.313.795-5.377.795-2.064 0-3.965-.295-5.377-.796A7.272 7.272 0 0 1 5.5 7.344V12c0 .028.015.165.294.392.273.222.713.456 1.324.667 1.214.418 2.94.691 4.882.691 1.942 0 3.668-.273 4.882-.691.61-.21 1.051-.445 1.324-.667.28-.227.294-.364.294-.392V7.344ZM20 5.32c0-.663-.381-1.192-.838-1.575-.46-.386-1.082-.7-1.785-.948C15.965 2.296 14.064 2 12 2c-2.064 0-3.965.295-5.377.796-.703.249-1.324.562-1.785.948C4.381 4.127 4 4.656 4 5.32v13.362c0 .663.381 1.192.838 1.575.46.386 1.082.7 1.785.948 1.412.5 3.313.796 5.377.796 2.064 0 3.965-.295 5.377-.796.703-.249 1.324-.563 1.785-.948.457-.383.838-.912.838-1.575V5.319Zm-1.5 8.669c-.338.185-.72.348-1.129.489-1.41.486-3.309.773-5.371.773-2.062 0-3.961-.287-5.371-.773a7.35 7.35 0 0 1-1.129-.489v4.693c0 .046.024.193.301.425.274.229.714.468 1.323.684 1.212.43 2.936.71 4.876.71 1.94 0 3.664-.28 4.876-.71.61-.215 1.05-.455 1.323-.684.277-.232.301-.38.301-.425v-4.693Z"
                  />
                </svg>
              </span>
              <h5 className="text-lg font-bold m-0 pb-0 pr-4 text-[#eb9d2a]">
                Full access to customer data
              </h5>
              <p className="m-0 text-[15px] opacity-75">
                API offers total access to customer and event data
              </p>
            </li>
            <li className="relative md:max-w-md py-4 md:py-8 pl-16 pr-2 md:pl-20 md:pr-6 ">
              <span className="absolute left-4 md:left-8 top-4.5 md:top-6.5 inline-block size-8 text-primary dark:text-primary-dark opacity-60">
                <svg
                  className="LemonIcon"
                  width="100%"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4.75C3 3.784 3.784 3 4.75 3h14.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25V4.75Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h14.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25H4.75Zm6.03 3.97a.75.75 0 0 1 0 1.06l-2.293 2.293a.25.25 0 0 0 0 .354l2.293 2.293a.75.75 0 1 1-1.06 1.06l-2.293-2.293a1.75 1.75 0 0 1 0-2.474L9.72 8.47a.75.75 0 0 1 1.06 0Zm2.44 0a.75.75 0 0 1 1.06 0l2.293 2.293a1.75 1.75 0 0 1 0 2.474L14.28 15.53a.75.75 0 1 1-1.06-1.06l2.293-2.293a.25.25 0 0 0 0-.354L13.22 9.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h5 className="text-lg font-bold m-0 pb-0 pr-4 text-[#2f80fa]">
                Check out the source code
              </h5>
              <p className="m-0 text-[15px] opacity-75">
                Audit the entire PostHog codebase on GitHub for compliance or
                just peace of mind
              </p>
            </li>
          </ul>
        </div>
        <div className="relative mt-12 lg:mt-8">
          <div className="grid grid-cols-2 relative lg:top-10 w-full max-w-md mx-auto lg:mb-0 mb-6">
            <div className="grid md:grid-cols-6 space-y-3 md:space-y-0 md:space-x-3 justify-center">
              <div className="col-span-1">
                <img
                  width={33}
                  src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/us.svg"
                  style={{
                    display: "inline-block",
                    width: 33,
                    height: "auto",
                    verticalAlign: "middle",
                  }}
                />
              </div>
              <div className="col-span-5">
                <h6 className="text-base m-0 leading-none">US Cloud</h6>
                <p className="m-0 text-sm md:text-[15px]">Hosted in Virginia</p>
              </div>
            </div>
            <div className="grid md:grid-cols-6 space-y-3 md:space-y-0 md:space-x-3 justify-center">
              <div className="col-span-1">
                <img
                  width={33}
                  src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/eu.svg"
                  style={{
                    display: "inline-block",
                    width: 33,
                    height: "auto",
                    verticalAlign: "middle",
                  }}
                />
              </div>
              <div className="col-span-5">
                <h6 className="text-base m-0 leading-none">EU Cloud</h6>
                <p className="m-0 text-sm md:text-[15px]">
                  Hosted in Frankfurt
                </p>
              </div>
            </div>
          </div>
          <div
            data-gatsby-image-wrapper=""
            className="gatsby-image-wrapper gatsby-image-wrapper-constrained w-full"
          >
            <div style={{ maxWidth: 2607, display: "block" }}>
              <img
                alt=""
                role="presentation"
                aria-hidden="true"
                src="https://posthog.com/static/d4ee772e51dcf1fa797b53f92663afa6/ea665/host-hogs.webp"
                style={{
                  maxWidth: "100%",
                  display: "block",
                  position: "static",
                }}
              />
            </div>
            <div
              aria-hidden="true"
              data-placeholder-image=""
              style={{
                opacity: 0,
                transition: "opacity 500ms linear",
                backgroundColor: "#080808",
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                objectFit: "cover",
              }}
            />
            <picture />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
