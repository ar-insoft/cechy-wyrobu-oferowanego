import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
//import { MailOutlined, AppstoreOutlined, ApartmentOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { DataProvider } from './DataProvider'
import {EdycjaListyCech} from './EdycjaListyCech'
import ListaPozycjiOferty from './ListaPozycjiOferty'
import TabelaPozycjiOferty from './TabelaPozycjiOferty'
import PozycjaOfertyEdit from './PozycjaOfertyEdit'
import testoweDane from './testowe_cechy_wyrobu.json'
import { GuestFormBasic } from '../uniformExample/AutoForm'
import SchemaToAntForm from '../schemaToAntForm/SchemaToAntForm'
import SchemaGenerator from '../schemaToAntForm/SchemaGenerator'

export const CechyWyrobuOferowanego = () => {
    const parsedUrl = new URL(window.location.href)
    const idOferty = parsedUrl.searchParams.get("offer_id") || "test"
    const [isLoading, setIsLoading] = useState(false)

    // const [definicjeCech, setDefinicjeCech] = useState([])
    // const [product, setProduct] = useState({})
    // const [zleceniaWyrobu, setZleceniaWyrobu] = useState([])
    // const [cechyWyrobu, setCechyWyrobu] = useState([])


    //////////////////////

    const [offer, setOffer] = useState({})
    const [listaPozycji, setListaPozycji] = useState([])
    const [idEdytowanego, setIdEdytowanego] = useState(0)
    
    const [zapisanoDane, setZapisanoDane] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        DataProvider.pobierzCechyWyrobu(
            {
                idWyrobu: idOferty,
            },
            fromServer => {
                //console.log('pobierzCechyWyrobu fromServer', fromServer)
                setOffer(fromServer.offer)
                setListaPozycji(fromServer.cechyWyrobu)
                setIsLoading(false)
            }, error => {
                console.log('pobierzCechyWyrobu error', error)
                //wyswietlKomunikatBledu(error)
                setIsLoading(false)
            })
    }, [])

    const callbacks = {
        zapiszNaSerwerzeCechyWyrobu: (cechyOferty) => {
            setIsLoading(true)
            DataProvider.wyslijNaSerwerCechyWyrobu(
                idOferty, cechyOferty, {},
                fromServer => {
                    //console.log('EdycjaListyCech fromServer', fromServer)
                    if (!fromServer?.zapisano) throw new Error('Błąd zapisu!')
                    const zapisanaCechaWyrobu = fromServer.zapisanaCechaWyrobu
                    if (listaPozycji.find(poz => poz.id == zapisanaCechaWyrobu.id)) {
                        setListaPozycji(listaPozycji.map(poz => {
                            if (poz.id == zapisanaCechaWyrobu.id) return zapisanaCechaWyrobu
                            else return poz
                            }))
                    } else {
                        setListaPozycji([...listaPozycji, fromServer.zapisanaCechaWyrobu])
                    }

                    setIsLoading(false)
                    setZapisanoDane(zapisanoDane+1)
                }, error => {
                    console.log('EdycjaListyCech serverError', error)
                    //wyswietlKomunikatBledu(error)
                    setIsLoading(false)
                    Modal.error({
                        title: 'Wystąpił błąd',
                        content: 'nie udało się zapisać na serwerze',
                    })
                }
            )
        },
        dodajNowaPozycje: () => {
            setIdEdytowanego(-1)
        },
        edytujPozycje: (id) => {
            //console.log('edytujPozycje', id)
            setIdEdytowanego(id)
        },
        submitEdycjePozycji: (pozycja) => {
            //console.log('submitEdycjePozycji', pozycja)
            callbacks.zapiszNaSerwerzeCechyWyrobu(pozycja)

            //pozycja.id = -2
            //setListaPozycji([...listaPozycji, pozycja])
            setIdEdytowanego(0)
        },
        anulujEdycjePozycji: (pozycja) => {
            setIdEdytowanego(0)
        },
    }
    const params = {
        isLoading,
        idWyrobu: idOferty,
        // definicjeCech,
        // product,
        // zleceniaWyrobu,
        // cechyWyrobu,
        zapisanoDane,

        listaPozycji,
        idEdytowanego,
    }

    return (
        <div className="ant-layout main" data-wyrob-id={idOferty}>
            <div className="ant-page-header-heading-title">Cechy wyrobu oferowanego</div>
            <div className="ant-page-header-heading-sub-title">
                dotyczy oferty: <span style={{ color: 'black' }}>{offer?.object_index} {offer?.title}</span>
            </div>
            <div className="ant-page-header-heading-sub-title">
                {/* numer rysunku: <span style={{ color: 'black' }}>{product.object_drawing_no}</span> */}
            </div>
            {
                idEdytowanego === 0
                &&
                <TabelaPozycjiOferty params={params} callbacks={callbacks} />
            }
            {
                idEdytowanego !== 0
                &&
                <div style={{ width: 80 + '%' }}>
                    < PozycjaOfertyEdit params={params} callbacks={callbacks} />
                    {/* <GuestFormBasic params={params} callbacks={callbacks} /> */}
                </div>
            }
            <div style={{ width: 80 + '%' }}>
                {/* <SchemaToAntForm /> */}
                {/* <SchemaGenerator /> */}
            </div>
            
            {/* <EdycjaListyCech params={params} callbacks={callbacks} /> */}
            {/* <div className="ant-page-header-heading-sub-title">
                <a href="/eoffice/production/cechy_wyrobu_gotowego/cechy_wyrobu_gotowego_wyszukiwarka_treegrid.xml?action=tree_grid_table_init" target="_blank">
                    wyszukiwarka
                </a>
            </div> */}
            <ZapisanoDane params={params} callbacks={callbacks} />
        </div>
    )
}

const ZapisanoDane = ({ params, callbacks }) => {
    const { isLoading, zapisanoDane } = params
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        zapisanoDane > 0 && setVisible(true)
    }, [zapisanoDane])
    const handleClose = () => {
        setVisible(false); window.opener = null;
        window.open("", "_self"); window.close(); }
    const handleCancel = () => setVisible(false)
    return (
        <>
            <Modal
                show={visible}
                title="Zapisano"
                onOk={handleCancel}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Kontynuj edycję
                    </Button>,
                        ]}
                    >
                <p>Dane zostały zapisane na serwerze</p>
            </Modal>
        </>
    )
}