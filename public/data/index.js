export const GetColumns = async () => {
    await new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, 1000);
    })
    const labels = [
        {
            text: "high",
            bgColor: 'bg-error'
        },
        {
            text: "medium",
            bgColor: 'bg-warning'
        },
        {
            text: "normal",
            bgColor: 'bg-success'
        },
        {
            text: "low",
            bgColor: 'bg-info'
        }]
    return ['Backlog', 'Ready', 'Doing', 'Review', 'Blocked'].map((title) => ({
        title,
        tickets: Array.from({ length: Math.floor(Math.random() * 8) }, (e, i) => ({
            label: labels[Math.floor(Math.random() * labels.length)],
            title: 'This is the title of the card for the thing that needs to be done.',
            date: 'Dec 12',
            comments: Math.floor(Math.random() * 10),
            attachments: Math.floor(Math.random() * 2),
            team: [
                { avatar: 'https://randomuser.me/api/portraits/women/26.jpg' },
                { avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
                { avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
                { avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
                { avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
                { avatar: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' }
            ].slice(0, Math.floor(Math.random() * 6) + 1)
        }))
    }))
}

export const GetProjects = async () => {
    return [
        { title: "Board 1", bgColor: "bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200" },
        { title: "Board 2", bgColor: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500' },
    ]
}