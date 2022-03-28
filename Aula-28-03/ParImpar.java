import java.util.Scanner;

public class ParImpar{
    // Atributos
    public static Scanner teclado;

    // Funcoes e procedimentos
    public static String verificarParImpar(int n){
        if(n % 2 == 0){
            return "Par";
        }
        else{
            return "Impar";
        }
    }
public static int lerNumero(){
    // Criar um Scanner
    int num;
    // Mostrar na tela digite número
    System.out.println("FAVOR INFORMAR O VALOR QUE DESEJA DESCOBRIR SE É PAR OU IMPAR: ");
    num = teclado.nextInt();
    // Retornar o numero lido
    return num;
    }

    // Rotina principal
public static void main(String[] args) {
    // Ler numeros ate que um numero negativo seja digitado; 
    int num;
    teclado = new Scanner(System.in);
    do{
        num = lerNumero();
        System.out.println(verificarParImpar(num));
        }while(num >= 0);
        teclado.close(); 
    }
}