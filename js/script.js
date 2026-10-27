/**
 * VANDAL LAB - Graffiti, Pixo & Letter Science Engine
 * Inspired by Joshgrafx Letter Science & Street Art Culture
 */

// ==========================================================================
// 1. DATA: LETTER SCIENCE KNOWLEDGE BASE (A to Z)
// ==========================================================================

const LETTER_SCIENCE = {
  A: {
    tier: 'S',
    type: 'Âncora Simétrica',
    weight: 9,
    speed: 8,
    space: 8,
    desc: 'Letra pilar com base aberta e ápice firme. Excelente tanto no início quanto no fechamento da tag.'
  },
  B: {
    tier: 'A',
    type: 'Massa Fechada (Top/Bottom)',
    weight: 8,
    speed: 7,
    space: 9,
    desc: 'Ótima distribuição de massa em dois bolsões. Em throw-ups, o bolsão inferior dá estabilidade.'
  },
  C: {
    tier: 'B',
    type: 'Curva Aberta à Direita',
    weight: 6,
    speed: 9,
    space: 5,
    desc: 'Cria vácuo negativo do lado direito. Funciona melhor com letras sobrepostas ou um adorno (seta/ponto).'
  },
  D: {
    tier: 'A',
    type: 'Coluna & Arco',
    weight: 8,
    speed: 8,
    space: 9,
    desc: 'Estrutura sólida. A linha vertical esquerda trava o fluxo e o arco direito projeta impulso à frente.'
  },
  E: {
    tier: 'S',
    type: 'Âncora com 3 Braços',
    weight: 9,
    speed: 8,
    space: 8,
    desc: 'Extremamente versátil. As três hastes horizontais permitem conexão de fluxo em qualquer direção.'
  },
  F: {
    tier: 'B',
    type: 'Top-Heavy (Pendente)',
    weight: 6,
    speed: 8,
    space: 6,
    desc: 'Peso concentrado no topo, deixando a base vazia. Costuma exigir um underline para compensar.'
  },
  G: {
    tier: 'B',
    type: 'Curva com Gancho',
    weight: 7,
    speed: 7,
    space: 6,
    desc: 'O gancho interno quebra a velocidade do traço se não for simplificado no traço rápido.'
  },
  H: {
    tier: 'B',
    type: 'Ponte Estável',
    weight: 8,
    speed: 7,
    space: 7,
    desc: 'Duas colunas com barra central. Muito equilibrada, mas pode parecer rígida em tags orgânicas.'
  },
  I: {
    tier: 'C',
    type: 'Monolito Estreito',
    weight: 4,
    speed: 10,
    space: 4,
    desc: 'Risco de sumir visualmente entre letras largas. Use auréola, serifa ou conecte às vizinhas.'
  },
  J: {
    tier: 'C',
    type: 'Descendente Curvo',
    weight: 5,
    speed: 9,
    space: 5,
    desc: 'Cria assimetria na linha de base. Ótima no final da palavra com uma cauda estendida.'
  },
  K: {
    tier: 'S',
    type: 'Expansiva / Diagonais Vivas',
    weight: 9,
    speed: 8,
    space: 8,
    desc: 'Uma das melhores letras do graffiti. Seus braços diagonais projetam energia e fecham espaços.'
  },
  L: {
    tier: 'B',
    type: 'Base com Vácuo Superior',
    weight: 6,
    speed: 9,
    space: 5,
    desc: 'Deixa o quadrante superior direito vazio. Fica perfeita quando a próxima letra se aninha sobre o L.'
  },
  M: {
    tier: 'A',
    type: 'Massa Ampla Dupla',
    weight: 9,
    speed: 6,
    space: 9,
    desc: 'Letra densa e imponente. Ocupa espaço considerável e ancora com força o início da tag.'
  },
  N: {
    tier: 'A',
    type: 'Corte Diagonal Dinâmico',
    weight: 8,
    speed: 8,
    space: 8,
    desc: 'A diagonal cria movimento contínuo de leitura. Fácil de acelerar no canetão ou spray.'
  },
  O: {
    tier: 'A',
    type: 'Círculo Central Neutro',
    weight: 7,
    speed: 9,
    space: 9,
    desc: 'Elemento de respiro perfeito para o meio da palavra. Pode receber olhos, auréola ou cruz de pixo.'
  },
  P: {
    tier: 'A',
    type: 'Top-Heavy Equilibrado',
    weight: 7,
    speed: 8,
    space: 7,
    desc: 'Cria leve vácuo inferior. Excelente como letra inicial para apoiar a sequência.'
  },
  Q: {
    tier: 'C',
    type: 'Círculo com Cauda',
    weight: 6,
    speed: 7,
    space: 6,
    desc: 'Rara na rua. A cauda inferior pode ser convertida numa seta ou underline fluido.'
  },
  R: {
    tier: 'S',
    type: 'Realeza do Graffiti',
    weight: 10,
    speed: 8,
    space: 9,
    desc: 'Favorita absoluta de writers no mundo todo. Junta coluna, arco e perna diagonal dinâmica.'
  },
  S: {
    tier: 'S',
    type: 'Serpente / Curva Dupla',
    weight: 9,
    speed: 8,
    space: 8,
    desc: 'Movimento puro. A curvatura superior e inferior cria ritmo musical no conjunto da tag.'
  },
  T: {
    tier: 'A',
    type: 'Teto Amplo com Coluna',
    weight: 7,
    speed: 9,
    space: 6,
    desc: 'A barra superior cobre as letras adjacentes, mas deixa as laterais da base abertas.'
  },
  U: {
    tier: 'B',
    type: 'Taça com Vácuo Superior',
    weight: 7,
    speed: 8,
    space: 7,
    desc: 'Base arredondada e abertura superior. Pode receber aspas ou coroas para equilibrar o topo.'
  },
  V: {
    tier: 'B',
    type: 'Triângulo Invertido',
    weight: 7,
    speed: 9,
    space: 6,
    desc: 'Cria dinamismo veloz e aponta para o centro. Na pixação paulista tem pontas extremamente afiadas.'
  },
  W: {
    tier: 'B',
    type: 'Massa Ampla Dupla V',
    weight: 9,
    speed: 6,
    space: 8,
    desc: 'Muito larga. Requer controle do espaçamento com as letras vizinhas para não desbalancear.'
  },
  X: {
    tier: 'S',
    type: 'Cruz Dinâmica Equilibrada',
    weight: 9,
    speed: 8,
    space: 8,
    desc: 'Simetria e energia de 360 graus. Funciona como um emblema tanto no centro quanto nas pontas.'
  },
  Y: {
    tier: 'B',
    type: 'Bifurcação Superior',
    weight: 6,
    speed: 8,
    space: 6,
    desc: 'Brazos superiores abertos e haste vertical inferior. Ótima para arrematar palavras curtas.'
  },
  Z: {
    tier: 'A',
    type: 'Zig-Zag Rápido',
    weight: 8,
    speed: 9,
    space: 8,
    desc: 'Letra agressiva e cortante. A diagonal central projeta energia futurista e urbana.'
  }
};

