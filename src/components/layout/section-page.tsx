import React from "react";

interface SectionPageProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

const SectionPage: React.FC<SectionPageProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={`w-full overflow-x-hidden px-4 py-6 sm:px-8 md:px-16 xl:px-24 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionPage;
