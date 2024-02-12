import {
    Card,
    CardBody,
    CardHeader,
    Divider,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure
} from '@nextui-org/react'
import { Icon } from '../icons/_Icon'
import { SchemaField } from './fields/SchemaField'

export default function SchemaForm() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const fields = [
        { name: 'String', description: 'Short string up to 255 UTF-8 characters length', icon: Icon.String },
        { name: 'Text', description: 'Long string with unlimited UTF-8 characters length', icon: Icon.Text },
        { name: 'Boolean', description: 'Boolean value (true / false)', icon: Icon.Boolean },
        { name: 'Date', description: 'Date value in UTC ISO-8601 format', icon: Icon.Date }
        //TODO: Add datetime field
    ]

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
                <CardBody></CardBody>
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
                                {fields.map((field, index) => (
                                    <SchemaField
                                        onPress={onClose}
                                        key={index}
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
