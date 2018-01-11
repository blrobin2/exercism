class Hamming {
    private String leftStrand;
    private String rightStrand;
    private int distance;

    Hamming(String leftStrand, String rightStrand) {
        if (leftStrand.length() != rightStrand.length())
            throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");

        this.leftStrand = leftStrand;
        this.rightStrand = rightStrand;
        this.distance = calculateHammingDistance();
    }

    int getHammingDistance() {
        return distance;
    }

    private int calculateHammingDistance() {
        for (int i = 0, length = leftStrand.length(); i < length; i++)
            if (isNotSameCharacter(i))
                distance++;
        return distance;
    }

    private boolean isNotSameCharacter(int index) {
        return leftStrand.charAt(index) != rightStrand.charAt(index);
    }
}
