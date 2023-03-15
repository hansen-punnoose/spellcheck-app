#include "bloom_filter.h"
#include <functional>
#include <cmath>
#include <string>
#include <bitset>
#include <random>
#include <bitset>
#include <vector>
#include <string>



// BloomFilter::BloomFilter(int size, int numHashes)
//     : m_size(size), m_numHashes(numHashes), m_seed(12345)
// {
//     // Generate numHashes number of random integers for hashing
//     std::mt19937 rng(m_seed);
//     std::uniform_int_distribution<int> dist(0, size-1);
//     for (int i = 0; i < numHashes; i++) {
//         m_hashes.push_back(dist(rng));
//     }
// }

// void BloomFilter::addWord(std::string word)
// {
//     // Convert word to lowercase
//     for (char& c : word) {
//         if (c >= 'A' && c <= 'Z') {
//             c = c - 'A' + 'a';
//         }
//     }

//     // Hash word using all hash functions and set corresponding bits to true
//     for (int i = 0; i < m_numHashes; i++) {
//         int hash = 0;
//         for (char c : word) {
//             hash = (hash * 31 + c) % m_size;
//         }
//         m_bits[(hash + m_hashes[i]) % m_size] = true;
//     }
// }

// bool BloomFilter::isWord(std::string word) const
// {
//     // Convert word to lowercase
//     for (char& c : word) {
//         if (c >= 'A' && c <= 'Z') {
//             c = c - 'A' + 'a';
//         }
//     }

//     // Hash word using all hash functions and check corresponding bits
//     for (int i = 0; i < m_numHashes; i++) {
//         int hash = 0;
//         for (char c : word) {
//             hash = (hash * 31 + c) % m_size;
//         }
//         if (!m_bits[(hash + m_hashes[i]) % m_size]) {
//             return false;
//         }
//     }
//     return true;
// }
#include "MurmurHash3.h"

BloomFilter::BloomFilter(int size, int numHashes)
    : m_size(size), m_numHashes(numHashes), m_seed(12345)
{
    // Generate numHashes number of random integers for hashing
    std::mt19937 rng(m_seed);
    std::uniform_int_distribution<int> dist(0, size-1);
    for (int i = 0; i < numHashes; i++) {
        m_hashes.push_back(dist(rng));
    }
}

void BloomFilter::addWord(std::string word)
{
    // Convert word to lowercase
    for (char& c : word) {
        if (c >= 'A' && c <= 'Z') {
            c = c - 'A' + 'a';
        }
    }

    // Hash word using all hash functions and set corresponding bits to true
    for (int i = 0; i < m_numHashes; i++) {
        uint32_t hash;
        MurmurHash3_x86_32(word.c_str(), word.length(), m_hashes[i], &hash);
        m_bits[hash % m_size] = true;
    }
}

bool BloomFilter::isWord(std::string word) const
{
    // Convert word to lowercase
    for (char& c : word) {
        if (c >= 'A' && c <= 'Z') {
            c = c - 'A' + 'a';
        }
    }

    // Hash word using all hash functions and check corresponding bits
    for (int i = 0; i < m_numHashes; i++) {
        uint32_t hash;
        MurmurHash3_x86_32(word.c_str(), word.length(), m_hashes[i], &hash);
        if (!m_bits[hash % m_size]) {
            return false;
        }
    }
    return true;
}
