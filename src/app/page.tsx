'use client'

import { Icon } from '@/components/icons/_Icon'

export default function Home() {
    return (
        <div className="h-full bg-zinc-950 text-zinc-50">
            <div className="flex h-full w-full flex-col items-center justify-start gap-4 p-16">
                <div className="grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="flex w-full flex-col">
                        <div className="mb-16 flex flex-row items-center gap-2">
                            <div className="h-[96px] w-[96px]">{Icon.Logo}</div>
                            <h1 className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-8xl font-bold leading-tight text-transparent">
                                Scientry
                            </h1>
                        </div>
                        <h1 className="mb-10 text-5xl font-bold leading-tight">
                            Build{' '}
                            <span className="inline bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
                                beautiful{' '}
                            </span>{' '}
                            dashboards with compact, easy to use and fully customizable CMS for{' '}
                            <span className="inline bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 bg-clip-text text-transparent">
                                Data Management
                            </span>
                        </h1>
                        <h3 className="mb-10 text-2xl text-zinc-500">
                            Self-hosted, all-in-one Data Management & Visualization solution for scientific researchers.
                        </h3>
                        <div className="grid w-[400px] grid-flow-row grid-cols-2 gap-4">
                            <a
                                data-color="primary"
                                data-type="solid"
                                data-size="large"
                                className="button"
                                href="/schema-builder"
                            >
                                <span className="font-medium">Research more</span>
                            </a>
                            <a
                                data-color="success"
                                data-type="bordered"
                                data-size="large"
                                className="button"
                                href="https://github.com/nikdelvin/scientry"
                            >
                                {Icon.GitHub}
                                <span className="font-medium">GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
