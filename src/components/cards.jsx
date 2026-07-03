import Chip from './chip.jsx';

const Cards = ({ title, subtitle, description, link, tecnologies, children }) => {
  return (
    <>
      <div className="">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <a href={link} target="_blank">View Project</a>
        <div className="tecnologies">
          {Object.entries(tecnologies).map(([technology, color], index) => (
            <Chip text={technology} color={color} key={index} />
          ))}
        </div>
      </div>
        {children}
    </>
  );
};

export default Cards;