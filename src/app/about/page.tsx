const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Фріланс',
    period: '2024 – дотепер',
    description:
      'Розробка сучасних інтерфейсів, якісна верстка адаптивних сайтів за макетами з Figma. Активно займаюся оптимізацією швидкості завантаження сторінок та покращенням користувацького досвіду (UX).',
    isFreelance: true,
  },
  {
    role: 'Курс «Комплексна веб-розробка»',
    company: 'Назва Платформи',
    period: '2024',
    description:
      'Поглиблене вивчення React, Next.js, TypeScript, роботи з асинхронними запитами, REST API та сучасними збірниками проєктів.',
    isFreelance: false,
  },
  {
    role: 'Студент',
    company: 'Назва ВНЗ / Коледжу',
    period: '2020 – 2024',
    description:
      'Здобуття базових знань у галузі алгоритмів, структур даних, основ програмування та баз даних.',
    isFreelance: false,
  },
];

const About = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans p-6 dark:bg-black min-h-screen">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white text-center">
          Про мене
        </h2>

        <div className="flex flex-col gap-6 w-full py-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-zinc-100 dark:border-zinc-800 pb-2">
                  <h5 className="font-bold text-lg text-zinc-800 dark:text-zinc-200">
                    {exp.role}
                    <span
                      className={
                        exp.isFreelance ? 'text-blue-500' : 'text-zinc-500 dark:text-zinc-400'
                      }
                    >
                      ({exp.company})
                    </span>
                  </h5>
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full w-fit whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-2">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
