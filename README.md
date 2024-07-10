<a name="readme-top"></a>

# <h1>Tic Tac Toe</h1>

<p>"Tic Tac Toe", conosciuto anche come "Tris" in Italia, è un gioco da tavolo per due giocatori. Si gioca su una griglia 3x3 dove i giocatori, a turno, collocano il proprio simbolo (solitamente "X" per il primo giocatore e "O" per il secondo) in una casella vuota. Lo scopo del gioco è allineare tre dei propri simboli in orizzontale, verticale o diagonale. <br>
Puoi accedere all'app <a href="https://tictactoe-francescofiorentino.netlify.app">qui</a>.</p>

## Il gioco

<a href="https://tictactoe-francescofiorentino.netlify.app"><img src=""></a>

<p align="right">(<a href="#readme-top">Torna su</a>)</p> 

## Tecnologie utilizzate
- HTML
- CSS
- JavaScript
- Vue
- Intelligenza Artificiale (ChatGPT, Codeium)

<p align="right">(<a href="#readme-top">Torna su</a>)</p> 

## La struttura
La struttura dell'applicazione è composta come segue: <br>
- File index.html: contiene la struttura html;
- jsconfig,json, package.json, vite.config.js: necessari a configurare l'editor, gestire le dipendenze e le configurazioni del progetto. Il tutto contribuisce a creare un ambiente di sviluppo solido e ben configurato per il progetto Vue.js;
- Cartella public: vi troviamo asset statici come favicon.ico e logo.png;
- Cartella src: il vero 'core' dell'applicazione dove troviamo la cartella assets con i file .css, la cartella components con i file .vue; il file "App.vue" e il file "main.js"; 

<p align="right">(<a href="#readme-top">Torna su</a>)</p>

## App.vue | Header.vue | Status.vue | Board.vue | Cell.vue | main.js
<h2> App.vue</h2>
<p>Il file App.vue è il componente principale dell'applicazione Tic Tac Toe, che funge da punto di ingresso per l'interfaccia utente.
La struttura è composta da tre sezioni principali:
- Template: definisce la struttura HTML, al suo interno troviamo l’elemento <div id=”app”> ovvero il contenitore principale del componente, gli altri componenti: <Header> che mostra l’intestazione dell’applicazione, <Status> che mostra il messaggio di stato del gioco, ovvero il turno del giocatore e il risultato della partita e passa la prop ‘statusMessage’ al componente, <Board> che mostra la griglia del gioco,passa la prop ‘board’ al componente e ascolta l’evento ‘cellClicked’;  il pulsante <button> per resettare il gioco, che con un clic chiama la funzione resetGame();
- Script: definisce la logica del componente. Inizialmente importiamo ‘ref’ e ‘computed’ dalla CompositionAPI di Vue e i componenti con import, è presente export default, necessario per l’importazione e il riutilizzo del componente, con setup() utilizziamo la CompositionAPI per definire lo stato e la logica del componente: troviamo le const ‘currentPlayer’ che tiene traccia del giocatore corrente (X,O), ‘board’ che rappresenta la griglia del gioco, inizialmente vuota, ‘winner’ che rappresenta il vincitore del gioco;  ‘statusMessage’: computed property che restituisce un messaggio di stato basato sullo stato del gioco; le funzioni cellClicked(): funzione che gestisce i click sulle celle della griglia, aggiorna lo stato del gioco e verifica se c'è un vincitore.; checkWinner(): funzione che verifica se c'è una combinazione vincente sulla griglia; resetGame(): funzione che resetta lo stato del gioco.
- Style: definisce gli stili CSS specifici del componente.</p> <br>

<h2> Header.vue</h2>
Il componente Header.vue è responsabile della visualizzazione dell'intestazione dell'applicazione Tic Tac Toe.
La struttura è composta da tre sezioni principali:
- Template: definisce la struttura HTML, al suo interno troviamo <header> e <h1>, tag utili per l’accessibilità e la SEO, fornendo una chiara indicazione del contenuto della pagina;
- Script: definisce la logica del componente, è presente export default, necessario per l’importazione e il riutilizzo del componente;
- Style: definisce gli stili CSS specifici del componente.
Questo approccio modulare permette di mantenere il codice organizzato e riutilizzabile, facilitando la manutenzione e l'espansione dell'applicazione.</p>

