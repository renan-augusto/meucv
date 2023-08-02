const accordeonTriggers = document.querySelectorAll(".accordeon .trigger");

accordeonTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    const accordeon = trigger.parentElement;
    const isOpen = accordeon.classList.contains("open");

    if (isOpen) {
      accordeon.classList.remove("open");
    } else {
      accordeon.classList.add("open");
    }
  });
});
