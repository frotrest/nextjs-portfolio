import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans p-6 dark:bg-black min-h-screen">
      <div className="max-w-md w-full text-center flex flex-col items-center">
        <span className="text-7xl sm:text-8xl font-black text-zinc-300 dark:text-zinc-800 tracking-wider">
          404
        </span>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-4">
          Сторінку не знайдено! 🗺️
        </h2>

        <p className="text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed text-sm sm:text-base">
          Ой! Схоже, такої сторінки не існує, або вона була переміщена за іншою адресою.
        </p>

        <Link
          href="/"
          className="mt-8 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition-all hover:scale-105 shadow-sm active:scale-95"
        >
          Повернутися на головну
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
