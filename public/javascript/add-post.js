const newPostForm = document.querySelector(".new-post-form");

async function newFormHandler(event) {
  event.preventDefault();

  const post_title = document.querySelector('input[name="post-title"]').value;
  const post_body = document.querySelector('input[name="post-body"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      post_title,
      post_body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

newPostForm.addEventListener("submit", newFormHandler);
