const PortfolioSection = ({ image, title, description, demo, exp }: any) => {
  return (
    <div className="container mx-auto px-4 py-12 ">
      <div className="flex flex-col lg:flex-row items-center bg-white dark:bg-gray-900 dark:text-white text-black shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/4">
          <img
            src={image}
            alt="Portfolio Image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-4 text-red-700">{demo}</h1>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
        <div className="md:w-1/4">
          <img
            src={exp}
            alt="Portfolio Image"
            className="w-full h-full object-cover rounded-md hidden lg:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
