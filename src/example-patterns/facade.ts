// Внутренние функции для работы с аудио
function loadAudioFile(filename) {
    console.log(`Загрузка аудиофайла: ${filename}`);
    return { filename, status: 'loaded' };
}

function decodeAudioFile(audioFile) {
    console.log(`Декодирование аудиофайла: ${audioFile.filename}`);
    return { ...audioFile, status: 'decoded' };
}

function initAudioPlayer(audioFile) {
    console.log(`Инициализация аудиоплеера для: ${audioFile.filename}`);
    return { ...audioFile, status: 'ready' };
}

function playAudio(audioFile) {
    console.log(`Воспроизведение аудио: ${audioFile.filename}`);
    return { ...audioFile, status: 'playing' };
}


// Фасад для работы с аудио
export function PatternFacadePlayAudioFile(filename) {
    const audioFile = loadAudioFile(filename); // Загрузка файла
    const decodedAudio = decodeAudioFile(audioFile); // Декодирование
    const readyAudio = initAudioPlayer(decodedAudio); // Инициализация плеера
    const result = playAudio(readyAudio); // Воспроизведение

    return result;
}

const result = playAudioFile('song.mp3');
console.log(result);

// Загрузка аудиофайла: song.mp3
// Декодирование аудиофайла: song.mp3
// Инициализация аудиоплеера для: song.mp3
// Воспроизведение аудио: song.mp3
// { filename: 'song.mp3', status: 'playing' }