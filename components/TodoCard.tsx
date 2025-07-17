"use client";

import Link from "next/link";

export default function TodoCard({
  title,
  description,
  completed,
  href,
}: {
  title: string;
  description: string;
  completed: boolean;
  href: string;
}) {
  return (
    <Link href={href} className="block">
      <div
        className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-40 relative
                   transition-transform
                   active:scale-95 cursor-pointer"
      >
        {/* Status label */}
        <span
          className={`absolute top-2 left-2 text-xs font-medium px-2 py-1 rounded ${
            completed
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {completed ? "Completed" : "Not Completed"}
        </span>

        <h2 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2 mt-6">
          {title}
        </h2>
        <p className="text-sm text-gray-400 mt-auto">{description}</p>
      </div>
    </Link>
  );
}
