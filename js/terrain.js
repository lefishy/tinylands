function Terrain(chunkWidth,chunkDepth,chunkHeight);
{
    this.chunks = [chunkWidth][chunkDepth][chunkHeight];
    for (var x = 0; x < chunkWidth; x++){
        for(var y = 0; y < chunkDepth; y++){
            for(var z = 0; z < chunkHeight; z++){
                terrain.chunks[x][y][z] = new Chunk(x,y,z,16,16,64);
            }
        }
    }
}