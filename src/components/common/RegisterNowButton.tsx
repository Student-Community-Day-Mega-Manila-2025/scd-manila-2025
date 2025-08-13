import React from "react";

type RegisterNowButtonProps = {
  href?: string;
  isActive?: boolean;
  className?: string;
};

const RegisterNowButton: React.FC<RegisterNowButtonProps> = ({
  href = "https://tinyurl.com/AWSSCD-RegistrationForm",
  isActive = false,
  className = "",
}) => {
  const activeClass =
    "rounded-[30.545px] border-[color:var(--Hovered-borderline,#F8F7FC)] bg-[linear-gradient(137deg,_#CCF7ED_7.8%,_#01D5A4_59.9%,_#99EEDB_98.82%,_#34DDB6_126.64%)] shadow-[0_0_8.145px_0_#66F7F7]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-block no-underline ${className}`}
    >
      <span
        className={`inline-block rounded-[25px] border-[1.018px] border-[color:var(--Default-borderline,#01D5A5)] bg-transparent p-[9px] transition-all duration-200 group-hover:rounded-[30.545px] group-hover:border-[color:var(--Hovered-borderline,#F8F7FC)] group-hover:bg-[linear-gradient(137deg,_#00FFC6_7.8%,_#078265_59.9%,_#B3F2E4_98.82%,_#34DDB6_126.64%)] active:rounded-[30.545px] active:border-[color:var(--Hovered-borderline,#F8F7FC)] active:bg-[linear-gradient(137deg,_#CCF7ED_7.8%,_#01D5A4_59.9%,_#99EEDB_98.82%,_#34DDB6_126.64%)] active:shadow-[0_0_8.145px_0_#66F7F7] ${isActive ? activeClass : ""} `}
      >
        <span className="font-inter inline-block cursor-pointer bg-transparent px-5 py-2 text-[length:var(--text-sm)] leading-[1.2] font-bold tracking-[0.03em] text-white">
          REGISTER NOW
        </span>
      </span>
    </a>
  );
};

export default RegisterNowButton;
