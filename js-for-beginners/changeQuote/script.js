const block = document.querySelector('blockquote');
const cita = document.querySelector('cite');
const btn = document.querySelector('button')

const falas = [
  {
    fala: "O que realmente deixa um homem lisonjeado é o fato de você o considerar digno de adulação.",
    autor: "Bernard Shaw"
  },
  {
    fala:"Há livros escritos para evitar espaços vazios na estante.",
    autor:"Carlos Drummond de Andrade"
  },
  {
    fala:"Engolimos de uma vez a mentira que nos adula e bebemos gota a gota a verdade que nos amarga",
    autor: "Denis Diderot"
  },
  {
    fala: "A mentira é o único privilégio do homem sobre todos os outros animais.",
    autor: "Fiódor Dostoiévski"
  }
]

function changeQuote(){
  const mudaFala = parseInt(Math.random()*falas.length);
  block.innerText = falas[mudaFala].fala
  cita.innerText = falas[mudaFala].autor
}
btn.addEventListener('click', changeQuote);