const RANDOM_TAGS = [
  'VANDAL', 'SURTO', 'RASTRO', 'RISCO', 'NEON', 'OSSO', 'FANTASMA', 'KRONIC', 
  'SHOCK', 'TOXIC', 'ZONA', 'CAOS', 'CORVO', 'BECO', 'NOX', 'SUBWAY', 
  'APEX', 'BLITZ', 'VENOM', 'RUSH', 'CRIPTO', 'FAISCA', 'ZENIT', 'CREW'
];

// ==========================================================================
// 2. STATE & CONFIGURATION
// ==========================================================================

const state = {
  text: 'VANDAL',
  style: 'pixo', // 'pixo' | 'throwup' | 'wild' | 'drip'
  surface: 'brick', // 'brick' | 'concrete' | 'subway' | 'clean'
  fillColor: '#ffffff',
  outlineColor: '#000000',
  shadowColor: '#00ff88',
  fontSize: 120,
  dripsAmount: 10,
  slant: -8,
  addons: {
    crown: true,
    halo: false,
    arrow: true,
    quotes: true,
    underline: true,
    year: true
  },
  soundEnabled: true,
  isSpraying: false,
  sprayLayer: null // Offscreen canvas for user freehand spray marks
};

// ==========================================================================
// 3. SOUND SYNTHESIZER (Web Audio API - Realistic Spray Can & Marble Clack)
// ==========================================================================

class AudioSynth {
  constructor() {
    this.ctx = null;
    this.sprayNode = null;
    this.sprayGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playSpraySound(start = true) {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    if (start) {
      if (this.sprayNode) return; // already playing

      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1; // white noise
      }

      this.sprayNode = this.ctx.createBufferSource();
      this.sprayNode.buffer = buffer;
      this.sprayNode.loop = true;

      // Bandpass filter for authentic aerosol hiss
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 3500;
      filter.Q.value = 1.2;

      this.sprayGain = this.ctx.createGain();
      this.sprayGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.sprayGain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 0.05);

      this.sprayNode.connect(filter);
      filter.connect(this.sprayGain);
      this.sprayGain.connect(this.ctx.destination);
      this.sprayNode.start();
    } else {
      if (this.sprayGain && this.sprayNode) {
        try {
          this.sprayGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
          setTimeout(() => {
            if (this.sprayNode) {
              this.sprayNode.stop();
              this.sprayNode.disconnect();
              this.sprayNode = null;
            }
          }, 70);
        } catch (e) {
          this.sprayNode = null;
        }
      }
    }
  }

  playMarbleClack() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
}

const audio = new AudioSynth();

// ==========================================================================
// 4. CANVAS RENDERING ENGINE
// ==========================================================================

const canvas = document.getElementById('graffitiCanvas');
const ctx = canvas.getContext('2d');

// Initialize manual spray overlay offscreen canvas
state.sprayLayer = document.createElement('canvas');
state.sprayLayer.width = canvas.width;
state.sprayLayer.height = canvas.height;
const sprayCtx = state.sprayLayer.getContext('2d');

/**
 * Procedural Wall Backgrounds
 */
function drawBackground(targetCtx, width, height, surfaceType) {
  if (surfaceType === 'clean') {
    targetCtx.clearRect(0, 0, width, height);
    return;
  }

  if (surfaceType === 'brick') {
    // Dark weathered brick wall
    targetCtx.fillStyle = '#14171d';
    targetCtx.fillRect(0, 0, width, height);

    const brickH = 34;
    const brickW = 76;
    const mortar = 4;

    let row = 0;
    for (let y = 0; y < height + brickH; y += brickH + mortar) {
      row++;
      const offset = (row % 2 === 0) ? brickW / 2 : 0;
      for (let x = -brickW; x < width + brickW; x += brickW + mortar) {
        // Subtle brick color variations
        const noise = Math.sin(x * 0.05 + y * 0.1);
        const redVal = Math.floor(22 + noise * 6);
        const greenVal = Math.floor(25 + noise * 5);
        const blueVal = Math.floor(32 + noise * 7);
        targetCtx.fillStyle = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
        targetCtx.fillRect(x + offset, y, brickW, brickH);

        // Brick texture grain
        if (Math.random() > 0.6) {
          targetCtx.fillStyle = 'rgba(0, 0, 0, 0.15)';
          targetCtx.fillRect(x + offset + 2, y + 2, brickW - 4, 3);
        }
      }
    }

    // Heavy urban vignette & grime
    const grad = targetCtx.createRadialGradient(width / 2, height / 2, 200, width / 2, height / 2, width * 0.75);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.85)');
    targetCtx.fillStyle = grad;
    targetCtx.fillRect(0, 0, width, height);

  } else if (surfaceType === 'concrete') {
    // Raw textured concrete
    targetCtx.fillStyle = '#181b22';
    targetCtx.fillRect(0, 0, width, height);

    // Concrete noise speckles
    for (let i = 0; i < 400; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      const rsize = Math.random() * 8 + 2;
      targetCtx.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.25)';
      targetCtx.fillRect(rx, ry, rsize, rsize);
    }

    // Grimy wall wash
    const grad = targetCtx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.4)');
    grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.05)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.7)');
    targetCtx.fillStyle = grad;
    targetCtx.fillRect(0, 0, width, height);

  } else if (surfaceType === 'subway') {
    // Dark steel train or underground tile
    targetCtx.fillStyle = '#0c0e12';
    targetCtx.fillRect(0, 0, width, height);

    // Subway horizontal stainless steel panels
    const panelH = 120;
    for (let y = 0; y < height; y += panelH) {
      targetCtx.strokeStyle = '#1e2430';
      targetCtx.lineWidth = 3;
      targetCtx.beginPath();
      targetCtx.moveTo(0, y);
      targetCtx.lineTo(width, y);
      targetCtx.stroke();

      // Screws/rivets
      for (let x = 40; x < width; x += 140) {
        targetCtx.fillStyle = '#2b3345';
        targetCtx.beginPath();
        targetCtx.arc(x, y + 12, 3, 0, Math.PI * 2);
        targetCtx.fill();
      }
    }

    const grad = targetCtx.createRadialGradient(width / 2, height / 2, 100, width / 2, height / 2, width * 0.7);
    grad.addColorStop(0, 'rgba(0, 220, 255, 0.02)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
    targetCtx.fillStyle = grad;
    targetCtx.fillRect(0, 0, width, height);
  }
}

