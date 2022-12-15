import Ajv, { JSONSchemaType } from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import jsonSchema from '../cechyWyrobuOferowanego/json_schema.json'
// type FormData = {
//     firstName: string;
//     lastName: string;
//     workExperience: number;
// };

const schema2 = {
    //title: 'Guest',
    type: 'object',
    properties: {
        firstName: { type: 'string', title: 'Imię', minimum: 1 },
        lastName: { type: 'integer' },
        workExperience: {
            description: 'Work experience in years',
            type: 'integer',
            minimum: 0,
            maximum: 100,
        },
    },
    required: ['lastName'],
};
const schema = jsonSchema

const ajv = new Ajv({
    allErrors: false,
    useDefaults: true,
    $data: true
});
ajv.addKeyword('uniforms');

function createValidator(schema) {
    const validator = ajv.compile(schema);

    return (model) => {
        validator(model);
        return validator.errors?.length ? { details: validator.errors } : null;
    };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);