import ThemeToggle from "./Navbar/ThemeToggle";

export default function Navbar({toggleTheme})  {
  return (
    <div className="p-3 w-full flex justify-between">
        <div className="text-2xl">
            <a>Afonso Pinto</a>
        </div>
        <ThemeToggle />
    </div>
  );
}