/**
 * Authentic Pixo Reto Geometry Renderer (São Paulo Straight Letter Tagging)
 */
function drawPixoRetoGlyph(gCtx, char, x, y, size, strokeColor, shadowColor, lineWidth) {
  gCtx.save();
  gCtx.lineCap = 'butt';
  gCtx.lineJoin = 'miter';
  gCtx.miterLimit = 6;
  gCtx.lineWidth = lineWidth;
  gCtx.strokeStyle = strokeColor;

  const w = size * 0.52;
  const h = size * 1.15;
  const halfW = w / 2;

  // 3D Shadow layer offset
  if (shadowColor) {
    gCtx.shadowColor = shadowColor;
    gCtx.shadowBlur = 12;
  }

  gCtx.beginPath();

  switch (char) {
    case 'A':
      // Iconic SP Pixo 'A' - Sharp peak, vertical bars, angled crossbar
      gCtx.moveTo(x, y + h);
      gCtx.lineTo(x, y + h * 0.4);
      gCtx.lineTo(x + halfW, y);
      gCtx.lineTo(x + w, y + h * 0.4);
      gCtx.lineTo(x + w, y + h);
      gCtx.moveTo(x, y + h * 0.6);
      gCtx.lineTo(x + w, y + h * 0.6);
      break;

    case 'B':
      gCtx.moveTo(x, y + h);
      gCtx.lineTo(x, y);
      gCtx.lineTo(x + w, y + h * 0.15);
      gCtx.lineTo(x + halfW, y + h * 0.48);
      gCtx.lineTo(x, y + h * 0.48);
      gCtx.moveTo(x + halfW, y + h * 0.48);
      gCtx.lineTo(x + w, y + h * 0.75);
      gCtx.lineTo(x, y + h);
      break;

    case 'C':
      gCtx.moveTo(x + w, y);
      gCtx.lineTo(x, y + h * 0.2);
      gCtx.lineTo(x, y + h * 0.8);
      gCtx.lineTo(x + w, y + h);
      break;

    case 'D':
      gCtx.moveTo(x, y + h);
      gCtx.lineTo(x, y);
      gCtx.lineTo(x + w, y + h * 0.25);
      gCtx.lineTo(x + w, y + h * 0.75);
      gCtx.lineTo(x, y + h);
      break;

    case 'E':
      gCtx.moveTo(x + w, y);
      gCtx.lineTo(x, y);
      gCtx.lineTo(x, y + h);
      gCtx.lineTo(x + w, y + h);
      gCtx.moveTo(x, y + h * 0.5);
      gCtx.lineTo(x + w * 0.8, y + h * 0.5);
      break;

    case 'F':
      gCtx.moveTo(x, y + h);
      gCtx.lineTo(x, y);
      gCtx.lineTo(x + w, y);
      gCtx.moveTo(x, y + h * 0.45);
      gCtx.lineTo(x + w * 0.8, y + h * 0.45);
      break;

    case 'G':
      gCtx.moveTo(x + w, y);
      gCtx.lineTo(x, y + h * 0.2);
      gCtx.lineTo(x, y + h * 0.8);
      gCtx.lineTo(x + w, y + h);
      gCtx.lineTo(x + w, y + h * 0.5);
      gCtx.lineTo(x + halfW, y + h * 0.5);
      break;

    case 'H':
      gCtx.moveTo(x, y);
      gCtx.lineTo(x, y + h);
      gCtx.moveTo(x + w, y);
      gCtx.lineTo(x + w, y + h);
      gCtx.moveTo(x, y + h * 0.5);
      gCtx.lineTo(x + w, y + h * 0.5);
      break;

    case 'I':
      gCtx.moveTo(x + halfW, y);
      gCtx.lineTo(x + halfW, y + h);
      gCtx.moveTo(x + halfW - 8, y);
      gCtx.lineTo(x + halfW + 8, y);
      gCtx.moveTo(x + halfW - 8, y + h);
      gCtx.lineTo(x + halfW + 8, y + h);
      break;

    case 'J':
      gCtx.moveTo(x + w, y);
      gCtx.lineTo(x + w, y + h * 0.8);
      gCtx.lineTo(x + halfW, y + h);
      gCtx.lineTo(x, y + h * 0.8);
      break;

    case 'K':
      gCtx.moveTo(x, y);
      gCtx.lineTo(x, y + h);
      gCtx.moveTo(x + w, y);
      gCtx.lineTo(x, y + h * 0.5);
      gCtx.lineTo(x + w, y + h);
      break;

    case 'L':
      gCtx.moveTo(x, y);
      gCtx.lineTo(x, y + h);
      gCtx.lineTo(x + w, y + h);
      break;

    case 'M':
      gCtx.moveTo(x, y + h);
      gCtx.lineTo(x, y);
      gCtx.lineTo(x + halfW, y + h * 0.6);
      gCtx.lineTo(x + w, y);
      gCtx.lineTo(x + w, y + h);
      break;

    case 'N':
      gCtx.moveTo(x, y + h);
      gCtx.lineTo(x, y);
      gCtx.lineTo(x + w, y + h);
      gCtx.lineTo(x + w, y);
      break;

    case 'O':
      // Diamond hexagon
      gCtx.moveTo(x + halfW, y);
      gCtx.lineTo(x + w, y + h * 0.3);
      gCtx.lineTo(x + w, y + h * 0.7);
      gCtx.lineTo(x + halfW, y + h);
      gCtx.lineTo(x, y + h * 0.7);
      gCtx.lineTo(x, y + h * 0.3);
      gCtx.closePath();
      break;

    case 'P':
      gCtx.moveTo(x, y + h);
      gCtx.lineTo(x, y);
      gCtx.lineTo(x + w, y + h * 0.15);
      gCtx.lineTo(x + w, y + h * 0.4);
      gCtx.lineTo(x, y + h * 0.5);
      break;

    case 'Q':
      gCtx.moveTo(x + halfW, y);
      gCtx.lineTo(x + w, y + h * 0.3);
      gCtx.lineTo(x + w, y + h * 0.7);
      gCtx.lineTo(x + halfW, y + h);
      gCtx.lineTo(x, y + h * 0.7);
      gCtx.lineTo(x, y + h * 0.3);
      gCtx.closePath();
      gCtx.moveTo(x + halfW, y + h * 0.6);
      gCtx.lineTo(x + w + 6, y + h + 8);
      break;

    case 'R':
      gCtx.moveTo(x, y + h);
      gCtx.lineTo(x, y);
      gCtx.lineTo(x + w, y + h * 0.15);
      gCtx.lineTo(x + w, y + h * 0.4);
      gCtx.lineTo(x, y + h * 0.5);
      gCtx.moveTo(x + halfW * 0.7, y + h * 0.5);
      gCtx.lineTo(x + w, y + h);
      break;

    case 'S':
      // Sharp Z-slash pixo S
      gCtx.moveTo(x + w, y);
      gCtx.lineTo(x, y + h * 0.2);
      gCtx.lineTo(x + w, y + h * 0.5);
      gCtx.lineTo(x, y + h * 0.8);
      gCtx.lineTo(x, y + h);
      gCtx.lineTo(x + w, y + h);
      break;

    case 'T':
      gCtx.moveTo(x, y);
      gCtx.lineTo(x + w, y);
      gCtx.moveTo(x + halfW, y);
      gCtx.lineTo(x + halfW, y + h);
      break;

    case 'U':
      gCtx.moveTo(x, y);
      gCtx.lineTo(x, y + h * 0.8);
      gCtx.lineTo(x + halfW, y + h);
      gCtx.lineTo(x + w, y + h * 0.8);
      gCtx.lineTo(x + w, y);
      break;

    case 'V':
      gCtx.moveTo(x, y);
      gCtx.lineTo(x + halfW, y + h);
      gCtx.lineTo(x + w, y);
      break;

    case 'W':
      gCtx.moveTo(x, y);
      gCtx.lineTo(x + halfW * 0.5, y + h);
      gCtx.lineTo(x + halfW, y + h * 0.4);
      gCtx.lineTo(x + halfW * 1.5, y + h);
      gCtx.lineTo(x + w, y);
      break;

    case 'X':
      gCtx.moveTo(x, y);
      gCtx.lineTo(x + w, y + h);
      gCtx.moveTo(x + w, y);
      gCtx.lineTo(x, y + h);
      break;

    case 'Y':
      gCtx.moveTo(x, y);
      gCtx.lineTo(x + halfW, y + h * 0.5);
      gCtx.lineTo(x + w, y);
      gCtx.moveTo(x + halfW, y + h * 0.5);
      gCtx.lineTo(x + halfW, y + h);
      break;

    case 'Z':
      gCtx.moveTo(x, y);
      gCtx.lineTo(x + w, y);
      gCtx.lineTo(x, y + h);
      gCtx.lineTo(x + w, y + h);
      gCtx.moveTo(x + halfW * 0.5, y + h * 0.5);
      gCtx.lineTo(x + halfW * 1.5, y + h * 0.5);
      break;

    default:
      // Numbers / generic
      gCtx.strokeRect(x, y, w, h);
      break;
  }

  gCtx.stroke();
  gCtx.restore();
}

