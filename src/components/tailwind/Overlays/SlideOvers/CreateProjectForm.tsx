import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import { team } from "./items";

export default function Example() {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                  <form className="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl">
                    <div className="flex-1 h-0 overflow-y-auto">
                      <div className="px-4 py-6 bg-indigo-700 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-white">
                            New Project
                          </Dialog.Title>
                          <div className="flex items-center ml-3 h-7">
                            <button
                              type="button"
                              className="relative text-indigo-200 bg-indigo-700 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-indigo-300">
                            Get started by filling in the information below to
                            create your new project.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <div className="px-4 divide-y divide-gray-200 sm:px-6">
                          <div className="pt-6 pb-5 space-y-6">
                            <div>
                              <label
                                htmlFor="project-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Project name
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  name="project-name"
                                  id="project-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Description
                              </label>
                              <div className="mt-2">
                                <textarea
                                  id="description"
                                  name="description"
                                  rows={4}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium leading-6 text-gray-900">
                                Team Members
                              </h3>
                              <div className="mt-2">
                                <div className="flex space-x-2">
                                  {team.map((person) => (
                                    <a
                                      key={person.email}
                                      href={person.href}
                                      className="relative rounded-full hover:opacity-75"
                                    >
                                      <img
                                        className="inline-block w-8 h-8 rounded-full"
                                        src={person.imageUrl}
                                        alt={person.name}
                                      />
                                    </a>
                                  ))}
                                  <button
                                    type="button"
                                    className="relative inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-400 bg-white border-2 border-gray-200 border-dashed rounded-full hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                  >
                                    <span className="absolute -inset-2" />
                                    <span className="sr-only">
                                      Add team member
                                    </span>
                                    <PlusIcon
                                      className="w-5 h-5"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <fieldset>
                              <legend className="text-sm font-medium leading-6 text-gray-900">
                                Privacy
                              </legend>
                              <div className="mt-2 space-y-4">
                                <div className="relative flex items-start">
                                  <div className="absolute flex items-center h-6">
                                    <input
                                      id="privacy-public"
                                      name="privacy"
                                      aria-describedby="privacy-public-description"
                                      type="radio"
                                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                                      defaultChecked
                                    />
                                  </div>
                                  <div className="text-sm leading-6 pl-7">
                                    <label
                                      htmlFor="privacy-public"
                                      className="font-medium text-gray-900"
                                    >
                                      Public access
                                    </label>
                                    <p
                                      id="privacy-public-description"
                                      className="text-gray-500"
                                    >
                                      Everyone with the link will see this
                                      project.
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <div className="relative flex items-start">
                                    <div className="absolute flex items-center h-6">
                                      <input
                                        id="privacy-private-to-project"
                                        name="privacy"
                                        aria-describedby="privacy-private-to-project-description"
                                        type="radio"
                                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                                      />
                                    </div>
                                    <div className="text-sm leading-6 pl-7">
                                      <label
                                        htmlFor="privacy-private-to-project"
                                        className="font-medium text-gray-900"
                                      >
                                        Private to project members
                                      </label>
                                      <p
                                        id="privacy-private-to-project-description"
                                        className="text-gray-500"
                                      >
                                        Only members of this project would be
                                        able to access.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="relative flex items-start">
                                    <div className="absolute flex items-center h-6">
                                      <input
                                        id="privacy-private"
                                        name="privacy"
                                        aria-describedby="privacy-private-to-project-description"
                                        type="radio"
                                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                                      />
                                    </div>
                                    <div className="text-sm leading-6 pl-7">
                                      <label
                                        htmlFor="privacy-private"
                                        className="font-medium text-gray-900"
                                      >
                                        Private to you
                                      </label>
                                      <p
                                        id="privacy-private-description"
                                        className="text-gray-500"
                                      >
                                        You are the only one able to access this
                                        project.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                          <div className="pt-4 pb-6">
                            <div className="flex text-sm">
                              <a
                                href="#"
                                className="inline-flex items-center font-medium text-indigo-600 group hover:text-indigo-900"
                              >
                                <LinkIcon
                                  className="w-5 h-5 text-indigo-500 group-hover:text-indigo-900"
                                  aria-hidden="true"
                                />
                                <span className="ml-2">Copy link</span>
                              </a>
                            </div>
                            <div className="flex mt-4 text-sm">
                              <a
                                href="#"
                                className="inline-flex items-center text-gray-500 group hover:text-gray-900"
                              >
                                <QuestionMarkCircleIcon
                                  className="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <span className="ml-2">
                                  Learn more about sharing
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end flex-shrink-0 px-4 py-4">
                      <button
                        type="button"
                        className="px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center px-3 py-2 ml-4 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
