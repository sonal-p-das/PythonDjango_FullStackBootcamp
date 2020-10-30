#This file is to understand how attributes and methods in Python are predefined
class Circle():
    pi = 3.14

    def __init__(self,radius=1): #radius=1 is assigning a default value to radius
        self.radius = radius #similar to this.varname in Java

    def area(self):
        #The self keyword is defining that this method is part of this class
        return self.radius*self.radius * Circle.pi

        #note: it should be self.radius if we wanto refer to this class' radius var
        #and not a var outside of this class or a radius value being sent to this class
        #Similary, it will not be pi, it should be Circle.pi because pi is an obj level attr

    def set_radius(self,new_r):
        self.radius = new_r
        #This is a more appropriate way to instantiate the class attr value instead of assigning it during runtime

myCircle = Circle()
print(myCircle.radius)

myc = Circle(3)
print(myc.area()) #the value of radius here is taken as 3

myRadius = Circle()
myRadius.set_radius(100)
print(myRadius.area())
