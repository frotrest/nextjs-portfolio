const contactInfo = [
  {
    label: 'Email',
    value: 'roman.sydorko@example.com',
    href: 'mailto:roman.sydorko@example.com',
  },
  {
    label: 'Телефон / Месенджер',
    value: '+380 (XX) XXX-XX-XX (Telegram)',
    href: 'https://t.me',
  },
];

const socialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com',
    label: '://github.com',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com',
    label: '://linkedin.com',
  },
];

const Contacts = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans p-6 dark:bg-black min-h-screen">
      <div className="flex flex-col gap-5 items-center max-w-2xl w-full text-center md:text-left">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
          Звязатися зі мною
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          Якщо у вас є цікаві пропозиції, проєкт для спільної роботи або ви просто хочете поставити
          запитання — пишіть, я завжди відкритий до спілкування!
        </p>

        <div className="flex justify-center items-center flex-wrap gap-6">
          <div className="p-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h2 className="font-bold text-lg text-zinc-800 dark:text-zinc-200 mb-3">
              Контактні дані
            </h2>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex flex-col">
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">{contact.label}</span>
                  <a
                    href={contact.href}
                    className="text-blue-500 hover:underline text-sm font-medium mt-0.5"
                  >
                    {contact.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h2 className="font-bold text-lg text-zinc-800 dark:text-zinc-200 mb-3">
              Соціальні мережі
            </h2>
            <ul className="space-y-3">
              {socialLinks.map((social, index) => (
                <li key={index} className="flex flex-col">
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    {social.platform}
                  </span>
                  <a
                    href={social.url}
                    target="_blank"
                    className="text-blue-500 hover:underline text-sm font-medium mt-0.5"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
