import 'flowbite';

const Chip = ({ text, color = 'blue' }) => {
  const colorClasses = {
    blue: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
    gray: "border-slate-300/20 bg-white/8 text-slate-100",
    red: "border-rose-300/25 bg-rose-300/10 text-rose-100",
    green: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
    yellow: "border-amber-300/25 bg-amber-300/10 text-amber-100",
  };

  const selectedClass = colorClasses[color] ?? colorClasses.blue;

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${selectedClass}`}>
      {text}
    </span>
  );
};

export default Chip;
