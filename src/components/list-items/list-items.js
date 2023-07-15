const ListItems = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <div>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};

export default ListItems;
