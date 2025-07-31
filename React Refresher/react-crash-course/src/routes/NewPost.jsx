import classes from "./NewPost.module.css";
import { useState } from "react";
import Modal from "../components/Modal";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState(""); // state for the body text

  const [enteredAuthor, setEnteredAuthor] = useState(""); // state for the author name

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault(); // prevent the default form submission behavior
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    console.log(postData); // log the post data to the console
    onAddPost(postData); // call the function to add the post
    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
