export async function revealApp() {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.body.style.overflowY = "auto";
  const main = document.getElementsByTagName("main")[0];
  main?.classList.add("main-active");

  try {
    const module = await import("./initialFX");
    if (module.initialFX) {
      module.initialFX();
      return;
    }
  } catch (error) {
    console.warn("Initial effects failed, continuing with visible content.", error);
  }
}
