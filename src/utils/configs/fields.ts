import { Icon } from '@/components/icons/_Icon'
import { DataTypes } from 'sequelize'

export type FieldType =
    | 'uuid'
    | 'boolean'
    | 'string'
    | 'text'
    | 'date'
    | 'datetime'
    | 'integer'
    | 'bigint'
    | 'float'
    | 'double'

export interface FieldSettings {
    name: string
    type: FieldType
    required: boolean
    unique: boolean
    default?: string | number | boolean
    validate?: string
}

export const fieldsTypes = {
    uuid: { name: 'UUID', description: 'Unique universal 128-bit identifier', icon: Icon.UUID },
    boolean: { name: 'Boolean', description: 'Boolean value (true / false)', icon: Icon.Boolean },
    string: { name: 'String', description: 'Short string up to 255 UTF-8 characters length', icon: Icon.String },
    text: { name: 'Text', description: 'Long string with unlimited UTF-8 characters length', icon: Icon.Text },
    date: { name: 'Date', description: 'Date value in UTC ISO-8601 format', icon: Icon.Date },
    datetime: { name: 'Datetime', description: 'Date-time value in UTC ISO-8601 format', icon: Icon.Datetime },
    integer: { name: 'Integer', description: 'Integer number from -(2^53 - 1) to (2^53 - 1)', icon: Icon.Integer },
    bigint: {
        name: 'Big Integer',
        description: 'Large integer number from -(2^63 - 1) to (2^63 - 1)',
        icon: Icon.BigInt
    },
    float: { name: 'Float', description: 'Floating point number with 4-byte precision', icon: Icon.Float },
    double: { name: 'Double', description: 'Large floating point number with 8-byte precision', icon: Icon.Double }
}

export async function getType(type: string) {
    switch (type) {
        case 'uuid':
            return DataTypes.UUID
        case 'boolean':
            return DataTypes.BOOLEAN
        case 'string':
            return DataTypes.STRING
        case 'text':
            return DataTypes.TEXT
        case 'date':
            return DataTypes.DATEONLY
        case 'datetime':
            return DataTypes.DATE
        case 'integer':
            return DataTypes.INTEGER
        case 'bigint':
            return DataTypes.BIGINT
        case 'float':
            return DataTypes.FLOAT
        case 'double':
            return DataTypes.DOUBLE
    }
}
