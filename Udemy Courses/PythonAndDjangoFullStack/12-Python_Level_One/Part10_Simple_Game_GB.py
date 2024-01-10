###########################
## PART 10: Simple Game ###
### --- CODEBREAKER --- ###
## --Nope--Close--Match--  ##
###########################

# It's time to actually make a simple command line game so put together everything
# you've learned so far about Python. The game goes like this:

# 1. The computer will think of 3 digit number that has no repeating digits.
# 2. You will then guess a 3 digit number
# 3. The computer will then give back clues, the possible clues are:
#
#     Close: You've guessed a correct number but in the wrong position
#     Match: You've guessed a correct number in the correct position
#     Nope: You haven't guess any of the numbers correctly
#
# 4. Based on these clues you will guess again until you break the code with a
#    perfect match!

# There are a few things you will have to discover for yourself for this game!
# Here are some useful hints:

# # Try to figure out what this code is doing and how it might be useful to you
import random
# digits = list(range(10))
# random.shuffle(digits)
# print(digits[:3])
#
# # Another hint:
# guess = input("What is your guess? ")
# print(guess)

# Think about how you will compare the input to the random number, what format
# should they be in? Maybe some sort of sequence? Watch the Lecture video for more hints!

def makeNumber():
    d1 = random.randint(1,10)
    d2 = random.randint(1,10)
    d3 = random.randint(1,10)
    while (d1 == d2) or (d2 == d3) or (d1 == d3):
        d2 = random.randint(1,10)
        d3 = random.randint(1,10)
    number = int(str(d1) + str(d2) + str(d3))
    return number

def checkGuess(num, guess):
    numList = [int(d) for d in str(num)]
    guessList = [int(z) for z in guess]

    for n in range(len(numList)):
        if numList[n] in guessList:
            if numList[n] == guessList[n]:
                print("Digit in correct position! :)")
            else:
                print("Digit in wrong position :/")
        else:
            print("Digit not in number :(")

# Gamgeplay
num = makeNumber()
gameWon = False

while gameWon == False:
    guess = input("What is your guess?")
    if num == int(guess):
        print("Congrats you got it!")
        print("Number was " + str(num))
        print("Your guess: " + guess)
        gameWon = True
        break
    else:
        checkGuess(num,guess)
        print("")
