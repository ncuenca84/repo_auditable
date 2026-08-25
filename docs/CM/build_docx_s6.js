const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType, PageBreak,
} = require("docx");

const NAVY = "0B3D63", GREEN = "137333", RED = "B3261E", GREY = "555555";

function p(t, o = {}) { return new Paragraph({ spacing: { after: o.after ?? 100, before: o.before ?? 0 }, alignment: o.align,
  children: [new TextRun({ text: t, bold: o.bold, italics: o.italics, color: o.color, size: o.size ?? 21 })] }); }
function h2(t) { return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 80 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: NAVY, space: 2 } },
  children: [new TextRun({ text: t, bold: true, color: NAVY, size: 26 })] }); }
function bullet(t) { return new Paragraph({ bullet: { level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text: t, size: 21 })] }); }
function sp(a = 120) { return new Paragraph({ spacing: { after: a }, children: [] }); }
function allB(c) { const b = { style: BorderStyle.SINGLE, size: 4, color: c }; return { top: b, bottom: b, left: b, right: b, insideHorizontal: b, insideVertical: b }; }
function cell(t, { w, bold, fill, color, align } = {}) { return new TableCell({ width: { size: w, type: WidthType.DXA },
  shading: fill ? { type: ShadingType.CLEAR, fill, color: "auto" } : undefined, margins: { top: 40, bottom: 40, left: 80, right: 80 },
  children: [new Paragraph({ alignment: align, children: [new TextRun({ text: t, bold, color, size: 18 })] })] }); }
function table(widths, header, rows) { const total = widths.reduce((a, b) => a + b, 0);
  const hr = new TableRow({ tableHeader: true, children: header.map((t, i) => cell(t, { w: widths[i], bold: true, fill: NAVY, color: "FFFFFF" })) });
  const br = rows.map((r, ri) => new TableRow({ children: r.map((c, i) => { const v = typeof c === "object" ? c.t : c;
    const col = typeof c === "object" ? c.color : undefined; const bd = typeof c === "object" ? c.bold : undefined;
    return cell(v, { w: widths[i], color: col, bold: bd, fill: ri % 2 ? "F2F6FA" : undefined }); }) }));
  return new Table({ width: { size: total, type: WidthType.DXA }, columnWidths: widths, borders: allB("C8D1DA"), rows: [hr, ...br] }); }
function term(lines) { const rows = lines.map(l => new Paragraph({ spacing: { after: 0, line: 240 },
    children: [new TextRun({ text: l === "" ? " " : l, font: "Consolas", size: 16, color: "C9D1D9" })] }));
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, columnWidths: [9360], borders: allB("30363D"),
    rows: [new TableRow({ children: [new TableCell({ width: { size: 9360, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: "0D1117", color: "auto" }, margins: { top: 120, bottom: 120, left: 160, right: 160 }, children: rows })] })] }); }
function placeholder(label, hint) { const inner = [
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 60, after: 20 }, children: [new TextRun({ text: "📷 " + label, bold: true, color: "8A94A0", size: 20 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 }, children: [new TextRun({ text: hint || "Pega aquí la captura", italics: true, color: "AAB1BA", size: 16 })] }) ];
  for (let i = 0; i < 7; i++) inner.push(new Paragraph({ spacing: { after: 0, line: 260 }, children: [] }));
  const d = { style: BorderStyle.DASHED, size: 8, color: "9AA4AE" };
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, columnWidths: [9360],
    borders: { top: d, bottom: d, left: d, right: d, insideHorizontal: d, insideVertical: d },
    rows: [new TableRow({ children: [new TableCell({ width: { size: 9360, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: "F7F9FB", color: "auto" }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: inner })] })] }); }

const ch = [];

