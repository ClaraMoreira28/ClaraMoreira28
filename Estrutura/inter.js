document.addEventListener("DOMContentLoaded", function() {
  // Script para as abas
  const tabs = document.querySelectorAll('.navbar a');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault(); // Impede a navegação padrão do link

      // Remove a classe 'active' de todos os links e painéis
      tabs.forEach(t => t.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      // Adiciona a classe 'active' ao link clicado
      this.classList.add('active');

      // Encontra o painel correspondente e adiciona a classe 'active'
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).classList.add('active');
    });
  });
});

// carrossel.js

document.addEventListener("DOMContentLoaded", () => {
  const contadores = document.querySelectorAll('.contador');

  contadores.forEach(contador => {
    const atualizarContador = () => {
      const target = +contador.getAttribute('data-target');
      const atual = +contador.innerText;
      const incremento = target / 100;

      if (atual < target) {
        contador.innerText = Math.ceil(atual + incremento);
        setTimeout(atualizarContador, 30);
      } else {
        contador.innerText = target;
      }
    };

    atualizarContador();
  });
});

