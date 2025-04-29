const sortOptions = [
    { value: 'brain_damage', label: '𝕓𝕣𝕒𝕚𝕟 𝕕𝕒𝕞𝕒𝕛𝕖' },
    { value: 'fullwidth', label: 'ｉｍｍｅｎｓｅ' },
    { value: 'gangsta', label: '𝖌𝖆𝖓𝖌𝖘𝖙𝖆𝖗' },
    { value: 'fancy', label: '𝓯𝓪𝓷𝓬𝓮𝔂'},
    { value: 'bold_italic', label: '𝙖𝙣𝙜𝙧𝙮 𝙩𝙚𝙭𝙨𝙩'},
    { value: 'small_caps', label: 'ʙᴀᴅᴀꜱꜱꜱ'},
];

const character_styles: { [key: string]: { [key: string]: string } } = {
    brain_damage: {},
    fullwidth: {},
    gangsta: {},
    fancy: {},
    bold_italic: {},
    small_caps: {}
};

const character_map = {
    'A': ['𝕬', 'Ａ', '𝔸', '𝘼', '𝓐', 'ᴀ'],
    'B': ['𝕭', 'Ｂ', '𝔹', '𝘽', '𝓑', 'ʙ'],
    'C': ['ℂ', 'Ｃ', 'ℂ', '𝘾', '𝓒', 'ᴄ'],
    'D': ['𝕯', 'Ｄ', '𝔻', '𝘿', '𝓓', 'ᴅ'],
    'E': ['𝕰', 'Ｅ', '𝔼', '𝙀', '𝓔', 'ᴇ'],
    'F': ['𝕱', 'Ｆ', '𝔽', '𝙁', '𝓕', 'ꜰ'],
    'G': ['𝕲', 'Ｇ', '𝔾', '𝙂', '𝓖', 'ɢ'],
    'H': ['𝕳', 'Ｈ', 'ℍ', '𝙃', '𝓗', 'ʜ'],
    'I': ['𝕴', 'Ｉ', '𝕀', '𝙄', '𝓘', 'ɪ'],
    'J': ['𝕵', 'Ｊ', '𝕁', '𝙅', '𝓙', 'ᴊ'],
    'K': ['𝕶', 'Ｋ', '𝕂', '𝙆', '𝓚', 'ᴋ'],
    'L': ['𝕷', 'Ｌ', '𝕃', '𝙇', '𝓛', 'ʟ'],
    'M': ['𝕸', 'Ｍ', '𝕄', '𝙈', '𝓜', 'ᴍ'],
    'N': ['𝕹', 'Ｎ', 'ℕ', '𝙉', '𝓝', 'ɴ'],
    'O': ['𝕺', 'Ｏ', '𝕆', '𝙊', '𝓞', 'ᴏ'],
    'P': ['𝕻', 'Ｐ', 'ℙ', '𝙋', '𝓟', 'ᴘ'],
    'Q': ['𝕼', 'Ｑ', 'ℚ', '𝙌', '𝓠', 'Q'],
    'R': ['𝕽', 'Ｒ', 'ℝ', '𝙍', '𝓡', 'ʀ'],
    'S': ['𝕾', 'Ｓ', '𝕊', '𝙎', '𝓢', 'ꜱ'],
    'T': ['𝕿', 'Ｔ', '𝕋', '𝙏', '𝓣', 'ᴛ'],
    'U': ['𝖀', 'Ｕ', '𝕌', '𝙐', '𝓤', 'ᴜ'],
    'V': ['𝖁', 'Ｖ', '𝕍', '𝙑', '𝓥', 'ᴠ'],
    'W': ['𝖂', 'Ｗ', '𝕎', '𝙒', '𝓦', 'ᴡ'],
    'X': ['𝖃', 'Ｘ', '𝕏', '𝙓', '𝓧', 'x'],
    'Y': ['𝖄', 'Ｙ', '𝕐', '𝙔', '𝓨', 'ʏ'],
    'Z': ['𝖅', 'Ｚ', 'ℤ', '𝙕', '𝓩', 'ᴢ'],
    'a': ['𝖆', 'ａ', '𝕒', '𝙖', '𝓪', 'ᴀ'],
    'b': ['𝖇', 'ｂ', '𝕓', '𝙗', '𝓫', 'ʙ'],
    'c': ['𝖈', 'ｃ', '𝕔', '𝙘', '𝓬', 'ᴄ'],
    'd': ['𝖉', 'ｄ', '𝕕', '𝙙', '𝓭', 'ᴅ'],
    'e': ['𝖊', 'ｅ', '𝕖', '𝙚', '𝓮', 'ᴇ'],
    'f': ['𝖋', 'ｆ', '𝕗', '𝙛', '𝓯', 'ꜰ'],
    'g': ['𝖌', 'ｇ', '𝕘', '𝙜', '𝓰', 'ɢ'],
    'h': ['𝖍', 'ｈ', '𝕙', '𝙝', '𝓱', 'ʜ'],
    'i': ['𝖎', 'ｉ', '𝕚', '𝙞', '𝓲', 'ɪ'],
    'j': ['𝖏', 'ｊ', '𝕛', '𝙟', '𝓳', 'ᴊ'],
    'k': ['𝖐', 'ｋ', '𝕜', '𝙠', '𝓴', 'ᴋ'],
    'l': ['𝖑', 'ｌ', '𝕝', '𝙡', '𝓵', 'ʟ'],
    'm': ['𝖒', 'ｍ', '𝕞', '𝙢', '𝓶', 'ᴍ'],
    'n': ['𝖓', 'ｎ', '𝕟', '𝙣', '𝓷', 'ɴ'],
    'o': ['𝖔', 'ｏ', '𝕠', '𝙤', '𝓸', 'ᴏ'],
    'p': ['𝖕', 'ｐ', '𝕡', '𝙥', '𝓹', 'ᴘ'],
    'q': ['𝖖', 'ｑ', '𝕢', '𝙦', '𝓺', 'Q'],
    'r': ['𝖗', 'ｒ', '𝕣', '𝙧', '𝓻', 'ʀ'],
    's': ['𝖘', 'ｓ', '𝕤', '𝙨', '𝓼', 'ꜱ'],
    't': ['𝖙', 'ｔ', '𝕥', '𝙩', '𝓽', 'ᴛ'],
    'u': ['𝖚', 'ｕ', '𝕦', '𝙪', '𝓾', 'ᴜ'],
    'v': ['𝖛', 'ｖ', '𝕧', '𝙫', '𝓿', 'ᴠ'],
    'w': ['𝖜', 'ｗ', '𝕨', '𝙬', '𝔀', 'ᴡ'],
    'x': ['𝖝', 'ｘ', '𝕩', '𝙭', '𝔁', 'x'],
    'y': ['𝖞', 'ｙ', '𝕪', '𝙮', '𝔂', 'ʏ'],
    'z': ['𝖟', 'ｚ', '𝕫', '𝙯', '𝔃', 'ᴢ'],
    '0': ['𝟎', '０', '𝟘', '𝟬', '0', '0'],
    '1': ['𝟏', '１', '𝟙', '𝟭', '𝓫', '1'],
    '2': ['𝟐', '２', '𝟚', '𝟮', '𝓬', '2'],
    '3': ['𝟑', '３', '𝟛', '𝟯', '𝓭', '3'],
    '4': ['𝟒', '４', '𝟜', '𝟰', '𝓮', '4'],
    '5': ['𝟓', '５', '𝟝', '𝟱', '𝓯', '5'],
    '6': ['𝟔', '６', '𝟞', '𝟲', '𝓰', '6'],
    '7': ['𝟕', '７', '𝟟', '𝟳', '𝓱', '7'],
    '8': ['𝟖', '８', '𝟠', '𝟴', '𝓲', '8'],
    '9': ['𝟗', '９', '𝟡', '𝟵', '𝓳', '9'],
    ' ': [' ', '　', ' ', ' ', ' ', ' ']
};

