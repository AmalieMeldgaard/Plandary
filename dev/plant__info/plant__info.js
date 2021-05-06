function getPosts() {
  fetch("https://api.plant.id/v2/identify")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h1>Post</h1>";
      data.forEach(function (post) {
        if (post.userId === 3) {
          output += `
              <div>
              <h3>${post.tile}</h3>
              <h4>written by author no.:${post.userId}</h4>
              <p>${post.body}</p>
              </div>
              `;
        }
      });
      document.getElementById("output").innerHTML = output;
    });
}
