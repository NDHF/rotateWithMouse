# rotateWithMouse
Applying mouse movement to my cell-navigation programs

# Basic Method: Compass Rose

At the moment, this program uses a "compass rose" method. The program measures the distance between the cursor and the center of the player avatar's div. By evaluating the x and y values, the avatar will face towards the cursor. 

# A More Thorough Explanation:

1. The center of the avatar div is determined by measuring the width of the avatar div, and its offset from the top and left of the screen.
2. The cursor must be within 200px of the avatar's center to run the function.
3. Four parameters are used to determine the avatar's direction:
    a. The vertical and horizontal distances from the center.
    b. The absolute value of the vertical or horizontal distances from the center.
    
For up and down, the program checks if the vertical distance from the center is greater or less than zero. For left and right, the horizontal distance is used.

Additionally, for up and down, the program checks if the absolute value of the horizonal distance is greater or less than the vertical distance. For left and right, vertical and horizontal distances are used.

I will be adding some illustrations for further explanation.

# Additional features

I began this project by making it work with keyboard input. The 'k' and 'l' keys will rotate the avatar.

# Future Improvements

The compass-rose method is not ideal for mouse movement. It requires the cursor to be placed relative to the avatar. I should have proceeded with my first plan, which saved old x and y values, compared them to the current cursor position. The difference between the values would determine which image to display. 

The current function would probably work very well for a joystick or game controller. I will do tests. 

# Acknowledgments

Special thanks to GitHub user FrogBomb for his help with code cleanup.