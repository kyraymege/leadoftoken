const sendEmail = require("../utils/sendEmail")

//Contact Form
const contactMail = async (req, res) => {
    const { name, email, text } = req.body;
    const returnText = "Hello, " + name + "! Thank you for contacting us. We will get back to you as soon as possible.";
    try {
        const response = await sendEmail('support@leadoftoken.com', `${name} sent you a message from ${email}`, text)
            .then(
                await sendEmail(email, `Lead Of Token | Recieved Your Message! `, returnText)
            )
        if (response) {
            res.status(200).json({ message: "Email sent successfully!" })
        }
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

module.exports = { contactMail };