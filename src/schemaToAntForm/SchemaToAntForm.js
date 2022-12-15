import React, { useEffect, useRef } from 'react';
import { List, Form, Input, Button, InputNumber, Select, Radio, Divider } from 'antd';

const testSchema = {
    "type": "object",
    "title": "Name of the product",
    "description": "Name of the product",
    "properties": {
        "opisProduktuUslugi": {
            "title": "Opis produktu/usługi",
            "description": "Opis produktu/usługi",
            "type": "string"
        },
        "opis2": {
            "title": "Opis c.d.",
            "type": "string"
        },
        "pojemnosc": {
            "title": "Pojemność",
            "type": "string",
        },
        "Warunki pracy": {
            "title": "Warunki pracy",
            "type": "object",
            "properties": {
                "Opis": {
                    "type": "string"
                },
                "Typ": {
                    "type": "string"
                },
                "Temperatura produktu": {
                    "type": "string"
                },
                "uwagi": {
                    "type": "string"
                }
            },
            "required": [
            ]
        },
    }
}

const SchemaToAntForm = () => {
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 4,
            span: 8,
        },
    };

    const schema = testSchema
    const formRef = useRef()

    const onFinish = (values) => {
        console.log('SchemaToAntForm Success:', values);
        //callbacks.zapiszNaSerwerzeCechyWyrobu(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('SchemaToAntForm Failed:', errorInfo);
    };

    const objectToFormInput = obj => {
        if (obj.properties) {
            //console.log('has properties')
            const items = []
            for (const [key, value] of Object.entries(obj.properties)) {
                console.log(`${key}: ${value}`);
                const objectName = key
                const object = value
                if (object.type !== 'object') {
                    items.push(simpleObjectToFormInput(objectName, object))
                } else {
                    const section = <Divider orientation = "left">{object.title}</Divider>
                    items.push(section)
                }
            }
            // return [<TekstInput key='opisProduktuUslugi' name='opisProduktuUslugi' label='Opis produktu/usługi' />,
            //     <TekstInput key='opisProduktuUslugi2' name='opisProduktuUslugi' label='Opis2' />]
            return items
        } else return null
    }

    const simpleObjectToFormInput = (objectName, obj) => {
        if (obj.properties) {
            throw "'properties' are not allowed for function simpleObjectToFormInput";
        }

        return (
            <TekstInput key={objectName} name={objectName} label={obj.title} />
        )

    }

    return (
        <Form ref={formRef} size="small" loading={'false'}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            {...layout}
        >
        
            {objectToFormInput(schema)}
            <Form.Item {...tailLayout} >
                <Button type="primary" htmlType="submit" disabled={false}>
                    Zapisz
                </Button>
            </Form.Item>
        </Form>
    )
}

const TekstInput = (props) => {
    //console.log('TekstInput', props)
    return (
        <Form.Item
            {...props} key={props.name}
        >
            <Input allowClear />
        </Form.Item>
    )
}

export default SchemaToAntForm