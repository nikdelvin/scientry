import { motion } from 'framer-motion'

interface GroupButton {
    content: React.ReactNode | React.ReactNode[]
    onClick?: () => void
    isLoading?: boolean
    isDisabled?: boolean
}

export default function ButtonGroup({
    buttons,
    type = 'solid',
    color = 'default',
    size = 'medium',
    haveShadow = false,
    haveAnimation = false
}: {
    buttons: GroupButton[]
    type?: 'solid' | 'bordered'
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'error'
    size?: 'medium' | 'small' | 'large'
    haveShadow?: boolean
    haveAnimation?: boolean
}) {
    const backgroundGD = {
        default: 'from-slate-500 via-gray-500 to-zinc-500',
        primary: 'from-cyan-500 via-sky-500 to-blue-500',
        secondary: 'from-purple-500 via-violet-500 to-indigo-500',
        success: 'from-teal-500 via-emerald-500 to-green-500',
        error: 'from-pink-500 via-rose-500 to-red-500'
    }
    const backgroundBorderedGD = {
        default: 'from-slate-800/25 via-gray-800/25 to-zinc-800/25',
        primary: 'from-cyan-950/25 via-sky-950/25 to-blue-950/25',
        secondary: 'from-purple-950/25 via-violet-950/25 to-indigo-950/25',
        success: 'from-teal-950/25 via-emerald-950/25 to-green-950/25',
        error: 'from-pink-950/25 via-rose-950/25 to-red-950/25'
    }
    const borderGD = {
        default: 'from-slate-500/50 via-gray-500/50 to-zinc-500/50',
        primary: 'from-cyan-500/50 via-sky-500/50 to-blue-500/50',
        secondary: 'from-purple-500/50 via-violet-500/50 to-indigo-500/50',
        success: 'from-teal-500/50 via-emerald-500/50 to-green-500/50',
        error: 'from-pink-500/50 via-rose-500/50 to-red-500/50'
    }
    const borderBackgroundGD = {
        default: 'from-slate-800/75 via-gray-800/75 to-zinc-800/75',
        primary: 'from-cyan-950/75 via-sky-950/75 to-blue-950/75',
        secondary: 'from-purple-950/75 via-violet-950/75 to-indigo-950/75',
        success: 'from-teal-950/75 via-emerald-950/75 to-green-950/75',
        error: 'from-pink-950/75 via-rose-950/75 to-red-950/75'
    }
    const shadowColor = {
        default: 'shadow-gray-500/25',
        primary: 'shadow-sky-500/25',
        secondary: 'shadow-violet-500/25',
        success: 'shadow-emerald-500/25',
        error: 'shadow-rose-500/25'
    }
    const shadowBorderedColor = {
        default: 'shadow-gray-500/15',
        primary: 'shadow-sky-500/15',
        secondary: 'shadow-violet-500/15',
        success: 'shadow-emerald-500/15',
        error: 'shadow-rose-500/15'
    }
    const textColor = {
        default: 'text-gray-500',
        primary: 'text-sky-500',
        secondary: 'text-violet-500',
        success: 'text-emerald-500',
        error: 'text-rose-500'
    }
    const starsPosition = [
        { class: 'top-[-25px] left-[-50px]', top: 75, left: 50 },
        { class: 'top-[-25px] left-[-25px]', top: 75, left: 75 },
        { class: 'top-[-25px] left-[0px]', top: 75, left: 100 },
        { class: 'top-[-25px] left-[25px]', top: 75, left: 125 },
        { class: 'top-[-25px] left-[50px]', top: 75, left: 150 },
        { class: 'top-[-25px] left-[75px]', top: 75, left: 175 },
        { class: 'top-[-25px] left-[100px]', top: 75, left: 200 },
        { class: 'top-[-25px] left-[125px]', top: 75, left: 225 },
        { class: 'top-[-25px] left-[150px]', top: 75, left: 250 },
        { class: 'top-[-25px] left-[175px]', top: 75, left: 275 },
        { class: 'top-[-25px] left-[200px]', top: 75, left: 300 },
        { class: 'top-[-25px] left-[225px]', top: 75, left: 325 }
    ]
    const starsColorGD = {
        default: 'from-gray-300',
        primary: 'from-sky-300',
        secondary: 'from-violet-300',
        success: 'from-emerald-300',
        error: 'from-rose-300'
    }
    const textSize = (() => {
        switch (size) {
            case 'small':
                return 'text-sm'
            case 'large':
                return 'text-lg'
            case 'medium':
                return 'text-base'
        }
    })()
    const loaderBGColor = {
        default:
            type === 'solid'
                ? 'from-transparent via-gray-50 to-transparent'
                : 'from-transparent via-gray-500 to-transparent',
        primary:
            type === 'solid'
                ? 'from-transparent via-sky-50 to-transparent'
                : 'from-transparent via-sky-500 to-transparent',
        secondary:
            type === 'solid'
                ? 'from-transparent via-violet-50 to-transparent'
                : 'from-transparent via-violet-500 to-transparent',
        success:
            type === 'solid'
                ? 'from-transparent via-emerald-50 to-transparent'
                : 'from-transparent via-emerald-500 to-transparent',
        error:
            type === 'solid'
                ? 'from-transparent via-rose-50 to-transparent'
                : 'from-transparent via-rose-500 to-transparent'
    }
    const shadowType = (() => {
        if (haveShadow) return `shadow-xl ${type === 'solid' ? shadowColor[color] : shadowBorderedColor[color]}`
        else return ''
    })()
    const starType = (() => {
        return type === 'solid' ? 'opacity-75' : 'opacity-25'
    })()
    const pointerStyle = (button: GroupButton) => {
        if (button.isLoading) return 'pointer-events-none'
        else if (button.isDisabled)
            return `pointer-events-none opacity-50 ${type === 'solid' ? 'bg-zinc-950/30' : 'bg-zinc-50/10'}`
        else return ''
    }
    const roundedType = (index: number) => {
        if (index === 0) return 'rounded-l-full'
        else if (index === buttons.length - 1) return 'rounded-r-full'
        else return ''
    }
    return (
        <div
            className={`relative inline-flex w-full max-w-[300px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r p-[1px] ${textSize} ${borderGD[color]} ${shadowType}`}
        >
            <div
                className={`inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r p-[2px] ${borderBackgroundGD[color]}`}
            >
                {type === 'solid' ? (
                    <div
                        className={`inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r ${backgroundGD[color]}`}
                    >
                        {buttons?.map((button, index) => (
                            <motion.button
                                whileHover={{ backgroundColor: '#09090b26' }}
                                whileTap={{ backgroundColor: '#09090b4d' }}
                                transition={{ duration: 0.2 }}
                                key={index}
                                onClick={button.onClick}
                                className={`relative inline-flex w-full select-none appearance-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap bg-transparent px-4 py-2 antialiased ${roundedType(index)} ${pointerStyle(button)}`}
                            >
                                {button.content}
                                {button.isLoading && (
                                    <>
                                        <motion.div
                                            animate={{ left: [-50, 300] }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 0, delay: 0 }}
                                            className={`pointer-events-none absolute bottom-[0px] left-[-50px] h-full w-[50px] bg-gradient-to-l opacity-25 ${loaderBGColor[color]}`}
                                        ></motion.div>
                                        <motion.div
                                            animate={{ left: [-50, 300] }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 0, delay: 1 }}
                                            className={`pointer-events-none absolute bottom-[0px] left-[-50px] h-full w-[50px] bg-gradient-to-l opacity-25 ${loaderBGColor[color]}`}
                                        ></motion.div>
                                    </>
                                )}
                            </motion.button>
                        ))}
                    </div>
                ) : (
                    <div className={`inline-flex w-full items-center justify-center rounded-full bg-zinc-950`}>
                        <div
                            className={`inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r ${backgroundBorderedGD[color]}`}
                        >
                            {buttons?.map((button, index) => (
                                <motion.button
                                    whileHover={{ backgroundColor: '#fafafa0d' }}
                                    whileTap={{ backgroundColor: '#fafafa1a' }}
                                    transition={{ duration: 0.2 }}
                                    key={index}
                                    onClick={button.onClick}
                                    className={`relative inline-flex w-full select-none appearance-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap bg-transparent px-4 py-2 antialiased ${textColor[color]} ${roundedType(index)} ${pointerStyle(button)}`}
                                >
                                    {button.content}
                                    {button.isLoading && (
                                        <>
                                            <motion.div
                                                animate={{ left: [-50, 300] }}
                                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 0, delay: 0 }}
                                                className={`pointer-events-none absolute bottom-[0px] left-[-50px] h-full w-[50px] bg-gradient-to-l opacity-25 ${loaderBGColor[color]}`}
                                            ></motion.div>
                                            <motion.div
                                                animate={{ left: [-50, 300] }}
                                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 0, delay: 1 }}
                                                className={`pointer-events-none absolute bottom-[0px] left-[-50px] h-full w-[50px] bg-gradient-to-l opacity-25 ${loaderBGColor[color]}`}
                                            ></motion.div>
                                        </>
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {haveAnimation &&
                starsPosition.map((star, index) => (
                    <motion.div
                        key={index}
                        animate={{
                            top: star.top,
                            left: star.left
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 3 + 3,
                            delay: Math.random() * 3 + 3
                        }}
                        className={`pointer-events-none absolute h-[1px] w-[40px] rotate-45 rounded-full bg-gradient-to-l ${starsColorGD[color]} ${star.class} ${starType}`}
                    ></motion.div>
                ))}
        </div>
    )
}
