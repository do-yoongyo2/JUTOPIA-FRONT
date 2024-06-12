import Link from "next/link";

export const LanguageHeader = () => {
  return (
    <header className="fixed left-0 right-0 top-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-between px-10 font-bold text-black">
      <Link
        className="text-4xl"
        href="/"
        style={{
          fontFamily: "TTLaundryGothicB",
          padding: "0.5rem 2rem 0 2rem",
        }}
      >
        주토피아
      </Link>
    </header>
  );
};
