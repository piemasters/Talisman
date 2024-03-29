import { BellIcon } from "@heroicons/react/24/outline";
import { DemoContent } from "./DemoContent";
import { Mark } from "../../images/Mark";

export default function Example() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="shrink-0 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Mark className="h-8 w-auto" color="#4f46e5" />
          <div className="flex items-center gap-x-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your profile</span>
              <img
                className="h-8 w-8 rounded-full bg-gray-800"
                src="/src/assets/tailwind/profile-photo.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <aside className="sticky top-8 hidden w-44 shrink-0 lg:block">
          {/* Left column area */}
          <div className="relative h-[576px] overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
            <DemoContent />
          </div>
        </aside>

        <main className="flex-1">
          {/* Main area */}
          <div className="relative h-[576px] overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75 lg:h-[1024px]">
            <DemoContent />
          </div>
        </main>

        <aside className="sticky top-8 hidden w-96 shrink-0 xl:block">
          {/* Right column area */}{" "}
          <div className="relative h-[576px] overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
            <DemoContent />
          </div>
        </aside>
      </div>
    </div>
  );
};
