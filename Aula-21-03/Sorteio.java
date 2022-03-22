import java.util.Random;

import com.sun.org.apache.xpath.internal.SourceTree;

public class Sorteio {
        public static void main(String[] args) {
            Random gerador = new Random();
            int c = 1, num;
            double media = 0; //numero de ponto flutuante
            
            while (c <= 1000){
                num = 1 + gerador.nextInt(100);
                media += num; // media = media + numero
                System.out.println(num);
                c++;
            }
            media /= 1000.0d; // media = media / 1000;
            // media = media / (double) 1000;
            System.out.println("Média = " + media);
        }
}