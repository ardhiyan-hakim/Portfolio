const LinksComp = () => {
  const items = ["Homepage", "Services", "Skills", "About", "Contacts"];
  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default LinksComp;