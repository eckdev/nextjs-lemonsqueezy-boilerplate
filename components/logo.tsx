import Image from "next/image";

function Logo() {
  return (
    <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="h-10 w-10 rounded-full bg-primary p-2 text-white"
      viewBox="0 0 24 24"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
    <span className="ml-3 text-xl">Logo</span>
  </a>
  );
}

export { Logo };
