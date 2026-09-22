const stack = ['JS', 'TS', 'React', 'HTML', 'CSS', 'Tailwind'];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans p-6 dark:bg-black min-h-screen">
      <div className="max-w-2xl w-full text-center flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
          Привіт, мене звати <span className="text-blue-500">Роман Сидорко!</span> 👋
        </h1>

        <h2 className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mt-3 font-medium">
          Я Front-end розробник
        </h2>

        <p className="text-zinc-500 dark:text-zinc-400 mt-6 leading-relaxed text-base max-w-xl">
          Я створюю сучасні, швидкі та зручні веб-додатки. Захоплююсь веб-розробкою, люблю
          вирішувати складні завдання та перетворювати макети на живий, інтерактивний код. Завжди
          прагну писати чистий код і слідувати кращим практикам розробки.
        </p>

        <div className="mt-10 w-full">
          <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-4">
            Мій основний стек
          </p>

          <ul className="flex flex-wrap justify-center gap-2.5">
            {stack.map((item, index) => (
              <li
                key={index}
                className="px-3.5 py-1.5 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:border-blue-500 dark:hover:border-blue-500 hover:scale-105"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
