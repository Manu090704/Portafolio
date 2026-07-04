import Chip from './chip.jsx';

const Cards = ({ title, subtitle, description, link, linkLabel = 'Ver proyecto', tecnologies = {}, children }) => {
  return (
    <article className="glass-card group flex min-h-[320px] flex-col">
      <div className="mb-8 h-2 w-16 rounded-full  group-hover:w-24" />
      <div className="flex flex-1 flex-col">
        <p className="text-sm font-semibold text-cyan-200">{subtitle}</p>
        <h3 className="mt-3 text-2xl font-black leading-tight text-white">{title}</h3>
        <p className="mt-4 flex-1 leading-7 text-slate-300">{description}</p>

        {Object.keys(tecnologies).length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {Object.entries(tecnologies).map(([technology, color], index) => (
              <Chip text={technology} color={color} key={index} />
            ))}
          </div>
        )}

        {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex w-fit items-center rounded-full border border-white/12 px-4 py-2 text-sm font-bold text-white transition hover:border-cyan-200/60 hover:bg-cyan-200/10"
        >
          {linkLabel}
        </a>)}
      </div>
      {children}
    </article>
  );
};

export default Cards;
