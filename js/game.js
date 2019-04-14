// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "cabin.jpg",
    levels: {

        start: {
            message: "You're on a trip with your friends. On your way there you see a dark figure on the side of the road but don't don't think anything about it. You arrive at the cabin and as you walk towards the entrance you hear a noise. Do you ...",
            choices: [
                {
                    text: "Check it out",
                    nextLevel: "NoteOne",
                },

                {
                    text: "Leave it alone",
                    nextLevel: "Cabin",
                },
            ]
        },
        
        Cabin: {
            background_image: "room.jpeg",
            music: "",
            message: "You go inside the cabin and finish unpacking. Do you..",
            choices: [
                {
                    text: "Explore the house ",
                    nextLevel: "houseExploration",
                },
                {
                    text: "Go to sleep ",
                    nextLevel: "LateNight",
                }
            ]
        },
        
        NoteOne: {
            background_image: "bush.jpeg",
            music: "bushes.mp3",
            message: "A bunny hops out and half of a note is left behind the note. The note reads: in the house cautious what it seems. You put the note away and go inside the cabin.Do you..",
            choices: [
                {
                    text: "Explore the house ",
                    nextLevel: "houseExploration",
                },
                {
                    text: "Go to sleep ",
                    nextLevel: "LateNight",
                }
            ]
        },

        houseExploration: {
            background_image:"keepoutdoor..jpg",
            nusic:"",
            message: "As you walk by the rooms, one in particular catches your eye. A sign on the door states: Stay out. Do you...",
            choices: [
                {
                    text: "try to go in",
                    nextLevel: "comingsoon",
                },
                {
                    text: "respect the owners sign and leave it alone",
                    nextLevel: "LateNight",
                },
            ]
        },
        
        LateNight: {
            background_image: "",
            music: "",
            message: "Its 4:00 am and you hear something coming from the kitchen. Do you ?",
            choices: [
                {
                    text: "look for where the noise is coming from",
                    nextLevel: "comming soom",
                },
                {
                    text: "Go back to sleep ",
                    nextLevel: "comingsoon",
                }
            ]
        },
        
        comingsoon: {
            background_image: "",
            music: "",
            message: "To be Continued...",
            choices: [
                
            ]
        },

    }
};
