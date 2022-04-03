import java.util.Random;
import java.util.Scanner;

// Faça um jogo de adivinhação em que programa sorteia um número inteiro positivo de 0 a 100 e o jogador tem 10 tentativas (vidas) para acertar. Em cada tentativa, lê o número digitado pelo jogador e mostra uma dica. Essa dica consiste em informar se o número digitado é maior ou menor que o número sorteado. Caso o jogador acerte, o jogo termina informando que o jogador venceu, caso as vidas acabem, o jogo termina informando que o jogador perdeu. O programa deve validar o número digitado pois o valor precisa ser entre 0 e 100.

public class jogoSorteio{


    public static int numero;
    
    public static int sortearNumero() {
        Random gerador = new Random();
        numero = 1 + gerador.nextInt(100);
        
        return numero;
    }
    public static void main(String[] args) {
        numero = sortearNumero();
        int numDigitado;
        int vidas = 10;

        Scanner teclado = new Scanner(System.in);
        System.out.println(numero);

do{
        System.out.println("INFORME UM NUMERO DE 1 A 100");
        numDigitado = teclado.nextInt();
        if(numDigitado == numero){
            System.out.println("PARABENS, VOCE GANHOU!");
            break;
        }
        if(numDigitado > 100 || numDigitado < 0){
            System.out.println("VALOR INVALIDO, INFORME UM NUMERO DE 1 A 100");
        }
        else if(numDigitado < numero){
            System.out.println("DICA: É ALGUM VALOR ACIMA, TENTE NOVAMENTE");
        }
        else if(numDigitado > numero){
            System.out.println("DICA: É ALGUM VALOR ABAIXO, TENTE NOVAMENTE");
        }
        vidas = vidas -1;
        System.out.println("TE RESTAM " + vidas + " VIDAS");


    }while(vidas > 0);

    if (vidas == 0){
        System.out.println("FIM DE JOGO!");
    }
}
        
}