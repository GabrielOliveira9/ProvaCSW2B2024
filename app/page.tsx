import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Bem-vindo ao Portal de Receitas</h1>
      <Link href="/recipes"  className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
          Ver receitas
      </Link>
    </div>
  );
}
