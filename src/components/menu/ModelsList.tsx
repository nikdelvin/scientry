const IconWrapper = ({ children, className }: { children: React.ReactNode; className: string }) => (
    <div className="rounded-small flex h-8 w-8 items-center justify-center">{children}</div>
)

const ItemCounter = ({ number }: { number?: number }) => (
    <div className="text-default-400 flex items-center gap-1">
        <span className="text-small">{number ?? ''}</span>
    </div>
)

export default function ModelsList() {
    return (
        <>
            {/*
        <Listbox>
            <ListboxItem 
                key="new"
                className="bg-default-50"
                startContent={
                    <IconWrapper className="bg-warning/10 text-warning">
                        {Icon.User}
                    </IconWrapper>
                } 
                endContent={
                    <ItemCounter/>
                }>
                Users
            </ListboxItem>
            <ListboxItem 
                key="new" 
                startContent={
                    <IconWrapper className="bg-danger/10 text-danger">
                        {Icon.Flag}
                    </IconWrapper>
                }>
                Countries
            </ListboxItem>
            <ListboxItem 
                key="copy"
                startContent={
                    <IconWrapper className="bg-foreground/10 text-foreground">
                        {Icon.Planet}
                    </IconWrapper>
                }>
                Geo Data
            </ListboxItem>
        </Listbox>
        */}
        </>
    )
}
