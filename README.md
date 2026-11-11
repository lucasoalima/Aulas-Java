<h1 align="center">Aulas Java — Exercises & Mini-projects</h1>

<p align="center">
  Java / OOP coursework: console exercises plus two small <b>Java Swing</b> desktop apps
  (a calculator and a memory game).
</p>

<p align="center"><img src="https://img.shields.io/badge/Java-ED8B00?logo=openjdk&logoColor=white" alt="Java"></p>

## 📚 What's inside

### Mini-projects (Java Swing)
- **`calculadora/`** — GUI calculator. Logic split into `Soma`, `Subtracao`,
  `Multiplicacao`, `Divisao` (implementing an `Operacao` abstraction), with a Swing UI
  (`FrameCalculadora`, `ActionCalculadora`).
- **`Jogo Da Memória/`** — a memory-matching game with a Swing board (`FrmJogoMemoria`,
  `BtnPeca`, `Botoes`) and game logic (`JogoMemoria`).

### Exercise list (`1_Lista_Exercicios/`)
- **ExCalculadora** — basic calculator · **ExFatorial** — factorial ·
  **ExFibonacci** — Fibonacci sequence · **jogoSorteio** — random draw game ·
  **exLoteria** — lottery-style draw.

### Class sessions
- **`Aula-21-03/`** — `Calendario`, `Sorteio` · **`Aula-28-03/`** — `BuscaNumero`,
  `ParImpar`, `Tabuada`.

## 🚀 How to run
```bash
# console exercise
javac 1_Lista_Exercicios/EX_3/ExFatorial.java && java -cp 1_Lista_Exercicios/EX_3 ExFatorial
# Swing app (run its main class)
javac calculadora/**/*.java && java calculadora.logica.main
```

---
<p align="center"><a href="https://www.linkedin.com/in/lucasoalima/">LinkedIn</a> &middot; <a href="https://github.com/lucasoalima">GitHub</a></p>
