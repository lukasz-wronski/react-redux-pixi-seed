const PLAYER_WIDTH = 26

export default {
    stage: {
        width: 800,
        height: 600,
        get maxPosition() {
            return this.width - PLAYER_WIDTH
        }
    }
}
