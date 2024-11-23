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
        show_custom_alert(`Download ${selected_file.link}?`, () => {
            window.open("https://priv9.solutions/dlls/" + selected_file.link, '_blank');
        });
    }
}

function random_select() {
    const roll_duration = 5000; // 5 seconds
    const interval_duration = 100; // 100 milliseconds between each "roll"
    let roll_count = 0;
    const max_rolls = roll_duration / interval_duration;

    const progress_bar_container = document.getElementById('progress-bar-container');
    const progress_bar = document.getElementById('progress-bar');

    progress_bar_container.style.visibility = 'visible';
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
                progress_bar_container.style.visibility = 'hidden';
            }, 500);
        }
    }, interval_duration);
}

function highlight_file(index) {
    const file_elements = file_list_element.children;
    for (let i = 0; i < file_elements.length; i++) {
        file_elements[i].style.backgroundColor = i === index ? 'rgba(255, 255, 255, 0.2)' : '';
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

random_select_btn.addEventListener('click', random_select);

function show_custom_alert(message, callback) {
    const alert_element = document.getElementById('custom-alert');
    const overlay_element = document.getElementById('overlay');
    const message_element = document.getElementById('custom-alert-message');
    message_element.textContent = message;
    
    overlay_element.style.display = 'block';
    alert_element.style.display = 'block';
    
    alert_element.offsetHeight;
    overlay_element.classList.add('show');
    alert_element.classList.add('show');

    overlay_element.addEventListener('click', function(e) {
        if (e.target === overlay_element) {
            close_custom_alert(false);
        }
    });
    
    window.custom_alert_callback = callback;
}

function close_custom_alert(confirmed) {
    const alert_element = document.getElementById('custom-alert');
    const overlay_element = document.getElementById('overlay');
    
    alert_element.classList.remove('show');
    overlay_element.classList.remove('show');
    
    setTimeout(() => {
        alert_element.style.display = 'none';
        overlay_element.style.display = 'none';
        if (confirmed && window.custom_alert_callback) {
            window.custom_alert_callback();
        }
    }, 300);
}

function display_name(link) {
    return link.replace('.dll', '').replace('.zip', '').replace('.exe', '');
}
