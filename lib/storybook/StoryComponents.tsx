import { HTMLProps } from "react";
import { ClipboardIcon } from "@heroicons/react/20/solid";

export const StoryWrapper = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <div className="min-h-full bg-white dark:bg-gray-900">
      <div className="px-4 py-8">{children}</div>
    </div>
  );
};

export const StoryCenter = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
      {children}
    </div>
  );
};

export const StoryCard = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <div className="rounded border border-gray-300 p-3 shadow-lg dark:border-blue-900 dark:shadow-blue-900">
      <div>{children}</div>
    </div>
  );
};
export const StoryCodeBlock = ({
  text,
  copy = text,
}: HTMLProps<HTMLDivElement> & { text: string; copy?: string }) => {
  return (
    <>
      <span className="mb-4 flex cursor-pointer items-center justify-between gap-1 rounded bg-blue-100 px-2 py-1 dark:bg-blue-900">
        <code
          className="overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-xs text-blue-900 dark:text-blue-300"
          onClick={() => {
            navigator.clipboard.writeText(text);
          }}
        >
          {text}
        </code>
        <ClipboardIcon
          className="h-4 w-4 text-blue-900 dark:text-blue-300"
          onClick={() => {
            navigator.clipboard.writeText(copy);
          }}
        />
      </span>
    </>
  );
};

export const StoryCardGroup = ({
  children,
  title,
  description,
}: HTMLProps<HTMLDivElement> & { title?: string; description?: string }) => {
  return (
    <>
      {title && (
        <div className="my-4 font-bold text-gray-800 dark:text-gray-200">
          {title}
        </div>
      )}
      {description && (
        <div className="my-2 text-sm text-gray-800 dark:text-gray-200">
          {description}
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6">
        {children}
      </div>
    </>
  );
};
