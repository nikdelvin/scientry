import {Listbox, ListboxItem, ListboxSection, cn} from "@nextui-org/react";
import { Icon } from "../icons/_Icon";

const IconWrapper = ({children, className}: {children: React.ReactNode, className: string}) => (
  <div className={cn(className, "flex items-center rounded-small justify-center w-8 h-8")}>
    {children}
  </div>
)

const ItemCounter = ({number}: {number?: number}) => (
    <div className="flex items-center gap-1 text-default-400">
      <span className="text-small">{number ?? ''}</span>
      {Icon.ChevronRight}
    </div>
)

export default function ModelsList() {
    return (
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
    )
}