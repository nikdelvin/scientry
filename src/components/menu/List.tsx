import { Listbox, ListboxItem, ListboxSection, cn } from '@nextui-org/react'
import { Icon } from '../icons/_Icon'

const IconWrapper = ({ children, className }: { children: React.ReactNode; className: string }) => (
    <div className={cn(className, 'flex h-8 w-8 items-center justify-center rounded-small')}>{children}</div>
)

const ItemCounter = ({ number }: { number?: number }) => (
    <div className="flex items-center gap-1 text-default-400">
        <span className="text-small">{number ?? ''}</span>
        {Icon.ChevronRight}
    </div>
)

export default function List() {
    return (
        <Listbox>
            <ListboxItem
                key="dashboard"
                startContent={<IconWrapper className="bg-primary/10 text-primary">{Icon.Dashboard}</IconWrapper>}
            >
                Dashboard
            </ListboxItem>
            <ListboxItem
                key="database"
                startContent={<IconWrapper className="bg-success/10 text-success">{Icon.Database}</IconWrapper>}
            >
                Database
            </ListboxItem>
            <ListboxItem
                key="schema"
                className="bg-default-50"
                startContent={<IconWrapper className="bg-secondary/10 text-secondary">{Icon.Schema}</IconWrapper>}
                endContent={<ItemCounter />}
            >
                Schema
            </ListboxItem>
        </Listbox>
    )
}
