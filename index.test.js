const { robotSays } = require('./')
test('robot knows what to says', () => {
    expect(robotSays('wow!!!')).toBe('[o.o] wow!!!')
})

test('robot is sure what to say', () => {
    expect(robotSays()).toBe('[o.o] Hello!!!')
})