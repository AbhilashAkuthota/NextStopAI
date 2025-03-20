export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to NextStopAI! 🚀</h1>
      <p className="text-lg max-w-lg">
        Your AI-powered travel planner to design unique and surprise trips tailored to your preferences.
      </p>
      <a
        href="/get-started"
        className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition"
      >
        Get Started
      </a>
    </main>
  );
}
