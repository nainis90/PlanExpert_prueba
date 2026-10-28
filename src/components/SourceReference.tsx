import React, { useState } from 'react';
import {
  BookOpen,
  GraduationCap,
  ExternalLink,
  Search,
  Check,
  Copy,
  Microscope,
  Scale,
  Cpu,
  BookmarkCheck,
  Layers
} from 'lucide-react';

export interface AcademicReference {
  id: string;
  autores: string;
  anio: number;
  titulo: string;
  editorialORevista: string;
  categoria: 'fitopatologia' | 'normativa' | 'sistemas_expertos' | 'extension_agraria';
  categoriaEtiqueta: string;
  contribucionSistema: string;
  reglasVinculadas: string[];
  url?: string;
  isbnODoi?: string;
}

export const BIBLIOGRAPHIC_SOURCES: AcademicReference[] = [
  {
    id: 'agrios-2005',
    autores: 'Agrios, George N.',
    anio: 2005,
    titulo: 'Plant Pathology (5th Edition)',
    editorialORevista: 'Academic Press / Elsevier, Burlington, MA',
    categoria: 'fitopatologia',
    categoriaEtiqueta: 'Fitopatología Clásica',
    contribucionSistema:
      'Proporciona el marco etiológico diferencial para Alternaria solani (anillos concéntricos necróticos en hojas basales) y Phytophthora infestans (lesiones aceitosas de rápida expansión bajo rocío).',
    reglasVinculadas: ['Alternaria solani', 'Phytophthora infestans'],
    isbnODoi: 'ISBN: 978-0-12-044565-3',
    url: 'https://www.elsevier.com/books/plant-pathology/agrios/978-0-12-044565-3',
  },
  {
    id: 'aps-tomato-2014',
    autores: 'Jones, J. B., Zitter, T. A., Momol, T. M., & Miller, S. A.',
    anio: 2014,
    titulo: 'Compendium of Tomato Diseases and Pests (Second Edition)',
    editorialORevista: 'The American Phytopathological Society (APS Press), St. Paul, MN',
    categoria: 'fitopatologia',
    categoriaEtiqueta: 'Compendio Fitosanitario',
    contribucionSistema:
      'Referencia taxonómica primordial para la discriminación clínica entre Xanthomonas spp. (mancha bacteriana con halos amarillos) y oídios de solanáceas (Oidium neolycopersici).',
    reglasVinculadas: ['Xanthomonas spp.', 'Oidio neolycopersici'],
    isbnODoi: 'ISBN: 978-0-89054-424-2',
    url: 'https://my.apsnet.org/APSStore/Product-Detail.aspx?WebsiteKey=2661527A-8D44-496C-A730-8CFEB6239BE7&iProductCode=44242',
  },
  {
    id: 'rd-1311-2012',
    autores: 'Ministerio de Agricultura, Pesca y Alimentación (MAPA) & UE',
    anio: 2012,
    titulo: 'Real Decreto 1311/2012 y Directiva Comunitaria 2009/128/CE',
    editorialORevista: 'Boletín Oficial del Estado (BOE núm. 223 / DOCE L 309)',
    categoria: 'normativa',
    categoriaEtiqueta: 'Marco Normativo & GIP',
    contribucionSistema:
      'Fundamento del principio ético del motor: prohibición de prescripción de químicos sintéticos de síntesis y obligatoriedad de medidas preventivas, culturales y biológicas de Gestión Integrada de Plagas.',
    reglasVinculadas: ['Protocolo ético GIP', 'Módulo de recomendaciones'],
    isbnODoi: 'BOE-A-2012-11607',
    url: 'https://www.boe.es/eli/es/rd/2012/09/14/1311/con',
  },
  {
    id: 'fao-ispm-2021',
    autores: 'FAO / IPPC (Secretaría de la Convención Internacional de Protección Fitosanitaria)',
    anio: 2021,
    titulo: 'International Standards for Phytosanitary Measures (ISPM 4 & ISPM 11): Pest Risk Analysis',
    editorialORevista: 'Organización de las Naciones Unidas para la Alimentación y la Agricultura, Roma',
    categoria: 'normativa',
    categoriaEtiqueta: 'Estándares Internacionales',
    contribucionSistema:
      'Metodología estandarizada para evaluar el riesgo biológico fitosanitario y la formalización de síntomas concluyentes frente a síntomas orientativos o sospechosos.',
    reglasVinculadas: ['Validación de premisas', 'Umbrales de intervención'],
    url: 'https://www.ippc.int/en/core-activities/standards-setting/ispms/',
  },
  {
    id: 'russell-norvig-2020',
    autores: 'Russell, Stuart & Norvig, Peter',
    anio: 2020,
    titulo: 'Artificial Intelligence: A Modern Approach (4th Edition) — Cap. 7-9: Knowledge Representation & Logic',
    editorialORevista: 'Pearson Education, Hoboken, NJ',
    categoria: 'sistemas_expertos',
    categoriaEtiqueta: 'Sistemas Expertos & IA',
    contribucionSistema:
      'Fundamentos teóricos del motor de inferencia: cláusulas de Horn, resolución SLD, encadenamiento hacia adelante (forward chaining) y encadenamiento hacia atrás (backward chaining) determinista.',
    reglasVinculadas: ['Motor Prolog responder/4', 'Auditoría hacia atrás'],
    isbnODoi: 'ISBN: 978-0-13-461099-3',
    url: 'https://aima.cs.berkeley.edu/',
  },
  {
    id: 'clocksin-mellish-2003',
    autores: 'Clocksin, William F. & Mellish, Christopher S.',
    anio: 2003,
    titulo: 'Programming in Prolog: Using the ISO Standard (5th Edition)',
    editorialORevista: 'Springer-Verlag, Berlín / Heidelberg',
    categoria: 'sistemas_expertos',
    categoriaEtiqueta: 'Programación Lógica',
    contribucionSistema:
      'Patrones de implementación de sistemas de diagnóstico con unificación formal, corte (cut !), gestión de hipótesis desconocidas y consistencia de base de hechos.',
    reglasVinculadas: ['Hechos/3', 'Reglas deductivas'],
    isbnODoi: 'DOI: 10.1007/978-3-642-55481-0',
  },
  {
    id: 'uc-ipm-tomato-2023',
    autores: 'University of California Agriculture and Natural Resources',
    anio: 2023,
    titulo: 'UC IPM Pest Management Guidelines: Tomato (UC ANR Publication 3470)',
    editorialORevista: 'Statewide Integrated Pest Management Program, Davis, CA',
    categoria: 'extension_agraria',
    categoriaEtiqueta: 'Extensión Universitaria',
    contribucionSistema:
      'Guías clínicas de campo para identificación diferencial de oídio foliar, mildiu tardío y trastornos abióticos (asfixia radicular vs. déficit de riego).',
    reglasVinculadas: ['Asfixia radicular', 'Déficit hídrico', 'Oídio foliar'],
    url: 'https://ipm.ucanr.edu/agriculture/tomato/',
  },
  {
    id: 'neiker-sanidad-2022',
    autores: 'Instituto Vasco de Investigación y Desarrollo Agrario (NEIKER) & Dpto. de Desarrollo Económico y Sostenibilidad',
    anio: 2022,
    titulo: 'Guías de Buenas Prácticas Agrícolas y Sanidad Vegetal en Huerta Cantábrica',
    editorialORevista: 'Servicio de Sanidad Vegetal del Gobierno Vasco, Vitoria-Gasteiz',
    categoria: 'extension_agraria',
    categoriaEtiqueta: 'Contexto Atlántico Euskadi',
    contribucionSistema:
      'Parámetros climáticos específicos para la vertiente atlántica (humedades >85%, sirimiri persistente, marcos de ventilación 80-100 cm y entutorado alto anti-salpicaduras).',
    reglasVinculadas: ['Climatología Euskadi', 'Medidas culturales preventivas'],
    url: 'https://www.neiker.eus/',
  },
];

