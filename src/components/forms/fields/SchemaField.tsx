export const SchemaField = ({
    name,
    type,
    required,
    unique,
    defaultValue,
    validate,
    icon
}: {
    name: string
    type: string
    required?: boolean
    unique?: boolean
    defaultValue?: string | number | boolean
    validate?: string
    icon: React.ReactNode
}) => (
    <>
        {/*
    <Card
        className="bg-default-100 text-foreground-500 border-none h-fit"
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
                <Input type="text" variant="bordered" label={type} />
                <div className="flex flex-col gap-2">
                    <Switch size="sm">Required</Switch>
                    <Switch size="sm">Unique</Switch>
                </div>
                <Input type="text" variant="bordered" label="Default value" />
                <Input type="text" variant="bordered" label="Validation RegExp" />
            </div>
            <div className="flex flex-row gap-4">
                <Button
                    isIconOnly
                    color="danger"
                    variant="faded"
                >
                    {Icon.Delete}
                </Button>
            </div>
        </CardBody>
    </Card>
    */}
    </>
)
