# Automated, Lawyer-Reviewed SEO Blog Pipeline for a Small Spanish Law Firm (research date: 2026-11-09)

Scope note: notes cover Google's policy stance, pipeline architecture, data sources and APIs, orchestration and LLM choice, cadence and formats, risks (incl. Spanish AI-hallucination court cases), costs and the market of "autopilot" blog SaaS. Regulatory topics (EU AI Act labelling, deontology/publicity rules, GDPR) belong to another researcher and appear here only where they change the pipeline design. Most SEO-industry figures come from secondary sources (vendor blogs, SEO news sites). They are flagged where relevant. Items not verified against a primary source are marked "secondary" or "unverified".

## 1. Google's stance on AI-generated content (late 2026) and evidence of penalties vs. success

### Takeaway
Google does not penalise AI use as such. It penalises (a) scaled, low-value content "no matter how it's created", and (b) untrustworthy content on YMYL topics like law, where trust carries the most weight. Every official signal from 2024–2026 points the same way: mandatory human fact-checking, real bylines, a "people-first why", and no mass production. Rater guidelines (Jan 2025) tell raters they can give "Lowest" to low-effort AI main content. Since May 15, 2026 the spam policies also cover AI Overviews and AI Mode. Ranking data from 2025–2026 increasingly links heavy, scaled AI output with short-lived gains followed by declines.

### Cited Findings

