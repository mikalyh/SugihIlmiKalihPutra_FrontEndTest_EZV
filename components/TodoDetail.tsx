export default function TodoDetail({ data }: { data?: Todo }) {
  return (
    <main className="w-full max-w-xl bg-white shadow-md rounded-lg p-4 mb-12">
      <div className="flex flex-col gap-4 h-full">
        {/* Completed label at top */}
        <div>
          <span
            className={`text-sm font-medium px-2 py-1 rounded-full ${
              data?.completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {data?.completed ? "Task Completed" : "Task Not Completed"}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          {data?.title || "-"}
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed">
          {JSON.stringify(data)}
        </p>

        {/* Bottom footer inside card */}
        <div className="mt-auto text-sm text-gray-500 pt-4">
          Created by{" "}
          <span className="font-medium text-gray-700">
            User {data?.userId || "-"}
          </span>
        </div>
      </div>
    </main>
  );
}
