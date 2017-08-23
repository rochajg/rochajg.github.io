var alunos = document.getElementsByName('Turma'),
    mydb;

function callInfo() {
  var selecionado;

  for(var i=0; i<alunos.length; i++) 
    if(alunos[i].checked){
      selecionado = alunos[i].value;
      break;
    }

  for(var i=0; i<mydb.Turma.length; i++) {
    console.log(mydb.Turma[i]);
    if(mydb.Turma[i].nome == selecionado) {
      selecionado = i;
      break;
    }
  }
      
  var nome = mydb.Turma[selecionado].nome;
  var idade = mydb.Turma[selecionado].idade;
  var linguagem = mydb.Turma[selecionado].linguagem;

  document.getElementById('nome').textContent = nome;
  document.getElementById('idade').textContent = idade;
  document.getElementById('linguagem').textContent = linguagem;
}



function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'js/data.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

loadJSON(function(response) {
  mydb = JSON.parse(response);
});