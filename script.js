window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-9S4TMK6YGL');

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const destino = document.querySelector(this.getAttribute("href"));
    if (!destino) return;
    e.preventDefault();
    window.scrollTo({
      top: destino.offsetTop - 60,
      behavior: "smooth"
    });
  });
});
