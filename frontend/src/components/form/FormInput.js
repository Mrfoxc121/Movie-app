import React from "react";

export default function FormInput({name, label, placeholder, ...rest}) {
  return (
    <div className=" flex flex-col-reverse">
      <input
        id={name}
        name={name}
        className="bg-transparent rounded border-2 dark:border-dark-subtle text-light-subtle border-light-subtle w-full outline-none dark:focus:border-white focus:border-primary dark:text-white p-1 peer  transition"
        placeholder={placeholder}
        {...rest}
      />
      <label
        className="dark:text-dark-subtle text-light-subtle font-semibold dark:peer-focus:text-white peer-focus:text-primary transition self-start"
        htmlFor="email"
      >
        {label}
      </label>
    </div>
  );
}
