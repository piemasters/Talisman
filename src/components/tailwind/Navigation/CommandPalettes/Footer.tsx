import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  ExclamationTriangleIcon,
  FolderIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "../../util/classNames";
import { ProjectType, people, projects } from "./items";

export default function Example() {
  const [open, setOpen] = useState(true);
  const [rawQuery, setRawQuery] = useState("");
  const query = rawQuery.toLowerCase().replace(/^[#>]/, "");

  const filteredProjects =
    rawQuery === "#"
      ? projects
      : query === "" || rawQuery.startsWith(">")
      ? []
      : projects.filter((project) =>
          project.name.toLowerCase().includes(query)
        );

  const filteredUsers =
    rawQuery === ">"
      ? people
      : query === "" || rawQuery.startsWith("#")
      ? []
      : people.filter((user) => user.name.toLowerCase().includes(query));

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setRawQuery("")}
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
            <Dialog.Panel className="max-w-xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
              <Combobox
                onChange={(item: ProjectType) =>
                  (window.location.href = item.url)
                }
              >
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="w-full h-12 pr-4 text-gray-900 bg-transparent border-0 pl-11 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setRawQuery(event.target.value)}
                  />
                </div>

                {(filteredProjects.length > 0 || filteredUsers.length > 0) && (
                  <Combobox.Options
                    static
                    className="p-4 pb-2 space-y-4 overflow-y-auto max-h-80 transform-gpu scroll-py-10 scroll-pb-2"
                  >
                    {filteredProjects.length > 0 && (
                      <li>
                        <h2 className="text-xs font-semibold text-gray-900">
                          Projects
                        </h2>
                        <ul className="mt-2 -mx-4 text-sm text-gray-700">
                          {filteredProjects.map((project) => (
                            <Combobox.Option
                              key={project.id}
                              value={project}
                              className={({ active }) =>
                                classNames(
                                  "flex cursor-default select-none items-center px-4 py-2",
                                  active && "bg-indigo-600 text-white"
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <FolderIcon
                                    className={classNames(
                                      "h-6 w-6 flex-none",
                                      active ? "text-white" : "text-gray-400"
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className="flex-auto ml-3 truncate">
                                    {project.name}
                                  </span>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                    {filteredUsers.length > 0 && (
                      <li>
                        <h2 className="text-xs font-semibold text-gray-900">
                          Users
                        </h2>
                        <ul className="mt-2 -mx-4 text-sm text-gray-700">
                          {filteredUsers.map((user) => (
                            <Combobox.Option
                              key={user.id}
                              value={user}
                              className={({ active }) =>
                                classNames(
                                  "flex cursor-default select-none items-center px-4 py-2",
                                  active && "bg-indigo-600 text-white"
                                )
                              }
                            >
                              <img
                                src={user.imageUrl}
                                alt=""
                                className="flex-none w-6 h-6 rounded-full"
                              />
                              <span className="flex-auto ml-3 truncate">
                                {user.name}
                              </span>
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Combobox.Options>
                )}

                {rawQuery === "?" && (
                  <div className="px-6 text-sm text-center py-14 sm:px-14">
                    <LifebuoyIcon
                      className="w-6 h-6 mx-auto text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-semibold text-gray-900">
                      Help with searching
                    </p>
                    <p className="mt-2 text-gray-500">
                      Use this tool to quickly search for users and projects
                      across our entire platform. You can also use the search
                      modifiers found in the footer below to limit the results
                      to just users or projects.
                    </p>
                  </div>
                )}

                {query !== "" &&
                  rawQuery !== "?" &&
                  filteredProjects.length === 0 &&
                  filteredUsers.length === 0 && (
                    <div className="px-6 text-sm text-center py-14 sm:px-14">
                      <ExclamationTriangleIcon
                        className="w-6 h-6 mx-auto text-gray-400"
                        aria-hidden="true"
                      />
                      <p className="mt-4 font-semibold text-gray-900">
                        No results found
                      </p>
                      <p className="mt-2 text-gray-500">
                        We couldn’t find anything with that term. Please try
                        again.
                      </p>
                    </div>
                  )}

                <div className="flex flex-wrap items-center bg-gray-50 px-4 py-2.5 text-xs text-gray-700">
                  Type{" "}
                  <kbd
                    className={classNames(
                      "mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2",
                      rawQuery.startsWith("#")
                        ? "border-indigo-600 text-indigo-600"
                        : "border-gray-400 text-gray-900"
                    )}
                  >
                    #
                  </kbd>{" "}
                  <span className="sm:hidden">for projects,</span>
                  <span className="hidden sm:inline">to access projects,</span>
                  <kbd
                    className={classNames(
                      "mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2",
                      rawQuery.startsWith(">")
                        ? "border-indigo-600 text-indigo-600"
                        : "border-gray-400 text-gray-900"
                    )}
                  >
                    &gt;
                  </kbd>{" "}
                  for users, and{" "}
                  <kbd
                    className={classNames(
                      "mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2",
                      rawQuery === "?"
                        ? "border-indigo-600 text-indigo-600"
                        : "border-gray-400 text-gray-900"
                    )}
                  >
                    ?
                  </kbd>{" "}
                  for help.
                </div>
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
