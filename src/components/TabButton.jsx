// A button component used in a tab navigation system.
export default function TabButton({ children, isSelected, ...props }) {
  // ...props // Spread any additional props to the <button> element
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
