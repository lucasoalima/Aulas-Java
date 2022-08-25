package logica;
import grafica.FrmJogoMemoria;

public class main {
    public static void main(String[] args) {
        FrmJogoMemoria frm = new FrmJogoMemoria();
        frm.setVisible(true);
        frm.mostrarTabuleiro();
        try{
            Thread.sleep(5000); /* declarar os segundos para as cartas aparecerem */
        }catch (InterruptedException ex){
            ex.printStackTrace();
        }
        frm.ocultarTabuleiro();
    }
}
