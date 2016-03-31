var spaceCount = 0,
    spaceInc = 1,
    spacing = 0.5,
    itemCount = 5;

room.onLoad = function(){
    for(i=0;i<itemCount;i++){
        room.createObject("Object", {id: "cube", pos: Vector(6, spacing, 4.5), collision_id: "cube"});
        spaceCount += 1;
        spacing += spaceInc;
    };
};