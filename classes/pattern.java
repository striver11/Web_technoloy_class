class pattern
{
    public static void main(String args[])
    {
        for(int i=1;i<=5;i++)
        {
            for(int j=5-1;j<=i;j--)
            {
                if(i+j==6)
                System.out.print("*");
                else
                System.out.print(" ");
            }
            System.out.println();
        }
    }
}