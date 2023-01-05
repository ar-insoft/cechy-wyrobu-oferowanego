import React, { useEffect, useRef } from 'react';
import { Table, Input, Button, InputNumber, Select, Radio, Avatar } from 'antd';
const { Column, ColumnGroup } = Table;

const data = []
const TabelaPozycjiOferty = ({ params, callbacks }) => {
    const { listaPozycji } = params
    const { dodajNowaPozycje, edytujPozycje } = callbacks

    const listaZKeys = listaPozycji.filter(poz => poz.id)
        .map(poz => {poz.key = poz.id; return poz})

    return (
        <>
            <Table dataSource={listaZKeys} bordered
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => { 
                    //console.log('onRow.onClick',rowIndex, record)
                    edytujPozycje(record.id)
                },
                  onDoubleClick: (event) => {}, // double click row
                  onContextMenu: (event) => {}, // right button click row
                  onMouseEnter: (event) => {}, // mouse enter row
                  onMouseLeave: (event) => {}, // mouse leave row
                };
              }}
              >
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
                <ColumnGroup title="Izolacja">
                    <Column title="Opis typu" dataIndex="izolacjaOpisTypu" key="izolacjaOpisTypu" />
                    <Column title="Grubość" dataIndex="izolacjaGrubosc" key="izolacjaGrubosc" />
                    <Column title="Uwagi" dataIndex="izolacjaUwagi" key="izolacjaUwagi" />
                </ColumnGroup>
                <ColumnGroup title="Mieszadło">
                    <Column title="Typ" dataIndex="mieszadloTyp" key="mieszadloTyp" />
                    <Column title="Moc [kW]" dataIndex="mieszadloMoc" key="mieszadloMoc" />
                    <Column title="Prędkość [rpm]" dataIndex="mieszadloPredkosc" key="mieszadloPredkosc" />
                    <Column title="Rodzaj" dataIndex="warunkiPracyRodzaj" key="warunkiPracyRodzaj" />
                </ColumnGroup>
                <Column title="Posadowienie" dataIndex="posadowienie" key="posadowienie" />
                <Column title="Wykonanie" dataIndex="wykonanie" key="wykonanie" />
                <Column title="Odbiór" dataIndex="odbior" key="odbior" />
                <Column title="Zakres dokumentacji" dataIndex="zakresDokumentacji" key="zakresDokumentacji" />
                <Column title="Uwagi" dataIndex="uwagi" key="uwagi" />
        </Table>
        <Button onClick={() => dodajNowaPozycje(-1)}>Dodaj</Button>
        </>
    )
}

export default TabelaPozycjiOferty