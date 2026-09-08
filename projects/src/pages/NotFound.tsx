export const NotFound = () => {
    return (
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center">
            <span className="text-7xl font-black tracking-tighter text-pink-500/30">404</span>
            <h3 className="text-2xl font-semibold text-emerald-300">Not found</h3>
            <span className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-pink-400" />
        </div>
    )
}
