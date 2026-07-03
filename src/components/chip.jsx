import 'flowbite';

const Chip = ({ text, color = 'blue' }) => {
  const colorClasses = {
    blue: "bg-brand-softer text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded",
    gray: "bg-neutral-secondary-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded",
    red: "bg-danger-soft text-fg-danger-strong text-xs font-medium px-1.5 py-0.5 rounded",
    green: "bg-success-soft text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded",
    yellow: "bg-warning-soft text-fg-warning text-xs font-medium px-1.5 py-0.5 rounded",
  };

  const selectedClass = colorClasses[color];

  return (
    <span className={selectedClass}>
      {text}
    </span>
  );
};

export default Chip;