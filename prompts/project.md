# RGB.fun Drawer App

## Description

There's a website called RGB.fun that allows users to pick an RGB code and mint it as a unique NFT on the "Base" L2 blockchain.
The RGB code is turned into 5x5 black and white image. Unfortunately, there's no easy way to pick the drawing instead of the RGB code on RGB.fun.

The drawer app that we're building allows users to pick the drawing instead of the RGB code, by clicking on the 5x5 grid.

### Algorithm used to convert RGB code to 5x5 grid

1. Convert R, G, B values to binary
2. On the 5x5 grid, spread the bits of R, then G, then B, into the shape of a clockwise spiral. (the center remains empty)

## Specifications

We want the app to be as simple as possible, and responsive.
The UI will consist of a clickable 5x5 grid, with the resulting RGB code displayed below the grid.
To help the user visualize the current color, the grid will be surround by a 10px wide border, with the color of the current color.
The center of the grid will stay empty (not clickable) and be shown as a black square.

The RGB code will be shown in a button, with the text "Mint <RGB code>". The button will redirect the user to the following URL: `https://rgb.fun/?r=R&g=G&b=B`, where R, G, B are the RGB values of the current color.

There are 4 markers on the grid. These are small squares that are 50% of the size of a cell, and are shown in the oposite color of the current color of the cell. They are simply visual and do not have any function.
Their position is fixed and they are always shown in the same place.
Position : [0,0], [1,1], [2,2], [4,4].
