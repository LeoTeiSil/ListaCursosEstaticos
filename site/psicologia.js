const cursos = [
  {
    titulo: "Psicologia Cognitiva",
    descricao: "Entenda os processos mentais como atenção, memória, linguagem e resolução de problemas no comportamento humano.",
    imagem: "img/psiccog.jpg",
    duracao: "10 horas"
  },
  {
    titulo: "Psicologia Escolar e Educacional",
    descricao: "Aprenda como o psicólogo atua no ambiente escolar, auxiliando no processo de ensino-aprendizagem.",
    imagem: "img/psiceduc.jpg",
    duracao: "12 horas"
  },
  {
    titulo: "Psicologia Social",
    descricao: "Estude como o meio social influencia o comportamento humano, relações interpessoais e grupos.",
    imagem: "img/psicsocial.jpg",
    duracao: "9 horas"
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