/**
 * Procedural Paint Drips Simulation
 */
function drawDrips(targetCtx, xPositions, baseY, color, count) {
  if (count <= 0) return;
  targetCtx.save();
  targetCtx.fillStyle = color;
  targetCtx.strokeStyle = color;
  targetCtx.lineCap = 'round';

  const step = Math.max(1, Math.floor(xPositions.length / count));

  for (let i = 0; i < xPositions.length; i += step) {
    const x = xPositions[i] + (Math.sin(i * 123) * 8);
    const dripLen = 25 + Math.abs(Math.sin(i * 456 + count)) * 75;
    const dripWidth = 3 + Math.abs(Math.cos(i * 789)) * 4;

    targetCtx.beginPath();
    targetCtx.lineWidth = dripWidth;
    targetCtx.moveTo(x, baseY);
    targetCtx.lineTo(x, baseY + dripLen);
    targetCtx.stroke();

    // Heavy paint pooling droplet at bottom
    targetCtx.beginPath();
    targetCtx.arc(x, baseY + dripLen, dripWidth * 1.3, 0, Math.PI * 2);
    targetCtx.fill();

    // Occasional detached splash drop
    if (dripLen > 60) {
      targetCtx.beginPath();
      targetCtx.arc(x, baseY + dripLen + 14, dripWidth * 0.7, 0, Math.PI * 2);
      targetCtx.fill();
    }
  }

  targetCtx.restore();
}

/**
 * Tag Add-ons: Crown, Halo, Arrow, Quotes, Underline, Year
 */
