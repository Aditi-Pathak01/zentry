import React from "react";

export default function Button({
  leftIcon,
  title,
  rightIcon,
  containerClass,
  id,
}) {
  return (
    <button
      id={id}
      className={`group relative w-fit bg-violet-50 rounded-full px-3 py-1.5 text-black cursor-pointer ${containerClass}`}
    >
      {leftIcon}
      <span>{title}</span>
      {rightIcon}
    </button>
  );
}
