import { Video } from "./types"
import teachme from 'src/assets/img/thumbnails/teachme.png'
import comininhot from 'src/assets/img/thumbnails/comininhot.png'
import holo from 'src/assets/img/thumbnails/holo.png'
import place from 'src/assets/img/thumbnails/place.png'
import breathedeeper from 'src/assets/img/thumbnails/breathedeeper.png'

const createNewVideo = (newTitle: string, newVideoLink: string, newImgUrl: string): Video => {
    return {
        title: newTitle,
        videoLink: newVideoLink,
        imageUrl: newImgUrl
    }
}

export const videosList: Video[] = [
    createNewVideo('PLACE', 'https://www.youtube.com/watch?v=c-kRy20BeTc', place),
    createNewVideo('HOLO', 'https://www.youtube.com/watch?v=vAJcu_ETgOw', holo),
    createNewVideo('TEACH ME', 'https://www.youtube.com/watch?v=TyzCXTSmd9s', teachme),
    createNewVideo('BREATHE DEEPER', 'https://www.youtube.com/watch?v=ENpOT29jAPE', breathedeeper),
    createNewVideo('COMING IN HOT', 'https://www.youtube.com/watch?v=PhUYz9e1cDI', comininhot)
];