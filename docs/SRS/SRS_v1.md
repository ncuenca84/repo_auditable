# SRS v1 (mínimo)

REQ-001: El sistema permitirá listar productos.
REQ-002: El sistema permitirá agregar productos con cantidad >= 0.
REQ-003: El sistema permitirá filtrar productos por fecha de alta.
  - Criterio de aceptación: dado un rango `desde`/`hasta` (formato ISO `YYYY-MM-DD`),
    el sistema retorna solo los productos cuya fecha de alta esté dentro del rango.
  - Estado: Aprobado y documentado en la auditoría (ISSUE-21). Programado para v1.1.0.

RNF-001: Los cambios deben ser trazables a un ISSUE y evidencias.
RNF-002: Versionado seguirá SemVer con tags y changelog.
