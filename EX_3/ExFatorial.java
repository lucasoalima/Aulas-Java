import java.util.Scanner;

public class ExFatorial {
    public static void main(String[] args){
        int numero;
        int i = 1;

        System.out.println("FAVOR INFORMAR O NUMERO QUE DESEJA CALCULAR O FATORIAL: ");
        Scanner scanner = new Scanner(System.in);
        numero = scanner.nextInt();
        long fatorial = 1;

        if(numero > 0){
        while(i <= numero){
            fatorial = fatorial * i;
            i++;   
        }
        System.out.println("O FATORIAL DE: " + numero + " É " + fatorial);}
        else{
            System.out.println("ERRO: NUMERO INVALIDO");
        }
        
    }
}
