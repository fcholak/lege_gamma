/* eslint-disable @next/next/no-head-element */
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <main>
          <nav>
            <Link href="/">Upload</Link>
            <Link href="/documents">Manage</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
