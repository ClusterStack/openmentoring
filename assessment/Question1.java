
/*
Given n pairs of parentheses, write a function to generate a group of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))"]


Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8

*/

public class Question1
{
    public static void main(String[] args) {
        System.out.println("Welcome to Online IDE!! Happy Coding :)");
        System.out.println(getParentheses(5));
    }
    
    public static String getParentheses(final int nValue) {
        if(!isValidNumber(nValue)) {
            System.out.println("This number is not valid");
        }
        String parentheses = "";
        for(int i = 0; i < nValue ; i++) {
            parentheses = parentheses + "(";
        }
        for(int i = 0; i < nValue ; i++) {
            parentheses = parentheses + ")";
        }
        return parentheses;
    }
    
    protected static boolean isValidNumber(final Integer number) {
        return number instanceof Integer && isRangeNumber(number, 1, 8);
    }
    
    protected static boolean isRangeNumber(final Integer number, final Integer min, final Integer max) {
        System.out.println( number >= min && number <= max);
        return number >= min && number <= max;
        
    }
}
