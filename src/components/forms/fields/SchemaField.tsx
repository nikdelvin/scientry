import { Icon } from '@/components/icons/_Icon'
import { Button, Card, CardBody, Input, Switch } from '@heroui/react'

export const SchemaField = ({
    name,
    type,
    required,
    unique,
    defaultValue,
    validate,
    icon,
    onDelete
}: {
    name: string
    type: string
    required?: boolean
    unique?: boolean
    defaultValue?: string | number | boolean
    validate?: string
    icon: React.ReactNode
    onDelete: () => void
}) => (
    <Card
        className="h-fit border-none bg-default-100 text-foreground-500"
        shadow="none"
    >
        <CardBody className="flex flex-row justify-between gap-4 p-4">
            <div className="flex flex-row gap-4">
                <Button
                    isIconOnly
                    color="primary"
                    variant="faded"
                >
                    {icon}
                </Button>
                <Input
                    type="text"
                    variant="bordered"
                    label={type}
                />
                <div className="flex flex-col gap-2">
                    <Switch size="sm">Required</Switch>
                    <Switch size="sm">Unique</Switch>
                </div>
                <Input
                    type="text"
                    variant="bordered"
                    label="Default value"
                />
                <Input
                    type="text"
                    variant="bordered"
                    label="Validation RegExp"
                />
            </div>
            <div className="flex flex-row gap-4">
                <Button
                    isIconOnly
                    color="danger"
                    variant="faded"
                    onPress={onDelete}
                >
                    {Icon.Delete}
                </Button>
            </div>
        </CardBody>
    </Card>
)
