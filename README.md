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
<h2> <strong>App.vue</strong>
<p>Il file App.vue è il componente principale dell'applicazione Tic Tac Toe, che funge da punto di ingresso per l'interfaccia utente.
La struttura è composta da tre sezioni principali:
- Template: definisce la struttura HTML, al suo interno troviamo l’elemento <div id=”app”> ovvero il contenitore principale del componente, gli altri componenti: <Header> che mostra l’intestazione dell’applicazione, <Status> che mostra il messaggio di stato del gioco, ovvero il turno del giocatore e il risultato della partita e passa la prop ‘statusMessage’ al componente, <Board> che mostra la griglia del gioco,passa la prop ‘board’ al componente e ascolta l’evento ‘cellClicked’;  il pulsante <button> per resettare il gioco, che con un clic chiama la funzione resetGame();
- Script: definisce la logica del componente. Inizialmente importiamo ‘ref’ e ‘computed’ dalla CompositionAPI di Vue e i componenti con import, è presente export default, necessario per l’importazione e il riutilizzo del componente, con setup() utilizziamo la CompositionAPI per definire lo stato e la logica del componente: troviamo le const ‘currentPlayer’ che tiene traccia del giocatore corrente (X,O), ‘board’ che rappresenta la griglia del gioco, inizialmente vuota, ‘winner’ che rappresenta il vincitore del gioco;  ‘statusMessage’: computed property che restituisce un messaggio di stato basato sullo stato del gioco; le funzioni cellClicked(): funzione che gestisce i click sulle celle della griglia, aggiorna lo stato del gioco e verifica se c'è un vincitore.; checkWinner(): funzione che verifica se c'è una combinazione vincente sulla griglia; resetGame(): funzione che resetta lo stato del gioco.
- Style: definisce gli stili CSS specifici del componente.</p> <br>

<h2> Header.vue</h2>
<p></p>

<h2>Status.vue</h2>
<p></p>

<h2>Board.vue</h2>
<p></p>

<h2>Cell.vue</h2>
<p></p>

<h2>main.js</h2>
<p></p>

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