import MSV from '../assets/msv.png'
import HOF from '../assets/hof.png'
import TOESS from '../assets/toess.png'

const raidProgress = [
  {
    name: 'Cámaras Mogushan',
    img:
    modalidad: [
      {
        type: 'NORMAL',
        bosses: [
          'La guardia de piedra',
          'Feng el Detestable',
          `Gara'jal`,
          'Los Reyes Espíritu',
          'Elegon',
          'Voluntad del Emperador',
        ],
        defeated: [1, 1, 1, 1, 1, 1],
      },
      {
        type: 'HEROÍCO',
        bosses: [
          'La guardia de piedra',
          'Feng el Detestable',
          `Gara'jal`,
          'Los Reyes Espíritu',
          'Elegon',
          'Voluntad del Emperador',
        ],
        defeated: [1, 1, 1, 0, 1, 0],
      },
    ],
  },
  {
    name: 'Corazón del Miedo',
    modalidad: [
      {
        type: 'NORMAL',
        bosses: [
          `Visir imperial Zor'lok`,
          `Ta'yak`,
          `Garalon`,
          `Señor del viento Mel'jarak`,
          `Formador de ámbar Un'sok`,
          `Gran emperatriz Shek'zeer`,
        ],
        defeated: [1, 1, 1, 1, 1, 1],
      },
      {
        type: 'HEROÍCO',
        bosses: [
          `Visir imperial Zor'lok`,
          `Ta'yak`,
          `Garalon`,
          `Señor del viento Mel'jarak`,
          `Formador de ámbar Un'sok`,
          `Gran emperatriz Shek'zeer`,
        ],
        defeated: [0, 1, 0, 0, 0, 0],
      },
    ],
  },
  {
    name: 'Veranda de la Primavera Eterna',
    modalidad: [
      {
        type: 'NORMAL',
        bosses: [
          `Protectores de la Eternidad`,
          `Tsulong`,
          `Lei Shi`,
          `Sha del miedo`,
        ],
        defeated: [1, 1, 1, 1],
      },
      {
        type: 'HEROÍCO',
        bosses: [
          `Protectores de la Eternidad`,
          `Tsulong`,
          `Lei Shi`,
          `Sha del miedo`,
        ],
        defeated: [0, 0, 0, 0],
      },
    ],
  },
];

export { raidProgress };