function drawAddons(targetCtx, box, tagColor, glowColor) {
  targetCtx.save();
  targetCtx.fillStyle = tagColor;
  targetCtx.strokeStyle = tagColor;
  targetCtx.shadowColor = glowColor;
  targetCtx.shadowBlur = 10;
  targetCtx.lineWidth = 6;
  targetCtx.lineCap = 'round';
  targetCtx.lineJoin = 'round';

  const { left, right, top, bottom, centerX } = box;

  // 1. Crown (Coroa 👑)
  if (state.addons.crown) {
    const cw = 70;
    const ch = 40;
    const cy = top - 35;
    targetCtx.beginPath();
    targetCtx.moveTo(centerX - cw / 2, cy);
    targetCtx.lineTo(centerX - cw / 2, cy - ch);
    targetCtx.lineTo(centerX - cw * 0.2, cy - ch * 0.4);
    targetCtx.lineTo(centerX, cy - ch * 1.15);
    targetCtx.lineTo(centerX + cw * 0.2, cy - ch * 0.4);
    targetCtx.lineTo(centerX + cw / 2, cy - ch);
    targetCtx.lineTo(centerX + cw / 2, cy);
    targetCtx.closePath();
    targetCtx.fill();

    // Crown balls
    [-cw/2, 0, cw/2].forEach(ox => {
      targetCtx.beginPath();
      targetCtx.arc(centerX + ox, cy - (ox === 0 ? ch * 1.15 : ch) - 5, 4, 0, Math.PI * 2);
      targetCtx.fill();
    });
  }

  // 2. Halo (Auréola 😇)
  if (state.addons.halo) {
    targetCtx.beginPath();
    targetCtx.lineWidth = 5;
    targetCtx.ellipse(centerX, top - 25, 65, 14, -0.05, 0, Math.PI * 2);
    targetCtx.stroke();
  }

  // 3. Quotes (" ")
  if (state.addons.quotes) {
    targetCtx.font = 'bold 36px "Permanent Marker", cursive, sans-serif';
    targetCtx.fillText('“', left - 40, top + 35);
    targetCtx.fillText('”', right + 15, top + 35);
  }

  // 4. Underline & Arrow (━ ➜)
  if (state.addons.underline) {
    const uy = bottom + 25;
    targetCtx.beginPath();
    targetCtx.lineWidth = 8;
    targetCtx.moveTo(left - 10, uy);
    targetCtx.quadraticCurveTo(centerX, uy + 15, right + (state.addons.arrow ? 25 : 10), uy);
    targetCtx.stroke();

    if (state.addons.arrow) {
      // Sweeping dynamic street arrow
      const ax = right + 25;
      targetCtx.beginPath();
      targetCtx.moveTo(ax - 20, uy - 18);
      targetCtx.lineTo(ax + 18, uy);
      targetCtx.lineTo(ax - 18, uy + 18);
      targetCtx.lineTo(ax - 5, uy);
      targetCtx.closePath();
      targetCtx.fill();
    }
  }

  // 5. Year ('26)
  if (state.addons.year) {
    targetCtx.font = 'bold 22px "JetBrains Mono", monospace';
    targetCtx.fillText("'26", right + 20, bottom + 15);
  }

  targetCtx.restore();
}

/**
 * Main Render Dispatcher
 */
