import React from 'react'
import Link from 'next/link'

const Testimonial = () => {
  return (
    <section>
   
    <div className="grid lg:grid-cols-2 lg:items-center gap-4 lg:gap-6 lg:h-[400px] max-w-4xl mx-auto relative px-4 lg:before:absolute lg:before:right-0 lg:before:w-[300px] lg:before:rounded-md lg:before:h-full lg:before:bg-[#FE6019]">
      <div className="flex items-center">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" className="object-contain h-[150px] max-sm:h-32 rounded-md" />
        <div className="ml-6">
          <div>
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200">John Doe</h4>
            <p className="text-xs text-gray-800 dark:text-gray-200 mt-0.5">johndoe23@gmail.com</p>
          </div>

          <div className="space-x-3 mt-6">
            <Link href='/'
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                <path
                  d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                  data-original="#010002" />
              </svg>
            </Link>
            <Link href='/'
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                  data-original="#03a9f4" />
              </svg>
            </Link>
            <Link href='/'
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                <path
                  d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                  data-original="#0077b5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <h2 className="text-gray-800 dark:text-gray-200 text-2xl font-semibold">Prompt Delivery and Enjoyable Dining Experience.</h2>
        <p className="mt-6 text-sm text-gray-800 dark:text-gray-200">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
      </div>
    </div>
    </section>
  )
}

export default Testimonial