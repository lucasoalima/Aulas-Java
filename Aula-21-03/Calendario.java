import java.util.Scanner;

public class Calendario {
    // Atributos

    // Metodos
    public static String mostarMesIf(int mes) {

        String nomeMes = "";

        if (mes == 1) {
            nomeMes = "Janeiro";
        } else if (mes == 2) {
            nomeMes = "Fevereiro";
        } else if (mes == 3) {
            nomeMes = "Março";
        } else if (mes == 4) {
            nomeMes = "Abril";
        } else if (mes == 5) {
            nomeMes = "Maio";
        } else if (mes == 6) {
            nomeMes = "Junho";
        } else if (mes == 7) {
            nomeMes = "Julho";
        } else if (mes == 8) {
            nomeMes = "Agosto";
        } else if (mes == 9) {
            nomeMes = "Setembro";
        } else if (mes == 10) {
            nomeMes = "Outubro";
        } else if (mes == 11) {
            nomeMes = "Novembro";
        } else if (mes == 12) {
            nomeMes = "Dezembro";
        }
        return nomeMes;
    }

    public static String mostarMesSwitch(int mes) {

        String nomeMes = "";

        if (mes == 1) {
            nomeMes = "Janeiro";
        } else if (mes == 2) {
            nomeMes = "Fevereiro";
        } else if (mes == 3) {
            nomeMes = "Março";
        } else if (mes == 4) {
            nomeMes = "Abril";
        } else if (mes == 5) {
            nomeMes = "Maio";
        } else if (mes == 6) {
            nomeMes = "Junho";
        } else if (mes == 7) {
            nomeMes = "Julho";
        } else if (mes == 8) {
            nomeMes = "Agosto";
        } else if (mes == 9) {
            nomeMes = "Setembro";
        } else if (mes == 10) {
            nomeMes = "Outubro";
        } else if (mes == 11) {
            nomeMes = "Novembro";
        } else if (mes == 12) {
            nomeMes = "Dezembro";
        }
        return nomeMes;
    }

    public static void main(String[] args) {
        int mes;
        Scanner teclado = new Scanner(System.in);
        System.out.println("Digite o mes:");
        mes = teclado.nextInt();
        System.out.println("nome Mes (if) = " + mostarMesIf(mes));
        System.out.println("Mes(switch) = " + mostarMesSwitch(mes));
        teclado.close();
    }
}