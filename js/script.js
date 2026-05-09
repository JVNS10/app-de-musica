const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const albumArt = document.getElementById('albumArt');
const currentTrackTitle = document.getElementById('currentTrackTitle');
const currentTrackArtist = document.getElementById('currentTrackArtist');
const queueContainer = document.getElementById('queueContainer');
const searchUI = document.getElementById('searchUI');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const likeBtn = document.getElementById('likeBtn');
const likeIcon = document.getElementById('likeIcon');

// Banco de dados de músicas reais (Lo-fi & Instrumental)
const realTracks = [
    { title: 'Piano Clássico', artist: 'Ana Silva', genre: 'Clássico', bio: 'Ana Silva transforma ritmos tradicionais em trilhas emocionantes com arranjos de piano sofisticados.', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', cover: 'https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=500&auto=format&fit=crop', liked: false, emoji: '🎹' },
    { title: 'Jazz Suave', artist: 'Beto Jazz', genre: 'Jazz', bio: 'Beto Jazz cria atmosferas noturnas com sopros quentes e bateria leve para relaxar.', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', cover: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=500&auto=format&fit=crop', liked: false, emoji: '🎷' },
    { title: 'Natureza Ambiente', artist: 'Bio Echo', genre: 'Ambiente', bio: 'Bio Echo mistura sons naturais com texturas eletrônicas para uma experiência meditativa única.', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', cover: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=500&auto=format&fit=crop', liked: false, emoji: '🌿' },
    { title: 'Batida Lofi', artist: 'DJ Sono', genre: 'Funk', bio: 'DJ Sono traz batidas marcantes e grooves quentes que lembram uma pista de funk moderna.', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3', cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=500&auto=format&fit=crop', liked: false, emoji: '🎧' },
    { title: 'Foco Suave', artist: 'Zen Mind', genre: 'Rap', bio: 'Zen Mind mistura versos calmos e batidas envolventes para um estilo urbano suave.', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3', cover: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=500&auto=format&fit=crop', liked: false, emoji: '✨' },
    { title: 'Passeio Noturno', artist: 'Rico Melo', genre: 'Synthwave', bio: 'Rico Melo combina synths retrô com grooves modernos em uma vibe urbana noturna.', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3', cover: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=500&auto=format&fit=crop', liked: false, emoji: '🚗' },
    { title: 'Cafeteria', artist: 'Lofi Girl', genre: 'Chill', bio: 'Lofi Girl representa aquele som acolhedor de cafeteria, perfeito para leitura e estudo.', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', cover: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80', liked: false, emoji: '☕' },
    { title: 'Oceano Profundo', artist: 'Deep Blue', genre: 'House', bio: 'Deep Blue cria paisagens subaquáticas com batidas profundas para dançar com calma.', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', cover: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?q=80&w=500&auto=format&fit=crop', liked: false, emoji: '🌊' },
    { title: 'Orvalho da Manhã', artist: 'Clara Luz', genre: 'Pop', bio: 'Clara Luz escreve faixas etéreas com melodias delicadas e produção sonhadora.', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', cover: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=500&auto=format&fit=crop', liked: false, emoji: '☀️' },
    { title: 'Dia Chuvoso', artist: 'Rainy Days', genre: 'R&B', bio: 'Rainy Days cria grooves emocionantes e letras suaves que combinam com chuva e nostalgia.', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3', cover: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=500&auto=format&fit=crop', liked: false, emoji: '🌧️' },
    { title: 'Hora Dourada', artist: 'Sunset', genre: 'Rap', bio: 'Sunset mistura batidas e refrões solares para uma faixa cativante e cheia de estilo.', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3', cover: 'https://images.unsplash.com/photo-1470217957101-da7150b9b681?q=80&w=500&auto=format&fit=crop', liked: false, emoji: '🌇' },
    { title: 'Sótão de Sonhos', artist: 'Lucas Sonhos', genre: 'Indie', bio: 'Lucas Sonhos mistura guitarras suaves e sintetizadores para uma viagem introspectiva.', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3', cover: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=500&auto=format&fit=crop', liked: false, emoji: '☁️' }
];

// Playlist padrão inicial
let playlist = [...realTracks];

// Base de dados completa para pesquisa
let masterPlaylist = [...realTracks];

// Lista de músicas tocadas recentemente
let recentTracks = [];

let currentTrack = 0;
let isPlaying = false;
let currentCategory = 'liked';

// Gerar música aleatória
function generateRandomTrack(index) {
    return realTracks[Math.floor(Math.random() * realTracks.length)];
}

// Gerar playlist com múltiplas músicas aleatórias
function generateRandomPlaylist(count = 15) {
    const newPlaylist = [];
    for (let i = 0; i < count; i++) {
        newPlaylist.push(generateRandomTrack(i));
    }
    return newPlaylist;
}

function renderHomeContent() {
    const welcomeGrid = document.getElementById('welcomeGrid');
    const jumpBackRow = document.getElementById('jumpBackRow');
    const moreLikeRow = document.getElementById('moreLikeRow');

    if (!welcomeGrid || !jumpBackRow || !moreLikeRow) return;

    welcomeGrid.innerHTML = '';
    realTracks.slice(0, 6).forEach(track => {
        welcomeGrid.appendChild(createCard(track, 'welcome-item'));
    });

    jumpBackRow.innerHTML = '';
    realTracks.slice(0, 5).forEach((track, index) => {
        const isArtist = index === 2;
        jumpBackRow.appendChild(createCard(track, 'home-card', isArtist ? 'Artista' : `Álbum • ${track.artist}`, isArtist));
    });

    moreLikeRow.innerHTML = '';
    realTracks.slice(6, 11).forEach(track => {
        moreLikeRow.appendChild(createCard(track, 'home-card', `By Spotify`));
    });
}

// Helper para criar cards e evitar repetição
function createCard(track, className, description = null, isArtist = false) {
    const div = document.createElement('div');
    div.className = className;
    
    const mediaStyle = track.cover ? `style="background-image: url('${track.cover}'); background-color: #282828;"` : '';

    div.innerHTML = description 
        ? `<div class="card-img ${isArtist ? 'artist' : ''}" ${mediaStyle}></div>
            <div class="card-info">
                <div class="card-title">${track.title}</div>
                <div class="card-desc">${description}</div>
            </div>`
        : `<div class="welcome-img" ${mediaStyle}></div>
           <div class="welcome-name">${track.title}</div>`;
    
    div.onclick = () => { playlist = [track]; currentTrack = 0; loadTrack(); play(); };
    return div;
}

// Carregar categoria
function loadCategory(category) {
    currentCategory = category;
    currentTrack = 0;
    
    const homeUI = document.getElementById('homeUI');
    const playerView = document.getElementById('playerView');

    const categories = {
        'home': { name: 'Início', data: () => [...realTracks] },
        'liked': { name: 'Músicas Curtidas', data: () => realTracks.filter(t => t.liked) },
        'discover': { name: 'Descoberta', data: () => generateRandomPlaylist(20) },
        'recent': { name: 'Tocadas Recentemente', data: () => recentTracks },
        'search': { name: 'Pesquisar', data: () => [] },
    };

    const config = categories[category] || categories['home'];
    playlist = config.data();

    if (category === 'home') {
        homeUI.style.display = 'block';
        searchUI.style.display = 'none';
        playerView.style.display = 'none';
        renderHomeContent();
    } else if (category === 'search') {
        homeUI.style.display = 'none';
        searchUI.style.display = 'block';
        playerView.style.display = 'none';
        searchInput.value = '';
        renderSearchResults('');
    } else {
        homeUI.style.display = 'none';
        searchUI.style.display = 'none';
        playerView.style.display = 'flex';
    }

    // Atualizar sidebar ativa - Movido para cima para garantir a execução
    const allLinks = document.querySelectorAll('.sidebar-nav a, .sidebar-playlists a');
    allLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const targetLink = document.querySelector(`[href="#${category}"]`);
    if (targetLink) {
        targetLink.classList.add('active');
    }

    // Funcionalidade especial para Discover: Musica aleatória e Play imediato
    if (category === 'discover' && playlist.length > 0) {
        currentTrack = Math.floor(Math.random() * playlist.length);
    }

    document.getElementById('categoryTitle').textContent = `Tocando Agora - ${config.name}`;
    const queueCountEl = document.getElementById('queueCount');
    if (queueCountEl) queueCountEl.textContent = `(${playlist.length})`;
    initQueue();
    if (category !== 'search') {
        loadTrack();
    }

    if (category === 'discover') {
        play();
    }
}

function initQueue() {
    queueContainer.innerHTML = '';
    playlist.forEach((track, index) => {
        const item = document.createElement('div');
        item.className = 'queue-item' + (index === 0 ? ' active' : '');
        item.innerHTML = `
            <div class="queue-item-title">${track.title}</div>
            <div class="queue-item-artist">${track.artist}</div>
        `;
        item.onclick = () => {
            currentTrack = index;
            loadTrack();
            play();
        };
        queueContainer.appendChild(item);
    });
}

function formatTime(seconds) {
    if (!isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function addToRecent(track) {
    if (!track) return;
    // Remove a música se ela já estiver na lista para movê-la para o topo
    recentTracks = recentTracks.filter(t => t.src !== track.src);
    recentTracks.unshift(track);
    if (recentTracks.length > 20) recentTracks.pop(); // Limita o histórico a 20 músicas
}

function loadTrack() {
    const track = playlist[currentTrack];
    
    if (!track) {
        trackTitle.textContent = "Nenhuma música encontrada";
        trackArtist.textContent = "-";
        albumArt.textContent = "∅";
        audioPlayer.removeAttribute('src');
        durationEl.textContent = "0:00";
        return;
    }

    // Adiciona ao histórico de recentes
    addToRecent(track);

    // Para a reprodução atual antes de trocar a fonte
    audioPlayer.pause();
    audioPlayer.src = track.src;
    durationEl.textContent = "...";
    audioPlayer.load(); // Força o navegador a carregar a nova fonte
    trackTitle.textContent = track.title;
    
    // Reinicia o progresso visual
    progress.style.width = '0%';
    currentTimeEl.textContent = '0:00';

    trackArtist.textContent = track.artist;
    currentTrackTitle.textContent = track.title;
    currentTrackArtist.textContent = track.artist;

    if (track.cover) {
        albumArt.style.backgroundImage = `url('${track.cover}')`;
        albumArt.textContent = '';
    } else {
        albumArt.style.backgroundImage = 'none';
        albumArt.textContent = '♫';
    }

    const categoryBadges = document.getElementById('categoryBadges');
    const artistBio = document.getElementById('artistBio');
    categoryBadges.innerHTML = '';
    if (track.genre) {
        const chip = document.createElement('div');
        chip.className = 'category-chip';
        chip.textContent = track.genre;
        categoryBadges.appendChild(chip);
    }
    artistBio.textContent = track.bio || 'Biografia não disponível para este artista.';

    // Dispara a animação visual de troca de música
    const trackInfoContainer = document.querySelector('.player-section .track-info');
    const elementsToAnimate = [albumArt, trackInfoContainer];
    
    elementsToAnimate.forEach(el => {
        el.classList.remove('track-animate');
        void el.offsetWidth; // Truque para "resetar" a animação no navegador
        el.classList.add('track-animate');
    });

    updateQueueUI();
    updateLikeUI();
}

function renderSearchResults(query) {
    const value = query.trim().toLowerCase();
    searchResults.innerHTML = '';
    if (!value) {
        searchResults.innerHTML = '<p class="search-empty">Digite algo para buscar músicas por título, artista ou gênero.</p>';
        return;
    }

    const results = masterPlaylist.filter(track => {
        return track.title.toLowerCase().includes(value)
            || track.artist.toLowerCase().includes(value)
            || (track.genre && track.genre.toLowerCase().includes(value));
    });

    if (results.length === 0) {
        searchResults.innerHTML = '<p class="search-empty">Nenhum resultado encontrado.</p>';
        return;
    }

    results.forEach(track => {
        const card = document.createElement('div');
        card.className = 'search-result-card';
        card.innerHTML = `
            <div class="search-result-title">${track.title}</div>
            <div class="search-result-meta">${track.artist} • ${track.genre}</div>
        `;
        card.onclick = () => {
            playlist = [track];
            currentTrack = 0;
            loadTrack();
            play();
            document.getElementById('searchUI').style.display = 'none';
            document.getElementById('playerView').style.display = 'flex';
            document.querySelectorAll('.sidebar-nav a').forEach(link => link.classList.remove('active'));
            document.querySelector('a[href="#home"]').classList.add('active');
        };
        searchResults.appendChild(card);
    });
}

function addSearchListeners() {
    if (!searchInput) return;
    searchInput.addEventListener('input', (event) => {
        renderSearchResults(event.target.value);
    });
}

function initialize() {
    setupSidebarListeners();
    setupControlsListeners();
    addSearchListeners();
    loadCategory('home');
}

function toggleLike() {
    const track = playlist[currentTrack];
    if (!track) return;
    
    track.liked = !track.liked;
    updateLikeUI();
    
    // Se estivermos na aba de músicas curtidas, atualizamos a lista ao desfavoritar
    if (currentCategory === 'liked') {
        loadCategory(currentCategory);
    }
}

function updateLikeUI() {
    const track = playlist[currentTrack];
    if (!track || !likeIcon) return;
    
    if (track.liked) {
        likeIcon.setAttribute('fill', '#9b67e0'); // Cor roxa do tema
        likeIcon.setAttribute('stroke', '#9b67e0');
    } else {
        likeIcon.setAttribute('fill', 'none');
        likeIcon.setAttribute('stroke', 'currentColor');
    }
}

function updateQueueUI() {
    document.querySelectorAll('.queue-item').forEach((item, index) => {
        item.classList.toggle('active', index === currentTrack);
    });
}

async function play() {
    // Verifica se existe uma fonte válida antes de tentar tocar
    if (!audioPlayer.src || audioPlayer.src.includes(window.location.pathname)) {
        console.warn("Aviso: Nenhuma música válida carregada para reprodução.");
        return;
    }

    try {
        await audioPlayer.play();
        playBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
        `;
        isPlaying = true;
    } catch (err) {
        if (err.name === 'AbortError') {
            // Ignora erro de interrupção (comum em cliques rápidos)
            return;
        }
        
        console.error("Erro fatal na reprodução:", err);
        isPlaying = false;
        pause(); // Garante que o ícone volte para o estado de "Play" se falhar
    }
}

function pause() {
    audioPlayer.pause();
    isPlaying = false;
    playBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
        </svg>
    `;
}

function togglePlay() {
    isPlaying ? pause() : play();
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack();
    if (isPlaying) play();
}

function prevTrack() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack();
    if (isPlaying) play();
}

// Event Listeners para Sidebar
function setupSidebarListeners() {
    const links = document.querySelectorAll('.sidebar-playlists a');
    console.log('Sidebar Playlist Links encontrados:', links.length);
    
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            console.log('Nav link clicado:', href);
            const category = href.substring(1);
            loadCategory(category);
        });
    });

    document.querySelectorAll('.sidebar-playlists a').forEach((link, index) => {
        console.log(`Configurando link ${index}:`, link.getAttribute('href'));
        
        link.addEventListener('click', (e) => {
            console.log('Link clicado:', e.target);
            e.preventDefault();
            const href = link.getAttribute('href');
            console.log('Href:', href);
            const category = href.substring(1);
            console.log('Categoria:', category);
            loadCategory(category);
        });
    });
}

