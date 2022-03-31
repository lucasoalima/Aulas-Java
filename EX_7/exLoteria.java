import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

//Faça um jogo de loteria! O programa sorteia 6 números (chamadas dezenas) de 1 a 60 e pede para o jogador escolher 6 números de 1 a 60. O programa compara os números escolhidos com os números sorteados, mostra as dezenas sorteadas, as dezenas escolhidas pelo jogador e mostra o prêmio conforme abaixo:



// 6 acertos: R$ 1.000.000,00
// 5 acertos: R$ 250.000,00
// 4 acertos: R$ 50.000,00
// 3 acertos: nada.
// 2 acertos: nada.
// 1 acerto: nada.

public class exLoteria {
    public static int [] numeroGerado;
    public static int i;
    public static int numCertos;

    public static void sorteioLoteria() {
        Random gerador = new Random();
        numeroGerado = new int[6];
        for(int i = 0; i < numeroGerado.length; i++){
        numeroGerado[i] = 1 + gerador.nextInt(60);
    }
}

    public static void main(String[]args) {
        sorteioLoteria();
        Scanner teclado = new Scanner(System.in);
        int numDigitado[] = new int[6];

        for(int i = 0; i < numeroGerado.length; i++){
            System.out.println("##########################################");
            System.out.println("LOTERIA - ESCOLHA O " + (i+1) + "º NUMERO DE 1 A 60: ");
            System.out.println("##########################################");
            numDigitado[i] = teclado.nextInt();
            if(numDigitado[i] < 1 || numDigitado[i] > 60){
                System.out.println("\nERRO: VALORES SOMENTE ENTRE 1 E 60\n");
                System.exit(0);
            }
            else if(numDigitado[i] == numeroGerado[i]){
                numCertos++;
                numDigitado[i] =+ numDigitado[i];
            }
        }
        // for(int i = 0; i < numeroGerado.length; i++){
        //     System.out.println("\n"+ (i+1) + "º NUMERO SORTEADO: " + numeroGerado[i] + "\n");
        // }
        Arrays.sort(numeroGerado);
        System.out.println("\nNUMEROS SORTEADOS:"+ Arrays.toString(numeroGerado));
        Arrays.sort(numDigitado);
        System.out.println("NUMEROS ESCOLHIDOS:"+ Arrays.toString(numDigitado));
        System.out.println("VOCÊ ACERTOU " + numCertos + " NUMEROS");
    }
}
