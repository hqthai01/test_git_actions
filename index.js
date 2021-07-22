function robotSays(message = '') {
    let robot = '[o.o]'

    if (message === '')
        return `${robot} Hello!!!`

    return `${robot} ${message}`
}
module.exports.robotSays = robotSays