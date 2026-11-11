# Legal, regulatory and deontological compliance map for a Spanish lawyer's website with AI features (Raúl Cabrera, Las Palmas de Gran Canaria). Status as of 2026-11-09

Notation used throughout:
- **[IN FORCE]**: binding law or rule that applies today.
- **[SOFT LAW]**: guidance, a code of practice or a circular. Not binding by itself, but regulators and bar associations use it as their yardstick.
- **[PENDING]**: a draft or bill that is not yet law.
- **"(not re-fetched)"**: the article's content comes from background knowledge and the official URL is given, but the text was not re-read during this session. Check it before quoting it to the client.

---

## 0. Client context: who the client is and which Colegio and region apply

### Takeaway
The current aviso legal names the holder as **Raúl Santana Cabrera** (NIF 54092607B), trading as "Raúl Cabrera Abogado", with an office at C/ Carmen Llopis 7, 4º, 35003 **Las Palmas de Gran Canaria**. It does **not** state his Colegio, his colegiado number or his academic title. That is an existing non-compliance under LSSI art. 10.1.d, CD arts. 6.3 and 21.3.a, and EGAE art. 16.2. His Colegio is almost certainly the **Ilustre Colegio de la Abogacía de Las Palmas (ICALPA)**, but this could not be verified online and must be confirmed with the client.

### Cited Findings
- The aviso legal identifies the holder as "Raúl Santana Cabrera", trade name "Raúl Cabrera Abogado", NIF "54092607B", address "C/ Carmen Llopis Nº 7, Piso 4º 35003 Las Palmas de Gran Canaria", phone 676882221, email info@raulcabreraabogado.com, activity "Servicio de abogacía". **Colegio, número de colegiado and título are not mentioned.** — [raulcabreraabogado.com – Aviso legal](https://raulcabreraabogado.com/aviso-legal/)
- The current site states that it uses Google Analytics (Google LLC), Google Search Console, Elementor/WordPress and contact forms "mediante consentimiento explícito del usuario", plus a WhatsApp link (api.whatsapp.com). No chatbot, testimonials, fees or free-consultation offer appear. There is a "Solicitar consulta" CTA. — [raulcabreraabogado.com – Aviso legal](https://raulcabreraabogado.com/aviso-legal/)
- A web search for "Raúl Santana Cabrera" as a colegiado in Las Palmas returned no confirmation. The suggested route is the ICALPA directory or the CGAE "censo de letrados". — (search results, no primary hit; see Gaps)
- The denomination "abogada/abogado" is reserved exclusively to people incorporated into a Colegio as ejercientes (EGAE art. 4.2). — [BOE – RD 135/2021, EGAE](https://www.boe.es/buscar/act.php?id=BOE-A-2021-4568)

### Inferences
- The office is in Las Palmas de Gran Canaria, so the territorial Colegio is presumably the ICA Las Palmas (ICALPA), not ICA Santa Cruz de Tenerife. A lawyer can be colegiado in one Colegio and practise anywhere in Spain, though, so the rebuild must print whatever Colegio and number he actually has.
- The rebuild must also correct the existing gap: Colegio + nº colegiado + título + link to the deontological rules in the aviso legal, the footer and every advertising landing page.
- He practises in Canarias, so prices shown to consumers would carry **IGIC** (Canary indirect tax), not IVA. "IGIC incluido" or an equivalent wording is needed under LSSI art. 10.1.f and TRLGDCU art. 20 (see section 6). Confirm the rate with his tax adviser.

### Gaps
- His colegiado status, Colegio and number could not be confirmed. Ask the client, or check the CGAE censo (censo.abogacia.es).
- No ICALPA-specific circular on advertising, digital marketing or AI was found. A targeted search returned only ICALPA master's timetables. Ask the client whether ICALPA has issued internal deontological criteria or circulars.

---

## 1. Lawyer advertising rules: EGAE (RD 135/2021), Código Deontológico (2019), Colegio and CGAE guidance (including AI)

### Takeaway
Advertising is free, but it must be **objective, truthful and dignified**, must **state the Colegio**, and must never reveal secret information, **promise results**, **refer to clients without their written authorisation**, incite litigation, target recent accident or catastrophe victims, or use bar emblems. "Especialista" claims must be backed by evidence. "Free" offers are only allowed if they really are free and are not confusing. Covert advertising is banned. The 2019 CD also requires websites to identify the lawyer's name, Colegio and number (art. 21.3.a). CGAE and ICAM AI guidance from 2025–2026 stresses human supervision, verification and that the lawyer stays responsible. It does not regulate AI marketing specifically. [IN FORCE for EGAE and CD; SOFT LAW for the guidance]

### Cited Findings
**Código Deontológico de la Abogacía Española (approved 6 March 2019, in force 8 May 2019)** [IN FORCE, binding deontological rules] — verbatim text from [CD 2019 (PDF hosted by ICA Lleida)](https://www.ical.es/wp-content/uploads/2019/11/CODIGO-DEONTOLOGICO.pdf):
- Art. 6.1: "Se podrá realizar libremente publicidad de los servicios profesionales, con pleno respeto a la legislación vigente sobre la materia, defensa de la competencia, competencia desleal y normas deontológicas".
- Art. 6.2: advertising must respect "la independencia, libertad, dignidad e integridad… así como el secreto profesional y habrá de ser **objetiva, veraz y digna**, tanto por su contenido como por los medios empleados."
- Art. 6.3: "**Deberá indicarse en la publicidad el Colegio al que se pertenezca.**" Advertising may not involve:
  - a) "La revelación directa o indirecta de hechos, datos o situaciones amparados por el secreto profesional."
  - b) "La incitación genérica o concreta al pleito o conflicto."
  - c) Offering services, directly or through third parties, to victims of catastrophes or public calamities "en ningún caso, hasta transcurridos **45 días** desde el hecho", nor to victims of recent accidents who lack "plena y serena libertad de elección". The ban lifts if the victim expressly asks.
  - d) "La **promesa de obtener resultados** que no dependan exclusivamente del que la realiza."
  - e) "La **referencia a clientes sin su autorización escrita**", with an exception for public procurement.
  - f) Using institutional or bar emblems, or confusingly similar ones.
  - g) Mentioning activities incompatible with practising law.
  - h) Any other advertising contrary to deontological rules.
- Art. 6.4: specialisation claims "deberán responder a la posesión de títulos académicos o profesionales, a la superación de cursos formativos de especialización profesional oficialmente homologados o a una **práctica profesional prolongada** que las avalen."
- Art. 6.9: "**No se permitirá la publicidad encubierta**, debiendo hacerse constar en sitio visible y de modo perfectamente comprensible que se trata de contenido publicitario."
- Art. 7.2: "Está prohibida la captación desleal de clientes." Art. 7.3 lists unfair acts:
  - a) breaching the Ley General de Publicidad.
  - c) "La utilización de terceros como medio para eludir las obligaciones deontológicas. **Se considerará responsable al favorecido por la publicidad que realice un tercero**, salvo prueba en contrario."
  - d) "La oferta de **servicios en apariencia gratuitos cuando no lo sean** y puedan generar confusión a los consumidores".
- Art. 5.1: secrecy covers "hechos o noticias que conozca por razón de cualquiera de las modalidades de su actuación profesional". Art. 5.10: "**El consentimiento del cliente no excusa de la preservación del secreto profesional.**" Art. 5.11: no engagement may be accepted where a consultation on the same matter was held with the adverse party and that affects secrecy.
- Art. 12.A.7: assessments of the probable outcome of a case may only be issued "si la petición procede del cliente afectado quien, en todo caso, deberá ser el exclusivo destinatario."
- Art. 12.B.1: identification, "así como la del Colegio al que se pertenece", is the "primera e inmediata obligación antes de la prestación de servicios", including "consulta telefónica o por red informática".
- Art. 18: no commissions or compensation to third parties for referring clients "salvo que se informe al cliente de esta circunstancia".
- **Art. 21 (ICT use)**:
  - 21.1: ICT use "no exime de cumplir las normas deontológicas… ni las obligaciones que imponen las reguladoras de la sociedad de la información".
  - 21.2: "uso responsable y diligente… debiendo extremar el cuidado en la preservación de la confidencialidad y del secreto profesional".
  - 21.3.a: "en las comunicaciones, aplicaciones, **webs** y servicios profesionales prestados por medios electrónicos deberá: a. Identificarse con su nombre…, **Colegio de adscripción y número de colegiación**."

