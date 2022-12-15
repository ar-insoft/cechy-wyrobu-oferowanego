import React from 'react';
import { AutoForm, AutoField, SubmitField } from 'uniforms-antd';

import { bridge as schema } from './GuestSchema';

export function GuestFormBasic({ params, callbacks }) {
    return (
        <div style={{ width: 60 + '%' }}>
            <AutoForm schema={schema} onSubmit={callbacks.submitEdycjePozycji} >
            {/* <h4>IT meeting guest questionnaire</h4>
            <AutoField name="Wyposażenie" />
            <SubmitField /> */}
        </AutoForm>
        </div>
    )
}