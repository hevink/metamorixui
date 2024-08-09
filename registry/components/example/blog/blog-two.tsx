const blogPosts = [
  {
    title: "Mastering Home Coffee Brewing in Just 5 Minutes",
    date: "March 21, 2020",
    category: "Food & Drink",
    description:
      "Discover quick and easy methods to brew delicious coffee at home without the need for specialized equipment. Perfect for busy mornings.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
    authorImage: "https://i.pravatar.cc/100?img=3",
    author: "Michael Foster",
    authorTitle: "Co-Founder / CTO",
  },
  {
    title: "Effective Strategies for Managing Remote Teams",
    date: "April 04, 2020",
    category: "Business",
    description:
      "Explore actionable tips and techniques to enhance the productivity and cohesion of your remote team. Learn how to streamline communication and manage projects effectively.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/01/09/13/08/wooden-house-8497574_1280.jpg",
    authorImage: "https://i.pravatar.cc/100?img=1",
    author: "Lindsay Walton",
    authorTitle: "Front-end Developer",
  },
  {
    title: "Boost Your Morning Productivity with These 5 Tips",
    date: "May 12, 2020",
    category: "Personal Development",
    description:
      "Uncover simple yet powerful strategies to enhance your writing speed and productivity in the early hours of the day. Start your mornings on the right foot.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/07/31/23/56/spiderman-1560261_1280.jpg",
    authorImage: "https://i.pravatar.cc/100?img=4",
    author: "Tom Cook",
    authorTitle: "Director of Product",
  },
];

const Blog = () => {
  return (
    <div className="mx-auto my-10 max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-gray-100">
          From the blog
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl leading-7 text-gray-600 dark:text-gray-400">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-lg gap-5 gap-y-10 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.title} className="flex flex-col overflow-hidden">
            <div className="mb-6 shrink-0">
              <img
                className="h-56 w-full rounded-xl object-cover"
                src={post.imageUrl}
                alt={post.title}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-5 text-sm font-medium leading-5">
                  <time dateTime={post.date}>{post.date}</time>
                  <p className="text-indigo-600">{post.category}</p>
                </div>
                <a href="#" className="block">
                  <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-600 dark:text-gray-300">
                    {post.description}
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="size-10 rounded-full"
                    src={post.authorImage}
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium leading-5 text-gray-900 dark:text-gray-100">
                    {post.author}
                  </p>
                  <p className="text-sm leading-5 text-gray-500 dark:text-gray-300">
                    {post.authorTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
