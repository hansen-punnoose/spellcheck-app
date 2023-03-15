import React from 'react';

const BloomFilterExplanation = () => {
  return (
    <section className='bloomfilter-container'>
      <h2>Introduction to Bloom filters</h2>
      <p>
      A Bloom filter, initially proposed by Burton Bloom in 1970, is a probabilistic data structure designed to test if an element is a member of a specific set. It is capable of performing membership queries in constant O(1) expected time while utilizing considerably less space than traditional hash tables. The trade-off for this space efficiency is the potential for false positives, where an item may be reported as a member of the set when it is not. This characteristic makes Bloom filters suitable for use as filters or sanity checks for more complex data structures.
      </p>
      <p>Bloom filters comprise an array of bits and a set of k hash functions. The hash functions map elements to specific positions within the array. When an element is added to the filter, the corresponding bits are set to 1 for each hash function. To determine if an element is in the set, the filter checks the bit values at the positions indicated by the hash functions. If any of these bits is 0, the filter correctly reports that the element is not in the set. However, if all bits are 1, the filter reports that the element might be in the set, although this might not be accurate. </p>
    <p>The false-positive rate of a Bloom filter depends on the number of elements (n), the size of the bit array (m), and the number of hash functions (k). The false-positive rate can be minimized by choosing an optimal value for k, which is approximately k = ln(2) * (m/n). By adjusting the size of the bit array and the number of hash functions, Bloom filters can achieve a desired false-positive rate while maintaining their time and space efficiency.
</p>    
<p>
        To learn more about Bloom filters, see <a href="https://jeffe.cs.illinois.edu/teaching/algorithms/notes/06-bloom.pdf" target="_blank" rel="noopener noreferrer">https://jeffe.cs.illinois.edu/teaching/algorithms/notes/06-bloom.pdf</a>.
      </p>
    </section>
  );
};

export default BloomFilterExplanation;
