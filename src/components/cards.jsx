import chip from './chip.jsx';

const Cards = ({title, subtitle, description, link, tecnologies}) => {

    return (
        <>
        <div className="card">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>
            <a href={link} target="_blank">View Project</a>
            <div className="tecnologies">
                {tecnologies.map((tecnology, index)=>(<Chip text={tecnology} key={index} />))}
            </div>
        </div>
        </>
    )
};