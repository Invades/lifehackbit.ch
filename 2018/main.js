let file_list = [];
const file_list_element = document.getElementById('file-list');
const random_select_btn = document.getElementById('random-select');
const unattended_checkbox = document.getElementById('unattended');
const filter_input = document.getElementById('filter-input');
const file_count_element = document.getElementById('file-count');
const info_text_element = document.getElementById('info-text');

fetch('dlls.json')
    .then(response => response.json())
    .then(data => {
        file_list = data;
        create_file_list();
    })
    .catch(error => console.error('Error loading JSON:', error));

function update_file_count(count) {
    file_count_element.textContent = `𝓗𝓸𝓸𝓴𝓪𝓱𝓼: ${count}`;
}

function create_file_list() {
    file_list_element.innerHTML = '';
    file_list.forEach((file, index) => {
        const file_element = document.createElement('div');
        file_element.textContent = display_name(file.link);
        file_element.className = 'flex flex-col m-1 p-1.5 cursor-pointer rounded [transition:background-color_300ms,text-shadow_300ms,box-shadow_100ms] ease-in-out hover:bg-white hover:bg-opacity-10 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]';
        file_element.addEventListener('click', () => select_file(index));
        file_list_element.appendChild(file_element);
    });
    update_file_count(file_list.length);
}

function filter_files() {
    const filter_value = filter_input.value.toLowerCase();
    const filtered_files = file_list.filter(file => 
        display_name(file.link).toLowerCase().includes(filter_value)
    );

    file_list_element.innerHTML = '';
    filtered_files.forEach((file, index) => {
        const file_element = document.createElement('div');
        file_element.textContent = display_name(file.link);
        file_element.className = 'flex flex-col m-1 p-1.5 cursor-pointer rounded [transition:background-color_300ms,text-shadow_300ms,box-shadow_100ms] ease-in-out hover:bg-white hover:bg-opacity-10 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]';
        file_element.addEventListener('click', () => select_file(file_list.indexOf(file)));
        file_list_element.appendChild(file_element);
    });
    update_file_count(filtered_files.length);
}

filter_input.addEventListener('input', filter_files);

function select_file(index) {
    const selected_file = file_list[index];
    info_text_element.textContent = selected_file.info || 'No additional info available.';
    if (unattended_checkbox.checked) {
        window.open("https://priv9.solutions/dlls/" + selected_file.link, '_blank');
    } else {
        show_confirmation(`Download ${selected_file.link}?`, () => {
            window.open("https://priv9.solutions/dlls/" + selected_file.link, '_blank');
        });
    }
}

function random_select() {
    const roll_duration = 5000; // 5 seconds
    const interval_duration = 100; // 100 milliseconds between each "roll"
    let roll_count = 0;
    const max_rolls = roll_duration / interval_duration;

    const progress_bar = document.getElementById('progress-bar');

    progress_bar.classList.remove('opacity-0');
    progress_bar.classList.add('opacity-70');
    progress_bar.style.width = '0%';

    const rolling_interval = setInterval(() => {
        const visible_files = Array.from(file_list_element.children);
        const random_index = Math.floor(Math.random() * visible_files.length);
        highlight_file(random_index);

        const progress = (roll_count / max_rolls) * 100;
        progress_bar.style.width = `${progress}%`;

        roll_count++;

        if (roll_count >= max_rolls) {
            clearInterval(rolling_interval);
            const selected_file_index = file_list.findIndex(file => 
                display_name(file.link) === visible_files[random_index].textContent
            );
            select_file(selected_file_index);
            setTimeout(() => {
                progress_bar.classList.remove('opacity-70');
                progress_bar.classList.add('opacity-0');
            }, 100);
        }
    }, interval_duration);
}

document.getElementById('unattended').addEventListener('change', function() {
    const svg = document.getElementById('unattended-svg');
    if (this.checked) {
        svg.classList.add('text-red-500');
    } else {
        svg.classList.remove('text-red-500');
    }
});

function highlight_file(index) {
    const file_elements = file_list_element.children;
    for (let i = 0; i < file_elements.length; i++) {
        file_elements[i].classList.toggle('bg-white', i === index);
        file_elements[i].classList.toggle('bg-opacity-10', i === index);
        file_elements[i].classList.toggle('drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]', i === index);
        file_elements[i].classList.toggle('shadow-[0_0_10px_rgba(255,255,255,0.7)]', i === index);
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

function show_confirmation(message, callback) {
    const confirmation_element = document.getElementById('confirmation');
    const overlay_element = document.getElementById('overlay');
    const message_element = document.getElementById('confirmation-message');
    message_element.textContent = message;
    
    overlay_element.classList.remove('hidden');
    confirmation_element.classList.remove('hidden');
    
    confirmation_element.offsetHeight;
    
    overlay_element.classList.add('bg-opacity-50');
    confirmation_element.classList.add('opacity-100');
    
    overlay_element.addEventListener('click', function(e) {
        if (e.target === overlay_element) {
            close_confirmation(false);
        }
    });
    
    window.confirmation_callback = callback;
}

function close_confirmation(confirmed) {
    const confirmation_element = document.getElementById('confirmation');
    const overlay_element = document.getElementById('overlay');
    
    overlay_element.classList.remove('bg-opacity-50');
    confirmation_element.classList.remove('opacity-100');
    
    setTimeout(() => {
        confirmation_element.classList.add('hidden');
        overlay_element.classList.add('hidden');
        if (confirmed && window.confirmation_callback) {
            window.confirmation_callback();
        }
    }, 300);
}

function display_name(link) {
    return link.replace('.dll', '').replace('.zip', '').replace('.exe', '');
}
