import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../util/classNames";
import { ItemType, items } from "./items";

export default function Example() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const filteredItems =
    query === ""
      ? []
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
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
            <Dialog.Panel className="max-w-xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
              <Combobox
                onChange={(item: ItemType) => (window.location.href = item.url)}
              >
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="w-full h-12 pr-4 text-gray-900 bg-transparent border-0 pl-11 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {filteredItems.length > 0 && (
                  <Combobox.Options
                    static
                    className="p-3 overflow-y-auto max-h-96 transform-gpu scroll-py-3"
                  >
                    {filteredItems.map((item) => (
                      <Combobox.Option
                        key={item.id}
                        value={item}
                        className={({ active }) =>
                          classNames(
                            "flex cursor-default select-none rounded-xl p-3",
                            active && "bg-gray-100"
                          )
                        }
                      >
                        {({ active }) => (
                          <>
                            <div
                              className={classNames(
                                "flex h-10 w-10 flex-none items-center justify-center rounded-lg",
                                item.color
                              )}
                            >
                              <item.icon
                                className="w-6 h-6 text-white"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-auto ml-4">
                              <p
                                className={classNames(
                                  "text-sm font-medium",
                                  active ? "text-gray-900" : "text-gray-700"
                                )}
                              >
                                {item.name}
                              </p>
                              <p
                                className={classNames(
                                  "text-sm",
                                  active ? "text-gray-700" : "text-gray-500"
                                )}
                              >
                                {item.description}
                              </p>
                            </div>
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}

                {query !== "" && filteredItems.length === 0 && (
                  <div className="px-6 text-sm text-center py-14 sm:px-14">
                    <ExclamationCircleIcon
                      type="outline"
                      name="exclamation-circle"
                      className="w-6 h-6 mx-auto text-gray-400"
                    />
                    <p className="mt-4 font-semibold text-gray-900">
                      No results found
                    </p>
                    <p className="mt-2 text-gray-500">
                      No components found for this search term. Please try
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
