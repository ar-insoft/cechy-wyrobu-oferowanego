import React, { useEffect, useRef } from 'react';
import { Table, Input, Button, InputNumber, Select, Radio, Avatar } from 'antd';
const { Column, ColumnGroup } = Table;

const data = []
const TabelaPozycjiOferty = ({ params, callbacks }) => {
    const { listaPozycji } = params
    const { dodajNowaPozycje } = callbacks

    const listaZKeys = listaPozycji.map(poz => {poz.key = poz.id; return poz})

    return (
        <>
            <Table dataSource={listaPozycji} bordered>
            <Column title="Opis produktu/usługi" dataIndex="opisProduktuUslugi" key="opisProduktuUslugi" />
            <Column title="Opis c.d." dataIndex="opisCd" key="opisCd" />
            <Column title="Pojemność [l]" dataIndex="pojemnosc" key="pojemnosc" />
            <Column title="Produkt" dataIndex="produkt" key="produkt" />
            <ColumnGroup title="Warunki pracy">
                <Column title="Opis warunków pracy" dataIndex="warunkiPracyOpis" key="warunkiPracyOpis" />
                <Column title="Rodzaj" dataIndex="warunkiPracyRodzaj" key="warunkiPracyRodzaj" />
                <Column title="Temperatura produktu [°C]" dataIndex="warunkiPracyTemperaturaProduktu" key="warunkiPracyTemperaturaProduktu" />
            </ColumnGroup>
            <ColumnGroup title="Wymiary">
                <Column title="Średnica wewnętrzna [mm]" dataIndex="wymiarySrednicaWewnetrzna" key="wymiarySrednicaWewnetrzna" />
                <Column title="Średnica zewnętrzna [mm]" dataIndex="wymiarySrednicaZewnetrzna" key="wymiarySrednicaZewnetrzna" />
                <Column title="Wysokość spustu [mm]" dataIndex="wymiaryWysokoscSpustu" key="wymiaryWysokoscSpustu" />
                <Column title="Wysokość cylidryczna [mm]" dataIndex="wymiaryWysokoscCylidryczna" key="wymiaryWysokoscCylidryczna" />
                <Column title="Wysokość całkowita [mm]" dataIndex="wymiaryWysokoscCalkowita" key="wymiaryWysokoscCalkowita" />
            </ColumnGroup>
            <ColumnGroup title="Grubości ścian">
                <Column title="Dennica górna [mm]" dataIndex="grubosciScianDennicaGorna" key="grubosciScianDennicaGorna" />
                <Column title="Dennica dolna [mm]" dataIndex="grubosciScianDennicaDolna" key="grubosciScianDennicaDolna" />
                <Column title="Płaszcz cylindryczny [mm]" dataIndex="grubosciScianPlaszczCylindryczny" key="grubosciScianPlaszczCylindryczny" />
            </ColumnGroup>
            <ColumnGroup title="Wyposażenie">
                <Column title="Dennica górna" dataIndex="wyposazenieDennicaGorna" key="wyposazenieDennicaGorna" />
                <Column title="Dennica dolna" dataIndex="wyposazenieDennicaDolna" key="wyposazenieDennicaDolna" />
                <Column title="Dennica boczna" dataIndex="wyposazenieDennicaBoczna" key="wyposazenieDennicaBoczna" />
                <Column title="Uwagi" dataIndex="wyposazenieUwagi" key="wyposazenieUwagi" />
                <Column title="Wyposażenie pozostałe" dataIndex="wyposazenieWyposazeniePozostale" key="wyposazenieWyposazeniePozostale" />
            </ColumnGroup>
            <ColumnGroup title="Płaszcz grzewczy/chłodzący">
                <Column title="Opis typu" dataIndex="plaszczGrzewczyChlodzacyOpisTypu" key="plaszczGrzewczyChlodzacyOpisTypu" />
                <Column title="Typ" dataIndex="plaszczGrzewczyChlodzacyTyp" key="plaszczGrzewczyChlodzacyTyp" />
                {/* <Column title="Rodzaj" dataIndex="warunkiPracyRodzaj" key="warunkiPracyRodzaj" /> */}
            </ColumnGroup>

        </Table>
        <Button onClick={() => dodajNowaPozycje(-1)}>Dodaj</Button>
        </>
    )
}

export default TabelaPozycjiOferty