import React, { useEffect, useState, useRef } from 'react';
import { List, Form, Input, Button, InputNumber, Select, Radio, Divider } from 'antd';

const PozycjaOfertyEdit = ({ params, callbacks }) => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 8,
        },
    };

    const { idEdytowanego, listaPozycji } = params
    const pozycja = listaPozycji.find(element => element.id === idEdytowanego)
    const initialValues = pozycja ? pozycja : {}
    const formRef = useRef()
    const { TextArea } = Input;

    const onFinish = (values) => {
        const initialValues = pozycja ? pozycja : {}
        const doWyslania = Object.assign({}, initialValues, values)
        //console.log('PozycjaOfertyEdit Success doWyslania:', doWyslania);
        callbacks.submitEdycjePozycji(doWyslania)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('PozycjaOfertyEdit Failed:', errorInfo);
    };

    return (
        <Form ref={formRef} size="small" 
            {...layout}
            initialValues={{ ...initialValues, remember: true }}
            onFinish={onFinish}
            //onFinishFailed={onFinishFailed}
        >
            <Form.Item label="Opis produktu/usługi" name="opisProduktuUslugi" key="opisProduktuUslugi">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Opis c.d." name="opisCd" key="opisCd">
                <TextArea rows={4} allowClear />
            </Form.Item>
            <Form.Item label="Pojemność [l]" name="pojemnosc" key="pojemnosc">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Produkt" name="produkt" key="produkt">
                <Input allowClear />
            </Form.Item>
            <Divider >Warunki pracy</Divider>
            <Form.Item label="Opis warunków pracy" name="warunkiPracyOpis" key="warunkiPracyOpis">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Rodzaj" name="warunkiPracyRodzaj" key="warunkiPracyRodzaj">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Temperatura produktu [°C]" name="warunkiPracyTemperaturaProduktu" key="warunkiPracyTemperaturaProduktu">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Uwagi" name="warunkiPracyUwagi" key="warunkiPracyUwagi">
                <TextArea rows={2} allowClear />
            </Form.Item>
            <Divider >Wymiary</Divider>
            <Form.Item label="Średnica wewnętrzna [mm]" name="wymiarySrednicaWewnetrzna" key="wymiarySrednicaWewnetrzna">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Średnica zewnętrzna [mm]" name="wymiarySrednicaZewnetrzna" key="wymiarySrednicaZewnetrzna">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Wysokość spustu [mm]" name="wymiaryWysokoscSpustu" key="wymiaryWysokoscSpustu">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Wysokość cylidryczna [mm]" name="wymiaryWysokoscCylidryczna" key="wymiaryWysokoscCylidryczna">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Wysokość całkowita [mm]" name="wymiaryWysokoscCalkowita" key="wymiaryWysokoscCalkowita">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Uwagi" name="wymiaryUwagi" key="wymiaryUwagi">
                <TextArea rows={2} allowClear />
            </Form.Item>
            <Divider >Grubości ścian</Divider>
            <Form.Item label="Dennica górna [mm]" name="grubosciScianDennicaGorna" key="grubosciScianDennicaGorna">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Dennica dolna [mm]" name="grubosciScianDennicaDolna" key="grubosciScianDennicaDolna">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Płaszcz cylindryczny [mm]" name="grubosciScianPlaszczCylindryczny" key="grubosciScianPlaszczCylindryczny">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Płaszcz izolacyjny [mm]" name="grubosciScianPlaszczIzolacyjny" key="grubosciScianPlaszczIzolacyjny">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Płaszcz grzewczy/chłodzący [mm]" name="grubosciScianPlaszczGrzewczyChlodzacy" key="grubosciScianPlaszczGrzewczyChlodzacy">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Uwagi" name="grubosciScianUwagi" key="grubosciScianUwagi">
                <TextArea rows={2} allowClear />
            </Form.Item>
            <Divider >Wyposażenie</Divider>
            <Form.Item label="Dennica górna" name="wyposazenieDennicaGorna" key="wyposazenieDennicaGorna">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Dennica dolna" name="wyposazenieDennicaDolna" key="wyposazenieDennicaDolna">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Dennica boczna" name="wyposazenieDennicaBoczna" key="wyposazenieDennicaBoczna">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Uwagi" name="wyposazenieUwagi" key="wyposazenieUwagi">
                <TextArea rows={2} allowClear />
            </Form.Item>
            <Form.Item label="Wyposażenie pozostałe" name="wyposazenieWyposazeniePozostale" key="wyposazenieWyposazeniePozostale">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Króćce" name="wyposazenieKrocce" key="wyposazenieKrocce">
                <TextArea rows={2} allowClear />
            </Form.Item>
            {/* <Form.Item label="Wyposażenie pozostałe" name="wyposazenieWyposazeniePozostale" key="wyposazenieWyposazeniePozostale">
                <Input allowClear />
            </Form.Item> */}

            <Divider >Płaszcz grzewczy/chłodzący</Divider>
            <Form.Item label="Opis typu" name="plaszczGrzewczyChlodzacyOpisTypu" key="plaszczGrzewczyChlodzacyOpisTypu">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Typ" name="plaszczGrzewczyChlodzacyTyp" key="plaszczGrzewczyChlodzacyTyp">
                <Input allowClear />
            </Form.Item><Form.Item label="Uwagi" name="plaszczGrzewczyChlodzacyUwagi" key="plaszczGrzewczyChlodzacyUwagi">
                <TextArea rows={2} allowClear />
            </Form.Item>
            <Divider >Izolacja</Divider>
            <Form.Item label="Opis typu" name="izolacjaOpisTypu" key="izolacjaOpisTypu">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Grubość" name="izolacjaGrubosc" key="izolacjaGrubosc">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Uwagi" name="izolacjaUwagi" key="izolacjaUwagi">
                <TextArea rows={2} allowClear />
            </Form.Item>
            <Divider >Mieszadło</Divider>
            <Form.Item label="Typ" name="mieszadloTyp" key="mieszadloTyp">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Moc [kW]" name="mieszadloMoc" key="mieszadloMoc">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Prędkość [rpm]" name="mieszadloPredkosc" key="mieszadloPredkosc">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Rodzaj" name="mieszadloUwagi" key="mieszadloUwagi">
                <Input allowClear />
            </Form.Item>
           <Divider ></Divider>
            <Form.Item label="Posadowienie" name="posadowienie" key="posadowienie">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Wykonanie" name="wykonanie" key="wykonanie">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Odbiór" name="odbior" key="odbior">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Zakres dokumentacji" name="zakresDokumentacji" key="zakresDokumentacji">
                <Input allowClear />
            </Form.Item>
            <Form.Item label="Uwagi" name="uwagi" key="uwagi">
                <Input allowClear />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" disabled={false}>
                    Zapisz
                </Button>
                <Button type="secendary" htmlType="button" onClick={e => callbacks.anulujEdycjePozycji()}>
                    Anuluj
                </Button>
            </Form.Item>
            </Form>
    )
}

export default PozycjaOfertyEdit