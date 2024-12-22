export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white p-4 lg:mt-8 text-center bottom-0 w-full">
      <p>{new Date().getFullYear()} | TwinBlackbirds</p>
    </footer>
  );
}