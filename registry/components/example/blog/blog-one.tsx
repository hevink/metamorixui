const blogPosts = [
  {
    title: "How to build coffee inside your home in 5 minutes.",
    date: "March 21, 2020",
    category: "Lifestyle",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    imageUrl:
      "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
  },
  {
    title: "7 Tips to run your remote team faster and better.",
    date: "April 04, 2020",
    category: "Marketing",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    imageUrl:
      "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg",
  },
  {
    title: "5 Productivity tips to write faster at morning.",
    date: "May 12, 2020",
    category: "Productivity",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    imageUrl:
      "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
  },
];

const Blog = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
            Latest from blog
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:max-w-full lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <div>
                <div className="relative">
                  <a href="#" title="" className="aspect-w-4 aspect-h-3 block">
                    <img
                      className="size-full object-cover"
                      src={post.imageUrl}
                      alt={post.title}
                    />
                  </a>
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900">
                      {post.category}
                    </span>
                  </div>
                </div>
                <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black dark:text-white">
                    {post.title}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  {post.description}
                </p>
                <a
                  href="#"
                  title=""
                  className="mt-5 inline-flex items-center justify-center border-b-2 border-transparent pb-0.5 text-base font-semibold text-blue-600 transition-all duration-200 hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
