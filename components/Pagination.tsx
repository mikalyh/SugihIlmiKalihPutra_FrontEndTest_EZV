"use client";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number;
  disabled?: boolean;
};

function getVisiblePages(current: number, total: number, maxVisible: number) {
  const half = Math.floor(maxVisible / 2);
  let start = Math.max(1, current - half);
  let end = Math.min(total, start + maxVisible - 1);

  if (end - start < maxVisible - 1) {
    start = Math.max(1, end - maxVisible + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 5,
  disabled = false,
}: PaginationProps) {
  const visiblePages = getVisiblePages(currentPage, totalPages, maxVisible);

  return (
    <div className="flex gap-2 items-center justify-center mb-12 flex-wrap">
      {/* First */}
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(1)}
          disabled={disabled}
          className={`border-transparent shadow-md px-3 py-1 rounded border ${
            disabled
              ? "bg-white text-gray-700 opacity-50 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer active:scale-95 duration-150 ease-in-out"
          }`}
        >
          First
        </button>
      )}

      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || disabled}
        className={`border-transparent shadow-md px-3 py-1 rounded border ${
          currentPage === 1 || disabled
            ? "bg-white text-gray-700 opacity-50 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer active:scale-95 duration-150 ease-in-out"
        }`}
      >
        {"<"}
      </button>

      {/* Page Numbers */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={disabled}
          className={`border-transparent shadow-md px-3 py-1 rounded border ${
            page === currentPage
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          } ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer active:scale-95 duration-150 ease-in-out"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || disabled}
        className={`border-transparent shadow-md px-3 py-1 rounded border ${
          currentPage === totalPages || disabled
            ? "bg-white text-gray-700 opacity-50 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer active:scale-95 duration-150 ease-in-out"
        }`}
      >
        {">"}
      </button>

      {/* Last */}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={disabled}
          className={`border-transparent shadow-md px-3 py-1 rounded border ${
            disabled
              ? "bg-white text-gray-700 opacity-50 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer active:scale-95 duration-150 ease-in-out"
          }`}
        >
          Last
        </button>
      )}
    </div>
  );
}
