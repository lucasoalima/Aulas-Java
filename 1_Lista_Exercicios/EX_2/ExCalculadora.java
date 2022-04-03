import java.util.Scanner;

public class ExCalculadora {
    public static void main(String[] args) {
        int op;
        double n1, n2;
        double soma, subtracao, multiplicacao, divisao;
        Scanner entrada = new Scanner(System.in);
        
        System.out.println("FAVOR INFORMAR O PRIMEIRO VALOR: ");
        n1 = entrada.nextDouble();
        System.out.println("FAVOR INFORMAR O SEGUNDO VALOR: ");
        n2 = entrada.nextDouble();

        System.out.println("QUAL TIPO DE OPERAÇÃO DESEJA REALIZAR: ");
        System.out.println("1 - SOMA");
        System.out.println("2 - SUBTRACAO");
        System.out.println("3- MULTIPLICACAO");
        System.out.println("4 - DIVISAO");
        System.out.println("DIGITE SUA OPCAO: ");
        op = entrada.nextInt();

        switch(op){
            case 1:
                soma = n1 + n2;
                System.out.println("O RESULTADO DA SOMA É: "+soma);
                break;
            case 2:
                subtracao = n1 - n2;
                System.out.println("O RESULTADO DA SUBTRACAO É: "+subtracao);
                break;
            case 3:
                multiplicacao = n1 * n2;
                System.out.println("O RESULTADO DA MULTIPLICAÇÃO É: "+multiplicacao);
                break;
            case 4:
                if(n1<n2){
                    System.out.println("IMPOSSIVEL REALIZAR A DIVISAO ");
                }
                else{
                divisao = n1/n2;
                System.out.println("O RESULTADO DA DIVISAO É: "+divisao);
                }
                break;

            default:
            System.out.println("OPERACAO INVALIDA, TENTE NOVAMENTE");
        }
    }
}
