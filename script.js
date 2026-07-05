const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const envelope = document.getElementById("envelope");

// état initial
envelope.classList.add("open");

envelope.addEventListener("click", () => {

  // animation fermeture enveloppe
  envelope.classList.remove("open");
  envelope.classList.add("close");

  setTimeout(() => {

    // switch page
    page1.classList.remove("active");
    page2.classList.add("active");

    // reset état (sécurité)
    envelope.classList.remove("close");
    envelope.classList.add("open");

  }, 700);
});
