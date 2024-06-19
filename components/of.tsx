const Card = ({ icon, title, description }: any) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300 mx-6 mb-3 dark:bg-gray-900 dark:text-white text-black p-6 transition transform hover:scale-105 duration-300">
      <div className="flex justify-center mb-4 text-5xl">{icon}</div>
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
