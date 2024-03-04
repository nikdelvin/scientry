import { Button, Card, CardBody } from '@nextui-org/react'

export const SchemaFieldType = ({
    name,
    description,
    icon,
    onPress
}: {
    name: string
    description: string
    icon: React.ReactNode
    onPress: () => void
}) => (
    <Card
        className="border-none bg-default-100 text-foreground-500"
        isPressable
        shadow="none"
        onPress={onPress}
    >
        <CardBody className="flex flex-row gap-4 p-4">
            <Button
                isIconOnly
                color="primary"
                variant="faded"
                onPress={onPress}
            >
                {icon}
            </Button>
            <div className="flex flex-col">
                <p className="text-md">{name}</p>
                <p className="text-small text-default-500">{description}</p>
            </div>
        </CardBody>
    </Card>
)
