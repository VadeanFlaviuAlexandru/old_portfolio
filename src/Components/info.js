import self from "../assets/Me.png"

export let colors = ["rgb(128, 255, 255)","rgb(228, 185, 255)" ];

export const info = {
    firstName: "Alex",
    lastName: "Vadean",
    initials: "Alex",
    position: "a Full Stack Developer 💻",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '📚',
            text: 'Student'
        },
        {
            emoji: '🌎',
            text: 'Living in Romania'
        }
    ]
}