function renderCanvas() {
  const width = canvas.width;
  const height = canvas.height;

  // 1. Draw Surface
  drawBackground(ctx, width, height, state.surface);

  // 2. Composite manual spray layer (if user graffitied freehand)
  ctx.drawImage(state.sprayLayer, 0, 0);

  // Text validation
  const rawText = state.text.trim().toUpperCase() || 'VANDAL';
  const cleanText = rawText.slice(0, 16);

  ctx.save();

  // Apply general Tag slant angle
  ctx.translate(width / 2, height / 2);
  ctx.rotate((state.slant * Math.PI) / 180);
  ctx.translate(-width / 2, -height / 2);

  const dripXPoints = [];
  let bounds = { left: 0, right: 0, top: 0, bottom: 0, centerX: width / 2 };

  // 3. Render according to Tag Style
  if (state.style === 'pixo') {
    // Pixo Reto Style
    const charSize = state.fontSize * 1.1;
    const glyphW = charSize * 0.52;
    const letterSpacing = 14;
    const totalW = cleanText.length * glyphW + (cleanText.length - 1) * letterSpacing;
    const startX = (width - totalW) / 2;
    const startY = (height - charSize * 1.15) / 2 + 10;
    const strokeW = Math.max(7, Math.floor(charSize * 0.085));

    bounds = {
      left: startX,
      right: startX + totalW,
      top: startY,
      bottom: startY + charSize * 1.15,
      centerX: width / 2
    };

    // Draw shadow / 3D extrusion pass
    for (let i = 0; i < cleanText.length; i++) {
      const char = cleanText[i];
      const cx = startX + i * (glyphW + letterSpacing);
      drawPixoRetoGlyph(ctx, char, cx + 5, startY + 5, charSize, state.outlineColor, null, strokeW + 2);
    }

    // Draw main sharp stroke pass
    for (let i = 0; i < cleanText.length; i++) {
      const char = cleanText[i];
      const cx = startX + i * (glyphW + letterSpacing);
      drawPixoRetoGlyph(ctx, char, cx, startY, charSize, state.fillColor, state.shadowColor, strokeW);
      dripXPoints.push(cx + glyphW * 0.25, cx + glyphW * 0.75);
    }

  } else if (state.style === 'throwup') {
    // Throw-up / Bubble Bombing
    const fontSize = state.fontSize * 1.25;
    ctx.font = `900 ${fontSize}px "Syne", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const textX = width / 2;
    const textY = height / 2;
    const metrics = ctx.measureText(cleanText);
    const tw = metrics.width;
    const th = fontSize * 0.9;

    bounds = {
      left: textX - tw / 2,
      right: textX + tw / 2,
      top: textY - th / 2,
      bottom: textY + th / 2,
      centerX: textX
    };

    // 3D Drop Block (Solid Extrusion)
    const blockDepth = 14;
    ctx.fillStyle = state.outlineColor;
    for (let offset = blockDepth; offset > 0; offset--) {
      ctx.fillText(cleanText, textX + offset, textY + offset);
    }

    // Fat Outline
    ctx.strokeStyle = state.outlineColor;
    ctx.lineWidth = Math.max(16, fontSize * 0.16);
    ctx.lineJoin = 'round';
    ctx.strokeText(cleanText, textX, textY);

    // Inner Fill with Neon Shadow
    ctx.shadowColor = state.shadowColor;
    ctx.shadowBlur = 18;
    ctx.fillStyle = state.fillColor;
    ctx.fillText(cleanText, textX, textY);

    // Specular Highlight Pills (Brilho branco superior clássico de Throw-up)
    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.strokeText(cleanText, textX - 4, textY - 4);

    // Sample drip points
    for (let i = 0; i < cleanText.length; i++) {
      const charOffset = (i - (cleanText.length - 1) / 2) * (tw / cleanText.length);
      dripXPoints.push(textX + charOffset);
    }

  } else if (state.style === 'wild') {
    // Handstyle Marker Flow
    const fontSize = state.fontSize * 1.15;
    ctx.font = `italic 800 ${fontSize}px "Permanent Marker", cursive, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const textX = width / 2;
    const textY = height / 2;
    const metrics = ctx.measureText(cleanText);
    const tw = metrics.width;
    const th = fontSize * 0.8;

    bounds = {
      left: textX - tw / 2,
      right: textX + tw / 2,
      top: textY - th / 2,
      bottom: textY + th / 2,
      centerX: textX
    };

    // Shadow line
    ctx.strokeStyle = state.outlineColor;
    ctx.lineWidth = 14;
    ctx.lineJoin = 'round';
    ctx.strokeText(cleanText, textX + 4, textY + 4);

    // Outer Glow & Main Tag
    ctx.shadowColor = state.shadowColor;
    ctx.shadowBlur = 15;
    ctx.fillStyle = state.fillColor;
    ctx.fillText(cleanText, textX, textY);

    // Marker core stroke
    ctx.shadowBlur = 0;
    ctx.strokeStyle = state.fillColor;
    ctx.lineWidth = 6;
    ctx.strokeText(cleanText, textX, textY);

    for (let i = 0; i < cleanText.length; i++) {
      const charOffset = (i - (cleanText.length - 1) / 2) * (tw / cleanText.length);
      dripXPoints.push(textX + charOffset);
    }

  } else if (state.style === 'drip') {
    // Drip Tag with heavy drippy street font
    const fontSize = state.fontSize * 1.2;
    ctx.font = `800 ${fontSize}px "Sedgwick Ave Display", cursive, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const textX = width / 2;
    const textY = height / 2;
    const metrics = ctx.measureText(cleanText);
    const tw = metrics.width;
    const th = fontSize * 0.8;

    bounds = {
      left: textX - tw / 2,
      right: textX + tw / 2,
      top: textY - th / 2,
      bottom: textY + th / 2,
      centerX: textX
    };

    // Outline
    ctx.strokeStyle = state.outlineColor;
    ctx.lineWidth = 16;
    ctx.strokeText(cleanText, textX + 3, textY + 4);

    // Fill
    ctx.shadowColor = state.shadowColor;
    ctx.shadowBlur = 22;
    ctx.fillStyle = state.fillColor;
    ctx.fillText(cleanText, textX, textY);

    for (let i = 0; i < cleanText.length; i++) {
      const charOffset = (i - (cleanText.length - 1) / 2) * (tw / cleanText.length);
      dripXPoints.push(textX + charOffset - 8, textX + charOffset + 8);
    }
  }

  // 4. Draw Drips
  const dripBaseY = bounds.bottom - 10;
  drawDrips(ctx, dripXPoints, dripBaseY, state.fillColor, state.dripsAmount);

  // 5. Draw Add-ons (Crown, Underline, Arrow, Quotes, etc.)
  drawAddons(ctx, bounds, state.fillColor, state.shadowColor);

  ctx.restore();
}

// ==========================================================================
// 5. LETTER SCIENCE ANALYZER (Joshgrafx Algorithm)
// ==========================================================================

function analyzeTag(word) {
  const raw = word.toUpperCase().replace(/[^A-Z]/g, '');
  if (!raw.length) {
    return null;
  }

  const letters = raw.split('');
  let totalWeight = 0;
  let totalSpeed = 0;
  let totalSpace = 0;

  const letterDetails = letters.map((char, index) => {
    const info = LETTER_SCIENCE[char] || {
      tier: 'B',
      type: 'Caractere Estilizado',
      weight: 7,
      speed: 7,
      space: 7,
      desc: 'Letra padrão urbana com boa adaptabilidade.'
    };

    totalWeight += info.weight;
    totalSpeed += info.speed;
    totalSpace += info.space;

    return {
      char,
      index,
      ...info
    };
  });

  const len = letters.length;
  const avgWeight = totalWeight / len;
  const avgSpeed = totalSpeed / len;
  const avgSpace = totalSpace / len;

  // Structural Rules & Flow Multipliers (Letter Science)
  let flowScore = 80;
  const tips = [];

  // Rule 1: Anchor check (First & Last letter)
  const firstLetter = letterDetails[0];
  const lastLetter = letterDetails[len - 1];

  if (firstLetter.tier === 'S' || firstLetter.tier === 'A') {
    flowScore += 5;
    tips.push({
      type: 'good',
      text: `<strong>Início Firme (${firstLetter.char}):</strong> Sua primeira letra é Tier ${firstLetter.tier}, ancorando o início da tag com peso ideal.`
    });
  } else {
    flowScore -= 4;
    tips.push({
      type: 'warn',
      text: `<strong>Início Delicado (${firstLetter.char}):</strong> A letra '${firstLetter.char}' possui estrutura leve. Compense adicionando aspas ou uma coroa acima dela.`
    });
  }

  if (lastLetter.tier === 'S' || lastLetter.tier === 'A') {
    flowScore += 5;
    tips.push({
      type: 'good',
      text: `<strong>Fechamento Seguro (${lastLetter.char}):</strong> A letra '${lastLetter.char}' trava a tag e impede vazamento de fluxo.`
    });
  } else {
    tips.push({
      type: 'tip',
      text: `<strong>Arremate com Seta (${lastLetter.char}):</strong> Letras como '${lastLetter.char}' pedem um underline ou seta para selar a ponta direita.`
    });
  }

  // Rule 2: Word Length (Tag economy on streets)
  if (len >= 4 && len <= 6) {
    flowScore += 7;
    tips.push({
      type: 'good',
      text: `<strong>Extensão de Ouro (${len} letras):</strong> Nomes de 4 a 6 letras são a média ideal documentada no graffiti para velocidade e memorização.`
    });
  } else if (len > 8) {
    flowScore -= 8;
    tips.push({
      type: 'warn',
      text: `<strong>Nome Longo (${len} letras):</strong> Tags longas demoram mais para executar no spray. Simplifique as formas das letras centrais.`
    });
  } else if (len < 3) {
    tips.push({
      type: 'tip',
      text: `<strong>Tag Curta (${len} letras):</strong> Poucas letras demandam adereços (ano '26, estrelas ou auréola) para preencher a composição.`
    });
  }

  // Rule 3: Negative Space clashes (e.g. C, L, T consecutive)
  let hasSpaceCavity = false;
  for (let i = 0; i < len - 1; i++) {
    if (['C', 'L', 'F', 'T', 'J'].includes(letters[i]) && ['C', 'L', 'I', 'V'].includes(letters[i + 1])) {
      hasSpaceCavity = true;
      break;
    }
  }

  if (hasSpaceCavity) {
    flowScore -= 6;
    tips.push({
      type: 'warn',
      text: `<strong>Vácuo Negativo Detectado:</strong> Você tem letras abertas adjacentes. Sobreponha os traços ligeiramente no estilo Throw-up para fechar o buraco.`
    });
  } else {
    flowScore += 4;
  }

  // Final Overall Score (0-100)
  const normalizedFlow = Math.min(98, Math.max(52, Math.round(flowScore)));
  const normalizedSpeed = Math.min(99, Math.max(48, Math.round(avgSpeed * 9.8)));
  const normalizedWeight = Math.min(96, Math.max(50, Math.round(avgWeight * 9.7)));
  const normalizedSpace = Math.min(95, Math.max(45, Math.round(avgSpace * 9.5)));

  const finalScore = Math.round(
    normalizedFlow * 0.35 +
    normalizedSpeed * 0.25 +
    normalizedWeight * 0.20 +
    normalizedSpace * 0.20
  );

  let band = {
    tier: 'TIER B',
    pill: 'MODERATE FLOW',
    title: 'Boa Estrutura com Ajustes',
    desc: 'Sua assinatura tem identidade, mas pequenos ajustes de peso ou conexão aceleram o traço.'
  };

  if (finalScore >= 90) {
    band = {
      tier: 'TIER S',
      pill: 'LEGENDARY TAG',
      title: 'Fluxo Perfeito de Rua',
      desc: 'Combinação impecável! As letras sustentam peso equilibrado com velocidade altíssima de execução.'
    };
  } else if (finalScore >= 80) {
    band = {
      tier: 'TIER A+',
      pill: 'SAFE & POWERFUL',
      title: 'Excelente Equilíbrio de Letras',
      desc: 'Alternância sólida de diagonais e arcos. Baixíssimo risco de falha na hora da ação rápida.'
    };
  } else if (finalScore < 68) {
    band = {
      tier: 'TIER C',
      pill: 'TRICKY STRUCTURE',
      title: 'Desafio Técnico de Execução',
      desc: 'Muitos vazios negativos ou letras leves. Adicione adornos geométricos para fechar o bloco.'
    };
  }

  return {
    raw,
    finalScore,
    band,
    stats: {
      flow: normalizedFlow,
      speed: normalizedSpeed,
      weight: normalizedWeight,
      space: normalizedSpace
    },
    letterDetails,
    tips
  };
}

