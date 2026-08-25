# DOC_ENTREGA.md — Entrega controlada

**Rol:** Entrega/Despliegue · **Release:** v1.2.0

Este proyecto no requiere despliegue real (producto simulado para GCS). Se documentan
los **pasos de entrega** verificables.

## 1. Requisitos
- Python 3.11+
- `pip install pytest`

## 2. Build / verificación (equivalente a CI)
```bash
# 1) Clonar la línea base
git clone https://github.com/ncuenca84/repo_auditable.git
cd repo_auditable
git checkout main

# 2) Instalar dependencias de prueba
pip install pytest

# 3) Ejecutar pruebas (gate de calidad)
python -m pytest -v         # DEBE dar: 4 passed

# 4) Verificar integridad (sin secretos versionados)
git ls-files config/        # DEBE listar solo: config/.env.example
```

## 3. Criterios de aceptación de la entrega
- [ ] `pytest` en verde (4 passed).
- [ ] `git status` limpio en `main`.
- [ ] Sin secretos versionados.
- [ ] Release `v1.2.0` publicado con release notes.

## 4. Evidencia de ejecución
Ver `docs/CM/evidence/FUNCTIONAL_TESTS.txt` (salida de pytest).

## 5. Rollback
Si una entrega falla, volver a la etiqueta estable anterior:
```bash
git checkout v1.1.0
```
