let projectile: Sprite = null
scene.setBackgroundColor(1)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . 2 2 5 5 5 2 2 . . . . . 
    . . . 2 5 5 5 5 5 5 5 2 . . . . 
    . . . 2 5 5 f 5 f 5 5 2 . . . . 
    . . . 2 7 5 5 2 5 5 7 2 . . . . 
    . . . . 2 7 5 2 5 7 2 . . . . . 
    . . . . . 2 7 5 7 2 . . . . . . 
    . . . . . . 2 7 2 . . . . . . . 
    . . . . . . . 2 . 7 . . . . . . 
    . . . . . 7 . 2 7 . . . . . . . 
    . . . . . . 7 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let mySprite: Sprite = null
    projectile = sprites.createProjectileFromSprite(assets.image`bee`, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
