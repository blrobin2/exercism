import java.lang.StringBuilder;

class ReverseString {

    String reverse(String inputString) {
        StringBuilder inputBuilder = new StringBuilder(inputString);
        return inputBuilder.reverse().toString();
    }

}