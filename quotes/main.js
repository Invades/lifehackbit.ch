let quotes = [];

fetch("quotes.json")
.then(response => response.json())
.then(data => {
    quotes = data.quotes;
    display_quotes(quotes);
})
.catch(error => {
    console.error("Error fetching JSON file", error);
});

// shoutout chatgpt (I had to do half of them manually cus it's retarded I hate myself)
const character_map = {
    '𝐀': 'A', '𝐁': 'B', '𝐂': 'C', '𝐃': 'D', '𝐄': 'E', '𝐅': 'F', '𝐆': 'G', '𝐇': 'H', '𝐈': 'I', '𝐉': 'J', '𝐊': 'K', '𝐋': 'L',
    '𝐌': 'M', '𝐍': 'N', '𝐎': 'O', '𝐏': 'P', '𝐐': 'Q', '𝐑': 'R', '𝐒': 'S', '𝐓': 'T', '𝐔': 'U', '𝐕': 'V', '𝐖': 'W', '𝐗': 'X',
    '𝐘': 'Y', '𝐙': 'Z',

    '𝕒': 'a', '𝕓': 'b', '𝕔': 'c', '𝕕': 'd', '𝕖': 'e', '𝕗': 'f', '𝕘': 'g', '𝕙': 'h', '𝕚': 'i', '𝕛': 'j', '𝕜': 'k', '𝕝': 'l',
    '𝕞': 'm', '𝕟': 'n', '𝕠': 'o', '𝕡': 'p', '𝕢': 'q', '𝕣': 'r', '𝕤': 's', '𝕥': 't', '𝕦': 'u', '𝕧': 'v', '𝕨': 'w', '𝕩': 'x',
    '𝕪': 'y', '𝕫': 'z',

    '𝔸': 'A', '𝔹': 'B', 'ℂ': 'C', '𝔻': 'D', '𝔼': 'E', '𝔽': 'F', '𝔾': 'G', 'ℍ': 'H', '𝕀': 'I', '𝕁': 'J', '𝕂': 'K', '𝕃': 'L',
    '𝕄': 'M', 'ℕ': 'N', '𝕆': 'O', 'ℙ': 'P', 'ℚ': 'Q', 'ℝ': 'R', '𝕊': 'S', '𝕋': 'T', '𝕌': 'U', '𝕍': 'V', '𝕎': 'W', '𝕏': 'X',
    '𝕐': 'Y', 'ℤ': 'Z',
  
    'Ａ': 'A', 'Ｂ': 'B', 'Ｃ': 'C', 'Ｄ': 'D', 'Ｅ': 'E', 'Ｆ': 'F', 'Ｇ': 'G', 'Ｈ': 'H', 'Ｉ': 'I', 'Ｊ': 'J', 'Ｋ': 'K', 'Ｌ': 'L',
    'Ｍ': 'M', 'Ｎ': 'N', 'Ｏ': 'O', 'Ｐ': 'P', 'Ｑ': 'Q', 'Ｒ': 'R', 'Ｓ': 'S', 'Ｔ': 'T', 'Ｕ': 'U', 'Ｖ': 'V', 'Ｗ': 'W', 'Ｘ': 'X',
    'Ｙ': 'Y', 'Ｚ': 'Z',
  
    'ａ': 'a', 'ｂ': 'b', 'ｃ': 'c', 'ｄ': 'd', 'ｅ': 'e', 'ｆ': 'f', 'ｇ': 'g', 'ｈ': 'h', 'ｉ': 'i', 'ｊ': 'j', 'ｋ': 'k', 'ｌ': 'l',
    'ｍ': 'm', 'ｎ': 'n', 'ｏ': 'o', 'ｐ': 'p', 'ｑ': 'q', 'ｒ': 'r', 'ｓ': 's', 'ｔ': 't', 'ｕ': 'u', 'ｖ': 'v', 'ｗ': 'w', 'ｘ': 'x',
    'ｙ': 'y', 'ｚ': 'z',
  
    'ᴀ': 'a', 'ʙ': 'b', 'ᴄ': 'c', 'ᴅ': 'd', 'ᴇ': 'e', 'ꜰ': 'f', 'ɢ': 'g', 'ʜ': 'h', 'ɪ': 'i', 'ᴊ': 'j', 'ᴋ': 'k', 'ʟ': 'l',
    'ᴍ': 'm', 'ɴ': 'n', 'ᴏ': 'o', 'ᴘ': 'p', 'Q': 'Q', 'ʀ': 'r', 'ꜱ': 's', 'ᴛ': 't', 'ᴜ': 'u', 'ᴠ': 'v', 'w': 'w', 'x': 'x',
    'ʏ': 'y', 'ᴢ': 'z',

    '𝐚': 'a', '𝐛': 'b', '𝐜': 'c', '𝐝': 'd', '𝐞': 'e', '𝐟': 'f', '𝐠': 'g', '𝐡': 'h', '𝐢': 'i', '𝐣': 'j', '𝐤': 'k', '𝐥': 'l',
    '𝐦': 'm', '𝐧': 'n', '𝐨': 'o', '𝐩': 'p', '𝐪': 'q', '𝐫': 'r', '𝐬': 's', '𝐭': 't', '𝐮': 'u', '𝐯': 'v', '𝐰': 'w', '𝐱': 'x',
    '𝐲': 'y', '𝐳': 'z',
  
    '𝓪': 'a', '𝓫': 'b', '𝓬': 'c', '𝓭': 'd', '𝓮': 'e', '𝓯': 'f', '𝓰': 'g', '𝓱': 'h', '𝓲': 'i', '𝓳': 'j', '𝓴': 'k', '𝓵': 'l',
    '𝓶': 'm', '𝓷': 'n', '𝓸': 'o', '𝓹': 'p', '𝓺': 'q', '𝓻': 'r', '𝓼': 's', '𝓽': 't', '𝓾': 'u', '𝓿': 'v', '𝔀': 'w', '𝔁': 'x',
    '𝔂': 'y', '𝔃': 'z',

    '𝘼': 'A', '𝘽': 'B', '𝘾': 'C', '𝘿': 'D', '𝙀': 'E', '𝙁': 'F', '𝙂': 'G', '𝙃': 'H', '𝙄': 'I', '𝙅': 'J', '𝙆': 'K', '𝙇': 'L',
    '𝙈': 'M', '𝙉': 'N', '𝙊': 'O', '𝙋': 'P', '𝙌': 'Q', '𝙍': 'R', '𝙎': 'S', '𝙏': 'T', '𝙐': 'U', '𝙑': 'V', '𝙒': 'W', '𝙓': 'X',
    '𝙔': 'Y', '𝙕': 'Z',

    '𝒶': 'a', '𝒷': 'b', '𝒸': 'c', '𝒹': 'd', '𝑒': 'e', '𝒻': 'f', '𝑔': 'g', '𝒽': 'h', '𝒾': 'i', '𝒿': 'j', '𝒦': 'k', '𝒷': 'l',
    '𝓂': 'm', '𝓃': 'n', '𝑜': 'o', '𝓅': 'p', '𝓆': 'q', '𝓇': 'r', '𝓈': 's', '𝓉': 't', '𝓊': 'u', '𝓋': 'v', '𝓌': 'w', '𝓍': 'x',
    '𝓎': 'y', '𝓏': 'z',

    '𝒜': 'A', '𝐵': 'B', '𝒞': 'C', '𝒟': 'D', '𝐸': 'E', '𝐹': 'F', '𝒢': 'G', '𝐻': 'H', '𝐼': 'I', '𝒥': 'J', '𝒦': 'K', '𝐿': 'L',
    '𝑀': 'M', '𝒩': 'N', '𝒪': 'O', '𝒫': 'P', '𝒬': 'Q', '𝑅': 'R', '𝒮': 'S', '𝒯': 'T', '𝒰': 'U', '𝒱': 'V', '𝒲': 'W', '𝒳': 'X',
    '𝒴': 'Y', '𝒵': 'Z',

    '𝙖': 'a', '𝙗': 'b', '𝙘': 'c', '𝙙': 'd', '𝙚': 'e', '𝙛': 'f', '𝙜': 'g', '𝙝': 'h', '𝙞': 'i', '𝙟': 'j', '𝙠': 'k', '𝙡': 'l',
    '𝙢': 'm', '𝙣': 'n', '𝙤': 'o', '𝙥': 'p', '𝙦': 'q', '𝙧': 'r', '𝙨': 's', '𝙩': 't', '𝙪': 'u', '𝙫': 'v', '𝙬': 'w', '𝙭': 'x',
    '𝙮': 'y', '𝙯': 'z',

    '０': '0', '１': '1', '２': '2', '３': '3', '４': '4', '５': '5', '６': '6', '７': '7', '８': '8', '９': '9',

    '𝟘': '0', '𝟙': '1', '𝟚': '2', '𝟛': '3', '𝟜': '4', '𝟝': '5', '𝟞': '6', '𝟟': '7', '𝟠': '8', '𝟡': '9',

    // fullwidth space to normal space
    '　': ' ',

    //literally only for one retarded ass quote but whatever
    '  ': ' ', '   ': ' '
};

function convert(input) {
    const pattern = new RegExp(Object.keys(character_map).join('|'), 'g');

    return input.replace(pattern, char => character_map[char] || char);
}

function normalize_text(text) {
    return convert(text).toLowerCase();
};

function display_quotes(quotes_to_display) {
    const content_div = document.getElementById("quotez");
    content_div.innerHTML = "";
    quotes_to_display.forEach(quote => {
        const div = document.createElement("div");
        div.className = "quote-container";
        div.textContent = quote;
        content_div.appendChild(div);
    });
}

function filter_quotes() {
    const search_term = normalize_text(document.getElementById("search-input").value.toLowerCase());
    const filtered_quotes = quotes.filter(quote => normalize_text(quote.toLowerCase()).includes(search_term));
    display_quotes(filtered_quotes);
}

document.getElementById("search-input").addEventListener("input", filter_quotes);