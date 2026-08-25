# Release Notes — v1.2.0

**Fecha:** 2026-08-25 · **Línea base:** `main` · **Issue de release:** #6

## Resumen
Emisión controlada de la auditoría de configuración del proyecto "API Inventario (mini)".
Incluye auditoría física y funcional, convención de trazabilidad y control de integridad.

## ¿Qué cambió?
| Área | Cambio | Issue | PR |
|------|--------|:-----:|:--:|
| Auditoría física | Inventario de config items + `LICENSE` (MIT) | #3 | #7 |
| Auditoría funcional | REQ-002 verificado (3 criterios + pruebas) | #4 | #8 |
| Trazabilidad | Convención de commits/PR + `CHECKLIST_AUDITORIA.md` | #5 | #9 |
| Release/Entrega | Release notes v1.2.0 + `DOC_ENTREGA.md` | #6 | #10 |

## ¿Cómo validar?
```bash
python -m pytest -v      # esperado: 4 passed
git ls-files config/     # esperado: solo config/.env.example (sin secretos)
```

## Versión (SemVer)
- **v1.2.0** — incremento MINOR: nuevas verificaciones y documentación retrocompatibles.
- Historial previo: v1.0.0 (baseline) · v1.0.1 (patch) · v1.1.0 (REQ-003 + auditoría inicial).

## Integridad y control de entrega
- Todos los cambios entraron por PR con checklist de auditoría.
- Release emitido desde `main` (línea base aprobada).
- Ver criterios de entrega en `DOC_ENTREGA.md`.
