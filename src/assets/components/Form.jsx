export const Form = () => {
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            autoComplete="off"
            id="title"
            name="title"
            placeholder="Add Title"
          />
        </div>

        <div>
          <label htmlFor="body"></label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Add Post"
            id="body"
            name="body"
          />
        </div>
        <button type="submit"> ADD
        </button>
      </form>
    </>
  );
};
