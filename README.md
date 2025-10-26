
<div align="center" class="text-center">
<h1>EX-REACT-TASK-MANAGER 📝</h1>
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

# Advanced Task Manager

Questo repository contiene il frontend di un'applicazione web per la gestione avanzata dei task. L'app permette agli utenti di creare, modificare, organizzare ed eliminare i task in modo intuitivo, offrendo funzionalità di **filtro, ricerca e ordinamento**, il tutto con un'esperienza utente fluida e ottimizzata.

Il progetto è sviluppato in **React** e utilizza un backend pre-esistente per la gestione dei dati.

## Funzionalità principali

* **Gestione completa dei task:** CRUD (Create, Read, Update, Delete) di tutti i task.
* **Routing intuitivo:** Navigazione tra la lista dei task e la pagina di creazione.
* **Dettagli task:** Pagina dedicata per visualizzare i dettagli di ogni singolo task.
* **Ordinamento dinamico:** Possibilità di ordinare la lista dei task per nome, stato o data di creazione.
* **Ricerca ottimizzata:** Campo di ricerca con `debounce` per filtrare i task in tempo reale.
* **Modali di conferma:** Modali per confermare le azioni critiche (es. eliminazione) e per la modifica dei task.
* **Gestione dello stato globale:** Utilizzo del **Context API** per centralizzare e ottimizzare la gestione dei dati.
* **Ottimizzazione delle performance:** Componenti ottimizzati con `React.memo()` e logiche di ordinamento con `useMemo()`.

---

## Struttura del progetto

### Milestone 1 - Setup e Routing

* Clonazione e avvio del backend fornito (`react-task-manager-back`).
* Configurazione del frontend con **Vite**.
* Implementazione del routing con **React Router Dom** per le pagine `TaskList` e `AddTask`.
* Creazione di una barra di navigazione con `NavLink`.

### Milestone 2 - Setup Context API e Fetch Iniziale

* Creazione di un **Context API** (`GlobalContext`) per gestire lo stato globale.
* Recupero iniziale della lista dei task tramite una chiamata `GET` all'API `/tasks`.
* Salvataggio dell'URL dell'API in un file `.env` per una migliore gestione delle configurazioni.

### Milestone 3 - Lista dei Task

* Visualizzazione dei task in una tabella nella pagina `TaskList`.
* Creazione del componente `TaskRow` per ogni riga della tabella.
* Utilizzo di `React.memo()` sul componente `TaskRow` per ottimizzare le performance.

### Milestone 4 - Custom Hook `useTasks()`

* Creazione di un **custom hook** `useTasks()` per centralizzare la logica di gestione dei task (recupero, aggiunta, eliminazione, aggiornamento).
* Integrazione del custom hook nel `GlobalContext`.

### Milestone 5 - Form per Aggiungere un Task

* Creazione di un form nella pagina `AddTask` con campi controllati e non controllati.
* Implementazione di una logica di validazione per il campo `title`.
* Gestione dell'evento di submit per stampare l'oggetto task in console.

### Milestone 6 - Integrazione API (POST)

* Collegamento del form di `AddTask` all'API per l'invio dei dati tramite una chiamata `POST`.
* Aggiornamento dello stato globale con il nuovo task creato.
* Gestione di successo e fallimento della richiesta API con feedback visivo.

### Milestone 7 - Pagina Dettaglio Task

* Creazione della pagina `TaskDetail` per visualizzare i dettagli di un singolo task.
* Navigazione dinamica alla pagina di dettaglio tramite un link sul titolo del task.

### Milestone 8 - Funzione di Eliminazione (DELETE)

* Implementazione della funzione `removeTask` nel custom hook `useTasks()`.
* Collegamento del bottone "Elimina Task" a una chiamata `DELETE` all'API.
* Reindirizzamento alla lista dei task dopo l'eliminazione.

### Milestone 9 - Componente Modal

* Creazione di un componente **Modale riutilizzabile** con `ReactDOM.createPortal`.
* Utilizzo della modale per chiedere conferma all'utente prima di eliminare un task.

### Milestone 10 - Modifica Task (PUT)

* Implementazione della funzione `updateTask` per la modifica dei task tramite una chiamata `PUT`.
* Creazione di una modale di modifica (`EditTaskModal`) che si apre al click del bottone "Modifica Task".
* Pre-compilazione del form di modifica con i dati del task selezionato.

### Milestone 11 - Ordinamento delle Task

* Aggiunta di una logica di ordinamento nella tabella dei task.
* Ordinamento per `title`, `status` o `createdAt` sia in ordine crescente che decrescente.
* Utilizzo di `useMemo()` per ottimizzare il ricalcolo dell'array ordinato.

### Milestone 12 - Ricerca dei Task con Debounce

* Implementazione di un campo di ricerca per filtrare i task per nome.
* Utilizzo della tecnica di **debounce** per ritardare l'aggiornamento della ricerca e migliorare le performance.

---

## Come avviare il progetto

1.  Clonare il repository del backend e avviare il server:
    ```bash
    git clone [https://github.com/boolean-it/react-task-manager-back](https://github.com/boolean-it/react-task-manager-back)
    cd react-task-manager-back
    npm install
    npm run start
    ```
2.  Nel terminale apparirà un messaggio che indica che il server è in ascolto su `http://localhost:3001`.
3.  Clonare il repository del frontend:
    ```bash
    git clone [https://github.com/codingknite/frontend-development](https://github.com/codingknite/frontend-development)
    cd [nome-cartella-progetto]
    ```
4.  Creare un file `.env` nella root del progetto e aggiungere la URL del backend:
    ```env
    VITE_API_URL=http://localhost:3001
    ```
5.  Installare le dipendenze e avviare l'applicazione frontend:
    ```bash
    npm install
    npm run dev
    ```
6.  L'applicazione sarà disponibile all'indirizzo `http://localhost:5173` (o un'altra porta indicata da Vite).
