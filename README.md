
<div align="center" class="text-center">
<h1>EX-REACT-TASK-MANAGER</h1>
<p><em>Transform Tasks Into Triumphs Effortlessly</em></p>

<img alt="last-commit" src="https://img.shields.io/github/last-commit/GaetanoNicotra/ex-react-task-manager?style=flat&amp;logo=git&amp;logoColor=white&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="repo-top-language" src="https://img.shields.io/github/languages/top/GaetanoNicotra/ex-react-task-manager?style=flat&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="repo-language-count" src="https://img.shields.io/github/languages/count/GaetanoNicotra/ex-react-task-manager?style=flat&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
<p><em>Built with the tools and technologies:</em></p>
<img alt="JSON" src="https://img.shields.io/badge/JSON-000000.svg?style=flat&amp;logo=JSON&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Markdown" src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&amp;logo=Markdown&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="npm" src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&amp;logo=npm&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&amp;logo=JavaScript&amp;logoColor=black" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="React" src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&amp;logo=React&amp;logoColor=black" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&amp;logo=Vite&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&amp;logo=ESLint&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
</div>

<hr />

Certo\! Ecco il README formattato in HTML, con gli elenchi puntati e le parole in grassetto, pronto per essere inserito in una pagina web o in una piattaforma che supporta il markup HTML (come ad esempio alcune sezioni di GitHub).

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>README - Advanced Task Manager</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            line-height: 1.6;
            color: #333;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2, h3 {
            border-bottom: 2px solid #eaecef;
            padding-bottom: 0.3em;
            margin-top: 1.5em;
        }
        h1 {
            font-size: 2.5em;
        }
        h2 {
            font-size: 2em;
        }
        h3 {
            font-size: 1.5em;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
        }
        li {
            margin-bottom: 5px;
        }
        code {
            background-color: #f6f8fa;
            border-radius: 3px;
            padding: 0.2em 0.4em;
            font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
            color: #4a4a4a;
        }
        pre {
            background-color: #f6f8fa;
            border-radius: 6px;
            padding: 16px;
            overflow: auto;
            font-size: 85%;
            line-height: 1.45;
        }
        .container {
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Advanced Task Manager</h1>

        <p>Questo repository contiene il frontend di un'applicazione web per la gestione avanzata dei task. L'app permette agli utenti di creare, modificare, organizzare ed eliminare i task in modo intuitivo, offrendo funzionalità di filtro, ricerca e ordinamento, il tutto con un'esperienza utente fluida e ottimizzata.</p>

        <p>Il progetto è sviluppato in <b>React</b> e utilizza un backend pre-esistente per la gestione dei dati.</p>

        <h2>Funzionalità principali</h2>
        <ul>
            <li><b>Gestione completa dei task:</b> CRUD (Create, Read, Update, Delete) di tutti i task.</li>
            <li><b>Routing intuitivo:</b> Navigazione tra la lista dei task e la pagina di creazione.</li>
            <li><b>Dettagli task:</b> Pagina dedicata per visualizzare i dettagli di ogni singolo task.</li>
            <li><b>Ordinamento dinamico:</b> Possibilità di ordinare la lista dei task per nome, stato o data di creazione.</li>
            <li><b>Ricerca ottimizzata:</b> Campo di ricerca con <code>debounce</code> per filtrare i task in tempo reale.</li>
            <li><b>Modali di conferma:</b> Modali riutilizzabili per confermare le azioni critiche (es. eliminazione) e per la modifica dei task.</li>
            <li><b>Gestione dello stato globale:</b> Utilizzo del <b>Context API</b> per centralizzare e ottimizzare la gestione dei dati.</li>
            <li><b>Ottimizzazione delle performance:</b> Componenti ottimizzati con <code>React.memo()</code> e logiche di ordinamento con <code>useMemo()</code>.</li>
        </ul>

        <h2>Struttura del progetto</h2>
        <p>Il progetto è suddiviso in diverse milestone che guidano lo sviluppo passo dopo passo, dalla configurazione iniziale fino all'implementazione delle funzionalità più avanzate.</p>

        <h3>Milestone 1 - Setup e Routing</h3>
        <ul>
            <li>Clonazione e avvio del backend fornito (<code>react-task-manager-back</code>).</li>
            <li>Configurazione del frontend con <b>Vite</b>.</li>
            <li>Implementazione del routing con <b>React Router Dom</b> per le pagine <code>TaskList</code> e <code>AddTask</code>.</li>
            <li>Creazione di una barra di navigazione con <code>NavLink</code>.</li>
        </ul>

        <h3>Milestone 2 - Setup Context API e Fetch Iniziale</h3>
        <ul>
            <li>Creazione di un <b>Context API</b> (<code>GlobalContext</code>) per gestire lo stato globale.</li>
            <li>Recupero iniziale della lista dei task tramite una chiamata <code>GET</code> all'API <code>/tasks</code>.</li>
            <li>Salvataggio dell'URL dell'API in un file <code>.env</code> per una migliore gestione delle configurazioni.</li>
        </ul>

        <h3>Milestone 3 - Lista dei Task</h3>
        <ul>
            <li>Visualizzazione dei task in una tabella nella pagina <code>TaskList</code>.</li>
            <li>Creazione del componente <code>TaskRow</code> per ogni riga della tabella.</li>
            <li>Utilizzo di <code>React.memo()</code> sul componente <code>TaskRow</code> per ottimizzare le performance.</li>
        </ul>

        <h3>Milestone 4 - Custom Hook <code>useTasks()</code></h3>
        <ul>
            <li>Creazione di un <b>custom hook</b> <code>useTasks()</code> per centralizzare la logica di gestione dei task.</li>
            <li>Integrazione del custom hook nel <code>GlobalContext</code>.</li>
        </ul>

        <h3>Milestone 5 - Form per Aggiungere un Task</h3>
        <ul>
            <li>Creazione di un form nella pagina <code>AddTask</code> con campi controllati e non controllati.</li>
            <li>Implementazione di una logica di validazione per il campo <code>title</code>.</li>
            <li>Gestione dell'evento di submit per stampare l'oggetto task in console.</li>
        </ul>

        <h3>Milestone 6 - Integrazione API (POST)</h3>
        <ul>
            <li>Collegamento del form di <code>AddTask</code> all'API per l'invio dei dati tramite una chiamata <code>POST</code>.</li>
            <li>Aggiornamento dello stato globale con il nuovo task creato.</li>
            <li>Gestione di successo e fallimento della richiesta API con feedback visivo.</li>
        </ul>

        <h3>Milestone 7 - Pagina Dettaglio Task</h3>
        <ul>
            <li>Creazione della pagina <code>TaskDetail</code> per visualizzare i dettagli di un singolo task.</li>
            <li>Navigazione dinamica alla pagina di dettaglio tramite un link sul titolo del task.</li>
        </ul>

        <h3>Milestone 8 - Funzione di Eliminazione (DELETE)</h3>
        <ul>
            <li>Implementazione della funzione <code>removeTask</code> nel custom hook <code>useTasks()</code>.</li>
            <li>Collegamento del bottone "Elimina Task" a una chiamata <code>DELETE</code> all'API.</li>
            <li>Reindirizzamento alla lista dei task dopo l'eliminazione.</li>
        </ul>

        <h3>Milestone 9 - Componente Modal</h3>
        <ul>
            <li>Creazione di un componente <b>Modale riutilizzabile</b> con <code>ReactDOM.createPortal</code>.</li>
            <li>Utilizzo della modale per chiedere conferma all'utente prima di eliminare un task.</li>
        </ul>

        <h3>Milestone 10 - Modifica Task (PUT)</h3>
        <ul>
            <li>Implementazione della funzione <code>updateTask</code> per la modifica dei task tramite una chiamata <code>PUT</code>.</li>
            <li>Creazione di una modale di modifica (<code>EditTaskModal</code>) che si apre al click del bottone "Modifica Task".</li>
            <li>Pre-compilazione del form di modifica con i dati del task selezionato.</li>
        </ul>

        <h3>Milestone 11 - Ordinamento delle Task</h3>
        <ul>
            <li>Aggiunta di una logica di ordinamento nella tabella dei task.</li>
            <li>Ordinamento per <code>title</code>, <code>status</code> o <code>createdAt</code> sia in ordine crescente che decrescente.</li>
            <li>Utilizzo di <code>useMemo()</code> per ottimizzare il ricalcolo dell'array ordinato.</li>
        </ul>

        <h3>Milestone 12 - Ricerca dei Task con Debounce</h3>
        <ul>
            <li>Implementazione di un campo di ricerca per filtrare i task per nome.</li>
            <li>Utilizzo della tecnica di <b>debounce</b> per ritardare l'aggiornamento della ricerca e migliorare le performance.</li>
        </ul>

        <h2>Come avviare il progetto</h2>
        <ol>
            <li>Clonare il repository del backend e avviare il server:
                <pre><code>git clone https://github.com/boolean-it/react-task-manager-back
cd react-task-manager-back
npm install
npm run start</code></pre>
            </li>
            <li>Nel terminale apparirà un messaggio che indica che il server è in ascolto su <code>http://localhost:3001</code>.</li>
            <li>Clonare il repository del frontend:
                <pre><code>git clone https://github.com/codingknite/frontend-development
cd [nome-cartella-progetto]</code></pre>
            </li>
            <li>Creare un file <code>.env</code> nella root del progetto e aggiungere la URL del backend:
                <pre><code>VITE_API_URL=http://localhost:3001</code></pre>
            </li>
            <li>Installare le dipendenze e avviare l'applicazione frontend:
                <pre><code>npm install
npm run dev</code></pre>
            </li>
            <li>L'applicazione sarà disponibile all'indirizzo <code>http://localhost:5173</code> (o un'altra porta indicata da Vite).</li>
        </ol>
    </div>

</body>
</html>
```