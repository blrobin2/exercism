import java.util.LinkedList;
import java.util.stream.Stream;

class ArmstrongNumbers {

	boolean isArmstrongNumber(int numberToCheck) {
		LinkedList<Integer> listOfDigits = makeListOfDigits(numberToCheck);
		int armstrongNumber = calculateArmstrongNumber(listOfDigits);
		return armstrongNumber == numberToCheck;
	}

	private LinkedList<Integer> makeListOfDigits(int number) {
		LinkedList<Integer> listOfDigits = new LinkedList<>();
		while (number > 0) {
			listOfDigits.push(number % 10);
			number /= 10;
		}
		return listOfDigits;
	}

	private int calculateArmstrongNumber(LinkedList<Integer> listOfDigits) {
		int length = listOfDigits.size();
		return listOfDigits.stream()
			.map(x -> convertToPowerOfOriginalNumberLength(x, length))
			.reduce(0, this::addTogether);
	}

	private int convertToPowerOfOriginalNumberLength(int x, int length) {
		return (int) Math.pow(x, length);
	}

	private int addTogether(int x, int y) {
		return x + y;
	}
}
