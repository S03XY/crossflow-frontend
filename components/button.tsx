"use client";

import { IconType } from "react-icons";

export const ButtonType1 = ({
  icon: Icon,
  label,
  callback,
  isDisabled,
}: {
  icon?: IconType;
  label: string;
  callback?: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <button
      onClick={() => {
        !isDisabled && callback && callback();
      }}
      className="capitalize text-sm flex justify-start items-center w-fit space-x-2"
    >
      <span>{label}</span>

      {Icon && <Icon />}
    </button>
  );
};
