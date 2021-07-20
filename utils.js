const SWEAR_WORDS = [
    "dio",
    "cristo",
    "ges",
    "madonna",
    "porco",
    "maiale",
    "mannaggia",
    "troia",
    "puttana",
    "cazzo",
    "frocio"
]

const includesSwearWords = (message) =>
    SWEAR_WORDS.some(swearWord => message.toLowerCase().includes(swearWord))

module.exports = includesSwearWords