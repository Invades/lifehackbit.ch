interface DllEntry {
    name: string;
    info: string;
}

async function load_2018() {
    let entries: DllEntry[] = [];
    let is_rolling = false;
    try {
        const response = await fetch('/json/dlls.json');
        const data = await response.json();

        const file_list = document.getElementById('file-list');
        const filterInput = document.getElementById('filter-input');
        const file_count = document.getElementById('file-count');
        const random_select_btn = document.getElementById('random-select');
        const unattended_checkbox = document.getElementById('unattended');
        const info_text_element = document.getElementById('info-text');
        
        if (!file_list || !filterInput || !file_count || !random_select_btn || !unattended_checkbox || !info_text_element) return;

        entries = data.map((item: { name: string, info: string}) => ({
            name: item.name,
            info: item.info
        }));
        entries.sort((a, b) => a.name.localeCompare(b.name));

        // Display initial entries
        display_entries(entries);
        update_count(entries.length);

        // Filter entries on input
        filterInput.addEventListener('input', (e) => {
            const target = e.target as HTMLInputElement;
            const filtered = entries.filter(entry => 
                entry.name.toLowerCase().includes(target.value.toLowerCase())
            );
            display_entries(filtered);
            update_count(filtered.length);
        });

        function displayName(filename: string): string {
            return filename.replace(/\.(dll|exe|zip)$/i, '');
        }

        // Declare the function on the window object
        (window as any).select_file = select_file;

        function display_entries(entriesToShow: DllEntry[]) {
            if (!file_list) return;
            file_list.innerHTML = entriesToShow.map((entry, index) => {
                const originalIndex = entries.findIndex(e => e.name === entry.name);
                return `
                    <div class="entry flex flex-col m-1 p-1.5 cursor-pointer rounded [transition:background-color_300ms,text-shadow_300ms,box-shadow_100ms] ease-in-out hover:bg-white hover:bg-opacity-10 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]" 
                         data-index="${originalIndex}">${displayName(entry.name)}</div>
                `;
            }).join('');

            const entryElements = file_list.getElementsByClassName('entry');
            Array.from(entryElements).forEach(element => {
                element.addEventListener('click', () => {
                    const index = parseInt(element.getAttribute('data-index') || '0');
                    select_file(index);
                });
            });
        }

        function update_count(count: number) {
            if (file_count) {
                file_count.textContent = `𝓗𝓸𝓸𝓴𝓪𝓱𝓼: ${count}`;
            }
        }

        function select_file(index: number) {
            const selected_file = entries[index];
            if (info_text_element) {
                info_text_element.textContent = selected_file.info || 'No additional info available.';
            }
            if ((unattended_checkbox as HTMLInputElement).checked) {
                window.open(`https://priv9.solutions/dlls/${selected_file.name}`, '_blank');
            } else {
                show_confirmation(`Download ${selected_file.name}?`, () => {
                    window.open(`https://priv9.solutions/dlls/${selected_file.name}`, '_blank');
                });
            }
        }

        function highlight_file(index: number): void {
            const file_list_element = document.getElementById('file-list');
            if (!file_list_element) return;
        
            const file_elements = file_list_element.children;
            for (let i = 0; i < file_elements.length; i++) {
                const element = file_elements[i];
                element.classList.toggle('bg-white', i === index);
                element.classList.toggle('bg-opacity-10', i === index);
                element.classList.toggle('drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]', i === index);
                element.classList.toggle('shadow-[0_0_10px_rgba(255,255,255,0.7)]', i === index);
            }

            const highlighted_element = file_elements[index];
            if (highlighted_element) {
                highlighted_element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'start'
                });
            }
        }
        (window as any).highlight_file = highlight_file;        

        // Add random selection functionality
        random_select_btn.addEventListener('click', () => {
            if (is_rolling) return;
            is_rolling = true;

            const roll_duration = 5000;
            const interval_duration = 100;
            let roll_count = 0;
            const max_rolls = roll_duration / interval_duration;

            const progress_bar = document.getElementById('progress-bar');
            if (!progress_bar) return;

            progress_bar.classList.remove('opacity-0');
            progress_bar.classList.add('opacity-70');
            progress_bar.style.width = '0%';

            const rolling_interval = setInterval(() => {
                const visible_files = Array.from(file_list?.children || []);
                const random_index = Math.floor(Math.random() * visible_files.length);
                highlight_file(random_index);

                const progress = (roll_count / max_rolls) * 100;
                progress_bar.style.width = `${progress}%`;

                roll_count++;

                if (roll_count >= max_rolls) {
                    clearInterval(rolling_interval);
                    const data_index = parseInt(visible_files[random_index].getAttribute('data-index') || '0');
                    select_file(data_index);
                    setTimeout(() => {
                        progress_bar.classList.remove('opacity-70');
                        progress_bar.classList.add('opacity-0');
                        is_rolling = false;
                    }, 100);
                }
            }, interval_duration);
        });

        // Add unattended checkbox functionality
        unattended_checkbox.addEventListener('change', function(this: HTMLInputElement) {
            const svg = document.getElementById('unattended-svg');
            if (svg) {
                if (this.checked) {
                    svg.classList.add('text-red-500');
                } else {
                    svg.classList.remove('text-red-500');
                }
            }
        });

    } catch (error) {
        console.error('Error loading entries:', error);
    }
}

export default load_2018;

function show_confirmation(message: string, callback: () => void): void {
    const confirmation_element = document.getElementById('confirmation');
    const overlay_element = document.getElementById('overlay');
    const message_element = document.getElementById('confirmation-message');
    const confirm_btn = document.getElementById('confirm-btn');
    const cancel_btn = document.getElementById('cancel-btn');
    
    if (!confirmation_element || !overlay_element || !message_element || !confirm_btn || !cancel_btn) return;
    
    message_element.textContent = message;
    
    confirm_btn.addEventListener('click', () => close_confirmation(true));
    cancel_btn.addEventListener('click', () => close_confirmation(false));
    
    overlay_element.classList.remove('hidden');
    confirmation_element.classList.remove('hidden');
    
    // Force reflow
    confirmation_element.offsetHeight;
    
    overlay_element.classList.add('bg-opacity-50');
    confirmation_element.classList.add('opacity-100');
    
    overlay_element.addEventListener('click', (e: MouseEvent) => {
        if (e.target === overlay_element) {
            close_confirmation(false);
        }
    });
    
    // Declare the callback on the window object
    (window as any).confirmation_callback = callback;
}

function close_confirmation(confirmed: boolean): void {
    const confirmation_element = document.getElementById('confirmation');
    const overlay_element = document.getElementById('overlay');
    
    if (!confirmation_element || !overlay_element) return;
    
    overlay_element.classList.remove('bg-opacity-50');
    confirmation_element.classList.remove('opacity-100');
    
    setTimeout(() => {
        confirmation_element.classList.add('hidden');
        overlay_element.classList.add('hidden');
        if (confirmed && (window as any).confirmation_callback) {
            (window as any).confirmation_callback();
        }
    }, 300);
}