const ENUM_CLASS = [
  {
    id: 1,
    class: 'Caballero de la muerte',
    specs: [
      {
        nombre: 'Frost',
        type: 'dps',
        priority: 'dkfrost',
      },
      {
        nombre: 'Profano',
        type: 'dps',
        priority: 'dkunholy',
      },
      {
        nombre: 'Sangre',
        type: 'dps',
        priority: 'dkblood',
      },
    ],
    color: '#C41F3B',
    page: '/dk',
  },
  {
    id: 2,
    class: 'Druida',
    specs: [
      {
        nombre: 'Equilibrio',
        type: 'dps',
        priority: 'doodelemental',
      },
      {
        nombre: 'Feral',
        type: 'dps',
        priority: 'doodferal',
      },
      {
        nombre: 'Guardian',
        type: 'tank',
        priority: 'doodtank',
      },
      {
        nombre: 'Equilibrio',
        type: 'heal',
        priority: 'doodheal',
      },
    ],
    color: '#FF7C0A',
    page: '/druida',
  },
  {
    id: 3,
    class: 'Cazador',
    specs: [
      {
        nombre: 'Bestias',
        type: 'dps',
        priority: 'hunterbeast',
      },
      {
        nombre: 'Punteria',
        type: 'dps',
        priority: 'hunterpunteria',
      },
      {
        nombre: 'Supervivencia',
        type: 'dps',
        priority: 'huntersurvival',
      },
    ],
    color: '#AAD372',
    page: '/cazador',
  },
  {
    id: 4,
    class: 'Mago',
    specs: [
      {
        nombre: 'Arcano',
        type: 'dps',
        priority: 'magearcane',
      },
      {
        nombre: 'Frost',
        type: 'dps',
        priority: 'magefrost',
      },
      {
        nombre: 'Fuego',
        type: 'dps',
        priority: 'magefire',
      },
    ],
    color: '#3FC7EB',
    page: '/mago',
  },
  {
    id: 5,
    class: 'Monje',
    color: '#00FF98',
    specs: [
      {
        nombre: 'Maestro cervecero',
        type: 'tank',
        priority: 'monktank',
      },
      {
        nombre: 'Tejedor de niebla',
        type: 'heal',
        priority: 'monkheal',
      },
      {
        nombre: 'Viajero del tiempo',
        type: 'dps',
        priority: 'monkdps',
      },
    ],
    page: '/monje',
  },
  {
    id: 6,
    class: 'Paladin',
    specs: [
      {
        nombre: 'Protección',
        type: 'tank',
        priority: 'palatank',
      },
      {
        nombre: 'Represión',
        type: 'dps',
        priority: 'paladps',
      },
      {
        nombre: 'Sagrado',
        type: 'heal',
        priority: 'palaholy',
      },
    ],
    color: '#F48CBA',
    page: '/paladin',
  },
  {
    id: 7,
    class: 'Sacerdote',
    specs: [
      {
        nombre: 'Disciplina',
        type: 'heal',
        priority: 'disci',
      },
      {
        nombre: 'Sagrado',
        type: 'heal',
        priority: 'priestholy',
      },
      {
        nombre: 'Sombras',
        type: 'dps',
        priority: 'shadow',
      },
    ],
    color: '#FFFFFF',
    page: '/sacerdote',
  },
  {
    id: 8,
    class: 'Pícaro',
    specs: [
      {
        nombre: 'Asesinato',
        type: 'dps',
        priority: 'assasin',
      },
      {
        nombre: 'Combate',
        type: 'dps',
        priority: 'combat',
      },
      {
        nombre: 'Sutileza',
        type: 'dps',
        priority: 'sublety',
      },
    ],
    color: '#FFF468',
    page: '/picaro',
  },
  {
    id: 9,
    class: 'Chamán',
    specs: [
      {
        nombre: 'Elemental',
        type: 'dps',
        priority: 'shamanelemental',
      },
      {
        nombre: 'Mejora',
        type: 'dps',
        priority: 'shamanenhancement',
      },
      {
        nombre: 'Restauración',
        type: 'heal',
        priority: 'shamanheal',
      },
    ],
    color: '#0070DD',
    page: '/chaman',
  },
  {
    id: 10,
    class: 'Brujo',
    specs: [
      {
        nombre: 'Afflición',
        type: 'dps',
        priority: 'affliction',
      },
      {
        nombre: 'Demonología',
        type: 'dps',
        priority: 'demonology',
      },
      {
        nombre: 'Destrucción',
        type: 'dps',
        priority: 'destruction',
      },
    ],
    color: '#8788EE',
    page: '/brujo',
  },
  {
    id: 11,
    class: 'Guerrero',
    specs: [
      {
        nombre: 'Armas',
        type: 'dps',
        priority: 'arms',
      },
      {
        nombre: 'Furia',
        type: 'dps',
        priority: 'fury',
      },
      {
        nombre: 'Protección',
        type: 'dps',
        priority: 'protect',
      },
    ],
    color: '#C69B6D',
    page: '/guerrero',
  },
];

export { ENUM_CLASS };
