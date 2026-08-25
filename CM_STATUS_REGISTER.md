# CM_STATUS_REGISTER.md

**Registro de Estados de Configuración (Status Accounting) — 3.1**

Producto: API Inventario (mini) · Fecha de corte: 2026-08-25 · Auditoría: ISSUE-21 (#1)

Estados posibles: Registrado · En revisión · Aprobado · Baselined · En implementación · Integrado · Verificado · Liberado · Retirado.

| EC-ID | Elemento de Configuración | Tipo | Versión/Ref | Estado | Responsable | Evidencia (link/captura) |
|------:|---------------------------|------|-------------|--------|-------------|---------------------------|
| EC-01 | docs/SRS/SRS_v1.md | Doc | v1.1.0 | Baselined | Analista | commit `0cab1de` + tag v1.0.0 / v1.1.0 |
| EC-02 | src/app.py | Code | v1.0.0 (`9872cb8`) | Integrado | Dev | commit + tag v1.0.0 |
| EC-03 | tests/test_app.py | Test | v1.0.0 (`9872cb8`) | Verificado | QA | resultado pytest (evidence/TESTS.txt) |
| EC-04 | CHANGELOG.md | Doc | v1.1.0 | Aprobado | PM | commit + release notes |
| EC-05 | .gitignore | Config | `90ebfcf` | Aprobado | DevOps | commit (ISSUE-21) |
| EC-06 | config/.env.example | Config | `90ebfcf` | Integrado | DevOps | commit (ISSUE-21) |
| EC-07 | .github/pull_request_template.md | Process | v1.1.0 | Aprobado | Líder | commit + PR |
| EC-08 | README.md | Doc | v1.0.0 | Baselined | Equipo | tag + release v1.0.0 |
| EC-09 | docs/CM/BASELINE.md | Doc | v1.1.0 (`0cab1de`) | Aprobado | Config Manager | commit (ISSUE-21) |
| EC-10 | config/.env (secreto) | Config | — | Retirado | DevOps | `git rm --cached` en `90ebfcf` (ISSUE-21) |

## Notas de auditoría
- El EC-10 (`config/.env`) fue **Retirado** del control de versiones por contener un secreto (`API_KEY`).
  Se reemplaza por `config/.env.example` (EC-06) y se protege con `.gitignore` (EC-05).
- Todos los cambios de la auditoría están vinculados al Issue **#1 (ISSUE-21)** y al Pull Request de corrección.
- Versionado final coherente con SemVer: **v1.0.0** (baseline) → **v1.0.1** (patch) → **v1.1.0** (minor).
