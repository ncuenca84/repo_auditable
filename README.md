# API Inventario (mini)

- Endpoints simulados: `GET /products`, `POST /products`
- Objetivo: repo auditable (versiones + estados + trazabilidad)

## Cómo ejecutar (simulado)

- No se requiere despliegue real. Este repositorio se usa para GCS (Gestión de la Configuración del Software).
- Para correr la prueba mínima:

```bash
python -m pytest -q
```

## Convención

- **Commits:** `chore/docs/feat/fix` + referencia `ISSUE-xx`
- **Versiones:** SemVer (`vMAJOR.MINOR.PATCH`)
- **Trazabilidad:** todo cambio se vincula a un Issue y deja evidencia (commit, PR, tag/release).

## Estructura del repositorio

```
/docs
  /SRS   -> Especificación de requisitos (SRS)
  /CM    -> Documentos de gestión de configuración
/src     -> Código fuente (API simulada)
/tests   -> Pruebas
/config  -> Configuración (sin secretos; usar .env.example)
.github  -> Plantillas de proceso (PR)
README.md
CHANGELOG.md
CM_STATUS_REGISTER.md   -> Registro de estados de configuración (Status Accounting)
```

## Baseline actual

- **v1.0.0** — Baseline aprobada: estructura + SRS v1 + código mínimo + prueba mínima.
