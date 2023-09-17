import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  id: string;
};

export function Input({ label, id, ...rest }: InputProps) {
  return (
    <div className="mb-3 flex items-start flex-col gap-2">
      <label htmlFor={id} className="text-sm text-gray-400">
        {label}
      </label>
      <input
        name={id}
        id={id}
        placeholder={label}
        className="bg-zinc-800 border border-zinc-800 rounded-md placeholder:text-sm text-sm 
        w-full
        focus:border-emerald-500 focus:shadow-emerald-500 focus:ring-emerald-500
        "
        {...rest}
      />
    </div>
  );
}
