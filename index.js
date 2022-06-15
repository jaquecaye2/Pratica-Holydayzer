import express from "express";

const app = express();

let holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "1/3/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" },
];

let hoje = new Date();
hoje = hoje.toLocaleDateString();
hoje = hoje.split("/")
let novoHoje = `${hoje[1]}/${hoje[0]}/${hoje[2]}`

app.get("/holidays", (request, response) => {
  response.send(holidays);
});

app.get("/is-today-holiday", (request, response) => {

  for (let i = 0; i < holidays.length; i++) {
    if (novoHoje === holidays[i].date) {
      response.send(`Sim, hoje é ${holidays[i].name}`);
    }
  }

  response.send("Não, hoje não é feriado")
});

app.get("/holidays/:diaMes", (request, response) => {
  const diaMes = request.params.diaMes
  let arrayHolidaysMes = []

  for (let i = 0; i < holidays.length; i++){
    let dataSeparada = holidays[i].date.split("/")
    
    if (dataSeparada[0] === diaMes){
      arrayHolidaysMes.push(holidays[i])
    }
  }

  response.send(arrayHolidaysMes)
})

app.listen(4000);
