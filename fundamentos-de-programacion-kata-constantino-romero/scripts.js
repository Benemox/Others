const pregunta = {
    titulo: '¿A quién ha doblado más veces a Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood",
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl",
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore",
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner",
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger",
        }
    ]
};

const imprimeTitulo = (question) => {   
    return question.titulo ;
};

const imprimeLabel = (answer) => {
    for (let i = 0; i < answer.length; i++) {
       return answer.respuestas[i].label
        
    }
    return `<label for="${answer.respuestas.label}">${answer.respuestas.label}</label>`
};
console.log(imprimeLabel)
const imprimeImput = (answer) => {
    return `<input id="${answer.respuestas.label}" name="actor" type="radio" value="${answer.respuestas.label}">`;
};

const imprimeRespuesta = (answer) => {
    return       imprimeLabel(answer) +
                    imprimeInput(answer)
     ;
};
console.log(imprimeRespuesta(pregunta))
const imprimeRespuestas = (question) => {
    return ;
};  

const imprimePregunta = (question) => {
    return `
        <form>
            ${imprimeTitulo(question)}
            ${imprimeRespuesta(question)}
        </form>
    `;
};

document.querySelector('article').innerHTML = imprimePregunta(pregunta);