/**
 * Update Letter Science UI
 */
function updateLetterScienceUI() {
  const analysis = analyzeTag(state.text);
  if (!analysis) return;

  // Quick banner updates
  document.getElementById('quickScoreVal').textContent = analysis.finalScore;
  document.getElementById('quickTierVal').textContent = analysis.band.tier;
  document.getElementById('quickVerdictTitle').textContent = analysis.band.title;
  document.getElementById('quickVerdictDesc').textContent = analysis.band.desc;

  // Main Section Score Ring
  document.getElementById('metricFinalScore').textContent = analysis.finalScore;
  document.getElementById('scoreRatingPill').textContent = analysis.band.pill;
  document.getElementById('scoreVerdictTitle').textContent = analysis.band.title;
  document.getElementById('scoreVerdictSummary').textContent = analysis.band.desc;

  // SVG Progress Ring calculation (radius 50 -> circumference = 2 * PI * 50 = 314.159)
  const ringProgress = document.getElementById('scoreRingProgress');
  const circumference = 314;
  const offset = circumference - (analysis.finalScore / 100) * circumference;
  ringProgress.style.strokeDashoffset = offset;

  // Detailed Stats Bars
  document.getElementById('statFlowVal').textContent = `${analysis.stats.flow}%`;
  document.getElementById('statFlowBar').style.width = `${analysis.stats.flow}%`;

  document.getElementById('statSpeedVal').textContent = `${analysis.stats.speed}%`;
  document.getElementById('statSpeedBar').style.width = `${analysis.stats.speed}%`;

  document.getElementById('statWeightVal').textContent = `${analysis.stats.weight}%`;
  document.getElementById('statWeightBar').style.width = `${analysis.stats.weight}%`;

  document.getElementById('statSpaceVal').textContent = `${analysis.stats.space}%`;
  document.getElementById('statSpaceBar').style.width = `${analysis.stats.space}%`;

  // Tips list
  const tipsList = document.getElementById('tipsList');
  tipsList.innerHTML = '';
  analysis.tips.forEach(t => {
    const li = document.createElement('li');
    li.innerHTML = t.text;
    tipsList.appendChild(li);
  });

  // Letter by Letter Cards Grid
  const letterGrid = document.getElementById('letterCardsGrid');
  letterGrid.innerHTML = '';

  analysis.letterDetails.forEach(l => {
    const card = document.createElement('div');
    card.className = 'letter-card';

    const pillClass = `tier-pill-${l.tier.toLowerCase()}`;

    card.innerHTML = `
      <div class="letter-card-header">
        <span class="letter-big-char">${l.char}</span>
        <span class="letter-tier-pill ${pillClass}">TIER ${l.tier}</span>
      </div>
      <div class="letter-type-tag">${l.type}</div>
      <p class="letter-card-desc">${l.desc}</p>
    `;

    letterGrid.appendChild(card);
  });
}

// ==========================================================================
// 6. INTERACTIVE SPRAY CAN (Drawing on wall)
// ==========================================================================

function getCanvasCoordinates(e) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  const clientX = e.clientX || (e.touches && e.touches[0].clientX);
  const clientY = e.clientY || (e.touches && e.touches[0].clientY);

  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY
  };
}

