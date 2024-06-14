import "./globals.css"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-gray-100 font-sans">
        <header className="bg-blue-500 text-white p-4">
          <h1 className="text-3xl font-bold">App de Receitas</h1>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer >
        </footer>
      </body>
    </html>
  );
}
