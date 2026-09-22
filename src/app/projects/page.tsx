const projects = [
  {
    title: 'Інтернет-магазин гаджетів',
    description:
      'Полнофункціональний онлайн-магазин із каталогом товарів, кошиком та фільтрацією. Створений з акцентом на високу швидкість завантаження та повну адаптивність під мобільні пристрої.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://github.com', // Ваша ссылка на проект
  },
  {
    title: 'Панель моніторингу (Dashboard)',
    description:
      'Інтерактивна адмін-панель для візуалізації статистики продажів та активності користувачів. Включає інтерактивні графіки, таблиці з сортуванням та підтримку темної теми.',
    tags: ['React', 'Tailwind CSS', 'Chart.js'],
    link: 'https://github.com',
  },
  {
    title: 'Трекер завдань (Task Tracker)',
    description:
      'Зручний планувальник завдань із можливістю групування за проєктами, встановлення дедлайнів та збереженням усіх даних у локальне сховище (LocalStorage) браузера.',
    tags: ['React', 'TypeScript', 'CSS Modules'],
    link: 'https://github.com',
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans p-6 dark:bg-black min-h-screen">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white text-center mb-8">
          Мої проєкти
        </h2>
        <div className="flex flex-col gap-6 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                  <h5 className="font-bold text-lg text-zinc-800 dark:text-zinc-200">
                    {project.title}
                  </h5>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-xs font-medium text-blue-500 hover:underline bg-blue-50 dark:bg-blue-950/30 px-2.5 py-1 rounded-full whitespace-nowrap"
                  >
                    GitHub →
                  </a>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
