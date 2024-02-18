const IconWrapper = ({ children, className }: { children: React.ReactNode; className: string }) => (
    <div className="rounded-small flex h-8 w-8 items-center justify-center">{children}</div>
)

const ItemCounter = ({ number }: { number?: number }) => (
    <div className="text-default-400 flex items-center gap-1">
        <span className="text-small">{number ?? ''}</span>
    </div>
)

export default function List() {
    return (
        <>
            {/*
        <Listbox className="bg-default-50">
            <ListboxItem 
                key="dashboard" 
                startContent={
                    <IconWrapper className="bg-primary/10 text-primary">
                        {Icon.Dashboard}
                    </IconWrapper>
                }>
                Dashboard
            </ListboxItem>
            <ListboxItem 
                key="database" 
                startContent={
                    <IconWrapper className="bg-success/10 text-success">
                        {Icon.Database}
                    </IconWrapper>
                }>
                Database
            </ListboxItem>
            <ListboxItem 
                key="schema"
                className="bg-secondary/10 text-secondary"
                startContent={
                    <IconWrapper className="bg-secondary/10 text-secondary">
                        {Icon.Schema}
                    </IconWrapper>
                }
                endContent={
                    <ItemCounter />
                }>
                Schema
            </ListboxItem>
        </Listbox>
        */}
        </>
    )
}
