// Add blog links here.
var posts = ["styling.html"];
// Find a way to automate this?

// Link creation
function createLink(post) {
    var listItem = document.createElement("li");
    var link = document.createElement("a");
    link.href = "./" + post;
    link.innerText = formatLinkText(post);
    listItem.appendChild(link);
    return listItem;
};

function formatLinkText(string) {
    string = string.substring(0, string.length - 5);
    string = string[0].toUpperCase() + string.substring(1)
    return string;
};

// Where the work happens
document.addEventListener("DOMContentLoaded", function () {
    var postList = document.getElementById("blog-posts");

    for (i = posts.length; i > 0; i--) {
        postList.appendChild(createLink(posts[i - 1]));
    };
});