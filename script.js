// Happy coding

// Primeros pasos: carga el fichero JSON y muestra su contenido en la consola. Luego, ya puedes implementar la iteración 1. Para mostrar la fecha legible, puedes buscar por Chat GPT o por Google como convertir un timestamp 
const fs = require('fs');

const content = fs.readFileSync('expenses.json', 'utf-8');

const expenses = JSON.parse(content);

// Comando per executar

const command = process.argv[2];



if (command == "--list") {
    console.log('ID Date Concept Category Amount');
    console.log('--------------------------------------------------------');
    for (const e of expenses) {
        const id = e.id;
        const date = new Date(e.timestamp * 1000).toLocaleDateString();
        const category = e.category.charAt(0).toUpperCase() + e.category.slice(1);
        const concept = e.concept;
        const amount = `${e.amount} €`;

        console.log(id, date, concept, category, amount);
    }
}

else if (command == "--summary") {
    let totalAmount = 0;

    for (const e of expenses){
        const amount = e.amount;
        totalAmount += amount;
    }
    console.log(`Total: ${totalAmount} €`);
} 
