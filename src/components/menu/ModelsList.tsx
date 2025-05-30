import { Listbox, ListboxItem, ListboxSection, cn } from '@heroui/react'
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

export default function ModelsList() {
    return (
        <Listbox>
            <ListboxItem
                key="users"
                className="bg-default-50"
                startContent={<IconWrapper className="bg-warning/10 text-warning">{Icon.User}</IconWrapper>}
                endContent={<ItemCounter />}
            >
                Users
            </ListboxItem>
            <ListboxItem
                key="countries"
                startContent={<IconWrapper className="bg-danger/10 text-danger">{Icon.Flag}</IconWrapper>}
            >
                Countries
            </ListboxItem>
            <ListboxItem
                key="geo-data"
                startContent={<IconWrapper className="bg-foreground/10 text-foreground">{Icon.Planet}</IconWrapper>}
            >
                Geo Data
            </ListboxItem>
        </Listbox>
    )
}
