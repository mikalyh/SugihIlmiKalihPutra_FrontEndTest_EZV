export default function Button({
  title,
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) {
  return (
    <div className="w-full max-w-xl px-4 mb-4">
      <button
        onClick={onClick}
        className="text-blue-600 hover:underline text-sm cursor-pointer active:scale-95 duration-150 ease-in-out"
      >
        {title}
      </button>
    </div>
  );
}