<h2>Status.vue</h2>
<p>Il file Status.vue è il componente utile a visualizzare il messaggio dello stato di gioco, ovvero il Turno del giocatore e il risultato della partita.
La struttura è composta da tre sezioni principali:
- Template: definisce la struttura HTML, al suo interno troviamo il contenitore <div> con classe .css ‘status’ e l’elemento <p> con il messaggio di stato legato alla prop ‘message’. Questo fornisce una struttura semplice per visualizzare il messaggio di stato del gioco in un modo ordinato e facilmente riutilizzabile, utilizzando ‘message’ per mostrare dinamicamente il messaggio di stato passato come prop.
- Script: definisce la logica del componente, è presente export default necessario per l’importazione e il riutilizzo del componente
- Style: definisce gli stili CSS specifici del componente.
Questa configurazione permette al componente di essere riutilizzato in modo flessibile in diverse parti dell'applicazione, semplicemente passando un diverso messaggio di stato come prop.
</p>

<h2>Board.vue</h2>
<p>Il file Board.vue è il componente utile a visualizzare e gestire la griglia del gioco
La struttura è composta da tre sezioni principali:
- Template: definisce la struttura HTML, al suo interno troviamo il contenitore <div> con classe .css ‘board’ e il componente figlio <Cell>, che rappresenta una cella della griglia, con ciclo v-for creiamo un componente cella per ogni cella in board, con :key=”index” otteniamo una chiave univoca per ogni elemento nel ciclo, basata su index, con :cell=”cell” definiamo la prop che passa il valore della cella (X,O,vuota), con :index=”index” la prop che passa l’indice della cella;
- Script: definisce la logica di ricezione dello stato della griglia come prop e di emissione di eventi quando una cella viene cliccata. Innanzitutto importiamo con import il componente Cell da utilizzare nel template, definiamo export default, necessario per importazione e il riutilizzo del componente, definendo name, components, props che il componente accetta, emits che specifica gli eventi che il componente emette ovvero “cellClicked” quando una cella viene cliccata, la funzione setup() per la CompositionAPI con handleCellClicked che emette l’evento ‘cellClicked’ con l’indice della cella cliccata;
- Style: definisce gli stili CSS specifici del componente.
</p>

<h2>Cell.vue</h2>
<p> il file Cell.vue è il componente che rappresenta un singolo elemento della griglia di gioco, ovvero la cella.
La struttura è composta da tre sezioni principali:
- Template: definisce la struttura HTML, al suo interno troviamo il contenitore <div> con classe .css ‘cell’, @click=”handleClick” che chiama la funzione handleClick quando il div viene cliccato; :class=”cellClass” che lega dinamicamente le classi CSS in base al valore di ‘cellClass’; {{cell}} che visualizza il valore della cella che può essere X o O;
- Script: gestisce la logica della cella. All’interno troviamo import che importa la funzione ‘computed’ dalla CompositionApi di Vue, export default necessario per l’importazione il riutilizzo del componente, name e prop,  emits che specifica gli eventi che il componente emette: cellClicked è l’evento emesso quando la cella viene cliccata; la funzione setup() con ‘handleClick’, ovvero la funzione che emette l’evento cellClicked con l’indice della cella cliccata, e ‘cellClass’ che lega dinamicamente le classi CSS in base al valore di ‘cell’.
- Style: definisce gli stili CSS specifici del componente.
</p>

<h2>main.js</h2>
<p>
E il file .js principale , essenziale per configurare e inizializzare correttamente un applicazione Vue.
All’interno troviamo:
- Importazione del file main.css contenente gli stili globali da applicare a tutta l’applicazione;
- Importazione di ‘createApp’ che crea un’applicazione Vue;
- Importazione del componente principale App.vue;
- Creazione e montaggio dell’app Vue:
createApp(App) crea un anuova istanza utilizzando il componente ‘App’ come componente root;
.mount(‘#app’) monta l’app sull’elemento DOM con l’id=”app”.
Questo significa che il contenuto di ‘App.vue’ verrà inserito in index.html nel
<div id=”app”></div>
</p>

<p align="right">(<a href="#readme-top">Torna su</a>)</p> 

## Contatti

Francesco Fiorentino - [LinkedIn](https://www.linkedin.com/in/francesco-fiorentino-8a854216a/)

<p align="right">(<a href="#readme-top">Torna su</a>)</p> 

<br>
<br>
<br>

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
<p align="right">(<a href="#readme-top">Torna su</a>)</p> 