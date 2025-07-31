import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ isPosting, onStopPosing }) {
  const [enteredBody, setEnteredBody] = useState(""); // state for the body text

  const [enteredAuthor, setEnteredAuthor] = useState(""); // state for the author name

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosing}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : (
        false
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
