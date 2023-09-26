public class fibonnaci_recursion {
    public static void main(String[] args) {
        int n = 10;
        int a=0;
        int b=1;
        int c=0;
        fibonnaci(a,b,c,n);
    }
    private static void fibonnaci(int a, int b, int c, int n)
    {
        System.out.println(a);
        int t=a+b;
        a=b;
        b=t;
        c++;
        if(c<=n)
        {
            fibonnaci(a,b,c,n);
        }
        System.out.println(c);

        
    }
}