// Event Listeners para Controles
function setupControlsListeners() {
    playBtn.addEventListener('click', togglePlay);
    nextBtn.addEventListener('click', nextTrack);
    prevBtn.addEventListener('click', prevTrack);
    likeBtn.addEventListener('click', toggleLike);

    audioPlayer.addEventListener('timeupdate', () => {
        if (!audioPlayer.duration) return;
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progress.style.width = percent + '%';
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    });

    audioPlayer.addEventListener('loadedmetadata', () => {
        if (audioPlayer.duration) {
            durationEl.textContent = formatTime(audioPlayer.duration);
        }
    });

    // Chrome as vezes precisa do loadeddata ou canplay para atualizar a duração de streams
    audioPlayer.addEventListener('canplay', () => {
        if (audioPlayer.duration) {
            durationEl.textContent = formatTime(audioPlayer.duration);
        }
    });

    audioPlayer.addEventListener('ended', nextTrack);

    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audioPlayer.currentTime = percent * audioPlayer.duration;
    });

    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value / 100;
    });

    // Alternar animação do volume ao clicar no ícone
    const volumeIcon = document.querySelector('.volume-icon');
    const volumeContainer = document.querySelector('.volume-container');
    volumeIcon.addEventListener('click', () => {
        volumeContainer.classList.toggle('expanded');
    });

    // Log de erro para ajudar no diagnóstico
    audioPlayer.addEventListener('error', (e) => {
        console.error("Erro no elemento de áudio:", audioPlayer.error);
    });
}

// Inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}

function initialize() {
    console.log('Inicializando Music Player...');
    setupSidebarListeners();
    setupControlsListeners();
    addSearchListeners();
    loadCategory('home');
    // Removido crossOrigin para evitar bloqueio de CORS em arquivos locais
    audioPlayer.removeAttribute('crossOrigin');
    audioPlayer.volume = 0.7;
    console.log('Music Player inicializado com sucesso!');
}
