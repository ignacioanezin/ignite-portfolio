/**
 * ui.ts — the single translation dictionary for the site's UI + page copy.
 *
 * Design: this is a client-side language layer (see BaseLayout's resolver
 * script). Strings are rendered in BOTH languages server-side via <T> and the
 * inactive one is hidden with CSS — so this dictionary is the source of truth
 * for every visible chrome/marketing string.
 *
 * Spanish is native Argentine / LATAM (voseo), premium and concise — not a
 * literal translation. Proper nouns (name, project & brand names, IG handle,
 * email) are never translated and live in site.ts / content, not here.
 */

export type Lang = 'en' | 'es';
export const LANGS: Lang[] = ['en', 'es'];
export const DEFAULT_LANG: Lang = 'en';

type Dict = Record<string, string>;

const en: Dict = {
  // Nav / chrome
  'nav.work': 'Work',
  'nav.about': 'About',
  'nav.services': 'Services',
  'nav.contact': 'Contact',
  'nav.blog': 'Blog',
  'nav.availability': 'Available for 2026 commissions',
  'nav.menu_open': 'Open menu',
  'nav.menu_close': 'Close menu',
  'common.language': 'Language',

  // Brand strings (EN source mirrors site.ts; ES is the translation)
  'site.tagline': 'Filmmaker',
  'site.statement': 'Embedded athlete-filmmaker — I run the races I film.',
  'site.description':
    'Embedded athlete-filmmaker working with outdoor and trail-running brands. I run the races I film — access an external crew can’t replicate.',

  // Hero
  'hero.cta_work': 'View the work',
  'hero.cta_contact': 'Work with me',

  // Clients
  'clients.heading': 'Worked with',

  // Featured work (home)
  'featured.eyebrow': 'Selected work',
  'featured.h2': 'A few projects, told as transformations — not clips.',
  'featured.all': 'All work',

  // Process (home)
  'process.eyebrow': 'How it works',
  'process.h2': 'A partner in the story, not a camera for hire.',
  'process.s1.title': 'Brief & positioning',
  'process.s1.body':
    'We start with the outcome you need — entries, sell-through, a signed athlete — not a shot list. I pressure-test the idea against your audience before anyone packs a bag.',
  'process.s2.title': 'Embedded production',
  'process.s2.body':
    'I shoot from inside the effort. Running the race, carrying the kit up the approach — the access an external crew can’t replicate is the whole point, and it’s where the real footage lives.',
  'process.s3.title': 'The asset ecosystem',
  'process.s3.body':
    'One production becomes many assets: a hero film, social cutdowns, vertical clips, stills. You leave with a campaign’s worth of content, not a single video.',
  'process.s4.title': 'Launch & iterate',
  'process.s4.body':
    'Masters in every ratio your channels need, delivered ready to run. We look at what landed and shape the next one around it.',

  // CTA (home + reused)
  'cta.eyebrow': 'Work with me',
  'cta.h2': 'Have a race, a launch, or an athlete worth a film?',
  'cta.body':
    'I take on a handful of projects a season so each one gets the legs — and the lungs — it deserves. Tell me what you’re building.',
  'cta.start': 'Start a conversation',

  // Footer
  'footer.site': 'Site',
  'footer.getintouch': 'Get in touch',
  'footer.rights': 'All rights reserved.',
  'footer.tagline2': 'Athlete-filmmaker',

  // Work index
  'work.eyebrow': 'Selected work',
  'work.h1': 'Films that move athletes, brands, and start lists.',
  'work.intro':
    'Every project is a transformation, not a clip — shot from inside the race or the climb, then built out into a season’s worth of assets.',
  'work.meta_desc':
    'Selected films for outdoor and trail-running brands, races, and athletes — embedded from inside the effort.',

  // Filter
  'filter.all': 'All work',

  // Categories
  'cat.brand-content': 'Brand Content',
  'cat.race-coverage': 'Race Coverage',
  'cat.athlete-story': 'Athlete Stories',

  // Case study
  'cs.back': 'All work',
  'cs.spine_h2': 'One shoot. A campaign’s worth of assets.',
  'cs.challenge': 'The challenge',
  'cs.strategy': 'The strategy',
  'cs.production': 'The production',
  'cs.result': 'The result',
  'cs.ecosystem': 'The content ecosystem',
  'cs.role': 'Role',
  'cs.year': 'Year',
  'cs.location': 'Location',
  'cs.client': 'Client',
  'cs.cta_h2': 'Have a project like this?',
  'cs.cta_body':
    'Tell me the race, the launch, or the athlete — and the outcome you need from it.',
  'cs.more': 'See more work',

  // Blog
  'blog.eyebrow': 'Blog',
  'blog.h1': 'Field notes from inside the effort.',
  'blog.intro':
    'Short essays on how this work gets made — the embedded approach, the craft, and the kit that makes it possible.',
  'blog.empty': 'The first field notes are on their way.',
  'blog.back': 'Blog',
  'blog.updated': 'Updated',
  'blog.cta_h2': 'Have a race or a launch in mind?',
  'blog.cta_body':
    'This is how I think about the work. If it fits what you’re building, let’s talk.',
  'blog.meta_desc':
    'Field notes on embedded sports filmmaking — craft, approach, and gear from inside the races.',

  // 404
  '404.h1': 'Off the marked route.',
  '404.body':
    'This page doesn’t exist — or it’s moved. Let’s get you back on trail.',
  '404.home': 'Back home',
  '404.work': 'See the work',

  // Services
  'services.eyebrow': 'Services',
  'services.h1': 'Outcomes, not packages of footage.',
  'services.intro':
    'Three ways in, depending on how much you need and how often. No price list — scope and budget come out of a short conversation about what you’re trying to move.',
  'services.tier_cta': 'Start a conversation',
  'services.most_booked': 'Most booked',
  'services.reassure_h2': 'Not sure which fits?',
  'services.reassure_body':
    'Tell me the outcome you’re after and I’ll tell you honestly whether it’s a single film or a season. I only take on a handful of projects at a time, so every one gets the legs it deserves.',
  'services.reassure_cta': 'Get in touch',
  'services.meta_desc':
    'Three ways to work together — Embedded, Campaign, and Retainer — each packaged around the outcome you need, not a list of deliverables.',
  // Tiers
  'svc.embedded.name': 'Embedded',
  'svc.embedded.for': 'For a single race, expedition, or athlete moment.',
  'svc.embedded.outcome':
    'One unrepeatable effort, captured from the inside and turned into a film people actually finish watching.',
  'svc.embedded.i1': 'Embedded capture from inside the race or climb',
  'svc.embedded.i2': 'One hero film, festival- and sponsor-ready',
  'svc.embedded.i3': 'A set of vertical cutdowns for social',
  'svc.embedded.i4': 'Graded stills for press and partnerships',
  'svc.campaign.name': 'Campaign',
  'svc.campaign.for': 'For a product launch or brand story with a goal attached.',
  'svc.campaign.outcome':
    'A coordinated body of content built to move a number — entries, sell-through, sign-ups — not just to look good.',
  'svc.campaign.i1': 'Positioning and creative built around your outcome',
  'svc.campaign.i2': 'Multi-day production across locations',
  'svc.campaign.i3': 'Hero film + full social ecosystem in every ratio',
  'svc.campaign.i4': 'Sponsor- or channel-specific edits',
  'svc.retainer.name': 'Retainer',
  'svc.retainer.for': 'For brands and races that need a season of content.',
  'svc.retainer.outcome':
    'A consistent visual voice across your whole season, from one filmmaker who already knows the sport and your audience.',
  'svc.retainer.i1': 'A planned slate of shoots across the season',
  'svc.retainer.i2': 'Priority booking around your race calendar',
  'svc.retainer.i3': 'A growing library of films, clips, and stills',
  'svc.retainer.i4': 'One point of contact who runs the races too',

  // About
  'about.eyebrow': 'About',
  'about.h1': 'I run the races I film.',
  'about.why_eyebrow': 'Why embedded',
  'about.why_h2': 'The access is the whole product.',
  'about.why1.h': 'I move at their pace',
  'about.why1.p':
    'Years of trail and mountain running mean I keep up with the athletes instead of staging the shoot around a crew’s limits. The camera breathes where they breathe.',
  'about.why2.h': 'I shoot the real window',
  'about.why2.p':
    'Being self-sufficient and fast lets me catch the genuine weather and light on the mountain — not a recreated version of it the next clear morning.',
  'about.why3.h': 'I respect the effort',
  'about.why3.p':
    'A quiet, one-person presence doesn’t break the moment. The athletes forget the camera is there, and that’s where the honest film lives.',
  'about.kit_eyebrow': 'The kit',
  'about.kit_h2': 'Built to disappear into the effort.',
  'about.kit_intro':
    'Light, fast, and self-sufficient — the gear is chosen so it never becomes the reason a shot didn’t happen.',
  'about.kit1.h': 'Run-and-gun body',
  'about.kit1.p':
    'A full-frame mirrorless setup light enough to carry at race pace — the camera goes where a vehicle and a long lens can’t.',
  'about.kit2.h': 'Body-mount + gimbal',
  'about.kit2.p':
    'Chest and helmet rigs for first-person effort, a compact gimbal for the moving landscape. Stabilised without slowing anyone down.',
  'about.kit3.h': 'Fast primes',
  'about.kit3.p':
    'A small set of fast primes for low light on early starts and high cols — shallow, cinematic, no zoom creep.',
  'about.kit4.h': 'Self-sufficient in the field',
  'about.kit4.p':
    'Power, audio, and storage for multi-day shoots off-grid. If the athletes can reach it, so can the footage.',
  'about.cta_h2': 'Let’s make something worth the climb.',
  'about.cta_body':
    'If you’re a brand, a race, or an athlete with a story in the mountains, I’d like to hear about it.',
  'about.cta_work': 'Work with me',
  'about.cta_see': 'See the work',
  'about.meta_desc':
    'Embedded athlete-filmmaker based in Córdoba, Argentina. I run the races I film — access an external crew can’t replicate.',

  // Contact
  'contact.eyebrow': 'Contact',
  'contact.h1': 'Let’s talk about the film.',
  'contact.intro':
    'The more you tell me about the outcome you’re after — entries, sell-through, a signed athlete — the more useful my first reply will be. I read every message myself.',
  'contact.email_label': 'Email',
  'contact.ig_label': 'Instagram',
  'contact.based_label': 'Based in',
  'contact.name': 'Name',
  'contact.message': 'What are you building?',
  'contact.send': 'Send message',
  'contact.status_unconfigured':
    'Form endpoint not configured yet — email me directly for now.',
  'contact.status_sending': 'Sending…',
  'contact.status_success': 'Thanks — I’ll be in touch soon.',
  'contact.status_error': 'Something went wrong. Please email me directly.',
  'contact.meta_desc':
    'Tell me about your race, launch, or athlete — and the outcome you need. Based in Córdoba, Argentina, shooting across Patagonia & the Andes.',
};

