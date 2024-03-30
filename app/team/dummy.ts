
export type leaderType = {
    imageURL: string,
    leaderName: string,
    socials?:
    {
        link: string,
        short: string,
    }[]
}

export const leaders: leaderType[] = [
    {
        imageURL: "/pictures/team/LeftLeader.png",
        leaderName: "Abel Bereket",
        socials: [
            {
                link: "dev.to",
                short: "dev"
            },
            {
                link: "dev.to",
                short: "in"
            },
        ]
    },
    {
        imageURL: "/pictures/team/CenterLeader.png",
        leaderName: "Bereket",
        socials: [
            {
                link: "dev.to",
                short: "dev"
            }
        ]
    },
    {
        imageURL: "/pictures/team/RightLeader.png",
        leaderName: "Yafet",
        socials: [
            {
                link: "dev.to",
                short: "dev"
            }
        ]
    },
]