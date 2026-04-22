const buttons = document.querySelectorAll(".buttons button")
const infoContents = document.querySelectorAll(".infoContent")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetContent = document.getElementById(targetId);

    infoContents.forEach(content => content.classList.remove("infoContentActive"));
    buttons.forEach(btn => btn.classList.remove("active"));
    
    button.classList.add("active");
    targetContent.classList.add("infoContentActive"); // fixed typo
  });
});

// Work experience section uses existing autoShow animation system

const sbutton = document.querySelector(".hamburger");
const aside = document.querySelector("aside");

if (sbutton && aside) {
  sbutton.addEventListener("click", () => {
    aside.classList.toggle("active");
  });


const closeBtn = aside.querySelector("button");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      aside.classList.remove("active");
    });
  }
}


const autoShowObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // remove when out of view
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.autoShow').forEach(el => autoShowObserver.observe(el));

const observerUp = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showUp');
    } else {
      entry.target.classList.remove('showUp'); // remove when out of view
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.autoShowUp').forEach(el => observerUp.observe(el));


const pobserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('pop');
    } else {
      entry.target.classList.remove('pop'); // allows repeated pop
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.autoPop').forEach(el => pobserver.observe(el));

const renderPostNavigation = () => {
  if (!document.body.classList.contains("blog-post-page")) return;
  if (!window.BLOG_POSTS || !Array.isArray(window.BLOG_POSTS)) return;

  const slug = document.body.getAttribute("data-post-slug");
  if (!slug) return;

  const posts = window.BLOG_POSTS;
  const currentIndex = posts.findIndex((post) => post.slug === slug);
  if (currentIndex === -1) return;

  const current = posts[currentIndex];
  const prev = posts[(currentIndex - 1 + posts.length) % posts.length];
  const next = posts[(currentIndex + 1) % posts.length];
  const related = posts.filter((post) => post.slug !== slug).slice(0, 3);

  const breadcrumbNode = document.getElementById("post-breadcrumb-current");
  const dateNode = document.getElementById("post-date-category");
  const readTimeNode = document.getElementById("post-read-time");
  const titleNode = document.getElementById("post-title");
  const relatedNode = document.getElementById("related-posts-grid");
  const navNode = document.getElementById("post-nav-links");

  if (breadcrumbNode) breadcrumbNode.textContent = current.shortTitle;
  if (dateNode) dateNode.textContent = `${current.date} · ${current.category}`;
  if (readTimeNode) readTimeNode.textContent = current.readTime;
  if (titleNode) titleNode.textContent = current.title;
  if (document.title) document.title = `${current.shortTitle} | Anjal Rai`;

  if (relatedNode) {
    relatedNode.innerHTML = related
      .map(
        (post) => `
          <a href="${post.href}" class="related-card">
            <p>${post.category}</p>
            <h4>${post.title}</h4>
          </a>
        `
      )
      .join("");
  }

  if (navNode) {
    navNode.innerHTML = `
      <a href="${prev.href}" class="post-nav-item">
        <p>Previous Post</p>
        <h4>${prev.title}</h4>
      </a>
      <a href="${next.href}" class="post-nav-item">
        <p>Next Post</p>
        <h4>${next.title}</h4>
      </a>
    `;
  }
};

renderPostNavigation();
