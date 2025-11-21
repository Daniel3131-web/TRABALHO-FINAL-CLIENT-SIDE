const textos = {
  1: "Especialista em cortes clássicos e modernos, Carlos traz elegância e estilo para cada cliente.",
  2: "Com um toque artístico, João é conhecido por suas habilidades em design de barba e cortes personalizados.",
  3: "Rafael é mestre em cortes tradicionais, garantindo sempre um visual impecável e sofisticado.",
  4: "Henrique combina técnicas modernas com um atendimento acolhedor, proporcionando uma experiência única.",
};

const Nomes = {
  1: "Carlos",
  2: "João",
  3: "Rafael",
  4: "Henrique",
};

function mostrarTexto(numero) {
  const elementoTexto = document.getElementById("textoExibido");
  const elementoNome = document.querySelector("#TextoEquipe h3");
  elementoNome.textContent = Nomes[numero];
  elementoTexto.textContent = textos[numero];
}

// Slider
let slideAtual = 0;
const totalSlides = 4;

const imagens = [
  { src: "Imgs/Antes01.png", label: "ANTES" },
  { src: "Imgs/Depois01.png", label: "DEPOIS" },
  { src: "Imgs/Antes02.png", label: "ANTES" },
  { src: "Imgs/Depois02.png", label: "DEPOIS" },
];

function atualizarSlider() {
  const img = document.getElementById("sliderImg");

  // Fade out
  img.style.opacity = "0";

  setTimeout(() => {
    img.src = imagens[slideAtual].src;
    img.alt = imagens[slideAtual].label;
    // Fade in
    img.style.opacity = "1";
  }, 250);

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === slideAtual);
  });

  document.getElementById("sliderLabel").textContent =
    imagens[slideAtual].label;
}

function slideProximo() {
  slideAtual = (slideAtual + 1) % totalSlides;
  atualizarSlider();
}

function slideAnterior() {
  slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
  atualizarSlider();
}

function irParaSlide(index) {
  slideAtual = index;
  atualizarSlider();
}
