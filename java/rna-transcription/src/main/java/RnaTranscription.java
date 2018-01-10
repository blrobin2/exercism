import java.util.HashMap;

import static java.util.stream.Collectors.joining;

class RnaTranscription {

    private HashMap<Character, String> dnaToRnaMap;

    RnaTranscription() {
        populateTranslationMap();
    }

    String transcribe(String dnaStrand) {
        return dnaStrand.chars()
            .mapToObj(this::getRnaLetter)
            .collect(joining());
    }

    private void populateTranslationMap() {
        dnaToRnaMap = new HashMap<>();
        dnaToRnaMap.put('C', "G");
        dnaToRnaMap.put('G', "C");
        dnaToRnaMap.put('T', "A");
        dnaToRnaMap.put('A', "U");
    }

    private String getRnaLetter(int charCode) {
        return dnaToRnaMap.get((char) charCode);
    }
}
