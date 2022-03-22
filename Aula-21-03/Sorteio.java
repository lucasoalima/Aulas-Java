import java.util.Random;

import com.sun.org.apache.xpath.internal.SourceTree;

public class Sorteio {
        public static void main(String[] args) {
            Random gerador = new Random();
            int c = 1, num;

            while (c <= 1000){
                num = 1 + gerador.nextInt(100);
                System.out.println(num);
                c++;
            }
        }
}