function sprayPaintAt(x, y) {
  const density = 35;
  const radius = 22;

  sprayCtx.save();
  for (let i = 0; i < density; i++) {
    const r = Math.random() * radius;
    const theta = Math.random() * 2 * Math.PI;
    const px = x + r * Math.cos(theta);
    const py = y + r * Math.sin(theta);

    // Alpha decreases toward edge
    const alpha = (1 - (r / radius)) * 0.45;
    sprayCtx.fillStyle = state.fillColor;
    sprayCtx.globalAlpha = alpha;
    sprayCtx.fillRect(px, py, 1.8, 1.8);
  }
  sprayCtx.restore();

  renderCanvas();
}

function setupSprayInteraction() {
  const onStart = (e) => {
    state.isSpraying = true;
    audio.playSpraySound(true);
    const coords = getCanvasCoordinates(e);
    sprayPaintAt(coords.x, coords.y);
  };

  const onMove = (e) => {
    if (!state.isSpraying) return;
    const coords = getCanvasCoordinates(e);
    sprayPaintAt(coords.x, coords.y);
  };

  const onEnd = () => {
    if (state.isSpraying) {
      state.isSpraying = false;
      audio.playSpraySound(false);
    }
  };

  canvas.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);

  // Touch Support for mobile & tablets
  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    onStart(e);
  }, { passive: false });

  window.addEventListener('touchmove', (e) => {
    if (state.isSpraying) {
      e.preventDefault();
      onMove(e);
    }
  }, { passive: false });

  window.addEventListener('touchend', onEnd);
}

// ==========================================================================
// 7. EVENT LISTENERS & UI BINDINGS
// ==========================================================================

function initApp() {
  const tagInput = document.getElementById('tagInput');
  const charCount = document.getElementById('charCount');

  // Input change
  tagInput.addEventListener('input', (e) => {
    const val = e.target.value.toUpperCase();
    state.text = val;
    charCount.textContent = `${val.length}/16`;
    renderCanvas();
    updateLetterScienceUI();
  });

  // Style buttons
  const styleBtns = document.querySelectorAll('.style-btn');
  styleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      styleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.style = btn.dataset.style;
      audio.playMarbleClack();
      renderCanvas();
    });
  });

  // Surface selector
  const surfaceBtns = document.querySelectorAll('.surface-btn');
  surfaceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      surfaceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.surface = btn.dataset.surface;
      audio.playMarbleClack();
      renderCanvas();
    });
  });

  // Color preset dots
  const colorDots = document.querySelectorAll('.color-dot');
  colorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      colorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      state.fillColor = dot.dataset.fill;
      state.outlineColor = dot.dataset.outline;
      state.shadowColor = dot.dataset.shadow;

      document.getElementById('fillColorPicker').value = state.fillColor;
      document.getElementById('outlineColorPicker').value = state.outlineColor;
      document.getElementById('shadowColorPicker').value = state.shadowColor;

      audio.playMarbleClack();
      renderCanvas();
    });
  });

  // Color Pickers
  document.getElementById('fillColorPicker').addEventListener('input', (e) => {
    state.fillColor = e.target.value;
    renderCanvas();
  });
  document.getElementById('outlineColorPicker').addEventListener('input', (e) => {
    state.outlineColor = e.target.value;
    renderCanvas();
  });
  document.getElementById('shadowColorPicker').addEventListener('input', (e) => {
    state.shadowColor = e.target.value;
    renderCanvas();
  });

  // Sliders
  const fontRange = document.getElementById('fontSizeRange');
  fontRange.addEventListener('input', (e) => {
    state.fontSize = parseInt(e.target.value, 10);
    document.getElementById('fontSizeVal').textContent = `${state.fontSize}px`;
    renderCanvas();
  });

  const dripRange = document.getElementById('dripAmountRange');
  dripRange.addEventListener('input', (e) => {
    state.dripsAmount = parseInt(e.target.value, 10);
    const label = state.dripsAmount === 0 ? 'Nenhum' : (state.dripsAmount > 15 ? 'Muito Pesado' : 'Médio');
    document.getElementById('dripAmountVal').textContent = label;
    renderCanvas();
  });

  const slantRange = document.getElementById('slantRange');
  slantRange.addEventListener('input', (e) => {
    state.slant = parseInt(e.target.value, 10);
    document.getElementById('slantVal').textContent = `${state.slant}°`;
    renderCanvas();
  });

  // Addons Checkboxes
  const addonIds = ['chkCrown', 'chkHalo', 'chkArrow', 'chkQuotes', 'chkUnderline', 'chkYear'];
  addonIds.forEach(id => {
    const el = document.getElementById(id);
    const key = id.replace('chk', '').toLowerCase();
    el.addEventListener('change', () => {
      state.addons[key] = el.checked;
      renderCanvas();
    });
  });

  // Random Tag Button
  document.getElementById('btnRandomTag').addEventListener('click', () => {
    const randomName = RANDOM_TAGS[Math.floor(Math.random() * RANDOM_TAGS.length)];
    state.text = randomName;
    tagInput.value = randomName;
    charCount.textContent = `${randomName.length}/16`;
    audio.playMarbleClack();
    renderCanvas();
    updateLetterScienceUI();
  });

  // Clear Spray Marks
  document.getElementById('btnClearSpray').addEventListener('click', () => {
    sprayCtx.clearRect(0, 0, state.sprayLayer.width, state.sprayLayer.height);
    renderCanvas();
  });

  // Sound Toggle
  const btnSound = document.getElementById('btnSoundToggle');
  btnSound.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    document.getElementById('soundIcon').textContent = state.soundEnabled ? '🔊' : '🔇';
    btnSound.title = state.soundEnabled ? 'Som do Spray: Ativado' : 'Som do Spray: Mudo';
  });

  // Export Full HD Image
  document.getElementById('btnDownloadFull').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = `VANDAL-LAB-${state.text.toLowerCase()}-muro.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

  // Export Sticker (Transparent PNG)
  document.getElementById('btnDownloadSticker').addEventListener('click', () => {
    const prevSurface = state.surface;
    state.surface = 'clean';
    renderCanvas();

    const link = document.createElement('a');
    link.download = `VANDAL-LAB-${state.text.toLowerCase()}-sticker.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    state.surface = prevSurface;
    renderCanvas();
  });

  // Setup spray can interactions
  setupSprayInteraction();

  // Initial draw & analysis
  renderCanvas();
  updateLetterScienceUI();
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
