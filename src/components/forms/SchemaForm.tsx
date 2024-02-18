import { SchemaFieldType } from './fields/SchemaFieldType'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { fieldsState } from '@/state'
import { SchemaField } from './fields/SchemaField'

export default function SchemaForm() {
    const fields = useRecoilValue(fieldsState)
    const setFields = useSetRecoilState(fieldsState)

    return (
        <>
            {/*
            <Card>
                <CardHeader className="flex justify-between gap-4 p-4">
                    <div className="flex flex-col">
                        <p className="text-md">New collection: Users</p>
                        <p className="text-small text-default-500">Please configure fields for Users collection</p>
                    </div>
                    <Button
                        onPress={onOpen}
                        color="primary"
                        startContent={Icon.Add}
                    >
                        Add field
                    </Button>
                </CardHeader>
                <CardBody className="flex flex-col p-4 h-fit overflow-scroll">
                    <div className='flex flex-col gap-4 h-auto'>
                        {fields?.map((field, index) => (
                            <SchemaField
                                key={index}
                                icon={fieldsTypes[field.type].icon}
                                {...{...field, ...{ type: fieldsTypes[field.type].name }}}
                            />
                        ))}
                    </div>
                </CardBody>
            </Card>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="5xl"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col">Add field</ModalHeader>
                            <ModalBody className="grid grid-cols-2 grid-flow-row gap-4 px-6 py-4">
                                {Object.entries(fieldsTypes).map(([key, field]) => (
                                    <SchemaFieldType
                                        onPress={() => {
                                            setFields((fields) => {
                                                const newFields = [...fields]
                                                newFields.push({
                                                    name: '',
                                                    type: key as FieldType,
                                                    required: false,
                                                    unique: false
                                                })
                                                return newFields
                                            })
                                            onClose()
                                        }}
                                        key={key}
                                        {...field}
                                    />
                                ))}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
            */}
        </>
    )
}
