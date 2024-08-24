"use client";

export const ButtonType2 = ({
  label,
  callback,
  isDisabled,
}: {
  label: string;
  callback?: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <button
    className={`capitalize border border-white/30 rounded-lg w-full py-4 ${isDisabled && "bg-white/10 text-white/50"}`}
      onClick={() => {
        !isDisabled && callback && callback();
      }}
    >
      {label}
    </button>
  );
};
