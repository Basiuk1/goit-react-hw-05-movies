const Search = ({ onSubmit }) => {
  let queryValue = '';

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    queryValue = form.elements.query.value;
    onSubmit(queryValue);
    form.reset();
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" defaultValue={queryValue} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