// PORTADA
ch.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Auditoría de Configuración + Release Controlado", bold: true, color: NAVY, size: 32 })] }));
ch.push(p("Proyecto integrador del equipo — Gestión de la Configuración del Software (GCS)", { italics: true, color: GREY, size: 20, after: 200 }));
ch.push(table([2400, 6960], ["Campo", "Detalle"], [
  ["Asignatura", "Gestión de la Configuración del Software"],
  ["Actividad", "Semana 6 — Auditoría de configuración + Release controlado"],
  ["Equipo", "3 integrantes (demo en cuenta ncuenca84)"],
  ["Proyecto", "API Inventario (mini)"],
  ["Repositorio", "https://github.com/ncuenca84/repo_auditable"],
  ["Línea base", "Rama main"],
  ["Release", "v1.2.0 (tag sobre main, commit 5129560)"],
  ["Fecha", "2026-08-25"],
]));

// 0. ROLES
ch.push(h2("1. Organización del equipo (roles sin duplicar)"));
ch.push(p("Con 3 integrantes se aplican los primeros 4 roles de la práctica; el 3.º estudiante cubre los roles complementarios de Trazabilidad y Release.", { size: 19, after: 80 }));
ch.push(table([1600, 3400, 2380, 1980], ["Estudiante", "Rol", "Evidencia", "Issue / PR"], [
  ["E1", "Auditor Físico (Config Items)", "PHYSICAL_AUDIT + LICENSE", "#3 / PR #7"],
  ["E2", "Auditor Funcional (Requisitos)", "FUNCTIONAL_AUDIT + pruebas", "#4 / PR #8"],
  ["E3", "Gestor de Trazabilidad", "TRAZABILIDAD + CHECKLIST", "#5 / PR #9"],
  ["E3", "Gestor de Release (Emisión)", "RELEASE_NOTES + DOC_ENTREGA", "#6 / PR #10"],
]));
ch.push(p("Nota: la revisión cruzada (aprobación de PR por un compañero) es un paso manual del equipo; en esta demo los PR se fusionaron desde una sola cuenta.", { size: 17, color: GREY, before: 60 }));

// 2. AUDITORIA FISICA
ch.push(h2("2. Auditoría física (hallazgos + correcciones)"));
ch.push(p("Se verificó la existencia y versionado de los elementos de configuración (CI). Hallazgo principal: faltaba LICENSE.", { size: 19 }));
ch.push(table([1200, 4600, 2160, 1400], ["Hallazgo", "Descripción", "Corrección", "Evidencia"], [
  ["H-F1", "Faltaba archivo LICENSE", "Añadido LICENSE (MIT)", "PR #7"],
  ["H-F2", "Riesgo de secreto versionado", "Verificado: solo .env.example", "git ls-files"],
  [{ t: "Estado", bold: true }, { t: "12 config items completos y versionados (o correctamente excluidos).", bold: true }, "", ""],
]));

// 3. AUDITORIA FUNCIONAL
ch.push(h2("3. Auditoría funcional (requisito validado + evidencia)"));
ch.push(p("Requisito REQ-002: agregar productos con qty >= 0. Verificado con 3 criterios de aceptación.", { size: 19 }));
ch.push(table([900, 6260, 2200], ["#", "Criterio de aceptación", "Resultado"], [
  ["C1", "add_product('item',1) agrega y aparece en list_products()", { t: "PASSED", color: GREEN, bold: true }],
  ["C2", "qty = 0 es válido (límite inferior permitido)", { t: "PASSED", color: GREEN, bold: true }],
  ["C3", "qty < 0 lanza ValueError y NO agrega", { t: "PASSED", color: GREEN, bold: true }],
]));
ch.push(sp(80));
ch.push(term([
  "$ python -m pytest -v",
  "tests/test_app.py::test_add_and_list ................... PASSED",
  "tests/test_req002.py::test_criterio_1_agrega_qty_positiva PASSED",
  "tests/test_req002.py::test_criterio_2_permite_qty_cero .. PASSED",
  "tests/test_req002.py::test_criterio_3_rechaza_qty_negativa PASSED",
  "============================ 4 passed ============================",
]));

