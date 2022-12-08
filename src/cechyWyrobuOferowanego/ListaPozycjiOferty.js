import React, { useEffect, useRef } from 'react';
import { List, Form, Input, Button, InputNumber, Select, Radio, Avatar } from 'antd';
import testoweDane from './testowe_cechy_wyrobu.json'

const data = testoweDane

const ListaPozycjiOferty = ({ params, callbacks }) => {

    return (
        <div style={{ width: 80 + '%' }}>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item
                        actions={[<a key="list-loadmore-edit">edycja</a>, <a key="list-loadmore-more">usuń</a>]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.opis}
                        />
                    </List.Item>
                )}
            />
            <Button >Dodaj</Button>
        </div>
    )
}

export default ListaPozycjiOferty