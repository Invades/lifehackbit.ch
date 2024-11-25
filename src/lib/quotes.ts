// Define types outside the function
type CharacterMap = {
    [key: string]: string[];
};

const character_map: CharacterMap = {
    'A': ['𝐀', '𝔸', 'Ａ', '𝘼', '𝒜', '𝑨', '𝙰', '𝓐', '𝔄'],
    'B': ['𝐁', '𝔹', 'Ｂ', '𝘽', '𝐵', '𝑩', '𝙱', '𝓑', '𝔅'],
    'C': ['𝐂', 'ℂ', 'Ｃ', '𝘾', '𝒞', '𝑪', '𝙲', '𝓒', 'ℭ'],
    'D': ['𝐃', '𝔻', 'Ｄ', '𝘿', '𝒟', '𝑫', '𝙳', '𝓓', '𝔇'],
    'E': ['𝐄', '𝔼', 'Ｅ', '𝙀', '𝐸', '𝑬', '𝙴', '𝓔', '𝔈'],
    'F': ['𝐅', '𝔽', 'Ｆ', '𝙁', '𝐹', '𝑭', '𝙵', '𝓕', '𝔉'],
    'G': ['𝐆', '𝔾', 'Ｇ', '𝙂', '𝒢', '𝑮', '𝙶', '𝓖', '𝔊'],
    'H': ['𝐇', 'ℍ', 'Ｈ', '𝙃', '𝐻', '𝑯', '𝙷', '𝓗', 'ℌ'],
    'I': ['𝐈', '𝕀', 'Ｉ', '𝙄', '𝐼', '𝑰', '𝙸', '𝓘', 'ℑ'],
    'J': ['𝐉', '𝕁', 'Ｊ', '𝙅', '𝒥', '𝑱', '𝙹', '𝓙', '𝔍'],
    'K': ['𝐊', '𝕂', 'Ｋ', '𝙆', '𝒦', '𝑲', '𝙺', '𝓚', '𝔎'],
    'L': ['𝐋', '𝕃', 'Ｌ', '𝙇', '𝐿', '𝑳', '𝙻', '𝓛', '𝔏'],
    'M': ['𝐌', '𝕄', 'Ｍ', '𝙈', '𝑀', '𝑴', '𝙼', '𝓜', '𝔐'],
    'N': ['𝐍', 'ℕ', 'Ｎ', '𝙉', '𝒩', '𝑵', '𝙽', '𝓝', '𝔑'],
    'O': ['𝐎', '𝕆', 'Ｏ', '𝙊', '𝒪', '𝑶', '𝙾', '𝓞', '𝔒'],
    'P': ['𝐏', 'ℙ', 'Ｐ', '𝙋', '𝒫', '𝑷', '𝙿', '𝓟', '𝔓'],
    'Q': ['𝐐', 'ℚ', 'Ｑ', '𝙌', '𝒬', '𝑸', '𝓠', '𝔔'],
    'R': ['𝐑', 'ℝ', 'Ｒ', '𝙍', '𝑅', '𝑹', '𝓡', 'ℜ'],
    'S': ['𝐒', '𝕊', 'Ｓ', '𝙎', '𝒮', '𝑺', '𝓢', '𝔖'],
    'T': ['𝐓', '𝕋', 'Ｔ', '𝙏', '𝒯', '𝑻', '𝓣', '𝔗'],
    'U': ['𝐔', '𝕌', 'Ｕ', '𝙐', '𝒰', '𝑼', '𝓤', '𝔘'],
    'V': ['𝐕', '𝕍', 'Ｖ', '𝙑', '𝒱', '𝑽', '𝓥', '𝔙'],
    'W': ['𝐖', '𝕎', 'Ｗ', '𝙒', '𝒲', '𝑾', '𝓦', '𝔚'],
    'X': ['𝐗', '𝕏', 'Ｘ', '𝙓', '𝒳', '𝑿', '𝓧', '𝔛'],
    'Y': ['𝐘', '𝕐', 'Ｙ', '𝙔', '𝒴', '𝒀', '𝓨', '𝔜'],
    'Z': ['𝐙', 'ℤ', 'Ｚ', '𝙕', '𝒵', '𝒁', '𝓩', 'ℨ'],

    'a': ['𝕒', 'ａ', 'ᴀ', '𝐚', '𝓪', '𝒶', '𝙖', '𝚊', '𝖆', '𝔞'],
    'b': ['𝕓', 'ｂ', 'ʙ', '𝐛', '𝓫', '𝒷', '𝙗', '𝚋', '𝖇', '𝔟'],
    'c': ['𝕔', 'ｃ', 'ᴄ', '𝐜', '𝓬', '𝒸', '𝙘', '𝚌', '𝖈', '𝔠'],
    'd': ['𝕕', 'ｄ', 'ᴅ', '𝐝', '𝓭', '𝒹', '𝙙', '𝚍', '𝖉', '𝔡'],
    'e': ['𝕖', 'ｅ', 'ᴇ', '𝐞', '𝓮', '𝑒', '𝙚', '𝚎', '𝖊', '𝔢'],
    'f': ['𝕗', 'ｆ', 'ꜰ', 'ғ', '𝐟', '𝓯', '𝒻', '𝙛', '𝚏', '𝖋', '𝔣'],
    'g': ['𝕘', 'ｇ', 'ɢ', '𝐠', '𝓰', '𝑔', '𝙜', '𝚐', '𝖌', '𝔤'],
    'h': ['𝕙', 'ｈ', 'ʜ', '𝐡', '𝓱', '𝒽', '𝙝', '𝚑', '𝖍', '𝔥'],
    'i': ['𝕚', 'ｉ', 'ɪ', '𝐢', '𝓲', '𝒾', '𝙞', '𝚒', '𝖎', '𝔦'],
    'j': ['𝕛', 'ｊ', 'ᴊ', '𝐣', '𝓳', '𝒿', '𝙟', '𝚓', '𝖏', '𝔧'],
    'k': ['𝕜', 'ｋ', 'ᴋ', '𝐤', '𝓴', '𝒦', '𝙠', '𝚔', '𝖐', '𝔨'],
    'l': ['𝕝', 'ｌ', 'ʟ', '𝐥', '𝓵', '𝓁', '𝙡', '𝚕', '𝖑', '𝔩'],
    'm': ['𝕞', 'ｍ', 'ᴍ', '𝐦', '𝓶', '𝓂', '𝙢', '𝚖', '𝖒', '𝔪'],
    'n': ['𝕟', 'ｎ', 'ɴ', '𝐧', '𝓷', '𝓃', '𝙣', '𝚗', '𝖓', '𝔫'],
    'o': ['𝕠', 'ｏ', 'ᴏ', '𝐨', '𝓸', '𝑜', '𝙤', '𝚘', '𝖔', '𝔬'],
    'p': ['𝕡', 'ｐ', 'ᴘ', '𝐩', '𝓹', '𝓅', '𝙥', '𝚙', '𝖕', '𝔭'],
    'q': ['𝕢', 'ｑ', '🇶', '𝐪', '𝓺', '𝓆', '𝙦', '𝚚', '𝖖', '𝔮'],
    'r': ['𝕣', 'ｒ', 'ʀ', '𝐫', '𝓻', '𝓇', '𝙧', '𝚛', '𝖗', '𝔯'],
    's': ['𝕤', 'ｓ', 'ꜱ', '𝐬', '𝓼', '𝓈', '𝙨', '𝚜', '𝖘', '𝔰'],
    't': ['𝕥', 'ｔ', 'ᴛ', '𝐭', '𝓽', '𝓉', '𝙩', '𝚝', '𝖙', '𝔱'],
    'u': ['𝕦', 'ｕ', 'ᴜ', '𝐮', '𝓾', '𝓊', '𝙪', '𝚞', '𝖚', '𝔲'],
    'v': ['𝕧', 'ｖ', 'ᴠ', '𝐯', '𝓿', '𝓋', '𝙫', '𝚟', '𝖛', '𝔳'],
    'w': ['𝕨', 'ｗ', 'ᴡ', '𝐰', '𝔀', '𝓌', '𝙬', '𝚠', '𝖜', '𝔴'],
    'x': ['𝕩', 'ｘ', 'x', '𝐱', '𝔁', '𝓍', '𝙭', '𝚡', '𝖝', '𝔵'],
    'y': ['𝕪', 'ｙ', 'ʏ', '𝐲', '𝔂', '𝓎', '𝙮', '𝚢', '𝖞', '𝔶'],
    'z': ['𝕫', 'ｚ', 'ᴢ', '𝐳', '𝔃', '𝓏', '𝙯', '𝚣', '𝖟', '𝔷'],

    '0': ['０', '𝟘'],
    '1': ['１', '𝟙'],
    '2': ['２', '𝟚'],
    '3': ['３', '𝟛'],
    '4': ['４', '𝟜'],
    '5': ['５', '𝟝'],
    '6': ['６', '𝟞'],
    '7': ['７', '𝟟'],
    '8': ['８', '𝟠'],
    '9': ['９', '𝟡'],

    ' ': ['　', '  ', '   ']
};

