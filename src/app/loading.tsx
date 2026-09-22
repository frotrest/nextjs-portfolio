const Loading = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans p-6 dark:bg-black min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full shadow-sm"></div>

        <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 tracking-wide animate-pulse">
          Завантаження...
        </h2>
      </div>
    </div>
  );
};

export default Loading;
