export function Blog() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4 text-gray-800 dark:text-gray-200">
            <div className="flex-1 flex flex-col items-center gap-8 min-h-0">
                <header className="max-w-[400px] md:max-w-none mx-2 flex flex-col items-center gap-9 text-tokyo-blue text-center">
                    First post coming soon :)
                </header>
                <div className="max-w-[400px] w-full space-y-6 px-4">
                    <a className="text-tokyo-green border border-tokyo-green py-2 px-4 mx-auto cursor-pointer block w-fit" href="/">
                        home
                    </a>
                </div>
            </div>
        </main>
    );
}

