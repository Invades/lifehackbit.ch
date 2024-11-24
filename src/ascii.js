const ascii_art = `　　　　　　　　　　．：　　　　　　　　　　　　　　　　　　　　　　　　：　　　　　　　　　　　
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

const asciiElement = document.getElementById('ascii-art') || document.getElementById('ascii-art-small');
if (asciiElement) {
    asciiElement.textContent = ascii_art;
}