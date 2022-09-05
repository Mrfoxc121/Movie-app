import React from "react";

export default function FormInput({name, label, placeholder, ...rest}) {
  return (
    <div className=" flex flex-col-reverse">
      <input
        id={name}
        name={name}
        className="bg-transparent rounded border-2 border-dark-subtle w-full outline-none focus:border-white text-white p-1 peer transition"
        placeholder={placeholder}
        {...rest}
      />
      <label
        className="text-dark-subtle font-semibold peer-focus:text-white transition self-start"
        htmlFor="email"
      >
        {label}
      </label>
    </div>
  );
}
