export default function Container({ children, className = "", id }) {
  const defaultClasses = "px-4 py-16 md:px-8 lg:px-16 lg:py-24 2xl:px-32";
  return (
    <div
      className={`
      ${defaultClasses} 
      ${className}
    `}
      id={id}
    >
      {children}
    </div>
  );
}