type CategoryFilter = 'todas' | 'fitopatologia' | 'normativa' | 'sistemas_expertos' | 'extension_agraria';

export const SourceReference: React.FC = () => {
  const [filtroCategoria, setFiltroCategoria] = useState<CategoryFilter>('todas');
  const [terminoBusqueda, setTerminoBusqueda] = useState<string>('');
  const [idCopiado, setIdCopiado] = useState<string | null>(null);

  const fuentesFiltradas = BIBLIOGRAPHIC_SOURCES.filter((fuente) => {
    const coincideCategoria = filtroCategoria === 'todas' || fuente.categoria === filtroCategoria;
    const busqueda = terminoBusqueda.toLowerCase().trim();
    if (!busqueda) return coincideCategoria;

    const coincideTexto =
      fuente.autores.toLowerCase().includes(busqueda) ||
      fuente.titulo.toLowerCase().includes(busqueda) ||
      fuente.editorialORevista.toLowerCase().includes(busqueda) ||
      fuente.contribucionSistema.toLowerCase().includes(busqueda) ||
      fuente.reglasVinculadas.some((r) => r.toLowerCase().includes(busqueda)) ||
      fuente.categoriaEtiqueta.toLowerCase().includes(busqueda);

    return coincideCategoria && coincideTexto;
  });

  const copiarCita = (fuente: AcademicReference) => {
    const citaTexto = `${fuente.autores} (${fuente.anio}). ${fuente.titulo}. ${fuente.editorialORevista}.`;
    navigator.clipboard.writeText(citaTexto);
    setIdCopiado(fuente.id);
    setTimeout(() => setIdCopiado(null), 2000);
  };

  const getIconoCategoria = (cat: AcademicReference['categoria']) => {
    switch (cat) {
      case 'fitopatologia':
        return <Microscope className="w-3.5 h-3.5 text-[#2D5A46]" aria-hidden="true" />;
      case 'normativa':
        return <Scale className="w-3.5 h-3.5 text-[#8C3E14]" aria-hidden="true" />;
      case 'sistemas_expertos':
        return <Cpu className="w-3.5 h-3.5 text-[#1D3B2F]" aria-hidden="true" />;
      case 'extension_agraria':
        return <GraduationCap className="w-3.5 h-3.5 text-[#52796F]" aria-hidden="true" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Header section with botanical banner */}
      <div className="bg-[#FAFBF7] border border-[#52796F]/20 rounded-xl p-4 sm:p-5 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider bg-[#E8ECE2] text-[#1D3B2F] px-2 py-0.5 rounded font-semibold border border-[#52796F]/25">
                <BookmarkCheck className="w-3 h-3 text-[#2D5A46]" aria-hidden="true" />
                Indexación Académica & Fitosanitaria
              </span>
              <span className="text-[11px] font-mono text-[#52796F]">
                {BIBLIOGRAPHIC_SOURCES.length} referencias revisadas
              </span>
            </div>
            <h3 className="font-serif font-bold text-[#1D3B2F] text-base sm:text-lg">
              Fuentes Bibliográficas y Evidencia Científica
            </h3>
            <p className="text-xs text-[#465E55] max-w-2xl leading-relaxed">
              El corpus deductivo de PlantExpert Enterprise se fundamenta en compendios fitopatológicos internacionales,
              la normativa europea de Gestión Integrada de Plagas (GIP) y la literatura canónica de sistemas de inferencia formal.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 bg-white/80 border border-[#52796F]/20 rounded-lg px-3 py-2">
            <Layers className="w-4 h-4 text-[#2D5A46]" aria-hidden="true" />
            <div className="text-[11px] leading-tight">
              <span className="font-bold text-[#1D3B2F] block">Peer-Reviewed & Oficial</span>
              <span className="text-[#52796F] text-[10px]">Sin heurísticas no fundamentadas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and search bar */}
      <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 text-xs font-medium">
          <button
            type="button"
            onClick={() => setFiltroCategoria('todas')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer text-xs ${
              filtroCategoria === 'todas'
                ? 'bg-[#1D3B2F] text-white shadow-xs'
                : 'bg-[#FAFBF7] border border-[#52796F]/20 text-[#465E55] hover:bg-[#F0F2EB] hover:text-[#1D3B2F]'
            }`}
          >
            Todas ({BIBLIOGRAPHIC_SOURCES.length})
          </button>
          <button
            type="button"
            onClick={() => setFiltroCategoria('fitopatologia')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 text-xs ${
              filtroCategoria === 'fitopatologia'
                ? 'bg-[#1D3B2F] text-white shadow-xs'
                : 'bg-[#FAFBF7] border border-[#52796F]/20 text-[#465E55] hover:bg-[#F0F2EB] hover:text-[#1D3B2F]'
            }`}
          >
            <Microscope className="w-3 h-3" aria-hidden="true" />
            Fitopatología
          </button>
          <button
            type="button"
            onClick={() => setFiltroCategoria('normativa')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 text-xs ${
              filtroCategoria === 'normativa'
                ? 'bg-[#1D3B2F] text-white shadow-xs'
                : 'bg-[#FAFBF7] border border-[#52796F]/20 text-[#465E55] hover:bg-[#F0F2EB] hover:text-[#1D3B2F]'
            }`}
          >
            <Scale className="w-3 h-3" aria-hidden="true" />
            Normativa & GIP
          </button>
          <button
            type="button"
            onClick={() => setFiltroCategoria('sistemas_expertos')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 text-xs ${
              filtroCategoria === 'sistemas_expertos'
                ? 'bg-[#1D3B2F] text-white shadow-xs'
                : 'bg-[#FAFBF7] border border-[#52796F]/20 text-[#465E55] hover:bg-[#F0F2EB] hover:text-[#1D3B2F]'
            }`}
          >
            <Cpu className="w-3 h-3" aria-hidden="true" />
            Sistemas Expertos & IA
          </button>
          <button
            type="button"
            onClick={() => setFiltroCategoria('extension_agraria')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 text-xs ${
              filtroCategoria === 'extension_agraria'
                ? 'bg-[#1D3B2F] text-white shadow-xs'
                : 'bg-[#FAFBF7] border border-[#52796F]/20 text-[#465E55] hover:bg-[#F0F2EB] hover:text-[#1D3B2F]'
            }`}
          >
            <GraduationCap className="w-3 h-3" aria-hidden="true" />
            Extensión Agraria
          </button>
        </div>

        {/* Search input */}
        <div className="relative min-w-[200px] sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#52796F]" aria-hidden="true" />
          <input
            type="text"
            value={terminoBusqueda}
            onChange={(e) => setTerminoBusqueda(e.target.value)}
            placeholder="Buscar autor, patógeno..."
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#FAFBF7] border border-[#52796F]/20 rounded-md text-[#1D3B2F] placeholder-[#52796F]/60 focus:outline-none focus:border-[#1D3B2F] focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Sources list */}
      <div className="space-y-3">
        {fuentesFiltradas.length === 0 ? (
          <div className="p-8 text-center bg-[#FAFBF7] border border-dashed border-[#52796F]/30 rounded-lg text-xs text-[#52796F]">
            No se encontraron referencias que coincidan con los criterios de búsqueda.
          </div>
        ) : (
          fuentesFiltradas.map((fuente) => (
            <article
              key={fuente.id}
              className="group p-4 bg-[#FFFFFF] border border-[#52796F]/20 hover:border-[#1D3B2F]/40 rounded-xl transition-all shadow-xs hover:shadow-sm space-y-2.5 relative"
            >
              {/* Top metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#52796F]/10 pb-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold bg-[#FAFBF7] border border-[#52796F]/20 px-2 py-0.5 rounded text-[#1D3B2F]">
                    {getIconoCategoria(fuente.categoria)}
                    {fuente.categoriaEtiqueta}
                  </span>
                  <span className="text-[11px] font-mono text-[#52796F]">
                    Año {fuente.anio}
                  </span>
                  {fuente.isbnODoi && (
                    <span className="hidden sm:inline-block text-[10px] font-mono text-[#52796F]/80 bg-[#FAFBF7] px-1.5 py-0.5 rounded border border-[#52796F]/15">
                      {fuente.isbnODoi}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => copiarCita(fuente)}
                    title="Copiar cita bibliográfica en formato estándar"
                    className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-mono text-[#52796F] hover:text-[#1D3B2F] bg-[#FAFBF7] hover:bg-[#F0F2EB] border border-[#52796F]/20 rounded transition-colors cursor-pointer"
                  >
                    {idCopiado === fuente.id ? (
                      <>
                        <Check className="w-3 h-3 text-[#2D5A46]" aria-hidden="true" />
                        <span className="text-[#2D5A46] font-semibold">Copiada</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" aria-hidden="true" />
                        <span>Copiar cita</span>
                      </>
                    )}
                  </button>

                  {fuente.url && (
                    <a
                      href={fuente.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-mono text-[#1D3B2F] hover:bg-[#F0F2EB] bg-[#FAFBF7] border border-[#52796F]/20 rounded transition-colors"
                      title="Acceder al recurso o publicación oficial"
                    >
                      <span>Publicación</span>
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title and Authors */}
              <div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#1D3B2F] group-hover:text-[#2D5A46] transition-colors">
                  {fuente.titulo}
                </h4>
                <p className="text-xs text-[#52796F] mt-0.5">
                  <strong className="text-[#1D3B2F]">{fuente.autores}</strong> — <em>{fuente.editorialORevista}</em>
                </p>
              </div>

              {/* Contribution to Expert System */}
              <div className="bg-[#FAFBF7] border-l-2 border-[#2D5A46] pl-3 py-1.5 pr-2 rounded-r text-xs text-[#465E55] leading-relaxed">
                <span className="font-semibold text-[#1D3B2F]">Aporte al sistema deductivo: </span>
                {fuente.contribucionSistema}
              </div>

              {/* Applied Rules Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[10px] font-mono text-[#52796F] uppercase tracking-wider">
                  Patologías / Módulos:
                </span>
                {fuente.reglasVinculadas.map((regla, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono bg-[#E8ECE2]/70 text-[#1D3B2F] px-1.5 py-0.5 rounded border border-[#52796F]/20"
                  >
                    {regla}
                  </span>
                ))}
              </div>
            </article>
          ))
        )}
      </div>

      {/* Footer botanical note */}
      <div className="p-3 bg-[#FAFBF7] border border-[#52796F]/20 rounded-lg flex items-center justify-between text-[11px] text-[#52796F]">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#2D5A46] shrink-0" aria-hidden="true" />
          <span>
            Todas las reglas incorporadas al motor de inferencia SWI-Prolog están trazadas a referencias con validez agronómica.
          </span>
        </div>
      </div>
    </div>
  );
};
