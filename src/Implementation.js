import React from 'react';

const BloomFilterExplanation = () => {
  return (
    <section className='bloomfilter-container'>
      <h2>Implementation</h2>
      <p>
      The spell checker implementation leverages the power of Bloom filters to efficiently determine whether a given word is spelled correctly. In this section, we will discuss the methods and libraries used in the implementation, including Murmur3, C++, and nlohmann/json.
          </p>
        <ol>
        <li>We have a custom BloomFilter class that is designed to store a dictionary of words and check the spelling of any input word. The class includes an array of bits (m_bits) and a vector of hash seeds (m_hashes). The addWord() method is used to add words to the Bloom filter, while the isWord() method checks if a given word is likely to be spelled correctly.

</li>
        <li>The implementation uses the Murmur3 hash function to achieve better performance and uniform distribution of hash values. Murmur3 is a non-cryptographic hash function that is both efficient and has excellent distribution properties. The MurmurHash3_x86_32() function is utilized in both the addWord() and isWord() methods, ensuring a consistent hashing mechanism across the entire process.

</li>
        <li>The nlohmann/json library is used to handle JSON data in our implementation. The library allows us to create, parse, and output JSON data easily. In the main() function, we create a JSON object called response that contains a single key-value pair indicating whether the input word is spelled correctly. We then output the JSON object to the standard output stream.</li>
        <li>The SpellChecker class encapsulates the Bloom filter implementation and provides a straightforward interface to check if a word is spelled correctly. It uses the BloomFilter class to store the dictionary of words and exposes the isCorrectlySpelled() method to query the spelling of a given word. The SpellChecker class reads the dictionary file and adds all words to the Bloom filter, preparing it for spelling checks.</li>
      <li>The main program takes a single command-line argument (the input word) and creates a SpellChecker object with the given parameters (dictionary file, Bloom filter size, and number of hash functions). It then calls the isCorrectlySpelled() method to determine if the input word is spelled correctly and constructs a JSON response containing the result. Finally, it outputs the JSON response.</li>
      </ol>
  
    </section>
  );
};

export default BloomFilterExplanation;
