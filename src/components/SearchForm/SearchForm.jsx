import css from "./SearchForm.module.css";
export default function SearchForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.movieName.value.trim();
    onSubmit(query);
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input} type="text" name="movieName" placeholder="Enter the name of your film..." />

      <button type="submit">Search</button>
    </form>
  );
}
