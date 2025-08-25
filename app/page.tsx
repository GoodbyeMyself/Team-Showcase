import TeamShowcase from "@/components/team-showcase"

export default function Home() {
    return (
        <main className="min-h-screen from-slate-50 to-slate-100 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-32">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">我们的团队</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        认识我们优秀的团队成员，他们致力于为您提供最好的教育
                    </p>
                </div>
                <TeamShowcase />
            </div>
        </main>
    )
}
