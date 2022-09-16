const Partners = require("../models/partners.js");

// New Partner
const newPartner = async (req, res) => {
    const { partner_name, partner_img, partner_youtube_link, partner_youtube_subs,
        partner_twitter_link, partner_twitter_followers, partner_telegram_link,
        partner_telegram_followers, partner_tiktok_link, partner_tiktok_followers, partner_comunication , partner_price }
        = req.body;
    const partner = new Partners({
        partner_name: partner_name,
        partner_img: partner_img,
        partner_youtube_link: partner_youtube_link,
        partner_youtube_subs: partner_youtube_subs,
        partner_twitter_link: partner_twitter_link,
        partner_twitter_followers: partner_twitter_followers,
        partner_telegram_link: partner_telegram_link,
        partner_telegram_followers: partner_telegram_followers,
        partner_tiktok_link: partner_tiktok_link,
        partner_tiktok_followers: partner_tiktok_followers,
        partner_comunication: partner_comunication,
        partner_price: partner_price,
    });
    try {
        const savedPartner = await partner.save();
        res.status(201).json(savedPartner);
    } catch (err) {
        res.status(500).json(err);
    }
}

//DELETE Partner
const deletePartner = async (req, res) => {
    await Partners.findByIdAndDelete(req.params.id);
    res.status(200).json("Partner has been deleted!")
}

//UPDATE Partner
const updatePartner = async (req, res) => {
    const { partner_name, partner_img, partner_youtube_link, partner_youtube_subs,
        partner_twitter_link, partner_twitter_followers, partner_telegram_link,
        partner_telegram_followers, partner_tiktok_link, partner_tiktok_followers }
        = req.body;
    try {
        await Partners.findByIdAndUpdate(req.params.id, {
            partner_name: partner_name,
            partner_img: partner_img,
            partner_youtube_link: partner_youtube_link,
            partner_youtube_subs: partner_youtube_subs,
            partner_twitter_link: partner_twitter_link,
            partner_twitter_followers: partner_twitter_followers,
            partner_telegram_link: partner_telegram_link,
            partner_telegram_followers: partner_telegram_followers,
            partner_tiktok_link: partner_tiktok_link,
            partner_tiktok_followers: partner_tiktok_followers
        }, { new: true });
        res.status(200).json({ message: "Your Partner updated!" });
    } catch (error) {
        res.status(500).json(error)
    }
}

//GET PARTNERS
const getPartners = async (req, res) => {
    try {
        Partners.find().then(partners => res.status(200).json(partners))
    } catch (err) {
        res.status(500).json(err);
    }
}



module.exports = { newPartner, deletePartner, updatePartner, getPartners };