export function init_quotes(): void {
    let quotes: string[] = [];

    // fetch and display quotes
    fetch("/json/quotes.json")
        .then((response: Response) => response.json())
        .then((data: { quotes: string[] }) => {
            quotes = data.quotes;
            display_quotes(quotes);
        })
        .catch((error: Error) => {
            console.error("Error fetching quotes:", error);
        });

    function convert(input: string): string {
        const pattern = new RegExp(Object.values(character_map).flat().join('|'), 'g');
        return input.replace(pattern, (char: string) => {
            for (const [key, values] of Object.entries(character_map)) {
                if (values.includes(char)) {
                    return key;
                }
            }
            return char;
        });
    }

    function normalize_text(text: string): string {
        return convert(text).toLowerCase();
    }

    function display_quotes(quotes_to_display: string[]): void {
        const quotes_container = document.getElementById("quotes");
        if (!quotes_container) return;
        quotes_container.innerHTML = "";
        quotes_to_display.forEach((quote, index) => {
            const quote_container = document.createElement("div");
            quote_container.className = "hover:bg-[rgba(255,255,255,0.1)] cursor-pointer m-2 whitespace-pre-wrap text-center p-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-white border-opacity-10 backdrop-blur transition-all duration-300 ";
            quote_container.textContent = quote;
            quote_container.setAttribute("data-index", index.toString());
            quote_container.addEventListener("click", copy_quote);
            quotes_container.appendChild(quote_container);
        });
        update_quote_count(quotes_to_display.length);
    }

    function update_quote_count(count: number): void {
        const quote_count_element = document.getElementById("quote-count");
        if (quote_count_element) {
            quote_count_element.textContent = count.toString();
        }
    }
    function copy_quote(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (!target) return;
        
        const quote_text = target.textContent;
        if (!quote_text) return;

        navigator.clipboard.writeText(quote_text).then(() => {
            const original_background = target.style.backgroundColor;
            target.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
            setTimeout(() => {
                target.style.backgroundColor = original_background;
            }, 500);
        }).catch(error => {
            console.error("Failed to copy text: ", error);
        });
    }
    
    function filter_quotes(): void {
        const filter_input = document.getElementById("filter-input");
        if (!filter_input || !(filter_input instanceof HTMLInputElement)) return;
        
        const filter_term = normalize_text(filter_input.value);
        const filtered_quotes = quotes.filter(quote => normalize_text(quote).includes(filter_term));
        display_quotes(filtered_quotes);
    }

    const filter_input = document.getElementById("filter-input");
    if (filter_input) {
        filter_input.addEventListener("input", filter_quotes);
    }
}

// Call the initialization function when the DOM is ready
if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", init_quotes);
}
