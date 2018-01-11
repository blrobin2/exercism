public class PangramChecker {
    private final int LENGTH_OF_ALPHABET = 26;

    public boolean isPangram(String input) {
        return input.toLowerCase().chars()
            .distinct()
            .filter(Character::isLetter)
            .count() == LENGTH_OF_ALPHABET;
    }
}
