const sort_options = [
    { value: 'old', label: 'Old->New' },
    { value: 'new', label: 'New->Old' },
    { value: 'az', label: 'A->Z' },
    { value: 'za', label: 'Z->A' }
];

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
    let current_filter = '';
    let current_sort = 'old';

    function sort_quotes(quotes_to_sort: string[]): string[] {
        switch (current_sort) {
            case 'old':
                return [...quotes_to_sort];
            case 'new':
                return [...quotes_to_sort].reverse();
            case 'az':
                return [...quotes_to_sort].sort((a, b) => 
                    normalize_text(a).localeCompare(normalize_text(b))
                );
            case 'za':
                return [...quotes_to_sort].sort((a, b) => 
                    normalize_text(b).localeCompare(normalize_text(a))
                );
            default:
                return quotes_to_sort;
        }
    }

    function filter_and_sort_quotes(): void {
        const filter_input = document.getElementById("filter-input");
        if (!filter_input || !(filter_input instanceof HTMLInputElement)) return;
        
        const filter_term = normalize_text(filter_input.value);
        const filtered_quotes = quotes.filter(quote => 
            normalize_text(quote).includes(filter_term)
        );
        display_quotes(sort_quotes(filtered_quotes));
    }

    function custom_dropdown(): void {
        const select_element = document.getElementById('sort-select');
        if (!select_element) return;

        const container = document.createElement('div');
        container.className = 'sort-container';
        
        select_element.style.display = 'none'; 
        select_element.parentNode?.insertBefore(container, select_element.nextSibling);

        container.innerHTML = `
            <div class="relative w-full">
                <button
                    type="button"
                    class="dropdown-button w-[100px] text-sm bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur text-[0.9em] p-2 opacity-70 text-center transition-all duration-300"
                >
                    ${sort_options.find(opt => opt.value === current_sort)?.label}
                </button>
                
                <div class="dropdown-content hidden absolute right-0 mt-1 w-full bg-[rgba(20,20,20,0.8)] backdrop-blur-md border border-white border-opacity-10 rounded-lg shadow-lg z-50 transition-all duration-300">
                    ${sort_options.map(option => `
                        <button
                            type="button"
                            data-value="${option.value}"
                            class="w-full text-center px-4 py-2 text-sm hover:bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.8)] first:rounded-t-lg last:rounded-b-lg transition-all duration-200 ${current_sort === option.value ? 'bg-[rgba(255,255,255,0.05)]' : ''}"
                        >
                            ${option.label}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        const dropdown_btn = container.querySelector('.dropdown-button');
        const dropdown_opt = container.querySelectorAll('.dropdown-content button');
        const dropdown_cnt = container.querySelector('.dropdown-content');

        if (dropdown_cnt) {
            dropdown_cnt.classList.add('opacity-0', 'scale-95', '-translate-y-2', 'pointer-events-none');
        }

        dropdown_btn?.addEventListener('click', toggle_dropdown);
        dropdown_opt.forEach(option => {
            option.addEventListener('click', (e) => {
                const value = (e.currentTarget as HTMLButtonElement).dataset.value;
                if (value) handle_sort_change(value);
            });
        });

        document.addEventListener('click', handle_click_outside);
    }

    const sort_select = document.getElementById('sort-select');
    if (sort_select) {
        sort_select.addEventListener('change', (e) => {
            const target = e.target as HTMLSelectElement;
            current_sort = target.value;
            filter_and_sort_quotes();
        });
    }

    const filter_input = document.getElementById("filter-input");
    if (filter_input) {
        filter_input.addEventListener("input", filter_and_sort_quotes);
    }

    fetch("/json/quotes.json")
        .then((response: Response) => response.json())
        .then((data: { quotes: string[] }) => {
            quotes = data.quotes;
            filter_and_sort_quotes();
            custom_dropdown();
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
            quote_container.className = "hover:bg-[rgba(255,255,255,0.1)] cursor-pointer mb-2 whitespace-pre-wrap text-center p-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-white border-opacity-10 backdrop-blur transition-all duration-300";
            quote_container.textContent = quote;
            quote_container.setAttribute("data-index", index.toString());
            quote_container.addEventListener("click", copy_quote);
            quotes_container.appendChild(quote_container);
        });
        update_quote_count(quotes_to_display.length);
    }

    function update_quote_count(count: number): void {
        if ((window as any).updateQuoteCount) {
            (window as any).updateQuoteCount(count);
        }
    }
    function copy_quote(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (!target) return;
        
        const quote_text = target.textContent;
        if (!quote_text) return;

        navigator.clipboard.writeText(quote_text).then(() => {
            const original_background = target.style.backgroundColor;
            const original_priority = target.style.getPropertyPriority("background-color");
            target.style.setProperty("background-color", "rgba(0, 255, 0, 0.2)", "important");
            setTimeout(() => {
                if (original_background) {
                    target.style.setProperty("background-color", original_background, original_priority);
                } else {
                    target.style.removeProperty("background-color");
                }
            }, 500);
        }).catch(error => {
            console.error("Failed to copy text: ", error);
        });
    }

    function toggle_dropdown(e: Event): void {
        const button = e.currentTarget as HTMLElement;
        const content = button.nextElementSibling as HTMLElement;
        
        if (content?.classList.contains('hidden')) {
            content.classList.remove('hidden');
            setTimeout(() => {
                content.classList.remove('opacity-0', 'scale-95', '-translate-y-2', 'pointer-events-none');
            }, 10);
        } else {
            content.classList.add('opacity-0', 'scale-95', '-translate-y-2', 'pointer-events-none');
            setTimeout(() => content.classList.add('hidden'), 300);
        }
        e.stopPropagation();
    }

    function handle_sort_change(value: string): void {
        current_sort = value;
        filter_and_sort_quotes();
        
        const dropdown_btn = document.querySelector('.dropdown-button');
        const dropdown_cnt = document.querySelector('.dropdown-content');
        
        if (dropdown_btn && dropdown_cnt) {
            const button_text = sort_options.find(opt => opt.value === value)?.label ?? 'Old->New';
            dropdown_btn.textContent = button_text;
            
            dropdown_cnt.innerHTML = sort_options.map(option => `
                <button
                    type="button"
                    data-value="${option.value}"
                    class="w-full text-center px-4 py-2 text-sm hover:bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.8)] first:rounded-t-lg last:rounded-b-lg transition-all duration-200 ${option.value === value ? 'bg-[rgba(255,255,255,0.05)]' : ''}"
                >
                    ${option.label}
                </button>
            `).join('');
            
            dropdown_cnt.querySelectorAll('button').forEach(button => {
                button.addEventListener('click', (e) => {
                    const new_value = (e.currentTarget as HTMLButtonElement).dataset.value;
                    if (new_value) handle_sort_change(new_value);
                });
            });
        }
        
        dropdown_cnt?.classList.add('opacity-0', 'scale-95', '-translate-y-2', 'pointer-events-none');
        setTimeout(() => dropdown_cnt?.classList.add('hidden'), 300);
    }

    function handle_click_outside(e: Event): void {
        if (!(e.target as HTMLElement).closest('.sort-container')) {
            const dropdown_cnt = document.querySelector('.dropdown-content');
            if (dropdown_cnt && !dropdown_cnt.classList.contains('hidden')) {
                dropdown_cnt.classList.add('opacity-0', 'scale-95', '-translate-y-2', 'pointer-events-none');
                setTimeout(() => dropdown_cnt.classList.add('hidden'), 300);
            }
        }
    }
}

if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", init_quotes);
}
