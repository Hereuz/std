const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const envelope = document.getElementById("envelope");

// PAGE 1 -> PAGE 2
envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    page1.classList.remove("active");
    page2.classList.add("active");
  }, 600);
});
