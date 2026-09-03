/*dialog boks på links der ikke virker*/
const secretTags = document.querySelectorAll(".secret-tag");
secretTags.forEach(function (secretTag) {
  secretTag.addEventListener("click", function (event) {
    event.preventDefault();
    alert("oops, denne side er ikke længere god nok til at vise frem. Sorry!");
  });
});

const secretTags2 = document.querySelectorAll(".secret-tag2");
secretTags2.forEach(function (secretTag2) {
  secretTag2.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Denne side er en hemmelighed nu, desværre!");
  });
});

const secretTags3 = document.querySelectorAll(".secret-tag3");
secretTags3.forEach(function (secretTag3) {
  secretTag3.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Top secret gruppe projekt for virksomhed.");
  });
});