const TitleSection = ({title, description}: {title: string, description: string}) => {
  return <div className="my-10 mx-5">
    <h3 className=" font-bold text-lg pb-3">{title}</h3>
    <p dangerouslySetInnerHTML={{ __html: description }} />
  </div>;
};

export default TitleSection;