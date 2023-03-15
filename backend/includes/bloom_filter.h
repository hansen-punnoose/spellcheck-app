#ifndef BLOOM_FILTER_H
#define BLOOM_FILTER_H

#include <bitset>
#include <string>
#include <vector>

class BloomFilter {
public:
    BloomFilter(int size, int numHashes);
    void addWord(std::string word);
    bool isWord(std::string word) const;

private:
    std::bitset<1000000> m_bits;
    std::vector<int> m_hashes;
    int m_numHashes;
    int m_size;
    int m_seed;
};

#endif /* BLOOM_FILTER_H */
