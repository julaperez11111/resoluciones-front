const parseData = (data) => {
    return data.replace(/\"/g, "'")
}

module.exports = {
    parseData
}