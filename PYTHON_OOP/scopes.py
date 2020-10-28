#Intro on the scope of the variables

#1.Global level
x=25

def my_func():
    x=50 #2. Local level
    return x

print(x) #returns 25
print(my_func) #returns 50

#my_func will assign x=50 within the function call
#but when we print x, it will take the global assignment,
#because in the function the value of x is not being changed at the global level
my_func()
print(x) #returns 25 and not 50

#Labmda example for local scope
lambda y:y**2

#Enclosing function locals
name = 'This is a global name! As it is not defined inside any function.'
def greet():
    name = 'sonal'

    def hello():
        print("hello "+name) #3. Enclosing Functional Local

    hello()

greet() #prints name as 'sonal' and not the global name because, within greet name is defined locally as sonal.
#name here was accessed in a function[hello()] inside another function greet()


#4. Built-in var are predefined var name predefined for certain tasks.

#5. Global keyword - not recommended to be used in practical solutions

x=50

def func():
    global x
    x = 500
    print('x is:',x)
    x=1000
    print('local x changed to:',x)


print("before function call, x is: ",x)
func()
print("after function call, x is: ",x)
