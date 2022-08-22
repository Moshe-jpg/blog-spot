const editPostForm = document.querySelector(".edit-post-form");

async function editFormHandler(event) {
  event.preventDefault();

  const post_title = document.querySelector('input[name="post-title"]').value.trim();
  const post_body = document.querySelector('input[name="post-body"]').value.trim();
  const id = window.location.toString().split("/")[window.location.toString().split("/").length - 1];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      post_title,
      post_body
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

editPostForm.addEventListener("submit", editFormHandler);
