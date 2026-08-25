# Auditoría Funcional de Configuración

**Rol:** Auditor Funcional · **Issue:** #4 · **Fecha:** 2026-08-25

## Requisito bajo prueba
**REQ-002:** El sistema permitirá agregar productos con cantidad `qty >= 0`.

## Criterios de aceptación y resultado

| # | Criterio de aceptación | Prueba | Resultado |
|---|------------------------|--------|-----------|
| C1 | `add_product("item", 1)` agrega y aparece en `list_products()` | `test_criterio_1_agrega_qty_positiva` | ✅ PASSED |
| C2 | `qty = 0` es válido (límite inferior permitido) | `test_criterio_2_permite_qty_cero` | ✅ PASSED |
| C3 | `qty < 0` lanza `ValueError` y no agrega el producto | `test_criterio_3_rechaza_qty_negativa` | ✅ PASSED |

## Evidencia
Salida de `pytest -v` (4 passed) en `docs/CM/evidence/FUNCTIONAL_TESTS.txt`.

```
tests/test_req002.py::test_criterio_1_agrega_qty_positiva PASSED
tests/test_req002.py::test_criterio_2_permite_qty_cero    PASSED
tests/test_req002.py::test_criterio_3_rechaza_qty_negativa PASSED
============================== 4 passed ==============================
```

## Conclusión
REQ-002 **cumple** los 3 criterios de aceptación definidos. Requisito verificado con evidencia reproducible.
