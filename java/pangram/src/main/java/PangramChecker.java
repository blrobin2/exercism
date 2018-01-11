import java.util.HashSet;

public class PangramChecker {
    private final int LENGTH_OF_ALPHABET = 26;

    public boolean isPangram(String input) {
        if (input.length() <= 0)
            return false;
        int letterCount = countLettersInInput(input);
        return letterCount == LENGTH_OF_ALPHABET;
    }

    private int countLettersInInput(String input) {
        HashSet<String> letters = new HashSet<>();
        for (String character : getArrayOfCharacters(input))
            if (isLetter(character))
                letters.add(character);
        return letters.size();
    }

    private String[] getArrayOfCharacters(String string) {
        return string.toLowerCase().split("");
    }

    private boolean isLetter(String character) {
        return Character.isLetter(character.charAt(0));
    }
}
