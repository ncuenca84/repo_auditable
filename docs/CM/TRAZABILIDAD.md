# Convención de Trazabilidad

**Rol:** Gestor de Trazabilidad · **Issue:** #5

Objetivo: que todo cambio sea rastreable en la cadena **issue → branch → commit → PR → release**.

## Convención de ramas
- `audit/...` — auditorías (física/funcional).
- `feature/...` — nuevas funcionalidades.
- `fix/...` — correcciones.
- `docs/...` — documentación.

## Convención de mensajes de commit
Formato: `tipo: descripción breve (#issue)`

Tipos: `feat`, `fix`, `docs`, `test`, `chore`, `refactor`.

Ejemplos:
- `feat: add product date filter (#12)`
- `fix: reject negative qty (#4)`
- `docs: physical audit of config items (#3)`

## Reglas
1. **Sin issue no hay historia:** cada branch nace de un issue.
2. **Sin PR no hay revisión:** todo llega a `main` por Pull Request.
3. Cada PR referencia su issue con `Closes #id` o `Refs #id`.
4. Cada release enlaza los PR/issues incluidos (ver release notes).

## Cadena de trazabilidad (ejemplo real de este repo)

| Issue | Branch | Commit(s) | PR | Release |
|-------|--------|-----------|----|---------|
| #3 | audit/fisica-config-items | 4f2e88f | #7 | v1.2.0 |
| #4 | audit/funcional-req002 | c1d74b0 | #8 | v1.2.0 |
| #5 | docs/trazabilidad-convencion | (este PR) | #9 | v1.2.0 |
| #6 | release/v1.2.0 | (por crear) | #10 | v1.2.0 |
