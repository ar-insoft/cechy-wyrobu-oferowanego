import React, { useEffect, useState } from 'react';
import { List, Form, Input, Button, InputNumber, Select, Radio, Divider } from 'antd';

const SchemaGenerator = () => {
    const { TextArea } = Input;
    const [tekst, setTekst] = useState('')
    const [sekcja, setSekcja] = useState('')

    const handleChange = (e) => {
        //console.log('handleChange', e)
        setTekst(e.target.value)
    }
    const handleChangeSection = (e) => {
        setSekcja(e.target.value)
    }
    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
    function replacePl(str) {
        return str.toLowerCase().replaceAll('ą', 'a').replaceAll('ć', 'c').replaceAll('ę', 'e').replaceAll('ł', 'l').replaceAll('ó', 'o')
            .replaceAll('ś', 's').replaceAll('ż', 'z')
    }
    const genValue = `"${camelize(replacePl(sekcja +' '+ tekst))}": {\n "title": "${tekst}",\n "type": "string"\n }`

    return (
        <Form size="small" loading={'false'}
        >
            <Divider orientation="left">SchemaGenerator</Divider>
            sekcja<Input label="sekcja" name="sekcja" onChange={handleChangeSection} allowClear />
            <Input allowClear onChange={handleChange} />
            <TextArea rows={4} value={genValue} readOnly />
        </Form>
    )
}

export default SchemaGenerator