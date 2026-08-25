# CHECKLIST_AUDITORIA.md

Checklist mínimo de auditoría a usar en **cada PR** antes del merge a `main`.

## Estado aprobado
- [ ] PR revisado y **aprobado** por al menos 1 compañero (evidencia: reviewer + merge).

## Integridad
- [ ] Cambios consistentes (no archivos sueltos).
- [ ] **No** se versionan secretos (`config/.env` ignorado; existe `config/.env.example`).
- [ ] Artefactos generados verificados (build/test).

## Trazabilidad
- [ ] Issue vinculado en el PR (`Closes #id` / `Refs #id`).
- [ ] Commits con referencia `(#id)`.

## Línea base
- [ ] Merge a `main`.
- [ ] Release emitido **desde `main`**.

## Entrega
- [ ] Release notes con: qué cambió, cómo validar y versión (SemVer).

---
> "Sin issue no hay historia; sin PR no hay revisión; sin release notes no hay entrega profesional."
