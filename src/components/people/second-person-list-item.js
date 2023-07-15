const SecondPerson = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  );
};

export default SecondPerson;
