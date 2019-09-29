function Chunk(x,y,z,width,depth,height){
    this.blocks = [width][depth][height];
    for(var x = 0; x < width; x++) {
        for(var y  = 0; y < depth; y++){
            for(var z = 0; z < height; z++){
                this.blocks[x][y][z] = new Block();
            }
        }
    }
    return this;
}