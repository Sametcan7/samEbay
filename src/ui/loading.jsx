export default function Loading() {
  return (
    <div className="flex mx-auto flex-col justify-center items-center h-screen">
      <div className="w-12 h-12 border-4  border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg">Loading...</p>
    </div>
  );
}
