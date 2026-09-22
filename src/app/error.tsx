'use client';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans p-6 dark:bg-black min-h-screen">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-950/30 flex items-center justify-center text-red-500 text-xl font-bold mb-4">
          ⚠️
        </div>

        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Щось пішло не так!</h2>

        <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm leading-relaxed max-w-xs break-words">
          {error.message}
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium rounded-xl text-sm transition-all shadow-sm w-full sm:w-auto"
        >
          Спробувати ще раз
        </button>
      </div>
    </div>
  );
};

export default Error;
