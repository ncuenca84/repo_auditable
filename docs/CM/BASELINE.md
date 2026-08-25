# Línea Base (Baseline) — Plan de Gestión de Configuración

Este documento define las líneas base formales del producto "API Inventario (mini)".

## Baseline v1.0.0 (Aprobada)
Contenido congelado y aprobado como punto de partida auditable:

| Elemento | Referencia |
|----------|------------|
| Estructura del repositorio | `chore: init baseline structure` |
| SRS v1 (REQ-001, REQ-002) | `docs/SRS/SRS_v1.md` |
| Código mínimo | `src/app.py` |
| Prueba mínima | `tests/test_app.py` |

- **Estado:** Baselined
- **Aprobado por:** Equipo GCS
- **Evidencia:** tag/release `v1.0.0` + `CHANGELOG.md`

## Versión v1.0.1 (Patch)
- Corrección puntual (hotfix). Sin nuevas funcionalidades.
- **Evidencia:** tag/release `v1.0.1`.

## Versión v1.1.0 (Minor)
- Nueva funcionalidad REQ-003 (filtrar productos por fecha) documentada.
- Correcciones de auditoría (ISSUE-21): eliminación de secreto, `.gitignore`,
  `.env.example`, CHANGELOG por versión, registro de estados y plantilla de PR.
- **Evidencia:** tag/release `v1.1.0` + PR de auditoría.

## Criterio SemVer aplicado (vMAJOR.MINOR.PATCH)
- **MAJOR**: cambios incompatibles de contrato/API.
- **MINOR**: nueva funcionalidad retrocompatible (p. ej. REQ-003 → v1.1.0).
- **PATCH**: correcciones retrocompatibles sin nuevas funciones (p. ej. hotfix → v1.0.1).
