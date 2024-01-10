#####################################
### WELCOME TO YOUR OOP PROJECT #####
#####################################

# For this project you will be using OOP to create a card game. This card game will
# be the card game "War" for two players, you an the computer. If you don't know
# how to play "War" here are the basic rules:
#
# The deck is divided evenly, with each player receiving 26 cards, dealt one at a time,
# face down. Anyone may deal first. Each player places his stack of cards face down,
# in front of him.
#
# The Play:
#
# Each player turns up a card at the same time and the player with the higher card
# takes both cards and puts them, face down, on the bottom of his stack.
#
# If the cards are the same rank, it is War. Each player turns up three cards face
# down and one card face up. The player with the higher cards takes both piles
# (six cards). If the turned-up cards are again the same rank, each player places
# another card face down and turns another card face up. The player with the
# higher card takes all 10 cards, and so on.
#
# There are some more variations on this but we will keep it simple for now.
# Ignore "double" wars
#
# https://en.wikipedia.org/wiki/War_(card_game)

from random import shuffle
import os

# Two useful variables for creating Cards.
SUITE = ["Hearts", "Diamonds", "Spades", "Clubs"]
RANKS = {"2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":10, "Jack":11, "Queen":12, "King":13, "Ace":14}

class Deck:
    """
    This is the Deck Class. This object will create a deck of cards to initiate
    play. You can then use this Deck list of cards to split in half and give to
    the players. It will use SUITE and RANKS to create the deck. It should also
    have a method for splitting/cutting the deck in half and Shuffling the deck.
    """

    def __init__(self):
        self.cards = []
        for s in SUITE:
            for r in RANKS:
                self.cards.append(r + " of " + s + " with value " + str(RANKS[r]))

    def shuffle(self):
        shuffle(self.cards)


class Hand:
    '''
    This is the Hand class. Each player has a Hand, and can add or remove
    cards from that hand. There should be an add and remove card method here.
    '''

    def __init__(self,cards):
        self.cards = cards

    def addCard(self,card):
        return self.cards.append(card)

    def removeCards(self):
        return self.cards.clear()

class Player:
    """
    This is the Player class, which takes in a name and an instance of a Hand
    class object. The Payer can then play cards and check if they still have cards.
    """
    def __init__(self,name,hand):
        self.name = name
        self.hand = hand

    def playCard(self):
        return self.hand.cards.pop()

    def takeCard(self,card):
        return self.hand.cards.append(card)

    def checkForCards(self):
        if len(self.hand.cards) == 0:
            return False
        else:
            return True


######################
#### GAME PLAY #######
######################
print("Welcome to War, let's begin...")

# Use the 3 classes along with some logic to play a game of war!
gameDeck = Deck()
gameDeck.shuffle()
pileCards = []
pile = Hand(pileCards)
gameOver = False
atWar = False
roundCounter = 0
warCounter = 0

# Assign player info & deal cards
p1Name = input("Player 1: Enter your name! ")
p2Name = input("Player 2: Enter your name! ")
p1HandCards = []
p2HandCards = []

for c in gameDeck.cards:
    if gameDeck.cards.index(c) % 2 == 0:
        p1HandCards.append(c)
    else:
        p2HandCards.append(c)

p1Hand = Hand(p1HandCards)
p2Hand = Hand(p2HandCards)
p1 = Player(p1Name,p1Hand)
p2 = Player(p2Name,p2Hand)

# Prep screen
os.system("cls")
print("Game has STARTED\n")

while gameOver == False:
    c1 = p1.playCard()
    c2 = p2.playCard()
    c1List = c1.split()
    c2List = c2.split()

    c1Rank = int(c1List[-1])
    c2Rank = int(c2List[-1])

    if c1Rank > c2Rank:
        p1.takeCard(c1)
        p1.takeCard(c2)
    elif c1Rank < c2Rank:
        p2.takeCard(c1)
        p2.takeCard(c2)
    elif c1Rank == c2Rank:
        atWar = True
        pile.addCard(c1)
        pile.addCard(c2)

    # War round, ends when someone has a higher card
    while atWar == True:
        if p1.checkForCards() == False or p2.checkForCards() == False:
            gameOver = True
            break

        warCounter += 1

        pile.addCard(p1.playCard())
        pile.addCard(p1.playCard())
        pile.addCard(p2.playCard())
        pile.addCard(p2.playCard())

        wc1 = p1.playCard()
        wc2 = p2.playCard()
        wc1List = wc1.split()
        wc2List = wc2.split()

        pile.addCard(wc1)
        pile.addCard(wc2)

        wc1Rank = int(wc1List[-1])
        wc2Rank = int(wc2List[-1])

        if wc1Rank > wc2Rank:
            for c in pile.cards:
                p1.takeCard(c)
            atWar = False
            pile.removeCards()
        elif wc1Rank < wc2Rank:
            for c in pile.cards:
                p2.takeCard(c)
            atWar = False
            pile.removeCards()
        elif wc1Rank == wc2Rank:
            pass

    # End of round stats
    roundCounter += 1
    print("Round " + str(roundCounter) + f": {p1Name} has " + str(len(p1.hand.cards)) + f" cards, {p2Name} has " + str(len(p2.hand.cards)) + " cards.")

    # End the game when one of the players has no Cards
    if p1.checkForCards() == False or p2.checkForCards() == False:
        gameOver = True

# Print final game stats
if p1.checkForCards() == False:
    print(f"{p2Name} has won War!")
elif p2.checkForCards() == False:
    print(f"{p1Name} has won War!")
print("War happened " + str(warCounter) + " times, across " + str(roundCounter) + " rounds.")