// Organize characters by style
Object.entries(character_map).forEach(([original, variants]) => {
    if (variants[0]) character_styles.brain_damage[original] = variants[2];
    if (variants[1]) character_styles.fullwidth[original] = variants[1];
    if (variants[2]) character_styles.gangsta[original] = variants[0];
    if (variants[3]) character_styles.fancy[original] = variants[4];
    if (variants[4]) character_styles.bold_italic[original] = variants[3];
    if (variants[5]) character_styles.small_caps[original] = variants[5];
});


export function init_generator(): void {
    let currentStyle = 'brain_damage';
    
    function style_dropdown(): void {
        const container = document.getElementById('style-select-container');
        if (!container) return;

        container.innerHTML = `
            <div class="relative flex items-center justify-center">
                <div class="bg-[rgba(0,0,0,0.3)] p-2 rounded-lg backdrop-blur-md border border-white border-opacity-10 flex items-center gap-2">
                    <button
                        type="button"
                        class="w-[150px] text-sm bg-[rgba(255,255,255,0.05)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur text-[0.9em] py-2 px-3 opacity-70 text-center"
                        disabled
                    >
                        normal
                    </button>
                    <div class="text-[rgba(255,255,255,0.5)] text-sm mx-1">→</div>
                    <div class="w-[150px] relative">
                        <button
                            type="button"
                            class="dropdown-button w-full text-sm bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur text-[0.9em] py-2 px-3 opacity-70 text-center transition-all duration-300"
                        >
                            ${sortOptions.find(opt => opt.value === currentStyle)?.label}
                        </button>
                        
                        <div class="dropdown-content hidden absolute left-0 mt-1 w-full bg-[rgba(20,20,20,0.95)] backdrop-blur-md border border-white border-opacity-10 rounded-lg shadow-lg z-[70] transition-all duration-300">
                            ${sortOptions.map(option => `
                                <button
                                    type="button"
                                    data-value="${option.value}"
                                    class="w-full text-center px-4 py-2 text-sm hover:bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.8)] first:rounded-t-lg last:rounded-b-lg transition-all duration-200 ${currentStyle === option.value ? 'bg-[rgba(255,255,255,0.15)]' : ''}"
                                >
                                    ${option.label}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        const dropdown_btn = container.querySelector('.dropdown-button');
        const dropdown_cnt = container.querySelector('.dropdown-content');
        const dropdown_options = container.querySelectorAll('.dropdown-content button');

        if (dropdown_cnt) {
            dropdown_cnt.classList.add('opacity-0', 'scale-95', '-translate-y-2', 'pointer-events-none');
        }

        dropdown_btn?.addEventListener('click', toggle_dropdown);
        dropdown_options.forEach(option => {
            option.addEventListener('click', (e) => {
                const value = (e.currentTarget as HTMLButtonElement).dataset.value;
                if (value) handle_style_change(value);
            });
        });

        document.addEventListener('click', handle_click_outside);
    }

    function generate_text(text: string, style: string): string {
        return text.split('').map(char => {
            return character_styles[style][char] || char;
        }).join('');
    }

    function handle_input(): void {
        const input_text = (document.getElementById('original-text') as HTMLTextAreaElement)?.value || '';
        const output_element = document.getElementById('generated-text') as HTMLTextAreaElement;
        if (output_element) {
            output_element.value = generate_text(input_text, currentStyle);
        }
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

    function handle_style_change(value: string): void {
        currentStyle = value;
        handle_input();
        
        const dropdown_btn = document.querySelector('.dropdown-button');
        const dropdown_cnt = document.querySelector('.dropdown-content');
        
        if (dropdown_btn && dropdown_cnt) {
            const button_text = sortOptions.find(opt => opt.value === value)?.label ?? 'brain damage';
            dropdown_btn.textContent = button_text;
            
            dropdown_cnt.querySelectorAll('button').forEach(button => {
                if (button.dataset.value === value) {
                    button.classList.add('bg-[rgba(255,255,255,0.15)]');
                } else {
                    button.classList.remove('bg-[rgba(255,255,255,0.15)]');
                }
            });
            
            dropdown_cnt.classList.add('opacity-0', 'scale-95', '-translate-y-2', 'pointer-events-none');
            setTimeout(() => dropdown_cnt.classList.add('hidden'), 300);
        }
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


    const original_text = document.getElementById('original-text');
    if (original_text) {
        original_text.addEventListener('input', handle_input);
    }

    style_dropdown();
}

if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", init_generator);
} 