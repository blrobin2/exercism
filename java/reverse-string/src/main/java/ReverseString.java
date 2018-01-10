import java.lang.StringBuilder;

class ReverseString {

    String reverse(String inputString) {
        return new StringBuilder(inputString).reverse().toString();
    }

}