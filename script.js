// Sample data for projects and blogs
const projects = [
  { title: "Project A", description: "Description of Project A.", link: "#" },
  { title: "Project B", description: "Description of Project B.", link: "#" },
  { title: "Project C", description: "Description of Project C.", link: "#" },
];

const blogs = [
  { title: "Blog Post 1", description: "Summary of Blog Post 1.", link: "#" },
  { title: "Blog Post 2", description: "Summary of Blog Post 2.", link: "#" },
  { title: "Blog Post 3", description: "Summary of Blog Post 3.", link: "#" },
];

// Function to create and append cards
function createCards(data, containerId) {
  const container = document.getElementById(containerId);
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank">Learn More</a>
    `;

    container.appendChild(card);
  });
}

// Render projects and blogs
createCards(projects, "projects-container");
createCards(blogs, "blogs-container");
