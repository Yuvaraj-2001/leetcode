const alphabet = 'abcdefghijklmnopqrstuvwxyz'
var longestIdealString = function(s, k) {
    const dp = {}

    for (let c of alphabet) {
        dp[c] = 0
    }

    let res = 0

    for (let c of s) {
        const index = alphabet.indexOf(c)
        const start = Math.max(0, index - k)
        const end = Math.min(index+k + 1, alphabet.length)
        let cur = dp[c]
        
        for (let i=start; i<end; i++) {
            cur = Math.max(cur, dp[alphabet[i]] + 1)
        }

        dp[c] = cur

        res = Math.max(res, cur)
    }

    return res
};

// https://leetcode.com/problems/longest-ideal-subsequence/?envType=daily-question&envId=2024-04-25