import java.util.Random;
import java.util.Scanner;

public class BuscaNumero{
    // Atributos / propriedades
    public static int[] vetor;

    // Funcoes e procedimentos    
public static void sortearVetor() {
        Random gerador = new Random();
        vetor = new int[20];
        for(int i = 0; i < 20; i++){
            vetor[i] = 1+ gerador.nextInt(100);
        }
    }
public static int procurarValor(int n) {
        for (int i = 0; i < 20; i++){
            if(n == vetor[i]){
                return i;
            }
        }
        return -1;
    }

    // Rotina principal
public static void main(String[]args) {
    int num, pos;
    Scanner teclado = new Scanner(System.in);
    sortearVetor();
    System.out.println("DIGITE UM NUMERO: ");
    num = teclado.nextInt();
    pos = procurarValor(num);
    if(pos > 0){
        System.out.printf("Numero encontrado na posicao %d", pos);
    }
    else{
        System.out.println("Numero nao encontrado");
    }
    teclado.close();
 }
}