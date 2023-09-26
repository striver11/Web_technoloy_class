import java.net.SocketPermission;

public class prime {
    public static void main(String[] args) {
        int v=0;
         System.out.println(v);
        for(int i=100000;i>=9999;i--)
        {
            int g=0;
            for(int j=1;j<=i;j++)
            {
                if(i%j==0)
                {
                    g++;

                }
            }

           
            if(g==2)
            {
                v=i;
               System.out.println(v);
                break;
               
            }
        }
       
    }
    
}
