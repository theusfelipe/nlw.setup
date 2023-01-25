const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
//Eventos de click no botão "Registrar meu dia":
button.addEventListener("click", add)
//Eventos de mudança de formulário, e para salvar o form:
form.addEventListener("change", save)

//função de adicionar um dia com alert, e condição se caso o dia for add, um outro alerta aparece falando que está com um dia já incluso, impossibilitando adicionar outro dia//
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  //condição "if"
  if (dayExists) {
    alert("Dia já incluso ❎")
    return
  }
  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
