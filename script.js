const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const envelope = document.getElementById("envelope");

// état initial : ENVELOPPE OUVERTE
envelope.classList.add("open");

envelope.addEventListener("click", () => {

  // inversion animation : fermeture
  envelope.classList.remove("open");
  envelope.classList.add("close");

  setTimeout(() => {
    page1.classList.remove("active");
    page2.classList.add("active");

    // reset pour prochain chargement éventuel
    envelope.classList.remove("close");
    envelope.classList.add("open");

  }, 700);
});
