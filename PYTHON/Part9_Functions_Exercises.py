#####################################
#### PART 9: FUNCTION EXERCISES #####
#####################################


# Complete the tasks below by writing functions! Keep in mind, these can be
# really tough, its all about breaking the problem down into smaller, logical
# steps. If you get stuck, don't feel bad about having to peek to the solutions!

#####################
## -- PROBLEM 1 -- ##
#####################

# Given a list of integers, return True if the sequence of numbers 1, 2, 3
# appears in the list somewhere.

# For example:

# arrayCheck([1, 1, 2, 3, 1]) → True
# arrayCheck([1, 1, 2, 4, 1]) → False
# arrayCheck([1, 1, 2, 1, 2, 3]) → True

def arrayCheck(nums):
    # CODE GOES HERE
    i = 0
    while i<len(nums)-2:
        if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
            return True
        i += 1
    return False

result1 = arrayCheck([1, 1, 2, 3, 1])
result2 = arrayCheck([1, 1, 2, 4, 1])
result3 = arrayCheck([1, 1, 2, 1, 2, 3])

print(result1)
print(result2)
print(result3)
