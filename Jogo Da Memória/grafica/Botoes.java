package grafica;
import java.awt.event.ActionEvent;
import javax.swing.AbstractAction;
import javax.swing.JOptionPane;
import logica.JogoMemoria;

public class Botoes extends AbstractAction {
    BtnPeca [][] tabuleiro;
    private JogoMemoria jogo;

    public Botoes(BtnPeca[][] tabuleiro, JogoMemoria jogo){
        this.tabuleiro = tabuleiro;
        this.jogo = jogo;
    }
    @Override
    public void actionPerformed(ActionEvent e) {
        BtnPeca btn = (BtnPeca) e.getSource();
        int numero = btn.getNumero();
        if(jogo.isAguardandoPeca()) {
            //fazer a conferencia
            if(numero == jogo.getPecaSelecionada().getNumero()){
                // se acertar
                jogo.aumentarPontuacao();
                jogo.setAguardandoPeca(false);
                btn.mostrar();
                if(verificarFim()){
                    // se terminar
                    JOptionPane.showMessageDialog(null, String.format("Pontuação final %d", jogo.getPontuacao()), "jogo da memória", JOptionPane.INFORMATION_MESSAGE);;
                }
                btn.setEnabled(false);
                jogo.getPecaSelecionada().setEnabled(false);
            }else{
                // se errar
                jogo.diminuirPontuacao();
                jogo.setAguardandoPeca(false);
                // desvirar
                btn.ocultar();
                jogo.getPecaSelecionada().ocultar();
            }
        }else{
            jogo.setPecaSelecionada(btn);
            jogo.setAguardandoPeca(true);
            btn.mostrar();
        }
    }

    private boolean verificarFim(){
        int cont = 0;
        for(int i = 0; i < 4; i++){
            for(int j = 0; j < 4; j++){
                if (tabuleiro[i][j].isSelected()){
                    cont++;
                }
            }
        }
        if(cont == 16){
            return true;
        }else{
            return false;
        }
        
    }
}
