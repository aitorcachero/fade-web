import MSV from '../assets/msv.webp';
import HOF from '../assets/hof.webp';
import TOESS from '../assets/toess.webp';
import TOT from '../assets/tot.webp';
import SOO from '../assets/soo.webp';

const raidProgress = [
  {
    id: 1,
    name: 'Cámaras Mogushan',
    img: MSV,
    modalidad: [
      {
        raid: 'Cámaras Mogushan',
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
        raid: 'Cámaras Mogushan',
        type: 'HEROÍCO',
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
    ],
  },
  {
    id: 2,
    name: 'Corazón del Miedo',
    img: HOF,
    modalidad: [
      {
        raid: 'Corazón del Miedo',
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
        raid: 'Corazón del Miedo',
        type: 'HEROÍCO',
        bosses: [
          `Visir imperial Zor'lok`,
          `Ta'yak`,
          `Garalon`,
          `Señor del viento Mel'jarak`,
          `Formador de ámbar Un'sok`,
          `Gran emperatriz Shek'zeer`,
        ],
        defeated: [1, 1, 1, 1, 0, 0],
      },
    ],
  },
  {
    id: 3,
    name: 'Veranda de la Primavera Eterna',
    img: TOESS,
    modalidad: [
      {
        raid: 'Veranda de la Primavera Eterna',
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
        raid: 'Veranda de la Primavera Eterna',
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
  {
    id: 4,
    name: 'Solio del Trueno',
    img: TOT,
    modalidad: [
      {
        raid: 'Solio del Trueno',
        type: 'NORMAL',
        bosses: [
          `Jin'rokh el Rompedor`,
          `Horridonte`,
          `El Consejo de Ancianos`,
          `Tortos`,
          `Megaera`,
          `Ji-kun`,
          `Durumu`,
          `Primordius`,
          `Animus Oscuro`,
          `Qon el Tenaz`,
          `Consortes Gemelas`,
          `Lei Shen`,
        ],
        defeated: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
      {
        raid: 'Solio del Trueno',
        type: 'HEROÍCO',
        bosses: [
          `Jin'rokh el Rompedor`,
          `Horridonte`,
          `El Consejo de Ancianos`,
          `Tortos`,
          `Megaera`,
          `Ji-kun`,
          `Durumu`,
          `Primordius`,
          `Animus Oscuro`,
          `Qon el Tenaz`,
          `Consortes Gemelas`,
          `Lei Shen`,
          `Ra-Den`,
        ],
        defeated: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  },
  {
    id: 5,
    name: 'Asedio de Orgrimmar',
    img: SOO,
    modalidad: [
      {
        raid: 'Asedio de Orgrimmar',
        type: 'NORMAL',
        bosses: [
          `Immerseus`,
          `Los protectores caídos`,
          `Norushen`,
          `Sha del orgullo`,
          `Galakras`,
          `Gigante férreo`,
          `Chamanes oscuros Kor'kron`,
          `General Nazgrim`,
          `Malkorok`,
          `Botín de Pandaria`,
          `Thok el Sanguinario`,
          `Asediador Mechanegra`,
          `Dechados de los Klaxxi`,
          `Garrosh Grito Infernal`,
        ],
        defeated: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        raid: 'Asedio de Orgrimmar',
        type: 'HEROÍCO',
        bosses: [
          `Immerseus`,
          `Los protectores caídos`,
          `Norushen`,
          `Sha del orgullo`,
          `Galakras`,
          `Gigante férreo`,
          `Chamán oscuro Kor'kron`,
          `General Nazgrim`,
          `Malkorok`,
          `Botín de Pandaria`,
          `Thok el Sanguinario`,
          `Asediador Mechanegra`,
          `Dechados de los Klaxxi`,
          `Garrosh Grito Infernal`,
        ],
        defeated: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  },
];

export { raidProgress };