// 4. TRAZABILIDAD
ch.push(new Paragraph({ children: [new PageBreak()] }));
ch.push(h2("4. Trazabilidad (issue → PR → commit → release)"));
ch.push(table([1900, 1200, 2200, 1560, 2000], ["Issue", "PR", "Commit(s)", "Release", "Evidencia"], [
  ["#3 Auditoría física", "PR #7", "4f2e88f · 9d64156", "v1.2.0", "PHYSICAL_AUDIT + LICENSE"],
  ["#4 Auditoría funcional", "PR #8", "c1d74b0 · e841c1b", "v1.2.0", "pytest 4 passed"],
  ["#5 Trazabilidad", "PR #9", "50a37ed · 4d27a67", "v1.2.0", "TRAZABILIDAD + CHECKLIST"],
  ["#6 Release", "PR #10", "ee3e649 · 5129560", "v1.2.0", "RELEASE_NOTES + DOC_ENTREGA"],
]));
ch.push(p("Todos los commits referencian su issue (Refs #id / Closes #id) y los PR se fusionaron a la línea base main.", { size: 17, color: GREY, before: 60 }));

// 5. RELEASE NOTES
ch.push(h2("5. Release notes — v1.2.0 (copiar/pegar)"));
ch.push(term([
  "Release v1.2.0 — Auditoria de configuracion y release controlado",
  "Linea base: main (commit 5129560) · Fecha: 2026-08-25",
  "",
  "Que cambio:",
  " - Auditoria fisica de config items + LICENSE (MIT)      (#3, PR #7)",
  " - Auditoria funcional REQ-002, 3 criterios + pruebas    (#4, PR #8)",
  " - Convencion de trazabilidad + CHECKLIST_AUDITORIA.md   (#5, PR #9)",
  " - Release notes + DOC_ENTREGA.md                        (#6, PR #10)",
  "",
  "Como validar:",
  " python -m pytest -v      # esperado: 4 passed",
  " git ls-files config/     # esperado: solo config/.env.example",
  "",
  "Version (SemVer): MINOR 1.1.0 -> 1.2.0 (cambios retrocompatibles)",
]));

// 6. CRITERIOS DE ENTREGA
ch.push(h2("6. Criterios de entrega"));
ch.push(bullet("pytest en verde (4 passed)."));
ch.push(bullet("git status limpio en main."));
ch.push(bullet("Sin secretos versionados (solo config/.env.example)."));
ch.push(bullet("Release v1.2.0 emitido desde main con release notes."));
ch.push(bullet("Cada cambio con issue + PR + commit referenciado (trazabilidad)."));

// 7. ENTREGABLES / LINKS
ch.push(h2("7. Entregables (links reales del repo)"));
ch.push(table([2600, 6760], ["Entregable", "Referencia"], [
  ["Repositorio", "https://github.com/ncuenca84/repo_auditable"],
  ["Issues (uno por rol)", "#3, #4, #5, #6"],
  ["Pull Requests", "#7, #8, #9, #10 (fusionados a main)"],
  ["Release", "v1.2.0 (pendiente de publicar — ver anexo)"],
  ["Documentos de auditoría", "docs/CM/PHYSICAL_AUDIT.md · FUNCTIONAL_AUDIT.md · TRAZABILIDAD.md"],
  ["Control / entrega", "CHECKLIST_AUDITORIA.md · DOC_ENTREGA.md · RELEASE_NOTES_v1.2.0.md"],
]));

// 8. ANEXO
ch.push(new Paragraph({ children: [new PageBreak()] }));
ch.push(h2("8. Anexo — Captura de la parte manual (Release)"));
ch.push(p("El tag v1.2.0 está creado sobre main; falta publicarlo como Release (paso manual). Publica v1.2.0 en GitHub → Releases (base: main) y pega aquí la captura como evidencia.", { size: 18, color: GREY, after: 140 }));
ch.push(placeholder("Release v1.2.0  [PARTE MANUAL]", "GitHub → Releases, mostrando v1.2.0 publicado desde main con sus notas"));

const doc = new Document({ creator: "ncuenca84", title: "Auditoria y Release - Semana 6",
  styles: { default: { document: { run: { font: "Calibri", size: 21 } } } },
  sections: [{ properties: { page: { margin: { top: 900, bottom: 900, left: 900, right: 900 } } }, children: ch }] });
Packer.toBuffer(doc).then(b => { fs.writeFileSync("/home/user/repo_auditable/docs/CM/Informe_Auditoria_Release_S6.docx", b); console.log("OK docx:", b.length, "bytes"); });
