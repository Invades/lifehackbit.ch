const ascii_art: string = 
`　　　　　　　　　　．：　　　　　　　　　　　　　　　　　　　　　　　　：　　　　　　　　　　　
　　　　　　　７　　．Ｂ：　　　　　　　　　　　　　　　　　　　　　　７Ｂ　　：ｒ　　　　　　　
　　　　　　Ｘ７　　　ＢＢ．　　　　　　　　　　　　　　　　　　　　ｒＢＢ　　　Ｓｉ　　　　　　
　　　　　：Ｂ　　　　ＢＢＢ：　　　　　　　　　　　　　　　　　　７ＢＢＢ　　　　Ｂ　　　　　　
　　　　　８７　　　　ＢＢＢＢ：　　　　　　　　　　　　　　　　７ＢＢＢＢ　　　　Ｍ７　　　　　
　　　　　Ｂ：　　　　ＢＢＢＢＢｉ　　　　　　　　　　　　　　７ＢＢＢＢＢ　　　　ＸＸ　　　　　
　　　　　Ｂ．　　　　ＢＢＢＢＢＢ７　　　　　　　　　　　　２ＢＢＢＢＢＢ　　　　Ｓ０　　　　　
　　　　　Ｂ：　　　　ＢＢＢＢＢＢＢＸ　　　　　　　　　　ＭＢＢＢＢＢＢＢ　　　　Ｘ２　　　　　
　　　　　Ｓ２　　　　ＢＢＢＢＢＢＢＢ７　　　　　　　　ＳＢＢＢＢＢＢＢＭ　　　　Ｍ：　　　　　
　　　　　　Ｍ　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　：８　　　　　　
　　　　　　ｉＭ　　　　　　　　　　　　　ＸＸＸＸＸＸＸ　　　　　　　　　　　　．０　　　　　　
.　 　　　　　　　 　　　　ＸＸＸＸＸＸ　　　　　　　　　　　.　`;

async function load_ascii() {
    if (typeof window !== 'undefined') {
        const ascii_element: HTMLElement | null = document.getElementById('ascii-art') || document.getElementById('ascii-art-small');
        if (ascii_element) {
            ascii_element.textContent = ascii_art;
        }
    }
}

export default load_ascii;