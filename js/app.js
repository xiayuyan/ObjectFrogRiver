// 这是我们的玩家要躲避的敌人 
var Enemy = function(x,y,speed) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.x=x;
    this.y=y;
    this.speed=speed;
    // 敌人的图片，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x+=dt*this.speed;
    if(this.x>505) {
        this.x=-505;
    }
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//碰撞函数
Enemy.prototype.checkCollision = function(player) {
   //console.log("调用了碰撞函数。");
   console.log(`play y:${player.y},enemy y:${this.y}`);
    if(player.y===this.y)
        return Math.abs(player.x-this.x)<12;
    else 
        return false;

}

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function(x,y) {
    this.x=202;
    this.y=415-111;
    this.sprite = 'images/char-boy.png';
}
Player.prototype.update = function (dt) {
    if(this.y===-28) {
        this.x=202;
        this.y=304;
        alert("win!");
    }
}
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}
Player.prototype.handleInput = function (mov) {
    switch(mov){
        case 'left':
            if(this.x>0) {
            this.x=this.x-101;
            }
            break;
        case 'right':
            if(this.x<404){
            this.x=this.x+101;
            }
            break;
        case 'up':
            if(this.y>-25) {
                this.y=this.y-83;
            }
            
            break;
        case 'down':
            if(this.y<387) {
                this.y=this.y+83;
            }
            
            break;
    }
}
// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
const allEnemies=[
    new Enemy(-1,83+55,100),
    new Enemy(-1,166+55,200),
    new Enemy(-1,55,300),
    new Enemy(-1,83+55,400)
];
const player=new Player();
// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Player.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
