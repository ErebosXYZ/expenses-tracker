// Happy coding

// Primeros pasos: carga el fichero JSON y muestra su contenido en la consola. Luego, ya puedes implementar la iteración 1. Para mostrar la fecha legible, puedes buscar por Chat GPT o por Google como convertir un timestamp 
const fs = require('fs');

const content = fs.readFileSync('expenses.json', 'utf-8');

const expenses = JSON.parse(content);

// Comando per executar

const command = process.argv[2];



// ITERACIÓ 1


if (command == '--list') {
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

// ITERACIÓ 2
else if (command == '--summary') {
    let totalAmount = 0;

    for (const e of expenses) {
        const amount = e.amount;
        totalAmount += amount;
    }
    console.log(`Total: ${totalAmount} €`);
}

// ITERACIÓ 3
else if (command == `--filter-category`) {

    /** D'expenses m'ha de retornar els elements en què la categoria té el mateix nom segons la paraula que escrigui al costat de --filter-category*/

    const categoryName = process.argv[3].toLowerCase();
    // Guardem en una variable la paraula de l'argument 3 del script (el que posarem despres de command)
    console.log('ID Date Concept Category Amount');
    console.log('--------------------------------------------------------');

    for (const e of expenses) {
        const category = e.category.toLowerCase();
        // Si la categoria d'e es correspon amb categoryName, mostrem les dades dels objectes corresponents
        if (category === categoryName) {
            const id = e.id;
            const date = new Date(e.timestamp * 1000).toLocaleDateString();
            const categoryFormatted = e.category.charAt(0).toUpperCase() + e.category.slice(1);
            const concept = e.concept;
            const amount = `${e.amount} €`;

            console.log(id, date, concept, categoryFormatted, amount);
        };
    }

}

// ITERACIÓ 4
else if (command == '--find') {
    const idNumber = Number(process.argv[3]);
    console.log('ID Date Concept Category Amount');
    console.log('--------------------------------------------------------');

    for (const e of expenses) {
        const id = Number(e.id);

        if (id === idNumber) {
            const date = new Date(e.timestamp * 1000).toLocaleDateString();
            const category = e.category.charAt(0).toUpperCase() + e.category.slice(1);
            const concept = e.concept;
            const amount = `${e.amount} €`;
            console.log(id, date, concept, category, amount);
        }
    }

}

// ITERACIÓ 5

/** Si el comando és --add s'ha d'afegir un nou objecte amb:
 * id que sigui el número de l'últim id + 1
 * data que sigui la data actual
 * el concepte que s'introdueixi com a argument 3
 * la categoria que s'assigni com a argument 4
 * i l'amount que s'introdueixi com a argument 5
 */

else if (command == '--add') {
    const addConcept = process.argv[3];
    const addCategory = process.argv[4];
    const addAmount = process.argv[5];

    const newId = expenses.map(e => e.id);

 
    let newData = {
        id: newId,
        timestamp: Date.now(),
        category: addCategory,
        concept: addConcept,
        amount: addAmount

    }


    expenses.push(newData);
   
    console.log('ID Date Concept Category Amount');
    console.log('--------------------------------------------------------');
    console.log(newId)
}
