const TitleSection = ({title, description}: {title: string, description: string}) => {
  return <div className="my-10">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>;
};

export default TitleSection;