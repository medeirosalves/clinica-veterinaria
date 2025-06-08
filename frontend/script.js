
document.getElementById("form-animal").addEventListener("submit", async function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const especie = document.getElementById("especie").value;
  const raca = document.getElementById("raca").value;
  const tutor = document.getElementById("tutor").value;

  const dados = { nome, especie, raca, tutor };

  const res = await fetch("http://localhost:3000/api/animais", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  const resultado = await res.json();
  alert("Animal cadastrado com sucesso!");
  document.getElementById("form-animal").reset();
  carregarAnimais();
});

async function carregarAnimais() {
  const res = await fetch("http://localhost:3000/api/animais");
  const lista = await res.json();
  const ul = document.getElementById("lista-animais");
  ul.innerHTML = "";

  lista.forEach((a) => {
    const li = document.createElement("li");
    li.textContent = `${a.nome} - ${a.especie} (${a.raca}) | Tutor: ${a.tutor}`;
    ul.appendChild(li);
  });
}

document.getElementById("btn-ver-animais").addEventListener("click", carregarAnimais);
