let angle = 60
let max_angle = 160
let min_angle = 20
servos.P0.setAngle(angle)
namespace SetServoSpeed{
    /**
     * Address motor rotation direction and speed by acceleration
     */
    //% blockId = servoturnspeed
    //% block="set P0 servo rotates in the direction %direction by %speed (ms) interval"
    export function SetTurnSpeed(direction: number, speed: number): void{
        if (Math.abs(direction) >= 100) {
            if (direction <= 0) {
                angle = angle - 3
            } else {
                angle = angle + 3
            }
            if (angle <= min_angle) {
                angle = min_angle
            }
            if (angle >= max_angle) {
                angle = max_angle
            }
            servos.P0.setAngle(angle)
        }
        basic.pause(speed)
    }
}
