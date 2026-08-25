# tests/test_req002.py
# Auditoría funcional de REQ-002: agregar producto con qty >= 0 (Issue #4)
import pytest
import src.app as app


def setup_function(_):
    # aislamiento: cada criterio parte de un inventario vacio
    app.products.clear()


def test_criterio_1_agrega_qty_positiva():
    """C1: add_product con qty=1 agrega y list_products lo incluye."""
    assert app.add_product("item", 1) is True
    assert len(app.list_products()) == 1


def test_criterio_2_permite_qty_cero():
    """C2: qty=0 es valido (limite inferior permitido)."""
    assert app.add_product("item", 0) is True
    assert app.list_products()[0]["qty"] == 0


def test_criterio_3_rechaza_qty_negativa():
    """C3: qty<0 lanza ValueError y NO agrega el producto."""
    with pytest.raises(ValueError):
        app.add_product("item", -1)
    assert len(app.list_products()) == 0
