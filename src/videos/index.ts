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
    createNewVideo('PLACE', 'placeholder', place),
    createNewVideo('HOLO', 'placeholder', holo),
    createNewVideo('TEACH ME', 'placeholder', teachme),
    createNewVideo('BREATHE DEEPER', 'placeholder', breathedeeper),
    createNewVideo('COMING IN HOT', 'placeholder', comininhot)
];