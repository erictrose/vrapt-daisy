var spaceCount = 0,
    spaceInc = 4,
    spacing = 0.2,
    itemCount = 5;

room.onLoad = function(){
    for(i=0;i<itemCount;i++){
        room.createObject("Object", {id: "cube", pos: Vector(-9, spacing, 30), collision_id: "cube"});
        spaceCount += 1;
        spacing += spaceInc;
    };
};