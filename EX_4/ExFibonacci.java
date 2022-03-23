import java.util.Scanner;

public class ExFibonacci{
    public static void main(String [] args) {
        int a = 1;
        int b = 0;
        int somado;
        int numero;

        System.out.println("FAVOR INFORMAR O NUMERO QUE DESEJA SABER O TERMO NA SEQUENCIA DE FIBONACCI: ");
        Scanner scanner = new Scanner(System.in);
        numero = scanner.nextInt();

        if(numero == 1){
            System.out.println("O TERMO É ZERO!");
        }
        else if(numero == 0){
            System.out.println("O TERMO É INVÁLIDO!");
        }
        else if(numero < 0){
            System.out.println("O TERMO É INVÁLIDO, FAVOR INFORMAR UM NÚMERO INTEIRO POSITIVO");
        }
        else{
            for(int i = 0; i < numero; i++){
                somado = a;
                a = a + b;
                b = somado;
        }
        System.out.println("O N-ÉSIMO DO " + numero + "º TERMO É : " + b);

        }
    }
}