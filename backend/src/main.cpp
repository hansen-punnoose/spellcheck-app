#include <iostream>
#include "spellchecker.h"
#include <json.hpp>
#include <filesystem>


using json = nlohmann::json;

int main(int argc, char* argv[]) {
    if (argc != 2) {
        std::cerr << "Usage: " << argv[0] << " <word>" << std::endl;
        return 1;
    }
    std::string dictionaryFilename = std::filesystem::absolute("./backend/english_words.txt").string();

    int size = 1000000;
    int numHashes = 3;
    std::string word = argv[1];

    // Create a SpellChecker object with the given parameters
    SpellChecker spellChecker(dictionaryFilename, size, numHashes);

    // Check if the word is likely to be spelled correctly
    bool isCorrect = spellChecker.isCorrectlySpelled(word);

    // Create JSON response with the result
    json response = {
        {"isCorrect", isCorrect}
    };

    // Output the JSON response
    std::cout << response.dump() << std::endl;

    return 0;
}






// #include <iostream>
// #include "spellchecker.h"

// #include <json.hpp>

// using json = nlohmann::json;

// int main(int argc, char* argv[]) {
    
//     json response = {
//         {"message", "bazinga"}
//     };

//     std::cout << response.dump() << std::endl;
//     // if (argc != 2) {
//     //     std::cerr << "Usage: " << argv[0] << " <word>" << std::endl;
//     //     return 1;
//     // }

//     // std::string dictionaryFilename = "../english_words.txt";
//     // int size = 1000000;
//     // int numHashes = 5;
//     // std::string word = argv[1];

//     // // Create a SpellChecker object with the given parameters
//     // SpellChecker spellChecker(dictionaryFilename, size, numHashes);

//     // // Check if the word is likely to be spelled correctly
//     // if (spellChecker.isCorrectlySpelled(word)) {
//     //     std::cout << "correctly spelled" << std::endl;
//     // } else {
//     //     std::cout << "misspelled" << std::endl;
//     // }

//     return 0;
// }