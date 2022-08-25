package grafica;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;
import org.w3c.dom.css.RGBColor;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.GridLayout;

public class FrameCalculadora extends JFrame {
    private JTextField txtX;
    private JTextField txtY;
    private JButton btnCalcular;
    private JComboBox<String> operacao;

    public FrameCalculadora() {
        setSize(new Dimension(500, 300));
        setLayout(new GridLayout(5, 2, 10, 10));
        setResizable(false);
        setTitle("CALCULADORA SIMPLES: X e Y");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        add(new JLabel("X:"));        
        add(txtX = new JTextField(15));
        add(new JLabel("Y:"));
        add(txtY = new JTextField(15));
        
        String operacoes[] = {"Soma", "Subtração", "Multiplicação", "Divisão"};
        add(operacao = new JComboBox<String>(operacoes));

        add(btnCalcular = new JButton("CALCULAR"));
        ActionCalculadora action = new ActionCalculadora(operacao, txtX, txtY);
        btnCalcular.addActionListener(action);
    }
}
