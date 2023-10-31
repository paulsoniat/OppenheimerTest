// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.


// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
// ----------------------------------- Type Answer Below Line ------------------------------------------------------------
const s = "awiopayuiodlmp"
function longestSubstring(s) {
    const testMap = new Map();
    let longest = 0;
    let currentLength = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (testMap.has(s[i])) {
            start = Math.max(start, testMap.get(s[end]) + 1);
        }
        testMap.set(s[i], i);
        currentLength = i - start + 1;
        longest = Math.max(longest, currentLength);
    }

    return longest;
}

console.log(longestSubstring(s))