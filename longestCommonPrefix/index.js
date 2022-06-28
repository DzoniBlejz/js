function longestCommonPrefix(str) {
    let prefix = str[0]

    for (let i = 1; i < str.length; i++) {
        p = ""
        for (let j = 0; j < str[i].length; j++) {
            if (prefix[j] === str[i][j]) {
                p += prefix[j]
            } else {
                break
            }
        }
        prefix = p
    }
    return prefix
}

res = longestCommonPrefix(["flower","flow","flower"])
// res = longestCommonPrefix(["flower","flow","flight"])
console.log(res)
// longestCommonPrefix([
// 	"tito",
// 	"habulje",
// 	"bibib",
// 	"ajaja",
// 	"matre",
// 	"ehat",
// 	"sjej",
// 	"dzej",
// ]);

//  [ti, ha, bi, aj, ti, ha, ha, ti, ha]
