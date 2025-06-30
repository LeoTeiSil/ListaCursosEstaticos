const cursos = [
  {
    titulo: "Curso de HTML e CSS",
    descricao: "Aprenda a estruturar páginas com HTML e aplicar estilos com CSS. Ideal para iniciantes.",
    imagem: "img/html-css.jpg",
    duracao: "10 horas"
  },
  {
    titulo: "Curso de JavaScript",
    descricao: "Aprenda os fundamentos do JavaScript, como variáveis, funções, DOM e eventos.",
    imagem: "img/js.jpg",
    duracao: "16 horas"
  },
  {
    titulo: "Curso de Excel",
    descricao: "Crie planilhas, use fórmulas e gráficos. Curso do básico ao avançado.",
    imagem: "img/excel.jpg",
    duracao: "8 horas"
  }
];

const container = document.getElementById("cursos");

let cursosInscritos = [];

cursos.forEach((curso, index) => {
  const card = document.createElement("div");
  card.className = "col";
  
  card.innerHTML = `
    <div class="card h-100">
      <img src="${curso.imagem}" class="card-img-top" alt="${curso.titulo}">
      <div class="card-body">
        <h5 class="card-title">${curso.titulo}</h5>
        <p class="card-text">${curso.descricao}</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Duração: ${curso.duracao}</small><br><br>
        <button onclick="inscrever(${index})" class="btn btn-primary">Inscrever-se</button>
      </div>
    </div>
  `;

  container.appendChild(card);
});

function inscrever(indice) {
  const curso = cursos[indice];

  if (cursosInscritos.includes(curso.titulo)) {
    alert("Você já está inscrito no curso: " + curso.titulo);
  } else {
    cursosInscritos.push(curso.titulo);
    alert("Inscrição realizada com sucesso no curso: " + curso.titulo);
  }
}
