import java.util.PrimitiveIterator.OfInt;

class Hamming {
    private String leftStrand;
    private String rightStrand;

    Hamming(String leftStrand, String rightStrand) {
        if (leftStrand.length() != rightStrand.length()) {
            throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        }

        this.leftStrand = leftStrand;
        this.rightStrand = rightStrand;
    }

    int getHammingDistance() {
        return countDistance(
            getStrandIter(leftStrand),
            getStrandIter(rightStrand)
        );
    }

    private int countDistance(OfInt leftIter, OfInt rightIter) {
        int distance = 0;
        while (leftIter.hasNext() && rightIter.hasNext())
            if (leftIter.next() != rightIter.next())
                distance++;
        return distance;
    }

    private OfInt getStrandIter(String strand) {
        return strand.chars().iterator();
    }
}
