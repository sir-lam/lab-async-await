// Write your code here!
function displayPost(posts) {
    const postList = document.querySelector("#post-list");

    posts.forEach((post) => {
        const li = document.createElement("li");

        const h1 = document.createElement("h1");
        h1.textContent = post.title;

        const p = document.createElement("p");
        p.textContent = post.body;
        
        li.append(h1, p);
        postList.appendChild(li);
    });
}


async function fetchPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        displayPost(posts);
    } catch (error) {
        console.error("Error Fetching Post:", error);
    }
}
fetchPost();