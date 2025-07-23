const cursos = [
  {
    titulo: "Administração Financeira",
    descricao: "Aprenda a organizar, controlar e analisar as finanças de uma empresa. Ideal para quem quer entender o fluxo financeiro na prática.",
    imagem: "img/admfinan.png",
    duracao: "12 horas"
  },
  {
    titulo: "Administração: Gestão de Projetos",
    descricao: "Entenda como planejar, executar e acompanhar projetos de forma eficiente, usando técnicas e ferramentas simples.",
    imagem: "img/admgestao.png",
    duracao: "14 horas"
  },
  {
    titulo: "Contabilidade Básica",
    descricao: "Aprenda os conceitos principais da contabilidade, como lançamentos, balanços e demonstrações financeiras.",
    imagem: "img/admcontab.png",
    duracao: "10 horas"
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