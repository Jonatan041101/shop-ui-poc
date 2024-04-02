import SearchBar from "./SearchBar";

export default function Header(): JSX.Element {
  return (
    <header className="flex items-start gap-4">
      <h1 className="text-2xl font-bold py-4 w-full max-w-[450px]">
        <span className="text-primary">Welcome! </span>
        <span>{`We're delighted to have you with us, ${"Jonatan"}.`}</span>
      </h1>
      <SearchBar />
    </header>
  );
}
