describe('Tests for pokemon data', () => {
    it('should provide the name Blastoise for ID: 9', () => {
        const individualPoke = {
            id: 9
        }
        expect(individualPoke.name).toEqual('blastoise')
        expect(individualPoke.type).toEqual('water')
        expect(individualPoke.contains('shinyImage')).toEqual(true)
    })
})