"use client"

import { Card } from "@/components/ui/card"

interface TeamMember {
    id: number
    name: string
    position: string
    image: string,
    description: string
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "杜一凡",
        position: "主任导师兼语文",
        image: "/user/杜一凡.jpg",
        description: "17737140396"
    },
    {
        id: 2,
        name: "王挺",
        position: "跟班导师兼美术",
        image: "/user/王挺.jpg",
        description: "18349296162"
    },
    {
        id: 3,
        name: "周帆",
        position: "数学",
        image: "/user/周帆.jpg",
        description: "18980571383"
    },
    {
        id: 4,
        name: "肖思玉",
        position: "英语",
        image: "/user/肖思玉.jpg",
        description: "15281073354"
    },
    {
        id: 5,
        name: "宋宇翔",
        position: "科学",
        image: "/user/宋宇翔.jpg",
        description: "18380478009"
    },
    {
        id: 6,
        name: "张明宇",
        position: "体育",
        image: "/user/张明宇.jpg",
        description: "18708132060"
    },
    {
        id: 7,
        name: "刘悦",
        position: "音乐",
        image: "/user/刘悦.jpg",
        description: "15208201409"
    },
]

export default function TeamShowcase() {
    return (
        <div className="w-full">
            <style jsx>{`
        .parallelogram-card {
          clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
          transition: all 0.3s ease;
        }
        
        .parallelogram-card:hover {
          clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
          transform: translateY(-8px);
        }
      `}</style>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-1 max-w-full mx-auto px-4">
                {teamMembers.map((member, index) => (
                    <div key={member.id} className={`team-member group ${index % 2 === 1 ? "-translate-y-12 translate-x-2" : ""}`}>
                        <Card
                            className="parallelogram-card overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative h-80 rounded-none"
                        >
                            <div className="absolute inset-0 object-cover z-100 h-60 w-200 bg-gray-200 skew-x-10 -translate-x-10">
                                <img src={member.image} className={`absolute inset-0 object-cover z-100 h-60 userImg${index + 1}`} alt="Card Image" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/60 to-white/40" />

                            <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-blue-200/60 via-blue-100/30 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-0 text-center text-gray-800">
                                <h3 className="text-sm font-bold mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-blue-600 font-semibold mb-1 text-sm">
                                    {member.position}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}
