import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  DocumentPlusIcon,
  FolderPlusIcon,
  FolderIcon,
  HashtagIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "../../util/classNames";

const projects = [
  { id: 1, name: "Workflow Inc. / Website Redesign", url: "#" },
  // More projects...
];
const recent = [projects[0]];
const quickActions = [
  { name: "Add new file...", icon: DocumentPlusIcon, shortcut: "N", url: "#" },
  { name: "Add new folder...", icon: FolderPlusIcon, shortcut: "F", url: "#" },
  { name: "Add hashtag...", icon: HashtagIcon, shortcut: "H", url: "#" },
  { name: "Add label...", icon: TagIcon, shortcut: "L", url: "#" },
];

export default function Example() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const filteredProjects =
    query === ""
      ? []
      : projects.filter((project) => {
          return project.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen p-4 overflow-y-auto sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="max-w-2xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-500 shadow-2xl divide-opacity-10 rounded-xl bg-opacity-80 ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter">
              <Combobox
                onChange={(item: { id: number; name: string; url: string }) =>
                  (window.location.href = item.url)
                }
              >
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-900 text-opacity-40"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="w-full h-12 pr-4 text-gray-900 bg-transparent border-0 pl-11 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {(query === "" || filteredProjects.length > 0) && (
                  <Combobox.Options
                    static
                    className="overflow-y-auto divide-y divide-gray-500 max-h-80 scroll-py-2 divide-opacity-10"
                  >
                    <li className="p-2">
                      {query === "" && (
                        <h2 className="px-3 mt-4 mb-2 text-xs font-semibold text-gray-900">
                          Recent searches
                        </h2>
                      )}
                      <ul className="text-sm text-gray-700">
                        {(query === "" ? recent : filteredProjects).map(
                          (project) => (
                            <Combobox.Option
                              key={project.id}
                              value={project}
                              className={({ active }) =>
                                classNames(
                                  "flex cursor-default select-none items-center rounded-md px-3 py-2",
                                  active &&
                                    "bg-gray-900 bg-opacity-5 text-gray-900"
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <FolderIcon
                                    className={classNames(
                                      "h-6 w-6 flex-none text-gray-900 text-opacity-40",
                                      active && "text-opacity-100"
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className="flex-auto ml-3 truncate">
                                    {project.name}
                                  </span>
                                  {active && (
                                    <span className="flex-none ml-3 text-gray-500">
                                      Jump to...
                                    </span>
                                  )}
                                </>
                              )}
                            </Combobox.Option>
                          )
                        )}
                      </ul>
                    </li>
                    {query === "" && (
                      <li className="p-2">
                        <h2 className="sr-only">Quick actions</h2>
                        <ul className="text-sm text-gray-700">
                          {quickActions.map((action) => (
                            <Combobox.Option
                              key={action.shortcut}
                              value={action}
                              className={({ active }) =>
                                classNames(
                                  "flex cursor-default select-none items-center rounded-md px-3 py-2",
                                  active &&
                                    "bg-gray-900 bg-opacity-5 text-gray-900"
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <action.icon
                                    className={classNames(
                                      "h-6 w-6 flex-none text-gray-900 text-opacity-40",
                                      active && "text-opacity-100"
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className="flex-auto ml-3 truncate">
                                    {action.name}
                                  </span>
                                  <span className="flex-none ml-3 text-xs font-semibold text-gray-500">
                                    <kbd className="font-sans">⌘</kbd>
                                    <kbd className="font-sans">
                                      {action.shortcut}
                                    </kbd>
                                  </span>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Combobox.Options>
                )}

                {query !== "" && filteredProjects.length === 0 && (
                  <div className="px-6 text-center py-14 sm:px-14">
                    <FolderIcon
                      className="w-6 h-6 mx-auto text-gray-900 text-opacity-40"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-sm text-gray-900">
                      We couldn't find any projects with that term. Please try
                      again.
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
