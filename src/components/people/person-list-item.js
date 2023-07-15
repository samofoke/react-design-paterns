const FirstPerson = ({ person }) => {
  const { name, age } = person;
  return (
    <div>
      <p>
        Name: {name} and the, Age: {age} in years.
      </p>
    </div>
  );
};

export default FirstPerson;
