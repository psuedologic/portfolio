Todo
---
# Goals for 1.0 
1) Pillar Animation for showing detailed / content view
2) Write and add CV content
3) Add Contact Info 
4) Finish header design to look good
5) Ensure minimum functionality for mobile

# Features
[ ] Create and Add Pillar Icons - I found limitations in svg and canvas ability to display text, which was the original idea. There are third parties that exist [zfont](https://jaames.github.io/zfont/). There are workaround such as (https://github.com/metafizzy/zdog/issues/16) [paper.JS to import svg] or even using pixels such as in this pen (https://codepen.io/eerk/pen/PvMqej). 

    While it seems possible to render with text like my initial plan, I think the text wouldn't blend very well with the fluid animation. I think an attempt at creating an icon should be done either way. I am thinking the three symbols could be:
        {} or 💻 - Software
        📚 or 📕 - Academic
        Compass or 📐 - Engineering
    
    Good links for inspiration: [Zdog-demos](https://codepen.io/collection/nZrQqe/?cursor=ZD0wJm89MCZwPTEmdj00)

[ ] Feature: Enhance pillar draw - Need to support groups and groups transistions for closed book stack icon, as well as other functionality for the other icons, notably curves.

[ ] Animation Pillar on Hover: play animation while hovering over icons/pillars. One thing that could work would be the pillar floating up. 

[ ] Different skins for the website, as a way of demonstrating off design / front-end skills. Each pillar when active could change the page to a different theme such as:

    Theme               Text Decor             Pillar Style

    Developer           Code Syntax            Dark Mode
    Designer            Block Lettering        Sketchy
    Academic            College Paper          Wireframe

# Refactor
[ ] Make canvas/svg globally accessible
[ ] make zdog library globally accessible
[ ] Convert pillar.js into vue syntax - could be implemented as empty div's without css. This should be researched if some sub-svg / sub-canvas element can be used or if there is another commonly used vue syntax for vue components without a clear html representation.
[ ] Convert icon.js into vue syntax.
[ ] Refactor colors to globally stored. This should ease assigning classes to svg paths, if we store color and class all in one place.


# Issues
[ ] Book Bindings don't rotate with pages/covers on StackedBookIcon - This issue is due to the binding existing in a different rotational plane which is offset from the rotation origin. After expirementing with rotating the binding in may different increments of 1/16 TAU, it is appearant that it would be very hard to line them up as I am doing it. What would work much simpler is to add the BookClosed icon as a group, and then make copies that I then offset up and down and rotate. This requires refactoring the templates use to generate the books be aware of groups and how to perform operations on them (Feature: Enhance pillar draw) 
    Update: I just removed the spine and the art looks a lot cleaner. They instead look more like manuscripts and this seems an acceptable compromise. I still want to refactor the books to just being copies instead of copy and pasted code for performance.
[ ] Fix Engineering Triangle Icon - scaling of inner tiangles is relative to coordinate (0,0) which results in the inner triangle looking unnaturally close to the angeled edge. Should scale the inner triangle froms the weighted center of the triangle instead.

# Other



## FINISHED

[X] Rotation skips after running ~1.5 Revolutions. Something is off with the math of calculating angles and degrees per revolution. After reading how other's animation loops were implemented, I think the issue is due to how I tied angle to be part of the animation loop. I should maintain a seperate count variable, and tie into the count a rotation and sum angle variable.
    -   Revised animation frame to not be directly tied to rotation angle. This solved the imprecise rotation bug, but did not improve performance overall. 
[X] Performance Issue, Pillar and Icon slow to render - The rotation frame is noticable laggy. If the icons are removed from being drawn, the animation visibly improves. Need to investigate what is causing the slow animation. I performed easy optimations of minimizing the size of the canvas and switching been svg rendering and canvas rendering. This mildly improved performance.
[X] Refactor draw code for icon templates to copy and transform instead of create new shapes from scratch.
[X] Deploy dev code to server for demo's and sharing. (netlify)
[X] Animation Pillar on Hover: Need to detect hover of pillar