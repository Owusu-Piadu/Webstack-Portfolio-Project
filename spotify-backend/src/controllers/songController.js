import { v2 as cloudinary } from 'cloudinary'
import songModel from '../models/songModel.js';

const addSong = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];

        // Upload files to Cloudinary
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const duraion = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`

        // Save song to database
        const songData = {
            name,
            desc,
            album,
            audio: audioUpload.secure_url,
            image: imageUpload.secure_url,
            duration,
        };

        const song = songModel(songData);
        await song.save();

        res.json({ success: true, message: "Song Uploaded Successfully" })

    } catch (error) {
        res.json({ success: false })
    }
}

const listSong = async (req, res) => {

}

export { addSong, listSong }