**Official Google policy (primary sources)**
- Spam policy definition (verbatim): "Scaled content abuse is when many pages are generated for the primary purpose of manipulating search rankings and not helping users… typically focused on creating large amounts of unoriginal content that provides little to no value to users, no matter how it's created." Listed examples include "Using generative AI tools or other similar tools to generate many pages without adding value for users", "Scraping feeds, search results, or other content to generate many pages (including through automated transformations like synonymizing, translating…)", "Stitching or combining content from different web pages without adding value" and "Creating multiple sites with the intent of hiding the scaled nature of the content" — [Google Search Central – Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- The page now uses the heading "Site reputation policy" (not "abuse"): it "applies where third-party content is published on a host site mainly because of that host's already-established ranking signals". Editorial columns, opinion pieces and UGC are listed as not inconsistent with it. The policy introduction also mentions "attempting to manipulate generative AI responses in Google Search" — [Google Search Central – Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- Google's generative-AI guidance says LLMs can hallucinate and site owners should "manually factcheck and review all AI-generated content for accuracy and trustworthiness before publishing". The same review applies to titles, meta descriptions, structured data and alt text. It recommends explaining how automation was used so readers get context. AI-generated ecommerce images must carry IPTC `DigitalSourceType` = `TrainedAlgorithmicMedia` — [Google Search Central – Using generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content). One secondary source says this page was revised on Oct 1, 2026 to add the fact-checking language. Unverified, because the page shows no date — [crawlspider.com](https://www.crawlspider.com/google-ai-content-policy)
- "Who, How, Why" guidance: "We strongly encourage adding accurate authorship information, such as bylines…". Disclose automation "when it would be reasonably expected". "The 'why' should be that you're creating content primarily to help people". Using automation "for the primary purpose of manipulating search rankings" violates the spam policies. On E-E-A-T: "Of these aspects, trust is most important", and strong E-E-A-T gets more weight on "topics that could significantly impact the health, financial stability, or safety of people" (YMYL) — [Google Search Central – Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- On May 15, 2026 Google updated its spam-policy documentation to say the policies apply to generative AI responses in Search, including AI Overviews and AI Mode. No new spam categories were added. Spam tactics used to get featured in AI answers can lead to action against the site — [Search Engine Land](https://searchengineland.com/google-updates-search-spam-policies-to-clarify-it-applies-to-generative-ai-responses-477657); [Search Engine Roundtable](https://www.seroundtable.com/google-spam-policies-apply-ai-responses-41331.html); [PPC Land](https://ppc.land/google-spam-policies-now-officially-cover-ai-overviews-and-ai-mode-in-search)
- Google's guidance for AI features (May 21, 2025, older source): focus on "unique, non-commodity content". Pages that answer "longer, more specific, and follow-up questions" are well placed. Structured data must match visible content. Keep the Business Profile current, since it feeds AI results. Measure conversions, not only clicks — [Google Search Central Blog, May 2025](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)

**Search Quality Rater Guidelines (secondary coverage, no primary PDF fetched)**
- The Jan 23, 2025 revision grew from 170 to 181 pages and mentions "generative AI" for the first time. Raters are told they can rate pages whose main content is AI-generated with little effort or added value as Lowest. The guidelines also say "the use of Generative AI tools alone does not determine the level of effort or Page Quality rating" — [Search Engine Land](https://searchengineland.com/google-quality-raters-content-ai-generated-lowest-quality-454161); [PPC Land](https://ppc.land/google-updates-quality-rater-guidelines-with-ai-content-evaluation-criteria/); [SER](https://www.seroundtable.com/google-search-quality-rater-guidelines-generative-ai-38842.html)
- John Mueller confirmed in April 2025 that raters are asked to flag AI-generated main content, which can receive the Lowest rating — [Search Engine Land](https://searchengineland.com/google-quality-raters-content-ai-generated-lowest-quality-454161)
- A September 2025 revision reportedly reinforced "Lowest" for scaled, low-value content whether human- or AI-made, and added YMYL clarifications and AI Overview examples — [Semrush](https://www.semrush.com/blog/google-expands-rules-on-low-value-content); [PPC Land](https://ppc.land/search-quality-rater-guidelines/)

**2025–2026 algorithm updates (secondary; check against the Google Search Status Dashboard)**
- August 2025 spam update (27 days); March 2026 spam update from March 24 (about 19.5 h); March 2026 core update March 27 – April 8; May 2026 core update May 21 – June 2; June 2026 spam update June 24–26, global, no new policies — [SER March 2026 core](https://www.seroundtable.com/google-march-2026-core-update-41121.html); [PPC Land](https://ppc.land/googles-march-2026-core-update-is-here-and-it-follows-spam-by-just-3-days/); [seo-day.de June spam](https://www.seo-day.de/news/article/google-june-2026-spam-update-has-finished-rolling-out?lang=en); [TechWyse](https://www.techwyse.com/?p=76816)
- Sources conflict on a late-summer 2026 spam update. Some date it August 18–21, 2026, described as broader enforcement of scaled content abuse. One dates a "September 2026 spam update" from September 24. No primary Google confirmation was found — [writehuman.ai](https://writehuman.ai/blog/google-august-2026-spam-update); [kurums.com](https://kurums.com/googles-august-2026-spam-update-targeted-scaled-ai-content-what-marketing-teams-must-fix-now/); [tjrobertson.com](https://tjrobertson.com/does-google-penalize-ai-content-3/)
- Glenn Gabe on the May 2026 core update: YMYL categories again saw early and powerful impact — [GSQI](https://www.gsqi.com/marketing-blog/core-roars-back-google-may-2026-core-update-analysis/). Coverage of the December 2025 core update puts the steepest declines in health and finance — [PPC Land](https://ppc.land/health-sites-that-once-dominated-seo-just-got-crushed-by-google/)
- Lily Ray's March 2026 analysis reportedly found Google demoting high-E-E-A-T publishers in favour of the primary sources they cite, such as government agencies. This is a secondary summary only — [PPC Land](https://ppc.land/health-sites-that-once-dominated-seo-just-got-crushed-by-google/)
- FAQ rich results reportedly stopped appearing on May 7, 2026. FAQPage remains valid Schema.org and Google still uses it to understand pages. Rich Results Test and Search Console support were scheduled for removal in mid-2026. Secondary sources only — [PPC Land](https://ppc.land/google-kills-faq-rich-results-what-seos-saw-coming-since-2019/); [TechWyse](https://www.techwyse.com/news/ai-search/google-faq-rich-results-deprecated-2026); [jsonld.com](https://jsonld.com/google-faq-rich-results-deprecated/)

**Evidence: AI-content sites that were penalised vs. those that succeeded**
- Ahrefs (July 2025, older): 600k pages showed a correlation of 0.011 between estimated AI share and rank, i.e. essentially none. 86.5% of top pages contain "some" AI content and 4.6% are "pure AI". Top-ranked pages tend to have slightly less AI — [Ahrefs](https://www.ahrefs.com/blog/ai-generated-content-does-not-hurt-your-google-rankings); [SEJ](https://www.searchenginejournal.com/ahrefs-study-finds-no-evidence-google-penalizes-ai-content/550656/)
- Ahrefs follow-up (July 27, 2026): pages with more detector-flagged AI text generally ranked lower, were indexed less often and got fewer impressions. The relationship was gradual, with no hard block. Correlational only — [Let's Data Science summary](https://letsdatascience.com/news/ahrefs-finds-heavy-ai-use-correlates-with-weaker-google-perf-056283e2)
- Lily Ray (May 2026) tracked 220+ sites that publicly identified as customers of AI content and automation platforms. The recurring pattern was "it works, until it doesn't": gains followed by reversals. The coverage gives no percentage — [Let's Data Science](https://letsdatascience.com/news/ai-scaled-content-strategies-produce-short-lived-search-gain-7fb028ef); original: [Lily Ray Substack](https://lilyraynyc.substack.com/p/it-works-until-it-doesnt-ai-content-risks)
- Case report: a site that added 31 AI-assisted blog posts had lost 67.8% of blog clicks by August 2026, then removed them and returned to expert-written content. This is a vendor case study and not independently verified — [JumpFly](https://www.jumpfly.com/blog/a-cautionary-tale-one-sites-ai-assisted-seo-crash/)
- Financial-advisor (YMYL) sites reportedly lost visibility from AI-generated content with outdated statistics and advice that conflicted with regulations. Vendor blog — [Aryze Design](https://www.aryzedesign.com/blog/dying-sites-the-aeo-plummet-from-ai-generated-content)
- Glenn Gabe documents sites "surging in ChatGPT" while "dead in Google": AI-assistant visibility and Google visibility can diverge — [GSQI](https://www.gsqi.com/marketing-blog/surging-in-chatgpt-dead-in-google/)

### Inferences
- For a lawyer's site, the policy risk is less "AI was used" and more these four patterns: (1) volume beyond what the lawyer can really review; (2) paraphrasing BOE or news without adding value, which matches the "scraping feeds… automated transformations" and "stitching" examples; (3) inaccurate or outdated law on a YMYL topic; (4) a fake or rubber-stamp byline, which Google treats as deception.
- If the developer sells the same pipeline to several lawyers, each site needs genuinely different, lawyer-specific content. The same AI article reworded across client sites resembles "creating multiple sites with the intent of hiding the scaled nature of the content".
- Google appears to be rewarding primary sources (gov/BOE) over the publishers that summarise them. That means a law-firm blog wins mainly by adding what BOE cannot: practical, local, first-hand guidance (procedure in Canarias courts, real timelines, costs, common mistakes) and the lawyer's own opinion. Lightly reworded legal text will not compete.
- FAQ blocks are still worth writing for answer extraction in AI Overviews and LLMs, but they no longer earn a SERP rich result.

### Gaps
- I did not fetch the primary Search Quality Rater Guidelines PDF, so section numbers and exact wording for the 2025 AI/low-effort criteria are unconfirmed. Searches did not show whether a 2026 QRG revision exists.
- The October 1, 2026 revision date of Google's gen-AI guidance page and the dates of the August/September 2026 spam updates are not confirmed by Google primary sources.
- I found no rigorous, independent case study of a Spanish-language legal site penalised or succeeding with AI content. The evidence above is English-language and mostly from vendors or consultants.

## 2. Pipeline architecture, step by step (incl. which legal sources have real APIs/RSS)

### Takeaway
Monitoring the primary sources is feasible for the core Spanish sources. BOE has a free, documented open-data API (daily sumario plus consolidated legislation with an "updated since" filter). BOC Canarias offers RSS. Poder Judicial publishes per-court RSS news. EUR-Lex has RSS, a registered webservice and SPARQL. CENDOJ is the weak point: it has no official API, and its terms forbid commercial use and mass download. Jurisprudence must therefore be verified through targeted lookups by the lawyer or the pipeline, not bulk ingestion. Google Business Profile posts can still be automated via the v4 localPosts API, though some reports of 403 errors exist.

### Cited Findings

**(2) Primary-source monitoring: availability**
- **BOE open data API**: datasets "Legislación consolidada", "Sumario BOE", "Sumario BORME" and "Datos auxiliares". Endpoints sit under `/datosabiertos/api/`: `boe/sumario/{fecha}` (AAAAMMDD; JSON/XML); `legislacion-consolidada` (search with `from`/`to`, which filter by the norm's last update date, plus `query`, `offset` and `limit`, where `-1` returns all); `legislacion-consolidada/id/{id}` with sub-paths `/metadatos`, `/metadata-eli`, `/analisis`, `/texto`, `/texto/indice` and `/texto/bloque/{id_bloque}`. Auxiliary tables include `materias`, `rangos`, `relaciones-anteriores` and `relaciones-posteriores`. The API page mentions no API key, only acceptance of the reuse conditions. Some text endpoints are XML-only — [BOE Datos abiertos – API](https://www.boe.es/datosabiertos/api/api.php); technical docs: [APIsumarioBOE.pdf](https://boe.es/datosabiertos/documentos/APIsumarioBOE.pdf), [APIconsolidada.pdf](https://www.boe.es/datosabiertos/documentos/APIconsolidada.pdf)
- The BOE sumario lists each day's dispositions and announcements, with URLs for every document in PDF, XML and HTML — [BOE FAQ](https://boe.es/datosabiertos/faq/boe.php?lang=en)
- **BOC (Boletín Oficial de Canarias)**: the BOC portal lists "Canales RSS" at `https://www.gobiernodecanarias.org/boc/feeds/`. Daily issues follow `/boc/YYYY/N`, e.g. `/boc/2026/223` for Nov 9, 2026. No API or open-data endpoint was found — [BOC portal](https://www.gobiernodecanarias.org/boc/)
- **CENDOJ / CGPJ**: no official public API was found. An open-source project says CENDOJ "has no public API" and automates searches with Playwright, exposed through a FastAPI wrapper and an MCP server (`mcp-cendoj`) — [mcpservers.org – mcp-cendoj](https://mcpservers.org/servers/computingvictor/mcp-cendoj). A paid Apify scraper also exists — [Apify](https://apify.com/josemariagarciaruiz/cendoj-sentencias.md). CENDOJ database terms reproduced on judgment PDFs say commercial use and mass download are not permitted (2019 document, older) — [STS 359/2019 PDF via Confilegal](https://confilegal.com/wp-content/uploads/2019/09/STS-359-2019-de-15-de-julio.pdf)
- **Poder Judicial RSS**: an RSS directory with channels such as Noticias Judiciales, En Portada and Agenda del CGPJ, plus per-court channels for the Tribunal Supremo, Audiencia Nacional and each TSJ — [poderjudicial.es RSS](https://www.poderjudicial.es/cgpj/es/Poder-Judicial/RSS/); TS feed example: [TS Noticias Judiciales](https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/ch.Noticias-Judiciales.formato1/)
- **EUR-Lex / Publications Office**: RSS feeds (the full database feeds can be enormous), a webservice for registered users returning XML with a daily call limit, and Cellar SPARQL and REST access. Data can be reused free of charge subject to copyright conditions — [EUR-Lex data reuse](https://eur-lex.europa.eu/content/help/data-reuse/reuse-contents-eurlex-details.html); [EUR-Lex webservice](https://eur-lex.europa.eu/content/help/data-reuse/webservice.html?locale=en); [OP Cellar RSS/Atom](https://op.europa.eu/en/web/cellar/cellar-data/rss-and-atom-feeds)

**(3) Keyword/SERP/PAA research APIs**
- DataForSEO is pay-as-you-go with no subscriptions. Balances never expire. Minimum top-up is $50, with $1 trial credit. SERP API from $0.0006/SERP. Keywords Data (Google Ads) from $0.0012/task. DataForSEO Labs at $0.012/task plus $0.00012/item. The LLM Mentions/AI Optimization API has "multiple billing models" — [DataForSEO pricing](https://dataforseo.com/pricing)
- Third-party summaries give SERP Standard $0.0006, Priority $0.0012 and Live $0.002 per request. Prices assume 10-result depth, and deeper pages cost more — [apiserpent.com](https://apiserpent.com/blog/dataforseo-pricing-explained). DataForSEO posted a pricing update effective July 1, 2026, whose contents I could not see — [DataForSEO update](https://dataforseo.com/update/pricing-update-in-dataforseo-apis)

**(5)/(6) Drafting and verification inputs**
- Google wants AI output fact-checked by people, and metadata and structured data reviewed — [Google gen-AI guidance](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- Claude API web search costs $10 per 1,000 searches plus tokens. Web fetch has no extra charge beyond tokens. Code execution is free when used with web search or fetch (tool versions 20260209+) — [Claude pricing docs](https://platform.claude.com/docs/en/about-claude/pricing)

**(8) Publishing and schema**
- Structured data must match visible content and be validated — [Google, May 2025](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search). Use accurate bylines; fabricated creators make a page untrustworthy — [Google helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

**(9) Distribution: Google Business Profile**
- The GBP sunset page lists the Q&A API as discontinued on 2025-11-03 and `localPosts.reportInsights` as discontinued in 2023. The `localPosts` resource itself is not listed for sunset — [GBP API sunset dates](https://developers.google.com/my-business/content/sunset-dates); reference: [v4 localPosts](https://developers.google.com/my-business/reference/rest/v4/accounts.locations.localPosts)
- One developer guide says posts and reviews still run on the v4 API. A Make community thread reports 403 errors when creating posts via the legacy endpoint. That is an unverified user report — [upload-post.com guide](https://www.upload-post.com/google-business-profile-api/); [Make community](https://community.make.com/t/google-my-business-business-profile-creating-posts-via-api-fails-403-mybusiness-googleapis-com-legacy-api-confusion/99258)
- Google says to keep the Business Profile up to date because it feeds AI-driven results — [Google, May 2025](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)

**(10) Refresh**
- The BOE consolidated-legislation search filters by the norm's last update date (`from`/`to`), which enables "what changed since yesterday" polling — [BOE API](https://www.boe.es/datosabiertos/api/api.php)

### Inferences (recommended blueprint, synthesised from the findings above)
1. **Topic intake.** A short onboarding form or workshop records practice areas, priority themes, banned topics, the target municipalities and islands (local SEO), the tone, and the lawyer's "opinions/experiences bank". The bank holds voice notes or 5-minute interviews per topic, so first-hand experience gets injected into posts. Store it as a versioned `editorial-policy.md` that every LLM step uses as a system prompt.
2. **Monitoring (daily cron).** Pull the BOE `sumario/{hoy}` JSON. Use a cheap model to classify each item against the lawyer's topics. Poll BOC RSS, Poder Judicial RSS (TS, TSJ Canarias, AN), and EUR-Lex RSS filtered by topic. Each hit becomes a "trigger card" in the queue, never an auto-generated post. For agencies without verified feeds (AEAT, Seguridad Social, DGT, TC), use page-diff monitoring or manual checks.
3. **Keyword/SERP research.** For each approved trigger or evergreen theme, use DataForSEO Labs (keyword ideas, related keywords) and Keywords Data (search volume for es-ES; location: Spain or province). Pull the SERP API top 10 plus PAA. This gives intent, questions and competitor coverage at a few cents per topic.
4. **Brief generation.** The LLM produces a brief: search intent, H2/H3 outline, PAA questions to answer, the required primary sources (BOE IDs such as BOE-A-YYYY-NNNNN, articles, ECLI or Roj for case law), the local angle, and the questions only the lawyer can answer. The lawyer approves the brief, not just the final draft. This is the cheapest point to correct direction.
5. **Grounded drafting.** Fetch the full text of the cited norms (BOE `/texto/bloque/{id}`) and pass it as context. Require every legal claim to carry a citation to a provided source span. Forbid citations outside the retrieved source set.
6. **Automated verification.** (a) Deterministic checks: every cited BOE ID and article exists, using the BOE API. Every ECLI or Roj resolves. The case-law check must use low-volume, targeted lookups. Because of CENDOJ's terms, the safest default is to send each case-law citation to the lawyer with a link for manual confirmation. (b) An LLM-as-judge pass, ideally with a different model, extracts every claim and labels it "supported / unsupported / contradicted" against the retrieved texts. Block publication on any unsupported legal claim. (c) Check dates and validity, e.g. whether the norm is in force (`estados-consolidacion`). (d) Run a plagiarism and duplicate check against the SERP competitors fetched in step 3.
7. **Lawyer review.** Low friction is the main design constraint. Send a Telegram, WhatsApp or email message with a preview URL (a Vercel, Netlify or Cloudflare preview deploy of the PR branch), a one-page diff of claims and citations flagged for review, and three buttons: Approve, Request changes (free-text or voice-note reply), Reject. Edits can happen in a git-backed CMS UI (Keystatic or Decap on Astro) so the lawyer never sees GitHub. Approval merges the PR, and the record of approval (who, when, version) is stored for traceability.
8. **Publishing.** Use Astro content collections in Git. The frontmatter schema holds `author` (the lawyer, as a Person with bar membership and número de colegiado), `reviewedBy`, `lastReviewed`, `sources[]` (BOE IDs, ECLI) and `appliesToJurisdiction` (Spain/Canarias). JSON-LD covers BlogPosting/Article plus Person/Attorney and LegalService. FAQPage markup is optional (no rich result after May 2026). Internal links come from a site-wide embeddings index or tag graph that suggests 3–5 links to service pages and related posts. Prefer original images or diagrams; label AI images with IPTC metadata.
9. **Distribution.** A GBP local post via the v4 API (monitor for 403s; fall back to a manual-post reminder), a LinkedIn post draft for the lawyer to publish personally (keeps it authentic), and a monthly newsletter digest.
10. **Refresh.** A nightly job queries BOE legislación consolidada with `from={ayer}`. Any updated norm whose ID appears in a post's `sources[]` opens a "refresh needed" ticket, which goes through the same review step. Pages show "Última revisión: fecha", and Article `dateModified` is updated only on substantive changes. A quarterly sweep re-verifies posts older than 12 months.

### Gaps
- I did not check whether the Tribunal Constitucional, AEAT, Seguridad Social, DGT or TSJ Canarias jurisprudence have RSS or APIs; only the Poder Judicial RSS directory and BOC feeds were confirmed.
- I did not read the BOC feed list itself (which sections or channels exist), and did not check BOC terms of reuse.
- I did not check the current CENDOJ terms page directly. The "no commercial use or mass download" text comes from a 2019 judgment PDF.
- I did not research the LinkedIn API (personal-profile posting via API) or newsletter tooling.
- I did not do feature-level research on Keystatic, Decap, Sanity or Payload (pricing, editor UX). The CMS recommendation above is an inference.

## 3. Orchestration options and LLM choice/cost

### Takeaway
At this volume (4–8 posts/month plus daily monitoring), any orchestrator works. Licensing, maintainability and the review UX matter more than features. n8n Cloud Starter (€20/mo billed annually) is enough, but n8n's self-hosted Sustainable Use License restricts use to "your own internal business purposes", which complicates a developer hosting it for paying clients. GitHub Actions cron plus TypeScript scripts, or an agent SDK, avoids that issue. No published benchmark of Spanish-law writing compares the frontier models, so model choice should rest on a small in-house eval. With current Claude prices, per-article LLM cost is roughly $1–3.

### Cited Findings
- n8n Cloud pricing (EUR, billed annually): Starter €20/mo with 2.5k executions, unlimited workflows, 5 concurrent, and AI Agent node and MCP tools. Pro €50/mo with 10k executions. Business €667/mo, self-hosted only. Enterprise is custom — [n8n pricing](https://n8n.io/pricing/)
- n8n Sustainable Use License: "You may use or modify the software only for your own internal business purposes or for non-commercial or personal use. You may distribute the software or provide it to others only if you do so free of charge for non-commercial purposes." — [n8n LICENSE.md](https://github.com/n8n-io/n8n/blob/master/LICENSE.md)
- Claude API prices per MTok, input/output: Opus 5.5 $4/$20 (cache hits $0.20); Sonnet 5.5 $2/$10 (cache hits $0.10); Sonnet 5 $2/$10 (introductory price made permanent); Haiku 5.5 $0.10/$0.50 for prompts up to 100k tokens ($0.50/$2.50 above that); Haiku 4.5 $1/$5; Fable 5.1 $10/$50. The Batch API gives 50% off input and output. Models from 4.6 on (except Haiku 5.5) include a 1M-token context at standard pricing — [Claude pricing docs](https://platform.claude.com/docs/en/about-claude/pricing)
- Spanish legal-LLM benchmarks: I found no 2026 benchmark comparing GPT, Claude and Gemini on Spanish law. A Comillas project tested LLMs on the Spanish bar-access exam, with no comparative figures found — [Comillas repository](https://repositorio.comillas.edu/xmlui/handle/11531/105902?show=full). General Spanish leaderboards exist: La Leaderboard (66 datasets, 50 models) — [arXiv](https://arxiv.org/html/2507.00999v1) — and IberBench — [UPV](https://riunet.upv.es/entities/publication/8ec911ab-70ea-4e42-8b0f-8bac915737e7/full). Artificial Analysis has an English-centric Legal Index — [Artificial Analysis](https://artificialanalysis.ai/es/indexes/legal). A Latin-American Spanish legal QA benchmark appeared at ICML 2026 — [ICML 2026](https://icml.cc/virtual/2026/80586)

### Inferences
- **Recommended for a developer reselling the service:** GitHub Actions (cron) plus a small TypeScript/Node or Python repo per client, or a multi-tenant worker. It has no licence ambiguity, is versioned and testable, has free preview deploys, and puts the PR-based review naturally in the same repo as the Astro site. Pair it with a tiny approval webhook (a Cloudflare Worker or serverless function) behind Telegram or email buttons.
- **n8n** suits fast iteration and visual debugging, and the lawyer can see the flow. Use n8n Cloud billed to the client, or self-host on the client's own account, to stay within the Sustainable Use License. Have the licence position reviewed before reselling a developer-hosted instance.
- **Make**: comparable to n8n Cloud but with operation-based billing. Not researched in depth.
- **Agent SDKs (Claude Agent SDK, OpenAI Agents SDK) and LangGraph** suit the research, draft and verify loop (tool use for the BOE API, retrieval, web search). Use them inside the scripts rather than as the scheduler. Keep the overall flow deterministic (state machine: trigger → brief → approved brief → draft → verified → approved → published), with agents only inside steps. That makes failures auditable.
- **Model allocation:** a cheap model (Haiku 5.5 at $0.10/$0.50) for daily BOE triage, a strong model (Sonnet 5.5 or Opus 5.5) for drafting, and a different strong model, ideally from another provider, for claim verification to reduce correlated hallucinations. Choose the drafting model with a 20–30-question Spanish-law eval built from the lawyer's own practice areas. That eval doubles as a regression test.
- **Indicative per-article token budget:** about 300k input and 25k output tokens across brief, draft, verification and two revision rounds. On Sonnet 5.5 that is 0.3 × $2 + 0.025 × $10 ≈ $0.85. On Opus 5.5 it is about $1.70. Add about $0.20 for 20 web searches. Prompt caching of the norm texts and the Batch API (50% off) can roughly halve this. This is my estimate, not a measured figure.

### Gaps
- I could not retrieve OpenAI or Google Gemini API pricing (openai.com returned 403), so there is no cross-vendor per-article comparison.
- I did not verify Make pricing or GitHub Actions free-minute quotas for private repos.
- I found no independent evidence on which LLM writes best in Spanish legal prose in late 2026.

## 4. Cadence/volume and content formats for Google and AI answers

### Takeaway
No authoritative source gives an "ideal" number of posts. The evidence warns against scale (scaled-content policy, Lily Ray's 220+ sites, the Ahrefs 2026 correlation) and favours unique, specific, primary-source-backed content. For a one-lawyer firm, 4 posts/month, plus reactive posts only when a BOE or court trigger matters to the client base and the lawyer has something to add, is a defensible ceiling tied to real review capacity.

### Cited Findings
- Google: create "unique, non-commodity content". Pages answering "longer, more specific, and follow-up questions" are well placed in AI experiences. Pair text with images and video for multimodal search — [Google, May 2025](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)
- Scaled AI content shows short-lived gains, "it works, until it doesn't" — [Lily Ray via Let's Data Science](https://letsdatascience.com/news/ai-scaled-content-strategies-produce-short-lived-search-gain-7fb028ef)
- Primary sources (government agencies) were reportedly elevated over credentialed publishers in the March 2026 core update (secondary) — [PPC Land](https://ppc.land/health-sites-that-once-dominated-seo-just-got-crushed-by-google/)
- Self-promotional "best of" listicles were reportedly linked to 30–50% visibility drops in early 2026 — [SER](https://www.seroundtable.com/googleself-promotional-listicles-update-40873.html)
- AI Overviews reportedly cut citations to self-ranking listicles by 38% (Lily Ray) — [PPC Land](https://ppc.land/google-ai-overviews-cut-self-ranking-listicle-citations-38-lily-ray-finds/)
- FAQ rich results are gone (May 2026, secondary), but FAQPage is still used by Google to understand pages — [jsonld.com](https://jsonld.com/google-faq-rich-results-deprecated/)

### Inferences
- **Cadence:** about 1 evergreen post per week (4/month) in the first 6 months, building topic clusters around 2–3 practice areas with one pillar page and 6–10 spokes each. Add reactive "novedad legal" posts (0–4/month) only when the BOE, BOC or a court produces something with practical consequences for the client base. Refresh work (updating old posts) counts toward capacity. Moving to 8/month is reasonable only if the lawyer's review time per post stays at or below about 20–30 minutes and quality metrics hold.
- **Formats likely to perform in both Google and AI answers** (inferred from Google's "specific, follow-up questions" guidance and the primary-source trend):
  - Step-by-step procedures ("cómo reclamar…", "pasos para…") with the forms, offices and deadlines in Canarias
  - "¿Cuánto cuesta…?" guides with real fee ranges from the lawyer: tasas, procurador, notario, colegio guidelines
  - "Plazos" pages giving the deadline, counting rules and consequences of missing it, each with the article cited
  - Checklists and document lists ("documentación para…")
  - Simple calculators (indemnización por despido, plazos procesales) as interactive tools, with the formula and legal basis shown
  - Case-law explainers: what an STS or TSJ Canarias ruling changes in practice
  - Local guides: which juzgado, where, how long it really takes in Las Palmas or Tenerife
  - Short FAQ sections answering PAA questions verbatim in the first sentence
- Every format should include a "lo que dice la ley" block with direct links to BOE articles and an "en la práctica" block with the lawyer's experience. That is the non-commodity layer a pure LLM output lacks.

### Gaps
- I found no study measuring which content formats win AI Overview or LLM citations specifically for Spanish legal queries.
- I found no data on optimal publishing frequency for local law-firm blogs.

## 5. Risks and safeguards (hallucinated citations, outdated law, duplication, liability)

### Takeaway
Spain now has a steady line of court sanctions against lawyers who filed AI-hallucinated case law. Fines grew from a warning in 2024 to €420, €840 and €1,800 in 2026, with referrals to bar associations. Courts say AI is allowed but needs ex-ante and ex-post human control ("reserva de humanidad"). The same failure mode published on a blog under a lawyer's byline would damage the lawyer's reputation and his E-E-A-T. So the pipeline must make unverifiable citations impossible to publish.

### Cited Findings

**Spanish cases (chronological)**
- **TSJ Navarra, Sala Civil y Penal, Auto 2/2024 of 4 Sept 2024 (older):** a querella drafted with ChatGPT cited the Colombian Penal Code instead of the Spanish one. A separate proceeding for possible procedural bad faith (art. 247 LEC) was archived without sanction after the lawyer apologised. The court warned that careless use of these technologies can be a clear example of procedural bad faith and abuse of process — [Noticias de Navarra, Nov 2024](https://www.noticiasdenavarra.com/sociedad/2024/11/12/riesgo-chatgpt-justicia-navarra-reprende-8919455.html); [Legal Today, Aug 2025](https://www.legaltoday.com/opinion/articulos-de-opinion/la-imprudencia-de-un-abogado-con-chatgpt-no-es-mala-fe-procesal-2025-08-20/); [El Español, Aug 2026](https://www.elespanol.com/espana/tribunales/20260817/aviso-jueces-mal-uso-ia-multas-vez-altas-abogados-mala-fe-traicion-cliente/1003744346246_0.html)
- **Tribunal Constitucional, 9 Sept 2024 (older):** a warning (apercibimiento) to a Barcelona lawyer whose amparo appeal cited 19 non-existent TC rulings with invented paragraphs. The matter was referred to the Barcelona bar — [El Español, Aug 2026](https://www.elespanol.com/espana/tribunales/20260817/aviso-jueces-mal-uso-ia-multas-vez-altas-abogados-mala-fe-traicion-cliente/1003744346246_0.html)
- **TSJ Canarias, 10 Feb 2026:** a €420 fine for 48 non-existent or erroneous citations in an appeal, referred to the bar association. The court called the conduct "contraria al deber de veracidad y a las reglas de la buena fe" — [El Español, Feb 2026](https://www.elespanol.com/espana/tribunales/20260213/multa-euros-abogado-citar-escrito-sentencias-falsas-generadas-inteligencia-artificial/1003744129079_0.html); [Infobae](https://www.infobae.com/espana/2026/02/13/multan-a-un-abogado-por-presentar-un-recurso-con-48-citas-a-sentencias-falsas-uso-una-ia-para-hacer-el-escrito/). One outlet reports €450 and says the lawyer did not check the citations in CENDOJ, which conflicts with the €420 reported elsewhere — [Merca2](https://www.merca2.es/2026/08/23/multa-abogado-ia-canarias-2440787/)
- **TSJ Navarra, Sala de lo Social, March/April 2026:** a lawyer whose appeal attributed invented paragraphs to TC, TS and TSJ rulings was not sanctioned after a prompt apology — [Noticias de Navarra](https://www.noticiasdenavarra.com/sociedad/2026/03/26/abogada-alude-sentencias-inventadas-ia-10871149.amp.html); [El Español, Apr 2026](https://www.elespanol.com/espana/tribunales/20260404/abogada-cito-recurso-sentencias-inventadas-ia-libra-sancion-pedir-perdon-tribunal/1003744194050_0.html)
- **TSJ Canarias, 9 Jul 2026:** an €840 fine. Of 37 references, only one matched in number, date and text. The court called it "imprudencia grave", a breach of "bona fides", and the lawyer did not apologise — [El Español, Aug 2026](https://www.elespanol.com/espana/tribunales/20260817/aviso-jueces-mal-uso-ia-multas-vez-altas-abogados-mala-fe-traicion-cliente/1003744346246_0.html). The fine was reportedly pegged to the annual cost of a legal-AI platform subscription — [Diario Judicial](https://www.diariojudicial.com/news-104041-abogado-que-no-chequea-paga-la-suscripcion-de-la-ia). Another outlet reports "25 resoluciones" in what appears to be this case. The counts conflict — [Tiempo Judicial](https://tiempojudicial.com/2026/07/31/espana-un-tribunal-multo-a-un-abogado-por-citar-25-resoluciones-judiciales-inventadas-por-una-inteligencia-artificial/)
- **TSJ Galicia (TSXG), July 2026:** a €1,800 fine. Of 32 citations in a recurso de suplicación, 24 were non-existent, altered or invented. The court said AI is not prohibited but requires ex-ante and ex-post control ("reserva de humanidad"), and that delegating reasoning to an algorithm without verification betrays "la confianza que su cliente ha depositado en él" — [Economist & Jurist](https://www.economistjurist.es/actualidad-juridica/jurisprudencia/el-tsxg-fija-un-antes-y-un-despues-en-el-uso-de-la-ia-por-los-abogados-multa-de-1-800-euros-por-presentar-un-recurso-con-jurisprudencia-inventada/); [El Español, Aug 2026](https://www.elespanol.com/espana/tribunales/20260817/aviso-jueces-mal-uso-ia-multas-vez-altas-abogados-mala-fe-traicion-cliente/1003744346246_0.html)
- Fines "podrían llegar hasta los 6.000 euros" — [El Español, Aug 2026](https://www.elespanol.com/espana/tribunales/20260817/aviso-jueces-mal-uso-ia-multas-vez-altas-abogados-mala-fe-traicion-cliente/1003744346246_0.html)
- Profession-level context: CGAE's Libro Blanco (Jan 2026) found 60% of legal professionals use AI but only 8% know how it works. CGAE Circular interpretativa 3/2026 (Apr 2026) stresses diligence and human supervision: AI "debe funcionar como una herramienta auxiliar, no como un sustituto del abogado". The lawyer is responsible for a document whatever tools were used (Manuel Mata, CGAE). CGPJ Instrucción 2/2026 limits judges' AI use — [El Español, Oct 2026](https://www.elespanol.com/invertia/disruptores/politica-digital/espana/20261024/ia-llega-juzgados-abogados-sancionados-alertas-confidencialidad-dudas-seguridad-juridica/1003744430671_0.html)

**Content and SEO risks**
- Google says AI output can contain hallucinations and must be fact-checked by people before publishing — [Google gen-AI guidance](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- YMYL sites with AI content containing outdated statistics or advice that conflicts with current rules reportedly lost visibility (vendor source) — [Aryze Design](https://www.aryzedesign.com/blog/dying-sites-the-aeo-plummet-from-ai-generated-content)
- Automated transformations of scraped or feed content ("synonymizing, translating") and stitching content without added value are named spam examples — [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)

### Inferences (guardrails to build in)
- **A citation allow-list is the most important guardrail.** The model may cite only documents present in the retrieval set. A deterministic post-processor extracts every citation pattern (BOE-A-…, "artículo X de la Ley Y", STS/ATS numbers, ECLI:ES:…, Roj) and resolves each one: BOE through the API, case law through a CENDOJ lookup or lawyer confirmation. Any unresolved citation blocks the PR.
- Claim-level verification by a second model against the source texts, with "unsupported" claims highlighted in the lawyer's review view.
- Check whether each norm is still in force (`estados-consolidacion`) and whether it has later amendments (`relaciones-posteriores`), so the post never cites a repealed article.
- Mandatory human approval, with no auto-publish path even for "novedades". Store the approval audit trail: approver, timestamp, content hash.
- A visible "Autor: [lawyer], Abogado colegiado nº … ICA Las Palmas" byline only when the lawyer actually reviewed the post, plus "Última revisión" and "Fuentes" sections. Optionally add a short "cómo elaboramos este contenido" methodology page, in line with Google's "How" disclosure advice. The other researcher covers AI Act and deontology labelling specifics.
- A disclaimer that the post is general information, not legal advice for a specific case (deontology and liability wording to come from the other researcher).
- Plagiarism and near-duplicate check against the fetched SERP competitors and the firm's own posts (cosine similarity on embeddings) to avoid cannibalisation and copying.
- Never feed client data or case files into the pipeline. Topics come from the lawyer's anonymised experience only. This links to the confidentiality concerns behind the CGAE circulars and the CGPJ sanction of a magistrate for uploading a judicial file to an AI platform — [El Español, Oct 2026](https://www.elespanol.com/invertia/disruptores/politica-digital/espana/20261024/ia-llega-juzgados-abogados-sancionados-alertas-confidencialidad-dudas-seguridad-juridica/1003744430671_0.html)

### Gaps
- I found no Spanish case of a law-firm blog (as opposed to a court filing) sanctioned or sued for AI-generated inaccurate content.
- I did not research professional liability insurance coverage for published informational content.
- The exact citation counts and fine amounts in the TSJ Canarias cases conflict across outlets. The original autos (CENDOJ) were not checked.

## 6. Monthly cost and developer time (4–8 posts/month)

### Takeaway
Running costs are small: roughly €30–100/month for APIs and orchestration, excluding hosting already covered by the website. The real cost is the lawyer's review time and the developer's maintenance. The service should be priced on the developer's time (initial build plus monthly retainer), not on the API spend.

### Cited Findings
- Claude: Sonnet 5.5 $2/$10 per MTok, Opus 5.5 $4/$20, Haiku 5.5 $0.10/$0.50, Batch 50% off, web search $10 per 1,000 — [Claude pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- DataForSEO: $50 minimum top-up, no subscription, balance never expires. SERP from $0.0006, Keywords Data from $0.0012/task, Labs $0.012/task + $0.00012/item — [DataForSEO pricing](https://dataforseo.com/pricing)
- n8n Cloud Starter €20/mo or Pro €50/mo, both billed annually — [n8n pricing](https://n8n.io/pricing/)

### Inferences (estimates built from the prices above; not measured)
| Item | Assumption | Monthly cost |
|---|---|---|
| LLM drafting and verification | 8 posts × ~$1–2.50 (Sonnet/Opus mix, incl. ~20 web searches each) + 4 refresh checks | ~$10–25 |
| Daily BOE/BOC/RSS triage | ~30 sumarios × ~40k tokens on Haiku 5.5 | <$1 |
| DataForSEO | 8 topics × (Labs ideas ~$0.07 + 5 SERPs ~$0.01 + volumes) | <$5 (from a $50 prepaid balance that lasts many months) |
| Orchestration | GitHub Actions (likely within free quota, unverified) or n8n Cloud Starter €20 | €0–20 |
| Approval bot / webhook | Telegram bot + serverless function | ~€0 (free tiers, unverified) |
| Buffer (retries, eval runs, image generation) | — | ~$10–30 |
| **Total** |  | **≈ €30–80/month** |

- **Developer time (estimate):** initial build about 60–120 hours. That covers the monitoring connectors, the brief/draft/verify chain, the citation resolver, the Astro schema and components, the approval bot, the refresh job and the eval set. Ongoing work is about 4–8 h/month for prompt and eval tuning, connector breakage (RSS or HTML changes, GBP API issues), model upgrades, and the monthly SEO report (GSC queries, AI-visibility checks). Add more in the first 2–3 months.
- **Lawyer time:** about 10 min to approve a brief plus 20–30 min to review a draft, roughly 2–4 h/month at 4–8 posts. This is the real capacity limit and should drive the cadence.

### Gaps
- Hosting and CMS costs (Netlify, Vercel, Cloudflare, Keystatic Cloud) were not researched here.
- Image-generation costs and GSC/GA4 reporting tooling were not researched.
- No published benchmark of the developer-hours needed to maintain such a pipeline was found. The figures above are judgement-based.

## 7. Existing "automated SEO blog" products vs. a custom lawyer-reviewed pipeline

### Takeaway
"Autopilot" AI blog SaaS is cheap (about $47–$299/month) and optimised for volume. These tools generate from a keyword with generic web research. They do not ground content in BOE or CENDOJ, verify citations or build in lawyer approval. Their customer base is exactly the cohort that Lily Ray's 2026 analysis found showing gains then reversals. For a YMYL legal site in Spain, a custom pipeline with primary-source grounding and mandatory lawyer review is better on risk. It is not necessarily cheaper.

### Cited Findings
- Price points: Articly.ai from $47/month — [Software Advice](https://www.softwareadvice.com/ai-writing-assistant/articly-ai-profile). seo.ai at $149/month (single site) and $299/month (multi-site) per a 2026 review, and up to 50 articles for $99 in a 2025 review — [Stackmatix](https://www.stackmatix.com/blog/seo-ai-review); [eesel.ai](https://www.eesel.ai/blog/seoai). One comparison describes tiers of $49/month for 10 articles, $129 for 40 and $299 for 100. The source does not clearly name the tool — [Dupple](https://dupple.com/learn/best-ai-blog-writers)
- Koala generates complete SEO-optimised posts from a single keyword. BlogSEO advertises 30 articles/month, auto-publishing and internal linking. Reviews warn that fully automated output was hit by helpful-content updates and still needs human review — [Dupple](https://dupple.com/learn/best-ai-blog-writers); [Capterra – BlogSEO](https://www.capterra.com/p/10047249/BlogSEO/); [MakerStack](https://makerstack.co/reviews/blogseo-review/)
- Lily Ray's 220+ site sample consisted of publicly identified customers of AI content-creation and automation platforms, with the "it works, until it doesn't" pattern — [Let's Data Science](https://letsdatascience.com/news/ai-scaled-content-strategies-produce-short-lived-search-gain-7fb028ef)

### Inferences
- **Why custom is better here:**
  1. It grounds content in Spanish primary sources through the BOE API, with citation resolution.
  2. It builds the lawyer's approval into the workflow, not as an optional step, and keeps the audit trail.
  3. Volume is capped by design, below the scaled-content risk zone.
  4. Change detection keeps old posts current.
  5. Content is unique per client, and no SaaS shares templates across thousands of sites.
  6. It integrates with the firm's Astro site, schema and GBP.
- **Why custom may not be better:**
  1. Higher upfront cost and ongoing developer dependency.
  2. The connectors (RSS, CENDOJ lookups, GBP) break and need maintenance.
  3. Any SaaS tool used purely as a drafting assistant (no auto-publish) plus the same human review would reach similar quality more cheaply. The edge of the custom pipeline is the legal-source verification and refresh layer, not the drafting.
- **Positioning for the sale:** present it as "a legal-news monitor plus a ghostwriting assistant that the lawyer signs", not as an "automated blog". Value comes from cutting the lawyer's time per quality post from about 3–4 hours to about 30 minutes, not from post count.

### Gaps
- I could not confirm current pricing for SEObot, Arvow, Outrank or Koala from the vendors' own pages.
- I found no Spanish-market "autopilot blog" product designed for lawyers, nor any independent study of their outcomes in YMYL niches.
- I did not research Spanish legal-content agencies (human ghostwriting) and their prices, which would be the realistic alternative benchmark.
