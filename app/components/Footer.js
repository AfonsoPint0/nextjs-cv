import Appear from "./Animations/Appear";

export default function Footer()  {
  return (
    <Appear>
      <div className="border-t-2 border-zinc-800 dark:border-zinc-400">
        <div className="flex justify-center">
          <a className="p-3 underline" target="none" href="mailto:afonso.pinto2710@hotmail.com">E-mail</a>
          <a className="p-3 underline" target="none" href="tel:912008773">Phone</a>
          <a className="p-3 underline" target="none" href="https://www.linkedin.com/in/afonso-pinto/">LinkedIn</a>
        </div>
        <div className="text-center">Afonso Pinto 2024</div>
      </div>
    </Appear>
  );
}