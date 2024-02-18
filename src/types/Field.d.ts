declare namespace SciField {
    type Type = 'uuid' | 'boolean' | 'string' | 'text' | 'date' | 'datetime' | 'integer' | 'bigint' | 'float' | 'double'
    interface Settings {
        name: string
        type: Type
        required: boolean
        unique: boolean
        defaultValue?: string | number | boolean
        validate?: string
    }
}
