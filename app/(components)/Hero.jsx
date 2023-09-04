export default function Hero() {
  return (
    <section className="text-gray-800 bg-gray-100">
      <div className="container flex flex-col items-center px-4 py-16 mx-auto text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leadi sm:text-5xl">
          Quisquam necessita vel
          <span className="text-violet-600">laborum doloribus</span>delectus
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab
          amet vero eaque explicabo!
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-gray-50">
            Get started
          </button>
          <button className="px-8 py-3 m-2 text-lg text-gray-900 border border-gray-300 rounded">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