**Estatuto General de la Abogacía Española (RD 135/2021; BOE 24 March 2021; in force 1 July 2021)** [IN FORCE, regulation-level rule] — [BOE consolidated](https://www.boe.es/buscar/act.php?id=BOE-A-2021-4568):
- Art. 19 sets out the principle of free advertising, subject to advertising and unfair-competition law, the Estatuto and codes of conduct. Art. 20.1 says advertising must respect independence, freedom, dignity, integrity and secrecy.
- Art. 20.2 prohibits the same things as the CD:
  - a) revealing secret facts.
  - c) offers to accident or disaster victims until 45 days after the event, unless the victim expressly requests them.
  - d) "La promesa de obtener resultados que no dependan exclusivamente de la actividad del profesional de la Abogacía."
  - e) "La referencia a clientes del propio profesional de la Abogacía sin su autorización, salvo lo previsto en el artículo 54."
  - f) emblems.
  - g) incompatible activities.
  — [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2021-4568); [abogacia.es – Novedades publicidad EGAE](https://www.abogacia.es/publicaciones/estatuto-general-de-la-abogacia/novedades-en-la-regulacion-de-la-actividad-publicitaria-de-la-abogacia-introducidas-por-el-nuevo-estatuto-general-de-la-abogacia/)
- Art. 20.3 (new in 2021): specialisation mentions "deberán responder a la posesión de títulos académicos o profesionales específicos sobre las materias de que se trate", officially homologated courses, or "una práctica profesional que las avalen". The commentary describes this as a new duty to be able to **substantiate** "especialista" claims. — [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2021-4568); [abogacia.es](https://www.abogacia.es/publicaciones/estatuto-general-de-la-abogacia/novedades-en-la-regulacion-de-la-actividad-publicitaria-de-la-abogacia-introducidas-por-el-nuevo-estatuto-general-de-la-abogacia/)
- **Art. 16 ("Servicios jurídicos en línea o a través de internet")**:
  - 16.1: online legal advice "constituye una forma de ejercicio de la profesión sometida al presente Estatuto General".
  - 16.2: before providing the service, and before requesting any payment, the lawyer must tell the client or user his identity and Colegio.
  - 16.3: he must take the measures needed to guarantee professional secrecy and obtain sufficient proof of the client's identity and other information **to avoid conflicts of interest**.
  - 16.4: "Las comunicaciones confidenciales deberán enviarse **encriptadas y con firma electrónica segura**" where the client's circumstances allow.
  — [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2021-4568)
- Arts. 21–22 (secrecy):
  - 22.1: secrecy covers "todos los hechos, comunicaciones, datos, informaciones, documentos y propuestas".
  - 22.3: conversations, including electronic ones, "solo podrán ser grabadas con la previa advertencia y conformidad de todos los intervinientes".
  - 22.4: the lawyer must ensure that collaborators and staff respect secrecy.
  - 22.5: the duty has no time limit.
  - 22.6: the lawyer is released only for matters that concern solely the client, and only with the client's express authorisation.
  — [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2021-4568)
- Art. 48 (information and identification duties):
  - 48.1: name, NIF, Colegio, nº colegiado, professional address and electronic contact.
  - 48.3: inform the client on the viability of the matter.
  - 48.4: inform on fees, costs and the consequences of a costs order.
  - 48.6: written assessments of probable outcomes go only to the affected client.
  — [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2021-4568)

**Ley Orgánica 5/2024, del Derecho de Defensa (BOE 14 Nov 2024; in force 4 Dec 2024)** [IN FORCE] — [BOE consolidated](https://www.boe.es/buscar/act.php?id=BOE-A-2024-23630):
- Art. 6.1 gives clients the right to information that is "clara, simple, comprensible y accesible universalmente".
- Art. 6.2 requires the lawyer to inform on viability and MASC (alternative dispute resolution), "los costos generales del proceso y el procedimiento para la fijación de los honorarios profesionales", the consequences of a costs order, legal aid (asistencia jurídica gratuita), and "**la identidad del profesional de la abogacía, mediante su número de colegiado y colegio de abogacía de pertenencia**" (6.2.h).
- Art. 12.4 gives a right to "conocer con transparencia los criterios de **inteligencia artificial** empleados por las plataformas digitales" that help people choose a lawyer.
- No specific advertising article.

**Comparative advertising**
- Neither CD art. 6 nor EGAE art. 20 (2019/2021 texts) contains an explicit ban on comparisons. The old 2002 CD did. Comparisons therefore fall under general advertising and unfair-competition law plus the "objetiva, veraz y digna" standard. — [abogacia.es blog on 2019 CD changes](https://www.abogacia.es/2019/06/19/las-buenas-practicas-en-el-marketing-legal-xvii-las-nuevas-obligaciones-deontologicas/); Ley 3/1991 de Competencia Desleal, art. 10 on comparative advertising — [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-1991-628) (not re-fetched)

**CGAE and Colegio AI guidance** [SOFT LAW]
- CGAE presented a **Libro Blanco sobre el uso de la IA en la Abogacía** on 30 Jan 2026. It reports that 60% of lawyers already use AI apps and only 8% have deep knowledge of them. Its key messages: use AI "bajo nuestra directa supervisión y juicio crítico", always verify sources, and keep "protocolos de seguridad, transparencia y control", traceability and reversibility. The news coverage does not mention specific rules on marketing or chatbots. — [Legal Today, 30 Jan 2026](https://www.legaltoday.com/actualidad-juridica/noticias-de-derecho/abogacia-presenta-el-libro-blanco-sobre-el-uso-de-la-ia-en-la-profesion-el-60-de-los-profesionales-ya-utiliza-aplicaciones-con-inteligencia-artificial-2026-01-30/)
- CGAE approved a **circular on the "uso responsable" of AI** when drafting, signing and filing legal documents (reported 12 April 2026), with five recommendations:
  1. know the tools and train in them;
  2. do not use outputs without critical reading;
  3. always cross-check against reliable legal sources;
  4. use AI only in areas you master and document its use;
  5. carry out controls and take responsibility.
  The press reports that misuse can be a serious infraction, with suspension of 15 days to 1 year. — [Vozpópuli](https://www.vozpopuli.com/tecnologia/el-abuso-de-la-ia-pone-en-alerta-a-los-abogados-la-mala-praxis-acarrea-una-suspension-de-entre-15-dias-y-un-ano.html) (secondary; the circular's text and number were not found)
- The ICAM (Madrid) good-practice AI guide (Oct 2025) says:
  - confidentiality and data protection must be guaranteed;
  - external providers must meet "los mismos estándares de diligencia, transparencia y confidencialidad que los aplicados internamente";
  - "la delegación tecnológica no puede implicar la delegación de responsabilidad";
  - AI must stay "siempre bajo control humano";
  - firms should keep traceability, run periodic audits and name supervisors.
  ICAM is not his Colegio, but the guide is persuasive. — [Legal Today, 7 Oct 2025](https://www.legaltoday.com/actualidad-juridica/noticias-de-derecho/el-icam-lanza-una-guia-que-ofrece-criterios-para-integrar-la-ia-en-los-despachos-2025-10-07/)
- A Spanish court fined a lawyer who cited 48 non-existent judgments generated by AI (reported Feb 2026). — [Diario Constitucional, 18 Feb 2026](https://www.diarioconstitucional.cl/2026/02/18/tribunal-espanol-multa-a-abogado-que-utilizo-jurisprudencia-falsa-generada-por-inteligencia-artificial/) (secondary, foreign outlet)

### Inferences
Topic-by-topic answers for the web build:

**Testimonials and online reviews.** Any testimonial that identifies a client, whether by name, photo, recognisable case details or a Google review with the reviewer's name embedded on the site, is a "referencia a clientes". It needs **written** authorisation (CD 6.3.e; EGAE 20.2.e says "autorización").
- Even with consent, the testimonial must not reveal secret facts (CD 6.3.a).
- CD 5.10 says client consent does not excuse secrecy. EGAE 22.6 allows release with express authorisation only for matters that concern solely the client. That is a tension; take the conservative reading.
- Design: no case facts in testimonials; store each signed authorisation; allow revocation; prefer anonymised quotes ("Cliente, derecho laboral, 2026") or a link out to the Google Business Profile instead of embedding named reviews.

**Mentioning clients or case results.** Naming clients needs written authorisation. Publishing case results (e.g., "conseguimos 45.000 € para un cliente") risks indirect disclosure of secret information (CD 6.3.a / EGAE 20.2.a), especially in a small market like Gran Canaria where details can identify people.
- If published at all: anonymised, aggregated, non-identifying, client-authorised, truthful and verifiable, and with a disclaimer that past results do not guarantee future ones.

**Success-rate claims.** A "95% de casos ganados" claim is very hard to make "objetiva y veraz" (CD 6.2). It implicitly promises results (CD 6.3.d / EGAE 20.2.d) and is misleading under unfair-competition law unless it can be rigorously substantiated. **Treat as forbidden** in practice.

**Promising results.** Explicitly forbidden: "Recuperamos tu dinero", "Garantizamos la custodia", "100% éxito". This also applies to AI-generated blog CTAs and chatbot replies.

**Comparisons with other lawyers.** Not expressly banned by the current CD or EGAE, but subject to LCD art. 10 (objective, verifiable, non-denigrating) and the dignity standard. Avoid "el mejor abogado de Las Palmas" and similar superlatives, rankings and "mejor que X". Third-party awards may be cited only if real and verifiable.

**"Especialista".** Allowed only if backed by degrees, official specialisation courses or prolonged practice (CD 6.4; EGAE 20.3), and he must be able to prove it. Safer wording: "abogado con práctica centrada en derecho de familia", plus a bio listing the verifiable credentials (máster, years of practice). The AI blog generator must be blocked from writing "especialista" or "experto número 1".

**Publishing fees and prices.** Allowed. If prices appear they must be clear and exact, including taxes (LSSI 10.1.f; TRLGDCU 20.1.c).
- Fixed prices for defined services are fine. Ranges ("desde X €") must not mislead.
- He must still give individual fee information and a budget on request (EGAE 48.4; LO 5/2024 arts. 6 and 15).

**Free consultation offers.** Allowed only if genuinely free with no hidden conditions (CD 7.3.d). State the duration and scope (e.g., "primera valoración telefónica de 15 min sin coste ni compromiso"), and make clear what is paid afterwards.

**Professional secrecy.** No content (blog "casos reales", screenshots, chatbot transcripts, review replies) may reveal client facts.
- **Replies to Google reviews** are a classic risk: never confirm that someone is a client or discuss their case in a reply.

**Other risky items for an AI blog or ads.**
- Reactive posts targeting recent catastrophes or accidents within 45 days (CD 6.3.c / EGAE 20.2.c). Example: "¿Afectado por el incendio de X? Reclama ya".
- "Incitación al pleito" CTAs (CD 6.3.b).
- Sponsored or guest content not labelled as advertising (CD 6.9).
- Paid lead-generation or referral fees without telling the client (CD 18).
- Note that he is **responsible for what his agency or automation publishes** (CD 7.3.c).

### Gaps
- No ICALPA-specific advertising, social-media or AI guidance was found.
- The full text of the CGAE AI circular (April 2026) and of the Libro Blanco was not retrieved. Whether the CGAE has published specific guidance on AI chatbots for client intake was not established.
- No official CGAE or Colegio position was found on embedding Google reviews on lawyers' websites.

---

## 2. LSSI-CE information duties, RGPD/LOPDGDD privacy, AEPD cookie rules, contact forms and retention

### Takeaway
The site must carry a complete LSSI art. 10 "aviso legal". For a regulated profession that means Colegio + nº colegiado + título + issuing State + professional rules and how to access them, plus NIF. It also needs a layered RGPD art. 13 privacy notice and an AEPD-compliant cookie banner with "Rechazar" as prominent as "Aceptar". Third-party analytics such as Google Analytics need consent. **First-party audience measurement that meets the AEPD's January 2024 criteria is exempt from consent**, but must still be disclosed. Cookieless analytics avoids LSSI art. 22.2 only if nothing is stored on or read from the device, including fingerprinting. The EU "Digital Omnibus" cookie reform is **still pending**. [IN FORCE except the Omnibus]

### Cited Findings
- **LSSI art. 10.1** [IN FORCE] requires: name and address plus email (a); registry data (b); for a regulated profession (d): "1.º Los datos del **Colegio profesional** al que, en su caso, pertenezca y **número de colegiado**. 2.º El **título académico oficial o profesional** con el que cuente. 3.º El **Estado** de la UE o del EEE en el que se expidió dicho título… 4.º Las **normas profesionales aplicables** al ejercicio de su profesión y los medios a través de los cuales se puedan conocer, incluidos los electrónicos"; NIF (e); clear and exact prices including taxes if prices are mentioned (f); codes of conduct adhered to (g). — [BOE – Ley 34/2002](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758)
- **LSSI art. 20.1**: electronic commercial communications must be identifiable as such, and so must the person on whose behalf they are made. **Art. 22.2**: storing or accessing data on users' terminals requires consent after clear and complete information. — [BOE – Ley 34/2002](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758)
- LSSI art. 21 (no commercial emails without prior express consent, except to existing customers for similar products) and arts. 38–39 (sanctions) are in the same law — [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758) (not re-fetched; the art. 38/39 classification of art. 10 breaches was not retrieved)
- LO 5/2024 art. 15.2: when personal data are obtained, the engagement must include the information required by GDPR, which may be given in layers under LOPDGDD art. 11. Art. 15.3: the data may only be processed for the defence entrusted, save legal exceptions. — [BOE – LO 5/2024](https://www.boe.es/buscar/act.php?id=BOE-A-2024-23630)
- **AEPD cookie guide update (July 2023)** [SOFT LAW, applied in sanctions]: requires clear "rechazar" buttons. The adaptation deadline ended 11 Jan 2024. — [Finreg360](https://finreg360.com/alerta/la-aepd-publica-la-guia-uso-de-cookies-para-herramientas-de-medicion-de-audiencias/)
- **AEPD "Guía uso de cookies para herramientas de medición de audiencias" (11 Jan 2024)** [SOFT LAW]: audience-measurement cookies are **exempt from consent** if they:
  - are used only to measure audience "en nombre exclusivo del editor" and produce anonymous statistics;
  - are not cross-matched with other processing and not shared with third parties;
  - do not allow tracking across sites or apps;
  - are not reused for other purposes;
  - do not use common identifiers across sites;
  - if supplied by an external provider, are covered by an **art. 28 GDPR processor contract**, with data kept separate per publisher;
  - have a **cookie lifetime of 13 months maximum and data retention of 25 months maximum**;
  - are disclosed in the privacy and cookie policies.
  — [Finreg360](https://finreg360.com/alerta/la-aepd-publica-la-guia-uso-de-cookies-para-herramientas-de-medicion-de-audiencias/); [Lawwwing summary](https://lawwwing.com/cookie-compliance-guia-practica-para-webmasters-2)
- Third-party analytics that do not meet these conditions need consent (secondary commentary). — [Ecija note](https://files.griddo.ecija.com/ecija-aedp-cookies-audiencias.pdf); [Atico34](https://protecciondatos-lopd.com/empresas/?p=41158)
- **EDPB Guidelines 2/2023 on the technical scope of ePrivacy art. 5(3)**, v2.0 adopted 7 Oct 2024 [SOFT LAW]: art. 5(3) is not limited to cookies and covers "similar technologies". It builds on WP29 Opinion 9/2014, which treated device **fingerprinting** as covered. — [EDPB PDF](https://edpb.europa.eu/system/files/2024-10/edpb_guidelines_202302_technical_scope_art_53_eprivacydirective_v2_en_0.pdf)
- **Digital Omnibus (data/GDPR/ePrivacy part)** [PENDING]:
  - The Commission proposed in Nov 2025 to move cookie rules into new GDPR arts. 88a/88b, with consent-free uses such as aggregated audience measurement.
  - The Council's mandate keeps the rules in a rewritten ePrivacy art. 5(3), lists six consent-free uses and sets a 4-month re-ask wait (reported Coreper agreement on 21 Oct 2026).
  - The European Parliament is not expected to take a position before early 2027.
  - **Current GDPR and national ePrivacy rules (LSSI art. 22.2) apply unchanged.**
  — [Relevant Audience](https://www.relevantaudience.com/analytics/eu-council-digital-omnibus-cookie-consent/); [Continental Brief](https://continentalbrief.org/digital-omnibus-gdpr-cookies-data-act-explained) (secondary; dates differ between sources)
- GDPR (Reg. 2016/679): art. 6 (lawful bases), art. 9 (special categories), art. 10 (criminal data), art. 13 (information), art. 28 (processors), art. 30 (records of processing), arts. 44–49 (transfers) — [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj) (not re-fetched). LOPDGDD art. 10.2 allows lawyers to process criminal-offence data provided by clients for their functions; art. 11 covers layered information — [BOE – LO 3/2018](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673) (not re-fetched)

### Inferences
**Aviso legal (LSSI 10).** Needs:
- full name "Raúl Santana Cabrera" and trade name;
- NIF and address;
- email and phone;
- Colegio + nº colegiado;
- título ("Licenciado/Graduado en Derecho" + Máster de Acceso / título de abogado) and the issuing State (España);
- links to the EGAE (BOE) and the Código Deontológico (abogacia.es);
- if he adheres to a code of conduct or confianza online seal, a link to it.

**Privacy policy (GDPR art. 13 / LOPDGDD art. 11, layered).** Needs:
- controller identity;
- purposes per processing activity: contact or consultation request, booking, payment, chatbot/intake, newsletter, analytics;
- lawful bases: pre-contractual steps under art. 6(1)(b) for consultation requests; consent for the newsletter; legitimate interest or legal obligation where applicable;
- recipients and processors: hosting, email, CRM, booking, Stripe, LLM provider;
- international transfers and their safeguards;
- retention periods;
- rights and the right to complain to the AEPD;
- a note that data arriving through the chatbot or form may include special categories (health in personal-injury matters, criminal data). LOPDGDD art. 10.2 covers lawyers for criminal data. Minimise collection anyway.

**Contact form.**
- No pre-ticked boxes.
- A required "He leído la política de privacidad" acknowledgement plus a first-layer notice next to the form. When the basis is pre-contractual measures, consent is not the legal basis; an information-acknowledgement checkbox is common practice.
- A **separate, optional** checkbox for newsletter or marketing (LSSI art. 21).
- A free-text warning: "No incluya datos sensibles ni documentación en este primer contacto."
- TLS everywhere. Send form submissions encrypted where possible (EGAE 16.4), and do not route them through third-party form SaaS outside the EU without safeguards.

**Cookies / analytics.**
- The existing Google Analytics setup **requires prior consent** and an AEPD-compliant banner: equal "Aceptar"/"Rechazar"/"Configurar" in the first layer; no cookie walls; no non-essential scripts before consent; consent revocable at any time from a persistent link.
- Recommended: replace GA with **self-hosted first-party analytics configured to meet the AEPD 2024 exemption** (first-party, no sharing, no cross-site tracking, 13/25-month limits, processor contract if hosted by a vendor). Disclose it in the cookie policy and offer an opt-out.
- Truly cookieless and fingerprint-free server-side log analytics falls outside LSSI 22.2, but GDPR still applies to IP processing (legitimate interest + disclosure).
- Embedded Google Maps, YouTube, reCAPTCHA and Google Fonts served from Google set cookies or transfer IPs. Use click-to-load facades, self-hosted fonts and privacy-friendly CAPTCHA, or gate them behind consent.

**Records and DPO.**
- A lawyer processes criminal and other sensitive data on a non-occasional basis, so the GDPR art. 30 small-entity exemption likely does not apply. Keep a record of processing activities.
- A DPO is probably not mandatory for a solo practice. Verify against LOPDGDD art. 34.

**Retention (proposal, verify).**
- Non-converted enquiries and chatbot transcripts: delete after the enquiry is resolved, e.g. 6–12 months maximum, unless a conflict-check log is needed (keep minimal party names only).
- Client files: per limitation periods and AML conservation duties (Ley 10/2010 requires 10 years for covered operations; not re-verified).
- Analytics: 25 months maximum (AEPD 2024).
- Server logs: short, e.g. 30–90 days.

### Gaps
- The exact LSSI art. 38/39 classification and fine ranges for missing art. 10 data were not retrieved. From memory: leve up to €30,000, grave €30,001–150,000. Verify.
- The full July 2023 AEPD guide was not re-read. Points such as consent renewal every 24 months are unverified.
- Whether specific "cookieless" tools (Plausible, Fathom and similar) satisfy EDPB 2/2023 is debated. No AEPD position was found.

---

## 3. AI features: sending prospective-client data to LLM providers, professional secrecy, processors, transfers, AEPD guidance, "legal advice" risk

### Takeaway
Anything a prospective client types into an intake chatbot is information the lawyer learns "por razón de" his professional activity. It is therefore covered by professional secrecy (LOPJ art. 542.3; EGAE arts. 21–22; CD art. 5; LO 5/2024 art. 16) **and** by GDPR. The LLM provider must be bound as an art. 28 processor with no training on the data, minimal or zero retention, preferably EU processing, and confidentiality obligations.
- **Online legal advice is legally "practice of the profession"** (EGAE art. 16.1). A chatbot that answers legal questions therefore acts as the lawyer, with all his duties: identification, conflict checks, secrecy, viability assessments only to the client.
- Design the bot as **intake + triage + general information**, never as individual advice or outcome prediction.

### Cited Findings
- EGAE art. 16.1–16.4 [IN FORCE]: online legal services are "una forma de ejercicio de la profesión". The lawyer must give identity and Colegio before the service and before any payment request, guarantee secrecy, obtain sufficient proof of client identity and information to avoid conflicts of interest, and send confidential communications encrypted with secure e-signature where the client's circumstances allow. — [BOE – EGAE](https://www.boe.es/buscar/act.php?id=BOE-A-2021-4568)
- EGAE art. 22.3: conversations by electronic means may be recorded only "con la previa advertencia y conformidad de todos los intervinientes". Art. 22.4: the lawyer must make collaborators respect secrecy. — [BOE – EGAE](https://www.boe.es/buscar/act.php?id=BOE-A-2021-4568)
- CD 2019:
  - art. 5.4: conversations "por cualquier medio telefónico o telemático" may not be recorded without prior warning and consent, and are always protected by secrecy;
  - art. 5.7: the lawyer "deberá hacer respetar el secreto profesional a cualquier otra persona que colabore con él";
  - art. 5.11: an engagement may not be accepted if a consultation with the adverse party affects secrecy;
  - art. 12.A.7: outcome assessments only to the client;
  - art. 21.2: "extremar el cuidado en la preservación de la confidencialidad y del secreto profesional" when using ICT.
  — [CD 2019](https://www.ical.es/wp-content/uploads/2019/11/CODIGO-DEONTOLOGICO.pdf)
- LO 5/2024 art. 16.1: "Todas las comunicaciones mantenidas entre un profesional de la abogacía y su cliente tienen carácter confidencial". Art. 16.4: the lawyer–client interview is confidential. — [BOE – LO 5/2024](https://www.boe.es/buscar/act.php?id=BOE-A-2024-23630)
- LOPJ art. 542.3: lawyers must keep secret all facts or news learned through any form of their professional activity — [BOE – LOPJ](https://www.boe.es/buscar/act.php?id=BOE-A-1985-12666) (not re-fetched)
- **AEPD "Orientaciones sobre IA agéntica desde la perspectiva de protección de datos"** (Feb 2026, 81 pp.) [SOFT LAW]: covers controllers and processors that use AI agents to process personal data. Commentators highlight:
  - controlling the agent's **memory** alongside minimisation (Osborne Clarke);
  - a "fallo seguro" approach that designs for errors, breaches and bias (Andersen);
  - data protection by design and by default (CMS).
  — [AEPD PDF](https://www.aepd.es/guias/orientaciones-ia-agentica.pdf); [ElDerecho](https://elderecho.com/la-aepd-publica-unas-orientaciones-sobre-ia-agentica-desde-la-perspectiva-de-proteccion-de-datos); [Osborne Clarke](https://www.osborneclarke.com/es/insights/orientaciones-de-la-aepd-sobre-ia-agentica-y-proteccion-de-datos-por-que-es-necesario); [Andersen](https://es.andersen.com/wp-content/uploads/2026/03/Alerta-Legaltech-Andersen_AEPD_IA-1.pdf)
- The AEPD also has a chatbot recommendations infographic ("Un chatbot no es un juguete") — [Selectra](https://selectra.es/internet-telefono/noticias/chatbots-ia-2026-datos-no-compartir) (secondary; content not retrieved)
- **EU–US Data Privacy Framework** [IN FORCE but under challenge]: the General Court upheld it on 3 Sept 2025 (T-553/23 Latombe). The appeal C-703/25 P is pending before the CJEU (Microsoft intervened, June 2026). The DPF stays valid until the Court rules. — [WilmerHale](https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law-blog/20251201-european-court-of-justice-to-review-challenge-to-eu-us-data-privacy-framework); [IEU Monitoring](https://ieu-monitoring.com/editorial/microsoft-backs-eu-commission-in-eu-court-case-on-transatlantic-data-flows-and-privacy/1244467/)
- **LLM EU data-residency options (2026)** (secondary vendor-comparison sources; verify with vendors):
  - OpenAI reportedly offers per-project EEA/Swiss data residency, sales-gated, with zero-data-retention for eligible customers.
  - Anthropic's direct API reportedly offers only "us"/"global" geographies. The EU route is AWS Bedrock (e.g., Ireland/Stockholm regions) or Google Vertex AI EU regions.
  - "EU residency" does not remove exposure to the US CLOUD Act.
  — [Blck Alpaca](https://blckalpaca.at/en/knowledge-base/ai-agents/deploy-ai-agents-gdpr-compliant/eu-data-residency-for-llms-where-your-data-is-processed); [Cloudmagazin, 22 Apr 2026](https://www.cloudmagazin.com/en/2026/04/22/aws-bedrock-anthropic-api-or-self-hosted-ai-inference/); [First AI Movers](https://articles.firstaimovers.com/articles/ai-data-residency-guide-european-smes-2026/)
- ICAM AI guide: external providers must meet the same confidentiality standards as the firm, and "la delegación tecnológica no puede implicar la delegación de responsabilidad". — [Legal Today](https://www.legaltoday.com/actualidad-juridica/noticias-de-derecho/el-icam-lanza-una-guia-que-ofrece-criterios-para-integrar-la-ia-en-los-despachos-2025-10-07/)
- **Ley 10/2025 de servicios de atención a la clientela** (BOE 27 Dec 2025, in force 28 Dec 2025, 12-month adaptation period) [IN FORCE]:
  - Art. 8 bans automated systems as the *only* customer-service channel and requires human attention on request.
  - Scope (art. 2): basic-service sectors, plus other consumer-facing companies with ≥250 workers, >€50M turnover or >€43M balance sheet.
  - **A solo lawyer is outside its scope.**
  — [BOE – Ley 10/2025](https://www.boe.es/buscar/act.php?id=BOE-A-2025-26698)

### Inferences
**Secrecy reaches pre-engagement chats.** CD 5.1 covers facts learned "por razón de cualquiera de las modalidades de su actuación profesional", and CD 5.11 protects consultations even with a future adverse party. Prospective-client chat content should therefore be treated as secret.
- Sending it to an LLM provider is acceptable only if the provider is bound like a collaborator (CD 5.7; EGAE 22.4):
  - an art. 28 DPA;
  - confidentiality clauses;
  - **no training on inputs or outputs**;
  - zero or short retention and no human review by the provider;
  - EU processing preferred;
  - sub-processor list;
  - breach notification;
  - deletion on termination.

**Transfers.**
- If the provider is US-based: rely on DPF certification or SCCs plus a transfer impact assessment, and record it in the privacy policy.
- Prefer EU-region inference (Bedrock or Vertex EU, OpenAI EU residency, or an EU-native provider) to cut transfer risk.
- The DPF is under CJEU appeal, so keep a fallback (SCCs or a switchable EU model).

**Minimisation by design.**
1. The bot collects first only **contact data + area of law + names of the parties** (for a conflict check under EGAE 16.3 / CD 5.11 and 12.C).
2. It asks the user **not** to share detailed facts or documents until Raúl has cleared conflicts and accepted the matter.
3. Strip or pseudonymise identifiers before sending to the LLM where feasible.
4. Disable vendor logging.
5. Set short transcript retention.
6. Give no persistent "memory" across sessions unless needed (AEPD agentic guidance).

**Recording and transcript notice.** Storing chat transcripts is akin to recording a telematic conversation (EGAE 22.3; CD 5.4). Show a prior notice and get consent before the chat starts: "Esta conversación se guarda X días para que el abogado pueda revisar su consulta".

**Legal-advice risk.** EGAE 16.1 makes online advice professional practice. A chatbot reply on his site is his professional act, with civil liability and deontological exposure. The bot must:
- identify him (name, Colegio, nº) **before** any service (EGAE 16.2; CD 12.B.1);
- give only **general legal information** with a clear disclaimer that it is not advice and creates no lawyer–client relationship;
- never estimate success probabilities or case value (CD 12.A.7; EGAE 48.6; CD 6.3.d);
- never say "tiene usted derecho a…", "seguro que gana";
- escalate to a human (Raúl) for anything specific;
- handle urgency: deadlines, detention (detenido), violence. Route those to phone or 112 or the turno de oficio and do not let the bot answer them;
- tell users about legal aid (asistencia jurídica gratuita), which LO 5/2024 art. 6.2.g lists among information duties;
- keep logs for supervision. The CGAE circular and Libro Blanco require human supervision, verification and documented AI use.

**AI agents interacting with the site** (third-party assistants booking or submitting on a user's behalf).
- Identity verification is still required before accepting an engagement (EGAE 16.3).
- Consent and contract acceptance should be confirmed by the human data subject, e.g. by email confirmation or double opt-in.
- Rate-limit and validate automated submissions.
- Consider a machine-readable TDM opt-out (robots.txt / TDM-reservation) if he wants to reserve blog content from AI training (DSM Directive 2019/790 art. 4(3) — [EUR-Lex](https://eur-lex.europa.eu/eli/dir/2019/790/oj), not re-fetched). This conflicts with GEO/AI-visibility goals, so it is a business decision.

**WhatsApp.** Using WhatsApp (Meta) for client communications raises the same processor, transfer and secrecy issues. Disclose it, and avoid it for documents and sensitive facts.

### Gaps
- The full text of the AEPD agentic-AI guidance was not read. Its specific recommendations on controller/processor roles, DPIA thresholds and logging come from secondary summaries.
- No primary vendor documentation was verified for EU residency or zero-retention terms in Nov 2026. Check the current DPAs and terms for the chosen provider.
- No CGAE or AEPD document specifically on **lawyer intake chatbots** was found.
- Whether a DPIA (GDPR art. 35) is mandatory for an intake chatbot is unresolved. It is likely advisable given new technology plus potentially sensitive or criminal data. The AEPD's list of processing requiring a DPIA was not checked.

---

## 4. EU AI Act (Reg. 2024/1689) art. 50 transparency, the AI Omnibus, the Code of Practice, Spain's AI bill and AESIA: requirements for an automated blog and a chatbot

### Takeaway
**Art. 50 has applied since 2 August 2026 and was NOT postponed by the AI Omnibus (Reg. (EU) 2026/1744).** The only exception is a grace period to **2 Dec 2026** for providers' machine-readable marking (art. 50(2)) of generative systems already on the market before 2 Aug 2026.
- **Chatbot**: users must be told they are talking to AI, at the latest at first interaction, perceivably and accessibly.
- **AI blog**: AI-generated text published to inform the public on matters of public interest must be disclosed, **unless** it underwent genuine human review or editorial control by someone holding editorial responsibility. The Code of Practice expects a **documented** review workflow.
- **Photorealistic AI images** resembling real people, places, objects or events count as "deep fakes" and must be labelled.
- Spain's **Proyecto de Ley Orgánica para el buen uso y la gobernanza de la IA** (AESIA as supervisor) is **still in Parliament [PENDING]**.

### Cited Findings
- **AI Omnibus = Regulation (EU) 2026/1744 of 8 July 2026** [IN FORCE]: OJ 24 July 2026, in force 27 July 2026.
  - Art. 50(2) marking for generative systems placed on the market before 2 Aug 2026: transitional period to **2 Dec 2026**. The Commission had proposed 6 months and Parliament 3.
  - Annex III high-risk obligations delayed to 2 Dec 2027; Annex I to 2 Aug 2028.
  - Art. 4 AI literacy kept in softened form: providers and deployers must "adopt measures to support AI literacy" of staff, and the duty "does not require a specific literacy level".
  - SMC (small mid-cap) relief added.
  — [Cuatrecasas](https://www.cuatrecasas.com/en/spain/intellectual-property/art/digital-omnibus-ai-has-been-published); [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/); [Jones Walker](https://www.joneswalker.com/en/insights/blogs/ai-law-blog/yes-august-2-still-matters-the-eu-approved-a-high-risk-ai-delay-but-most-trans.html)
- Gibson Dunn: the broader art. 50 obligations, "including the requirement to disclose to users when they are interacting with AI systems", proceed from 2 Aug 2026. — [Gibson Dunn](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/)
- AI Act text [IN FORCE] — [EUR-Lex Reg. 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) (not re-fetched; well-established wording):
  - **Art. 50(1)**: providers must design systems "intended to interact directly with natural persons" so that people are informed they are interacting with an AI system, unless obvious.
  - **Art. 50(4) first subparagraph**: deployers of systems generating **deep fakes** (image, audio, video) must disclose that the content is artificially generated or manipulated.
  - **Art. 50(4) second subparagraph**: deployers of a system that generates or manipulates **text published with the purpose of informing the public on matters of public interest** must disclose this, unless "the AI-generated content has undergone a process of human review or editorial control and… a natural or legal person holds editorial responsibility for the publication".
  - **Art. 50(5)**: information must be given "in a clear and distinguishable manner at the latest at the time of the first interaction or exposure" and conform to accessibility requirements.
  - **Art. 3(60)**: a deep fake is AI-generated or manipulated image, audio or video "that resembles existing persons, objects, places, entities or events and would falsely appear to a person to be authentic or truthful".
  - **Art. 99(4)**: breaches of art. 50 are fined up to €15M or 3% of worldwide turnover. For SMEs the lower of the two applies (art. 99(6)).
- **Commission Guidelines on art. 50** (final, 20 July 2026, C(2026) 5054) [SOFT LAW] — [European Commission](https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems); [Paul Weiss](https://www.paulweiss.com/insights/client-memos/eu-finalises-transparency-rules-for-ai-generated-content); [Global Policy Watch on draft](https://www.globalpolicywatch.com/2026/05/10-takeaways-european-commission-draft-guidelines-on-ai-transparency-under-the-eu-ai-act/):
  - Chatbot disclosure must come "at the latest on first interaction or exposure" and be perceivable in practice. Disclosure buried in terms, machine-readable only, or generic is **insufficient**.
  - The "obvious" exception is construed narrowly, and the bar is higher where the audience may include elderly people or people with disabilities.
  - **AI agents must disclose their artificial nature and on whose behalf they act.**
  - Obligations attach to AI *systems*, so application-layer builders on third-party models are covered.
  - **Art. 50(4) public-interest text**: construed broadly (matters open to public debate, including consumer safety and public health), and the publisher's purpose matters. A chatbot reply seen only by the requesting user is excluded, as are product descriptions and fiction.
  - **Human-review exception**: requires review "by a natural or legal person with responsibility" and relevant competence. **Spell-checking or cursory sign-off is insufficient**, and any substantive AI edit after the human review removes the exception.
  - Content published before 2 Aug 2026 need not be labelled retroactively.
- **Code of Practice on Transparency / marking and labelling of AI-generated content** (final published ~10 June 2026) [SOFT LAW]:
  - It has a provider part (marking and detection) and a deployer part (labelling deep fakes and public-interest text).
  - It says the editorial exception requires **documented workflows**.
  - Labels must be recognisable without interaction and perceivable at first exposure.
  - **Three EU icons** have been finalised: fully AI-generated, AI-modified, and a basic icon with an interactive second layer.
  - The Commission and AI Board gave a positive adequacy assessment, and about 190 signatories were reported by 31 July 2026.
  — [European Commission](https://digital-strategy.ec.europa.eu/en/news/commission-publishes-code-practice-marking-and-labelling-ai-generated-content); [Jones Day](https://www.jonesday.com/en/insights/2026/06/european-commission-publishes-final-code-of-practice-on-marking-and-labelling-aigenerated-content); [Paul Weiss](https://www.paulweiss.com/insights/client-memos/eu-finalises-transparency-rules-for-ai-generated-content)
- **Spain: Proyecto de Ley Orgánica para el buen uso y la gobernanza de la IA** [PENDING]:
  - Approved by the Consejo de Ministros on **26 May 2026** and published in BOCG, Congreso, Serie A, núm. 97-1, on 12 June 2026. It is an organic law, so it needs an absolute majority.
  - **AESIA** (A Coruña) is the central supervisor and single point of contact. The AEPD, Banco de España and CGPJ supervise their own sectors.
  — [La Moncloa](https://www.lamoncloa.gob.es/consejodeministros/resumenes/paginas/2026/260526-rueda-prensa-ministros.aspx); [BOCG PDF](https://www.congreso.es/public_oficiales/L15/CONG/BOCG/A/BOCG-15-A-97-1.PDF); [Finreg360](https://finreg360.com/alerta/el-congreso-inicia-el-tramite-del-proyecto-de-ley-organica-para-el-buen-uso-y-la-gobernanza-de-la-inteligencia-artificial/)
  - Reported sanctions: up to €35M or 7% for very serious infringements (prohibited practices); 15M or 3% for high-risk systems without human oversight; minor ones "desde 6.000 euros" up to €500k or 0.5%.
  - The press reports the law may enter into force "antes del final de 2027", meaning there is no national sanctioning machinery for art. 50 yet.
  - Xataka reports labelling rules for images/video (a legible "AI" watermark), audio and non-prohibited deep fakes ("clara y distinguible").
  — [Xataka](https://www.xataka.com/legislacion-y-derechos/espana-aprueba-su-ley-ia-deepfakes-sexuales-fuera-etiqueta-ia-obligatoria-multas-millonarias-al-sector-privado); [Economist & Jurist](https://www.economistjurist.es/zbloque-1/ley-organica-de-ia-espana-aterriza-el-ai-act-con-aesia-sanciones-y-sandboxes/); [HSF Kramer](https://www.hsfkramer.com/notes/madrid/2026-posts/alerta-espana-avanza-implementacion-reglamento-europeo-ia-junio-2026) (secondary; the article-level labelling provisions in the bill were not verified)

### Inferences
**Role allocation.**
- If Raúl, or the developer on his behalf, builds and puts into service a chatbot under his name on top of an LLM API, he is most likely the **provider** of that AI *system* (AI Act art. 3(3), "under its own name"), and therefore bound by art. 50(1).
- He is also the **deployer** for art. 50(4), so he must do both.
- A lawyer's intake chatbot or blog generator is **not high-risk** under Annex III, since the justice-related items target judicial authorities. Art. 50 and art. 4 (AI literacy) are the relevant duties.

**Chatbot requirements.**
1. A persistent, visible statement **before** the first message, e.g. "Está hablando con un asistente de inteligencia artificial, no con una persona ni con el abogado". Repeat it in the chat header. Make it accessible: screen-reader text, contrast, keyboard (art. 50(5)).
2. Identify on whose behalf it acts: "asistente del despacho de Raúl Santana Cabrera, abogado, ICALPA nº X". This also satisfies EGAE 16.2 and CD 21.3.a.
3. Provide a human-handover option (best practice; Ley 10/2025 does not legally apply).
4. If the bot generates voice or images, label them.
5. Do not give it a human name or photo that suggests a human.

**Automated blog with lawyer review.** Legal-explainer posts (new laws, consumer rights, housing, family law) very plausibly count as "informing the public on matters of public interest" under the broad reading in the Guidelines. Two compliant paths:
- **(A) Rely on the editorial exception.** Raúl, as the person with competence and editorial responsibility, substantively reviews each post. Keep a **documented workflow log** per post: draft version, reviewer, date, the substantive changes and an approval record. Block any AI regeneration after approval, or re-review if one happens. Show a byline: "Revisado y publicado bajo la responsabilidad de Raúl Santana Cabrera, abogado (ICALPA nº X)".
- **(B) Disclose anyway.** Add a visible label: "Contenido elaborado con asistencia de IA y revisado por el abogado", optionally with the EU icon.
- **Recommended: do both.** The extra label costs little, aligns with CD 6.2 ("veraz"), and CGAE stresses transparency. Do **not** publish unreviewed AI posts.

**AI images.**
- Photorealistic AI images of people, courtrooms, offices or recognisable places can qualify as deep fakes ("objects, places… plausibly real") and must be labelled. Use an on-image or caption label plus the EU icon.
- Prefer clearly illustrative, non-photorealistic graphics, or real photos.
- **Never** create an AI image or video of Raúl or a "client" that could pass as real without a label. Fake clients would also breach CD 6.2 truthfulness and the consumer-law rules on misleading practices.

**Provider marking (art. 50(2)).** This falls on the LLM or image-model vendor. Do not strip C2PA or watermark metadata from AI images in the build pipeline, e.g. during image optimisation. Keep it where feasible.

**AI literacy (art. 4).** Raúl and any staff using the tools should have documented basic training: a short internal AI-use policy and training record. This is light-touch after the Omnibus.

**Enforcement.** Spain has not yet passed its implementing law, so national penalties for art. 50 are not yet operational. The obligations still apply directly, and complaints or deontological proceedings remain possible.

### Gaps
- The bill's specific article on labelling and the infringement class for failing to label were not verified in the BOCG text. Amendments after June 2026 were not checked.
- The exact wording of the Guidelines on "editorial responsibility" for professional or commercial blogs (as opposed to news media) was not retrieved. Whether a law-firm marketing blog is "public interest" text is a reasoned inference.
- The design of the EU icons, and whether their use is mandatory for deployers who do not sign the Code, was not verified.

---

## 5. Accessibility: European Accessibility Act / Ley 11/2023

### Takeaway
Ley 11/2023 (Title I, applicable from 28 June 2025) covers "servicios de comercio electrónico" offered to consumers. A lawyer's site that sells paid consultations online could fall within that definition, but **microenterprises providing services are exempt** (art. 3.3), and Raúl is almost certainly a microenterprise (<10 staff, ≤€2M). So it is **likely not legally mandatory**. Building to **WCAG 2.2 AA** is still strongly recommended, and AI Act art. 50(5) independently requires AI disclosures to be accessible. [IN FORCE, with exemption]

### Cited Findings
- Ley 11/2023 art. 2.2.f lists "Servicios de comercio electrónico" among the covered consumer services. **Art. 3.3**: "Las microempresas que presten servicios estarán exentas de cumplir los requisitos de accesibilidad" and related compliance obligations. Art. 13.2 and 13.4 require covered providers to publish accessibility information in their general conditions, in accessible form. — [BOE – Ley 11/2023](https://www.boe.es/eli/es/l/2023/05/08/11/con)
- Application from 28 June 2025. Providers already operating can use existing products until 28 June 2030 (transitional period). Microenterprise means <10 employees and turnover or balance sheet ≤ €2M. The e-commerce definition is services provided at a distance via websites and apps at the consumer's request with a view to concluding a contract. — [Cuatrecasas](https://www.cuatrecasas.com/es/global/propiedad-intelectual/art/claves-proxima-entrada-vigor-ley-accesibilidad-espana); [Madrid infographic](https://www.madrid.es/UnidadesDescentralizadas/OfAccesibilidad/EI/RECURSOS_Y_DOCUMENTACION/INFOGRAFIAS/Ficheros%20Infograf%C3%ADas/Directiva%20Europea%20Accesibilidad.pdf); [Ecija](https://files.griddo.ecija.com/ecija-ip-1.pdf)
- LO 5/2024 art. 6.1 requires information to clients to be "accesible universalmente". — [BOE – LO 5/2024](https://www.boe.es/buscar/act.php?id=BOE-A-2024-23630)
- AI Act art. 50(5): AI disclosures must conform to applicable accessibility requirements. — [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) (not re-fetched)

### Inferences
- Exempt as a microenterprise, but: (a) the exemption is lost if the practice grows past the thresholds; (b) LO 5/2024 art. 6.1 demands "universally accessible" client information; (c) the chatbot and AI labels must be accessible anyway (art. 50(5)); (d) accessibility helps SEO and GEO.
- **Target WCAG 2.2 AA** for forms, booking, payment, chatbot widget (focus management, ARIA live regions, keyboard), cookie banner and PDFs such as the hoja de encargo. Optionally publish a voluntary accessibility statement.

### Gaps
- The text of Ley 11/2023's disposición transitoria única was not read; the 2030 date comes from secondary sources.
- Whether RD 193/2023 (basic accessibility conditions for goods and services available to the public) imposes web duties on private professionals was not researched.

---

## 6. Consumer and distance-contract law for online booking and paid consultations; hoja de encargo and budget duties

### Takeaway
Selling a paid consultation online to an individual is a **distance service contract with a consumer**. It needs TRLGDCU pre-contractual information, a "pay" button with explicit wording, confirmation, and handling of the **14-day withdrawal right**, which is lost once the service is fully performed with prior express consent and acknowledgement. LSSI e-contracting duties also apply.
- Professional rules add: identification and Colegio before any payment (EGAE 16.2); fee and costs information (EGAE 48.4; CD 12.B.2.b and 14.1); the client's right to a written **hoja de encargo with a prior budget** (LO 5/2024 art. 15.1). CD art. 15 lists what a hoja de encargo must contain.
- If the site shows reviews, the amended TRLGDCU art. 20.4 applies (see section 7).

### Cited Findings
- **LO 5/2024 art. 15.1** [IN FORCE]: anyone may request that the engagement be formalised in writing "en una hoja de encargo o medio equivalente", including client rights, essential steps and "el presupuesto previo con los honorarios y costes derivados de su actuación". Art. 6.2.d–e: inform on general costs, how fees are set, and costs orders. — [BOE – LO 5/2024](https://www.boe.es/buscar/act.php?id=BOE-A-2024-23630)
- **EGAE art. 48.4**: inform the client of fees and costs and the possible consequences of a costs order. **Art. 16.2**: identity and Colegio before providing the online service and before requesting payment. — [BOE – EGAE](https://www.boe.es/buscar/act.php?id=BOE-A-2021-4568)
- **CD art. 14.1**: fees are freely agreed, "debiendo informar previamente su importe aproximado o las bases para su determinación". **CD art. 15** (if a hoja de encargo is signed) must state:
  - a. object;
  - b. included actions;
  - c. "El precio… deberá figurar en forma clara y destacada", or the bases for determining it;
  - d. suplidos;
  - e. payment timing;
  - f. consequences of early termination;
  - g. AML obligations;
  - h. arbitration;
  - i. general terms.
  **CD art. 16**: fund provisions and receipts and invoices. — [CD 2019](https://www.ical.es/wp-content/uploads/2019/11/CODIGO-DEONTOLOGICO.pdf)
- The CGAE's guidance says Colegios provide hoja de encargo templates. — (search summary, see [abogacia.es consumer blog](https://www.abogacia.es/publicaciones/blogs/blog-de-derecho-de-los-los-consumidores/la-proteccion-de-los-consumidores-en-el-nuevo-estatuto-de-la-abogacia/))
- **TRLGDCU (RDLeg 1/2007)**, consolidated with Ley 10/2025 amendments [IN FORCE] — [BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555) (articles below not re-fetched except as noted):
  - art. 97: pre-contractual information for distance contracts. Ley 10/2025 amended 97.1.f and 97.1.p on personalised prices and renewals (confirmed via [BOE – Ley 10/2025 DF 3ª](https://www.boe.es/buscar/act.php?id=BOE-A-2025-26698)).
  - art. 98: the order button must state an obligation to pay.
  - art. 102: 14-day withdrawal right.
  - art. 103.a: exception for services fully performed when execution began with the consumer's prior express consent and acknowledgement that the right is lost on full performance.
  - art. 108: proportional payment if the consumer asked for performance to start during the withdrawal period.
  - art. 20.1.c (as amended by Ley 10/2025): full final price, and limits on automated price personalisation.
- LSSI arts. 27–28: information before online contracting (steps, filing of the contract, error correction, language, terms) and confirmation of acceptance — [BOE – LSSI](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758) (not re-fetched)

### Inferences
**Booking and payment flow (e.g., Stripe).**
1. Before payment: show lawyer identity + Colegio + nº, a description of the consultation (format, duration, what is and is not included), the full price with IGIC, how and when it is delivered, cancellation and rescheduling policy, withdrawal-right information and model form, a complaints channel and the general terms.
2. Button text: "Reservar y pagar" or "Pagar consulta (obligación de pago)".
3. If the consultation is within 14 days, include an **explicit checkbox**: "Solicito que la consulta se preste antes de que finalice el plazo de desistimiento y reconozco que, una vez prestada completamente, perderé el derecho de desistimiento." Without it, the consumer could withdraw and reclaim payment.
4. Send a confirmation email with all the information on a durable medium.
5. Issue an invoice with IGIC.

**Conflict check before payment.** Ask for the adverse party's name before accepting payment (EGAE 16.3; CD 5.11). Refund if a conflict appears.

**Hoja de encargo.** Offer a downloadable Colegio-style template and an e-signature flow (qualified or advanced e-signature, in line with EGAE 16.4's call for "firma electrónica segura") for engagements beyond the initial consultation. Include the CD art. 15 items and the LO 5/2024 art. 15.1 "presupuesto previo". Add a fee-information page explaining how fees are set, the risk of costs orders (costas), and legal aid (asistencia jurídica gratuita) eligibility (LO 5/2024 art. 6.2).

**Stripe.** List it in the privacy policy as processor or independent controller (per Stripe's terms) with transfer safeguards. Do not store card data on the site.

**EU ODR platform.** It was discontinued in 2025 under Reg. (EU) 2024/3228, so do not link to it. This comes from background knowledge and was not verified in this session.

### Gaps
- TRLGDCU arts. 97, 98, 102, 103 and 108 were not re-fetched this session; their wording comes from background knowledge. Verify before drafting the terms.
- Whether legal services contracted after an online booking are "distance contracts" when the engagement is later signed in person is fact-specific.
- The CJEU's treatment of lawyer–consumer contracts (e.g., C-537/13 Šiba, unfair terms) was not re-verified.

---

## 7. Google reviews, testimonials, ratings on the website and review schema

### Takeaway
Three layers apply:
1. **Deontology**: embedding identifiable client reviews or testimonials requires written client authorisation, and nothing secret may be revealed (CD 6.3.a/e; EGAE 20.2.a/e).
2. **Consumer law**: since Ley 10/2025, TRLGDCU art. 20.4 requires anyone giving access to reviews to say whether and how they verify the reviewers are real customers, and how reviews are processed. Reviews must relate to purchases or uses in the prior 30 days. Fake or incentivised reviews are blacklisted under LCD art. 27.
3. **Google**: self-serving review markup for LocalBusiness/Organization (which includes LegalService and Attorney) has not produced star snippets since 2019. Google added a rule against fake or undisclosed incentivised reviews in July 2026.

### Cited Findings
- CD art. 6.3.e: no "referencia a clientes sin su autorización escrita". Art. 6.3.a: no revelation of secret facts. Art. 6.2: objective and truthful. — [CD 2019](https://www.ical.es/wp-content/uploads/2019/11/CODIGO-DEONTOLOGICO.pdf). EGAE art. 20.2.e: no references to clients without authorisation. — [BOE – EGAE](https://www.boe.es/buscar/act.php?id=BOE-A-2021-4568)
- **TRLGDCU art. 20.4 as amended by Ley 10/2025 (DF 3ª)** [IN FORCE since 28 Dec 2025]:
  - commercial practices giving access to reviews must state whether the trader guarantees that reviews were made by people who actually used or bought the product or service;
  - the trader must give "información clara… sobre la manera en que se procesan las reseñas";
  - reviews "deberán referirse a productos o servicios adquiridos o utilizados en los treinta días naturales anteriores";
  - the trader may reply through the same channel and may request removal of fake or misleading reviews with reliable proof.
  — [BOE – Ley 10/2025](https://www.boe.es/buscar/act.php?id=BOE-A-2025-26698)
- RDL 24/2021 (in force 28 May 2022) added to LCD art. 27 (apartados 7 and 8) as always-misleading practices: claiming reviews come from real consumers without reasonable verification steps, and submitting or commissioning fake or distorted reviews. Failure to give the art. 20 review information is a misleading practice. — [Cuatrecasas](https://www.cuatrecasas.com/es/spain/propiedad-intelectual/art/resenas-falsas-online-regulacion-actual-vias-actuacion); [Garrigues](https://www.garrigues.com/es_ES/noticia/fake-reviews-real-decreto-ley-242021-introduce-nuevas-medidas-evitar-resenas-falsas-bienes-o)
- Google (Sept 2019): "self-serving" reviews, meaning reviews about entity A placed on entity A's site "either directly in their markup or via an embedded 3rd party widget", are no longer shown as review rich results for LocalBusiness and Organization types. There is no manual action just for having them. — [Google Search Central blog](https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful)
- Google added a guideline (reported 24 July 2026): "Don't include fake or undisclosed incentivized reviews" in content or review markup. — [TechWyse](https://www.techwyse.com/news/search-news/google-review-snippet-structured-data-incentivized-reviews) (secondary)

### Inferences
**Safest pattern.** Show the aggregate Google rating as plain text with a link to the Google Business Profile ("4,9 en Google · ver reseñas"), plus a short note on how reviews are handled: "Las reseñas se publican en Google por sus autores; el despacho no verifica que procedan de clientes y no ofrece incentivos". This addresses TRLGDCU 20.4 transparency.

**If individual reviews are shown on-site.**
- Only with the client's **written** authorisation (CD 6.3.e).
- Strip any case details.
- Prefer initials.
- Disclose the verification method.
- Respect the 30-day rule where the site itself collects reviews.
- Never write, edit or AI-generate testimonials. Never offer discounts for reviews (LCD 27; Google policy).

**Schema.** Using `LegalService`/`Attorney` with `aggregateRating` from his own or embedded reviews will not earn stars and should be omitted to avoid policy issues. Use LocalBusiness/LegalService schema for NAP (name, address, phone), the Colegio membership (`memberOf`), `hasCredential` and similar. Do not add review markup.

**Replies to Google reviews** (on Google or AI-drafted). Never confirm the reviewer is a client or mention case facts (secrecy). A neutral standard reply is the safe template.

### Gaps
- No Colegio or CGAE ruling was found specifically on lawyers embedding Google reviews.
- How the 30-day rule in art. 20.4 applies to legal services that last months or years is unclear. No interpretive guidance was found.
- Google's July 2026 guideline was confirmed only through secondary coverage.

---

## 8. Copyright and image rights for AI-generated images; reuse of BOE and CENDOJ content

### Takeaway
Under Spanish law only a natural person can be an author (LPI art. 5.1). Purely AI-generated images or text without creative human input are unlikely to be protected, so others can copy them. The lawyer is still liable for any infringing output.
- Statutes and court decisions are **not copyrighted** (LPI art. 13). **BOE** content may be reused, commercially too, with attribution and a link (licence of 27 June 2024).
- **CENDOJ** case law may be consulted and quoted case by case. **Commercial use of the database and bulk downloading are prohibited** without following CGPJ procedures. Decisions are published already anonymised.
- AI deep-fake labelling (section 4) and image rights of real people (LO 1/1982) apply.

### Cited Findings
- BOE reuse [IN FORCE]: conditions follow a standard licence approved by BOE Agency Resolution of **27 June 2024** under Ley 37/2007. Reuse is permitted for commercial and non-commercial purposes. The source must be cited, e.g. "Fuente de los datos: Agencia Estatal Boletín Oficial del Estado", "incluyendo en todo caso un enlace a la sede electrónica" of the BOE. Some documents may carry special conditions. — [BOE – Aviso legal](https://www.boe.es/informacion/aviso_legal)
- CENDOJ:
  - Its legal notice (as reproduced in case law and guides) says users may consult documents "para su uso particular. **No está permitida la utilización de la base de datos para usos comerciales, ni la descarga masiva de información.** La reutilización… para la elaboración de bases de datos o con fines comerciales debe seguir el procedimiento y las condiciones establecidas por el CGPJ". — [STS 359/2019 (via Confilegal)](https://confilegal.com/wp-content/uploads/2019/09/STS-359-2019-de-15-de-julio.pdf); [Tesify guide 2026](https://tesify.es/donde-encontrar-jurisprudencia-datos-juridicos-abiertos-tfg-derecho-2026)
  - The CGPJ page says all published decisions "han sido anonimizadas" and reuse follows the LRISP (Ley 37/2007). The legal basis is LOPJ art. 619. — [CGPJ – CENDOJ Jurisprudencia](https://www.poderjudicial.es/cgpj/es/Temas/Centro-de-Documentacion-Judicial--CENDOJ-/Jurisprudencia/)
  - The older CGPJ Reglamento 3/2010 on reuse was annulled by the Tribunal Supremo. — [Legal Today](https://www.legaltoday.com/opinion/articulos-de-opinion/un-monopolio-estatal-mas-la-distribucion-de-sentencias-2010-11-25/); [ElDerecho](https://elderecho.com/el-ts-anula-la-decision-del-cgpj-de-cobrar-150-euros-por-cada-copia-de-sentencia-reutilizada-con-fines-comerciales)
- LPI (RDLeg 1/1996): art. 5.1 says an author is "la persona natural que crea alguna obra". Art. 13 says laws and regulations, "las resoluciones de los órganos jurisdiccionales" and official acts are not subject to IP. — [BOE – LPI](https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930) (not re-fetched)
- The CGAE Libro Blanco presentation noted that some AI technologies use protected content without consent (Lorenzo Silva). — [Legal Today](https://www.legaltoday.com/actualidad-juridica/noticias-de-derecho/abogacia-presenta-el-libro-blanco-sobre-el-uso-de-la-ia-en-la-profesion-el-60-de-los-profesionales-ya-utiliza-aplicaciones-con-inteligencia-artificial-2026-01-30/)

### Inferences
**Automated blog.**
- Quoting and linking individual BOE provisions and CENDOJ judgments is fine: cite the source, keep the meaning, link to the official page, and add BOE attribution.
- **Do not build the blog pipeline on mass scraping of CENDOJ.** That breaches its terms. Fetch decisions individually and cite them by ECLI or Roj.
- Use the BOE's open data and APIs for legislation; those may be reused with attribution.
- Every case-law citation in AI drafts must be verified against CENDOJ or BOE before publishing (CGAE circular; risk of hallucinated judgments).

**AI images.**
- Treat them as non-exclusive assets (likely unprotected).
- Check the image model's licence terms for commercial use and indemnities.
- Avoid prompts that imitate identifiable artists or brands.
- Never generate images of real identifiable people (Raúl included) without consent and labelling. Use of a person's image requires consent under LO 1/1982 (not re-fetched).
- Label photorealistic AI images (AI Act art. 50(4)).
- Keep any C2PA provenance metadata.

**AI-written text.** Raúl's substantive edits make human authorship, and thus protection, more likely. Run a plagiarism or similarity check on AI drafts to avoid reproducing third-party texts such as other firms' blogs or publishers' commentary.

### Gaps
- The current CGPJ/CENDOJ reuse licence procedure and any fees in 2026 were not verified on an official page; the legal-notice wording comes from secondary reproductions.
- No Spanish court decision on the copyright status of AI-generated works was found in this session.
- The BOE licence text of 27 June 2024 was not read in full.

---

## 9. Concrete website and implementation requirements: synthesis checklist

### Takeaway
Most obligations turn into a manageable set of build requirements:
- complete identification (Colegio + nº everywhere);
- consent-correct cookies and analytics;
- a minimised, secrecy-grade, disclosed intake chatbot;
- a documented human-review workflow and AI labels for the blog;
- deontology-safe marketing content rules;
- consumer-law-compliant paid booking;
- WCAG 2.2 AA.

Items marked [PENDING] should be monitored.

### Cited Findings
- All requirements below derive from the findings cited in sections 0–8: LSSI art. 10, 20, 21, 22.2 ([BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758)); EGAE arts. 16, 20, 22, 48 ([BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2021-4568)); CD arts. 5, 6, 7, 12, 14, 15, 18, 21 ([CD 2019](https://www.ical.es/wp-content/uploads/2019/11/CODIGO-DEONTOLOGICO.pdf)); LO 5/2024 arts. 6, 15, 16 ([BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2024-23630)); AEPD cookie and audience guides ([Finreg360](https://finreg360.com/alerta/la-aepd-publica-la-guia-uso-de-cookies-para-herramientas-de-medicion-de-audiencias/)); AI Act art. 50, Omnibus, Guidelines and Code ([Cuatrecasas](https://www.cuatrecasas.com/en/spain/intellectual-property/art/digital-omnibus-ai-has-been-published); [Paul Weiss](https://www.paulweiss.com/insights/client-memos/eu-finalises-transparency-rules-for-ai-generated-content)); TRLGDCU art. 20.4 per Ley 10/2025 ([BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2025-26698)); Ley 11/2023 arts. 2.2.f and 3.3 ([BOE](https://www.boe.es/eli/es/l/2023/05/08/11/con)); BOE and CENDOJ reuse ([BOE aviso legal](https://www.boe.es/informacion/aviso_legal); [CGPJ](https://www.poderjudicial.es/cgpj/es/Temas/Centro-de-Documentacion-Judicial--CENDOJ-/Jurisprudencia/)).

### Inferences: implementation checklist

**A. Identification and legal pages**
- [ ] Confirm with the client his Colegio (presumably ICA Las Palmas), nº colegiado, título and year.
- [ ] Footer on **every page**: "Raúl Santana Cabrera · Abogado · Colegiado nº X del Ilustre Colegio de la Abogacía de Las Palmas", plus NIF, address, email and phone (LSSI 10; CD 6.3 and 21.3.a; EGAE 16.2).
- [ ] Aviso legal: all LSSI 10.1 items, including título, issuing State (España), links to the EGAE (BOE) and the Código Deontológico (abogacia.es), and any code of conduct.
- [ ] Every ad landing page (Google Ads, social) shows the Colegio (CD 6.3).
- [ ] Use "abogado" only while he is colegiado ejerciente (EGAE 4.2).

**B. Marketing content rules (enforce in the CMS and the AI prompt or system rules)**
- [ ] Banned phrases and claims: promises of results; success rates; "garantizado"; "100%"; unverifiable superlatives ("el mejor"); denigrating comparisons; "especialista" unless substantiated (keep the evidence file); litigation-inciting CTAs.
- [ ] No client names, case facts or identifiable "casos de éxito" without written authorisation, and never secret facts even with authorisation.
- [ ] No reactive content targeting victims of catastrophes or accidents within 45 days of the event.
- [ ] "Free consultation" only if genuinely free, with scope and duration stated.
- [ ] Prices: clear, final, "IGIC incluido", with what is included.
- [ ] Sponsored or guest content clearly labelled "Publicidad" (CD 6.9).
- [ ] No paid referral or lead arrangements without telling clients (CD 18). Agencies and automations act under his responsibility (CD 7.3.c).
- [ ] No bar emblems or justice symbols that could be confused with official ones (CD 6.3.f).

**C. Privacy, cookies and security**
- [ ] Layered privacy policy (GDPR art. 13; LOPDGDD art. 11) covering every processing activity: contact, booking, payment, chatbot, newsletter, analytics. List processors (hosting, email, CRM, booking, Stripe, LLM vendor) and transfers with their safeguards.
- [ ] Sign art. 28 DPAs with every processor. Keep a record of processing activities (art. 30).
- [ ] Cookie banner with equal-weight Aceptar / Rechazar / Configurar; no non-essential scripts before consent; persistent settings link; cookie policy table.
- [ ] Replace Google Analytics with self-hosted first-party analytics meeting the AEPD 2024 exemption (13-month cookie, 25-month data, no sharing or cross-site tracking), or keep GA strictly behind consent.
- [ ] Click-to-load facades for Maps, YouTube and similar; self-hosted fonts; privacy-friendly CAPTCHA.
- [ ] Contact form: minimal fields; first-layer notice; **separate optional** marketing checkbox (LSSI 21); warning not to send sensitive details or documents; TLS; EU-hosted processing; encrypted transport and storage.
- [ ] Confidential document exchange via an encrypted portal or e-signature, not plain email or WhatsApp attachments (EGAE 16.4).
- [ ] Retention schedule implemented as automated deletion: leads and chats 6–12 months (proposal); analytics 25 months; logs 30–90 days; client files per limitation and AML rules.
- [ ] DPIA (recommended) for the chatbot and intake processing.
- [ ] Monitor [PENDING]: the Digital Omnibus cookie and GDPR reform (Parliament position expected 2027) and the CJEU appeal on the DPF (C-703/25 P).

**D. AI intake chatbot**
- [ ] Before the first message: "Está hablando con un asistente de inteligencia artificial del despacho de Raúl Santana Cabrera (abogado, Colegio X nº Y). No es una persona ni presta asesoramiento jurídico." Make it visible, persistent, screen-reader accessible, and not in the terms only (AI Act 50(1) and 50(5); EGAE 16.2).
- [ ] Prior notice and consent for storing the transcript (EGAE 22.3; CD 5.4), with a link to the privacy layer.
- [ ] Flow: contact data → area of law → **parties' names for a conflict check** → asks the user to withhold detailed facts → handover to Raúl or a booking. No document uploads before engagement.
- [ ] Guardrails: general information only; **no** outcome predictions or percentages, no case valuation, no "tiene derecho a…" conclusions; no promises; escalate urgent matters (detention, gender violence, imminent deadlines) to phone, 112 or the turno de oficio; mention asistencia jurídica gratuita.
- [ ] LLM vendor: art. 28 DPA, no training, zero or short retention, EU region (Bedrock or Vertex EU, OpenAI EU residency, or an EU provider), sub-processor list, transfer basis documented. Pseudonymise before the API call where feasible. No cross-session memory.
- [ ] Human-handover button. Raúl reviews all leads; logs are kept for supervision (CGAE circular; ICAM guide).
- [ ] If third-party AI agents submit forms or bookings: confirm with the human by email (double opt-in) and verify identity before accepting an engagement (EGAE 16.3). The site's own agents must disclose that they are AI and on whose behalf they act (Commission art. 50 Guidelines).
- [ ] Internal AI-use policy plus an AI-literacy training record for Raúl and staff (AI Act art. 4 as amended).

**E. Automated blog**
- [ ] Mandatory human-review gate: no auto-publish. Raúl substantively reviews and approves each post.
- [ ] Workflow log per post: AI draft version, reviewer, date, substantive edits, approval. Lock content after approval; any AI regeneration triggers re-review (Art. 50(4) editorial exception plus Code of Practice "documented workflows").
- [ ] Byline: "Revisado y publicado bajo la responsabilidad de Raúl Santana Cabrera, abogado (Colegio X nº Y)", plus a visible "Elaborado con asistencia de IA" label (recommended; consider the EU icon).
- [ ] Verify every legal citation and judgment against the BOE or CENDOJ before publishing. Link to the official source; add the BOE attribution "Fuente: Agencia Estatal Boletín Oficial del Estado" with a link.
- [ ] No CENDOJ bulk scraping. Fetch decisions one at a time and cite by ECLI or Roj.
- [ ] The deontology content rules in block B are applied by the generator's system prompt **and** a pre-publication checklist.
- [ ] Plagiarism or similarity check on drafts.
- [ ] Decide the AI-crawler and TDM policy (robots.txt / TDM reservation) consistently with GEO goals.

**F. Images and media**
- [ ] Prefer real photos (with model releases) or clearly illustrative graphics.
- [ ] Photorealistic AI images: visible "Imagen generada con IA" label or EU icon (AI Act 50(4) deep fake).
- [ ] Never an unlabelled AI image of Raúl or of "clients"; no fake people presented as clients.
- [ ] Keep C2PA or watermark metadata (do not strip it in the image pipeline).
- [ ] Check the image model's commercial licence; avoid imitating identifiable styles or brands.

**G. Reviews and testimonials**
- [ ] Show the Google rating as text with a link to the Google Business Profile, plus a review-handling notice (TRLGDCU 20.4).
- [ ] On-site testimonials only with stored **written** authorisation, anonymised, without case facts, never AI-generated or edited in meaning, never incentivised.
- [ ] No `aggregateRating` or `review` schema for his own LegalService. Keep LocalBusiness/LegalService schema with `memberOf` (Colegio) and credentials.
- [ ] Reply template for Google reviews that never confirms the client relationship or case details.

**H. Paid consultations and booking**
- [ ] Pre-contract page: identity and Colegio, service description (format, duration, scope), price with IGIC, delivery, cancellation and rescheduling, withdrawal information and model form, terms and conditions, complaints contact.
- [ ] Conflict check (parties' names) before payment; refund policy if a conflict appears.
- [ ] Checkbox requesting early performance and acknowledging loss of the withdrawal right on full performance (TRLGDCU 103.a, to verify).
- [ ] Pay button: "Pagar consulta" with explicit payment wording (TRLGDCU 98); confirmation email on a durable medium (LSSI 28); IGIC invoice.
- [ ] Stripe Checkout or Elements (no card data on the site); Stripe listed in the privacy policy.
- [ ] Hoja de encargo template (CD art. 15 items) with a "presupuesto previo" (LO 5/2024 art. 15.1) and an e-signature flow; a fee-information page (how fees are set, costas, asistencia jurídica gratuita).

**I. Accessibility**
- [ ] WCAG 2.2 AA across the site, including the cookie banner, forms, booking, payment, chatbot widget (keyboard, focus, ARIA live regions) and AI labels. Legally voluntary for a microenterprise under Ley 11/2023 art. 3.3, but required for AI disclosures (Art. 50(5)) and consistent with LO 5/2024 art. 6.1.
- [ ] Optional accessibility statement.

**J. Monitoring list ([PENDING] or changing)**
- [ ] Spain's Proyecto de LO de buen uso y gobernanza de la IA (BOCG 12 June 2026) for national labelling rules and AESIA sanctions.
- [ ] The Digital Omnibus on data and cookies (ePrivacy 5(3) and GDPR changes) for consent-free analytics.
- [ ] CJEU C-703/25 P (DPF) for US transfers.
- [ ] Any ICALPA or CGAE circular on AI, digital advertising or chatbots.
- [ ] Google review-snippet policy updates.

### Gaps
- Several statutory texts (TRLGDCU distance-contract articles, LPI, LOPJ 542.3, LOPDGDD arts. 10, 11 and 34, LSSI arts. 21, 27, 28, 38 and 39, AI Act art. 50 and 99 wording) are cited from background knowledge with official URLs but were not re-read in this session. Verify them before final client-facing documents.
- The client's Colegio and nº colegiado are unconfirmed and must be obtained from him.
