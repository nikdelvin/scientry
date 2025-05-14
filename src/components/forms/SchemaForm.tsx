import {
    Card,
    CardBody,
    CardHeader,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    useDisclosure
} from '@heroui/react'
import { Icon } from '../icons/_Icon'
import { SchemaFieldType } from './fields/SchemaFieldType'
import { useStore } from '@/state'
import { SchemaField } from './fields/SchemaField'
import { FieldType, fieldsTypes } from '@/utils/configs/fields'

export default function SchemaForm() {
    const fields = useStore((state) => state.fieldsState)
    const setFields = useStore((state) => state.setFieldsState)
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <>
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
                <CardBody className="flex h-fit flex-col overflow-scroll p-4">
                    <div className="flex h-auto flex-col gap-4">
                        {fields?.map((field, index) => (
                            <SchemaField
                                key={index}
                                icon={fieldsTypes[field.type].icon}
                                onDelete={() => {
                                    const newFields = [...fields]
                                    newFields.splice(index, 1)
                                    setFields(newFields)
                                }}
                                {...{ ...field, ...{ type: fieldsTypes[field.type].name } }}
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
                            <ModalBody className="grid grid-flow-row grid-cols-2 gap-4 px-6 py-4">
                                {Object.entries(fieldsTypes).map(([key, field]) => (
                                    <SchemaFieldType
                                        onPress={() => {
                                            const newFields = [...fields]
                                            newFields.push({
                                                name: '',
                                                type: key as FieldType,
                                                required: false,
                                                unique: false
                                            })
                                            setFields(newFields)
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
        </>
    )
}