const es: Dict = {
  // Nav / chrome
  'nav.work': 'Trabajo',
  'nav.about': 'Sobre mí',
  'nav.services': 'Servicios',
  'nav.contact': 'Contacto',
  'nav.blog': 'Blog',
  'nav.availability': 'Disponible para proyectos 2026',
  'nav.menu_open': 'Abrir menú',
  'nav.menu_close': 'Cerrar menú',
  'common.language': 'Idioma',

  // Brand
  'site.tagline': 'Cineasta',
  'site.statement': 'Atleta y cineasta — corro las carreras que filmo.',
  'site.description':
    'Atleta y cineasta que filma desde adentro, trabajando con marcas de outdoor y trail running. Corro las carreras que filmo — un acceso que un equipo externo no puede replicar.',

  // Hero
  'hero.cta_work': 'Ver el trabajo',
  'hero.cta_contact': 'Trabajemos juntos',

  // Clients
  'clients.heading': 'Trabajé con',

  // Featured work
  'featured.eyebrow': 'Trabajo seleccionado',
  'featured.h2': 'Algunos proyectos, contados como transformaciones — no como clips.',
  'featured.all': 'Ver todo',

  // Process
  'process.eyebrow': 'Cómo trabajo',
  'process.h2': 'Un socio en la historia, no una cámara de alquiler.',
  'process.s1.title': 'Brief y posicionamiento',
  'process.s1.body':
    'Arrancamos por el resultado que necesitás — inscripciones, ventas, un atleta firmado — no por un guion técnico. Pongo la idea a prueba contra tu audiencia antes de que alguien arme el bolso.',
  'process.s2.title': 'Producción desde adentro',
  'process.s2.body':
    'Filmo desde adentro del esfuerzo. Corriendo la carrera, cargando el equipo en la subida — el acceso que un equipo externo no puede replicar es justamente el punto, y es donde vive el material que importa.',
  'process.s3.title': 'El ecosistema de contenido',
  'process.s3.body':
    'Una producción se convierte en muchas piezas: un film principal, cortes para redes, verticales, fotos. Te quedás con contenido para toda una campaña, no con un solo video.',
  'process.s4.title': 'Lanzamiento e iteración',
  'process.s4.body':
    'Másters en todos los formatos que tus canales necesitan, listos para publicar. Miramos qué funcionó y armamos el próximo en base a eso.',

  // CTA
  'cta.eyebrow': 'Trabajemos juntos',
  'cta.h2': '¿Tenés una carrera, un lanzamiento o un atleta que merezca un film?',
  'cta.body':
    'Tomo apenas un puñado de proyectos por temporada para que cada uno reciba las piernas — y los pulmones — que merece. Contame qué estás construyendo.',
  'cta.start': 'Empecemos a charlar',

  // Footer
  'footer.site': 'Sitio',
  'footer.getintouch': 'Hablemos',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.tagline2': 'Atleta y cineasta',

  // Work index
  'work.eyebrow': 'Trabajo seleccionado',
  'work.h1': 'Films que mueven atletas, marcas y listas de largada.',
  'work.intro':
    'Cada proyecto es una transformación, no un clip — filmado desde adentro de la carrera o la escalada, y después expandido en contenido para toda una temporada.',
  'work.meta_desc':
    'Films seleccionados para marcas de outdoor y trail running, carreras y atletas — filmados desde adentro del esfuerzo.',

  // Filter
  'filter.all': 'Todo',

  // Categories
  'cat.brand-content': 'Contenido de Marca',
  'cat.race-coverage': 'Cobertura de Carreras',
  'cat.athlete-story': 'Historias de Atletas',

  // Case study
  'cs.back': 'Todo el trabajo',
  'cs.spine_h2': 'Una sola filmación. El contenido de toda una campaña.',
  'cs.challenge': 'El desafío',
  'cs.strategy': 'La estrategia',
  'cs.production': 'La producción',
  'cs.result': 'El resultado',
  'cs.ecosystem': 'El ecosistema de contenido',
  'cs.role': 'Rol',
  'cs.year': 'Año',
  'cs.location': 'Ubicación',
  'cs.client': 'Cliente',
  'cs.cta_h2': '¿Tenés un proyecto así?',
  'cs.cta_body':
    'Contame la carrera, el lanzamiento o el atleta — y el resultado que necesitás.',
  'cs.more': 'Ver más trabajo',

  // Blog
  'blog.eyebrow': 'Blog',
  'blog.h1': 'Apuntes desde adentro del esfuerzo.',
  'blog.intro':
    'Ensayos breves sobre cómo se hace este trabajo — el enfoque desde adentro, el oficio y el equipo que lo hace posible.',
  'blog.empty': 'Los primeros apuntes están en camino.',
  'blog.back': 'Blog',
  'blog.updated': 'Actualizado',
  'blog.cta_h2': '¿Tenés una carrera o un lanzamiento en mente?',
  'blog.cta_body':
    'Así pienso el trabajo. Si encaja con lo que estás construyendo, hablemos.',
  'blog.meta_desc':
    'Apuntes sobre filmación deportiva desde adentro — oficio, enfoque y equipo, desde dentro de las carreras.',

  // 404
  '404.h1': 'Fuera del sendero marcado.',
  '404.body':
    'Esta página no existe — o se movió. Volvamos al camino.',
  '404.home': 'Volver al inicio',
  '404.work': 'Ver el trabajo',

  // Services
  'services.eyebrow': 'Servicios',
  'services.h1': 'Resultados, no paquetes de metraje.',
  'services.intro':
    'Tres formas de trabajar, según cuánto necesites y con qué frecuencia. Sin lista de precios — el alcance y el presupuesto salen de una charla corta sobre lo que querés mover.',
  'services.tier_cta': 'Empecemos a charlar',
  'services.most_booked': 'El más elegido',
  'services.reassure_h2': '¿No sabés cuál encaja?',
  'services.reassure_body':
    'Contame el resultado que buscás y te digo con honestidad si es un solo film o una temporada entera. Tomo apenas unos pocos proyectos a la vez, así cada uno recibe las piernas que merece.',
  'services.reassure_cta': 'Hablemos',
  'services.meta_desc':
    'Tres formas de trabajar juntos — Embedded, Campaña y Por temporada — cada una armada alrededor del resultado que necesitás, no de una lista de entregables.',
  // Tiers
  'svc.embedded.name': 'Embedded',
  'svc.embedded.for': 'Para una carrera, expedición o momento de un atleta.',
  'svc.embedded.outcome':
    'Un esfuerzo irrepetible, capturado desde adentro y convertido en un film que la gente termina de ver.',
  'svc.embedded.i1': 'Captura desde adentro de la carrera o la escalada',
  'svc.embedded.i2': 'Un film principal, listo para festivales y sponsors',
  'svc.embedded.i3': 'Una serie de cortes verticales para redes',
  'svc.embedded.i4': 'Fotos con color para prensa y alianzas',
  'svc.campaign.name': 'Campaña',
  'svc.campaign.for':
    'Para el lanzamiento de un producto o una historia de marca con un objetivo concreto.',
  'svc.campaign.outcome':
    'Un cuerpo de contenido coordinado, pensado para mover un número — inscripciones, ventas, registros — no solo para verse bien.',
  'svc.campaign.i1': 'Posicionamiento y creatividad construidos alrededor de tu resultado',
  'svc.campaign.i2': 'Producción de varios días en distintas locaciones',
  'svc.campaign.i3': 'Film principal + ecosistema completo para redes en todos los formatos',
  'svc.campaign.i4': 'Ediciones específicas por sponsor o canal',
  'svc.retainer.name': 'Por temporada',
  'svc.retainer.for': 'Para marcas y carreras que necesitan contenido durante toda una temporada.',
  'svc.retainer.outcome':
    'Una voz visual consistente durante toda tu temporada, de un cineasta que ya conoce el deporte y a tu audiencia.',
  'svc.retainer.i1': 'Un calendario planificado de filmaciones durante la temporada',
  'svc.retainer.i2': 'Reserva prioritaria según tu calendario de carreras',
  'svc.retainer.i3': 'Una biblioteca creciente de films, clips y fotos',
  'svc.retainer.i4': 'Un solo contacto que también corre las carreras',

  // About
  'about.eyebrow': 'Sobre mí',
  'about.h1': 'Corro las carreras que filmo.',
  'about.why_eyebrow': 'Por qué desde adentro',
  'about.why_h2': 'El acceso es todo el producto.',
  'about.why1.h': 'Me muevo a su ritmo',
  'about.why1.p':
    'Años de trail y montaña hacen que les siga el ritmo a los atletas en vez de armar la filmación alrededor de los límites de un equipo. La cámara respira donde ellos respiran.',
  'about.why2.h': 'Filmo la ventana real',
  'about.why2.p':
    'Ser autosuficiente y rápido me deja capturar el clima y la luz reales de la montaña — no una versión recreada a la mañana siguiente.',
  'about.why3.h': 'Respeto el esfuerzo',
  'about.why3.p':
    'Una presencia silenciosa y de una sola persona no rompe el momento. Los atletas se olvidan de que la cámara está ahí, y ahí es donde vive el film honesto.',
  'about.kit_eyebrow': 'El equipo',
  'about.kit_h2': 'Pensado para desaparecer dentro del esfuerzo.',
  'about.kit_intro':
    'Liviano, rápido y autosuficiente — el equipo está elegido para que nunca sea la razón por la que una toma no pasó.',
  'about.kit1.h': 'Cuerpo run-and-gun',
  'about.kit1.p':
    'Un setup mirrorless full-frame lo suficientemente liviano para cargar a ritmo de carrera — la cámara llega donde un vehículo y un teleobjetivo no pueden.',
  'about.kit2.h': 'Arnés y gimbal',
  'about.kit2.p':
    'Rigs de pecho y casco para el esfuerzo en primera persona, un gimbal compacto para el paisaje en movimiento. Estabilizado sin frenar a nadie.',
  'about.kit3.h': 'Lentes fijos luminosos',
  'about.kit3.p':
    'Un set chico de lentes fijos luminosos para la poca luz de las largadas temprano y los cols altos — con poca profundidad, cinematográficos, sin zoom de más.',
  'about.kit4.h': 'Autosuficiente en el campo',
  'about.kit4.p':
    'Energía, audio y almacenamiento para filmaciones de varios días sin red. Si los atletas pueden llegar, el material también.',
  'about.cta_h2': 'Hagamos algo que valga la subida.',
  'about.cta_body':
    'Si sos una marca, una carrera o un atleta con una historia en la montaña, me gustaría escucharla.',
  'about.cta_work': 'Trabajemos juntos',
  'about.cta_see': 'Ver el trabajo',
  'about.meta_desc':
    'Atleta y cineasta con base en Córdoba, Argentina. Corro las carreras que filmo — un acceso que un equipo externo no puede replicar.',

  // Contact
  'contact.eyebrow': 'Contacto',
  'contact.h1': 'Hablemos del film.',
  'contact.intro':
    'Cuanto más me cuentes sobre el resultado que buscás — inscripciones, ventas, un atleta firmado — más útil va a ser mi primera respuesta. Leo cada mensaje personalmente.',
  'contact.email_label': 'Email',
  'contact.ig_label': 'Instagram',
  'contact.based_label': 'Con base en',
  'contact.name': 'Nombre',
  'contact.message': '¿Qué estás construyendo?',
  'contact.send': 'Enviar mensaje',
  'contact.status_unconfigured':
    'El formulario todavía no está configurado — por ahora escribime directo por email.',
  'contact.status_sending': 'Enviando…',
  'contact.status_success': '¡Gracias! Te escribo pronto.',
  'contact.status_error': 'Algo salió mal. Por favor, escribime directo por email.',
  'contact.meta_desc':
    'Contame sobre tu carrera, lanzamiento o atleta — y el resultado que necesitás. Con base en Córdoba, Argentina, filmando por la Patagonia y los Andes.',
};

export const ui: Record<Lang, Dict> = { en, es };

/** Plain-string lookup for the few non-dual-rendered spots (meta, JSON, JS). */
export function t(lang: Lang, key: string): string {
  return ui[lang]?.[key] ?? ui.en[key] ?? key;
}

/** Both-language pair for a key, with EN fallback. Handy for <T k>. */
export function pair(key: string): { en: string; es: string } {
  return { en: ui.en[key] ?? key, es: ui.es[key] ?? ui.en[key] ?? key };
}
