import Link from 'next/link';
import './globals.css';

const navLinks = [
  { name: 'Головна', href: '/' },
  { name: 'Проєкти', href: '/projects' },
  { name: 'Про мене', href: '/about' },
  { name: 'Контакти', href: '/contacts' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
          <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
            <Link href="/" className="text-lg font-bold tracking-tight hover:opacity-80">
              FR.dev
            </Link>

            <nav>
              <ul className="flex items-center gap-6 text-sm font-medium">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="w-full border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6 text-xs text-zinc-500 dark:text-zinc-400">
            <p>© {new Date().getFullYear()} Роман Сидорко. Всі права захищені.</p>
            <p>Built with Next.js & Tailwind</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
