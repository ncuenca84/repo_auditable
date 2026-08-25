# Changelog

Todas las versiones siguen [SemVer](https://semver.org/lang/es/) (`vMAJOR.MINOR.PATCH`).
Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/).

## [Unreleased]
- (sin cambios pendientes)

## [v1.1.0] - 2026-08-25
### Added
- REQ-003: filtrar productos por fecha de alta (documentado en SRS v1). (Refs ISSUE-21)
- Plantilla de Pull Request (`.github/pull_request_template.md`) para forzar evidencia. (Refs ISSUE-21)
- `docs/CM/BASELINE.md`: definición formal de líneas base. (Refs ISSUE-21)
### Changed
- CHANGELOG reorganizado por versión con SemVer. (Refs ISSUE-21)
- `CM_STATUS_REGISTER.md` completado con ≥ 8 elementos de configuración. (Refs ISSUE-21)
### Removed / Security
- Se elimina `config/.env` (contenía `API_KEY`) del control de versiones. (Refs ISSUE-21)
- Se agrega `config/.env.example` y `.gitignore`. (Refs ISSUE-21)
### Fixed
- Se corrige el commit no técnico "update stuff" mediante commits trazables. (Refs ISSUE-21)

## [v1.0.1] - 2026-08-25
### Fixed
- Hotfix de ajuste 1% (corrección puntual retrocompatible, sin nuevas funciones).

## [v1.0.0] - 2026-08-25
### Added
- Baseline aprobada: estructura del repo + SRS v1 (REQ-001, REQ-002) + código mínimo + prueba mínima.
