
import {
  DiagnosticarRequest,
  DiagnosticarResponse,
} from '../types/plantexpert';

const REGLAS = [
  {
    causa: 'alternariosis',
    hechos: ['manchas_marrones', 'anillos_concentricos'],
    id: 'R1_ALT',
  },
  {
    causa: 'oidio',
    hechos: ['manchas_amarillas', 'crecimiento_blanco_enves'],
    id: 'R2_OID',
  },
  {
    causa: 'mildiu_tardio',
    hechos: ['lesiones_irregulares_acuosas', 'crecimiento_blanco_enves'],
    id: 'R3_MIL_1',
  },
  {
    causa: 'mildiu_tardio',
    hechos: [
      'lesiones_irregulares_acuosas',
      'avance_rapido',
      'tiempo_reciente_humedo',
    ],
    id: 'R3_MIL_2',
  },
  {
    causa: 'mancha_bacteriana',
    hechos: ['manchas_pequenas_oscuras', 'halo_amarillo'],
    id: 'R4_BAC_1',
  },
  {
    causa: 'mancha_bacteriana',
    hechos: ['lesiones_fruto_asperas_oscuras'],
    id: 'R4_BAC_2',
  },
  {
    causa: 'estres_por_falta_de_agua',
    hechos: ['marchitez', 'suelo_seco'],
    id: 'R5_SEQ',
  },
  {
    causa: 'posible_exceso_de_agua_o_problema_radicular',
    hechos: ['marchitez', 'suelo_encharcado'],
    id: 'R6_EXC',
  },
  {
    causa: 'problema_nutricional_a_investigar',
    hechos: ['amarilleo', 'patron_amarilleo_entre_hojas'],
    id: 'R7_NUT',
  },
];

const NOMBRES: Record<string, string> = {
  alternariosis: 'Alternariosis o tizón temprano',
  oidio: 'Oídio',
  mildiu_tardio: 'Mildiu tardío',
  mancha_bacteriana: 'Mancha bacteriana',
  estres_por_falta_de_agua: 'Posible estrés por falta de agua',
  posible_exceso_de_agua_o_problema_radicular:
    'Posible exceso de agua o problema radicular',
  problema_nutricional_a_investigar:
    'Posible problema nutricional',
};

export function diagnosticarLocal(
  datos: DiagnosticarRequest
): DiagnosticarResponse {
  const hechos = new Set(datos.si);

  const pendientes = [
    ...new Set([
      ...datos.desconocidos,
      ...datos.no_comprobados,
    ]),
  ];

  if (
    hechos.has('suelo_seco') &&
    hechos.has('suelo_encharcado')
  ) {
    return {
      estado: 'respuestas_incompatibles',
      hipotesis: [],
      conflictos: [
        'El suelo aparece como seco y encharcado al mismo tiempo.',
      ],
      aviso: 'Revisa las respuestas sobre la humedad del suelo.',
    };
  }

  const agrupadas = new Map<
    string,
    {
      causa: string;
      nombre_comun: string;
      reglas_ids: string[];
      requisitos_cumplidos: string[];
    }
  >();

  for (const regla of REGLAS) {
    const coincide = regla.hechos.every((hecho) =>
      hechos.has(hecho)
    );

    if (coincide) {
      if (!agrupadas.has(regla.causa)) {
        agrupadas.set(regla.causa, {
          causa: regla.causa,
          nombre_comun: NOMBRES[regla.causa] || regla.causa,
          reglas_ids: [],
          requisitos_cumplidos: [],
        });
      }

      const hipotesis = agrupadas.get(regla.causa)!;

      if (!hipotesis.reglas_ids.includes(regla.id)) {
        hipotesis.reglas_ids.push(regla.id);
      }

      for (const hecho of regla.hechos) {
        if (!hipotesis.requisitos_cumplidos.includes(hecho)) {
          hipotesis.requisitos_cumplidos.push(hecho);
        }
      }
    }
  }

  const hipotesis = Array.from(agrupadas.values());

  if (hipotesis.length > 0) {
    return {
      estado:
        hipotesis.length > 1
          ? 'diagnostico_diferencial'
          : 'hipotesis_generada',
      hipotesis,
      datos_pendientes: pendientes,
      aviso:
        'El resultado es orientativo y debe comprobarse con la planta.',
    };
  }

  if (pendientes.length > 0) {
    return {
      estado: 'informacion_insuficiente',
      hipotesis: [],
      datos_pendientes: pendientes,
      aviso:
        'Faltan datos para activar alguna de las reglas disponibles.',
    };
  }

  return {
    estado: 'ninguna_regla_encaja',
    hipotesis: [],
    datos_pendientes: [],
    aviso:
      'Ninguna regla disponible coincide con los síntomas indicados.',
  };
}

