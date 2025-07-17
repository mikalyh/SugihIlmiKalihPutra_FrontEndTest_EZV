export default function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="text-center py-12 px-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600 text-base">{description}</p>
    </header>
  );
}
